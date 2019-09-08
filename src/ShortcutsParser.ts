import {
	ActionParse,
	DictionaryParse,
	CharsParse,
	IdentifierParse,
	ListParse,
	BarlistParse,
	VariableParse,
	ActionsParse,
	VariableFlagParse,
	ArglistParse,
	NumberParse,
	ConvertVariableParse,
	ErrorParse,
	Parse,
	FilterItemParse,
	FilterParse,
	RawParse
} from "./ParserData";

import { p, regex, star, plus, optional, or, c, o } from "./ParserHelper";
import { ImportQuestionParse } from "./ParserData/ImportQuestionParse";

o.identifier = regex(/^[A-Za-z@_][A-Za-z0-9@_]*/).scb(
	([fullmatch], start, end) => new IdentifierParse(start, end, fullmatch)
);

o.newline = p(o.space, plus(p(o.space, or(c`\n`, c`;`))), o.space).scb(
	_ => null
);
o.multilineComment = or(
	regex(/^--\[\[[\s\S]+?--\]\]/), // --[[ Lua style multiline comments --]]
	regex(/^\/\*[\s\S]+?\*\//) // /* CLike multiline comments*/
).scb(_ => null);
o.eolComment = or(
	regex(/^\/\/.*/), // // CLike single line comments
	regex(/^--.*/), // -- Lua style single line comments
	regex(/^#.*/) // # Python style single line comments
); // or --
o.spaceonly = regex(/^[ ,\r\t]*/).scb(_ => null);
o.space = p(
	o.spaceonly,
	optional(o.multilineComment),
	o.spaceonly,
	optional(o.eolComment)
).scb(_ => null);

o.optionalNewline = star(or(o.newline, o.space)).scb(() => null);

const _ = o.space;
const newline = o.newline;
const _n = o.optionalNewline;

o.number = regex(/^-?(?:[0-9]*\.[0-9]+|[0-9]+)/).scb(
	([fullmatch], start, end) => new NumberParse(start, end, fullmatch)
);

o.escape = p(
	c`\\`,
	or(
		o.parenthesis,
		c`"`,
		c`'`,
		c`\`\`\``,
		c`\``,
		c`\\`,
		c`”`,
		c`n`.scb(_ => "\n"),
		regex(/.?/).scb(
			(v, start, end) =>
				new ErrorParse(
					start,
					end,
					`Did you mean \`\\\\\`? The character \`${v[0]}\` is not a valid escape sequence. See the docs page on string escapes for more info.`
				)
		)
	)
).scb(([, val]) => val);
// o.tripleQuotedStringEscape = p(
// 	c`\\`,
// 	or(o.parenthesis, c`"`, c`'`, c`\`\`\``, c`\\`, c`”`, c`n`.scb(_ => "\n"))
// ).scb(([, val]) => val);
// \"
o.char = or(o.escape, regex(/^[^\\\n]+/).scb(data => data[0]));
o.chars = star(o.char).scb(
	(data, start, end) => new CharsParse(start, end, data)
);

o.dquotedStringChar = or(o.escape, regex(/^[^"\\\n]+/).scb(data => data[0]));

o.squotedStringChar = or(o.escape, regex(/^[^'\\\n]+/).scb(data => data[0]));

o.smartQuotedStringChar = or(
	o.escape,
	regex(/^[^”\\\n]+/).scb(data => data[0])
);

o.backtickQuotedStringChar = or(
	o.escape,
	regex(/^[^`\\]+/).scb(data => data[0])
);

// o.triplequotedStringChar = or(
// 	o.tripleQuotedStringEscape, // \``` | ${varname}
// 	regex(/^[^`\\\n]+/).scb(data => data[0]),
// );

o.dquotedString = p(c`"`, star(o.dquotedStringChar), c`"`).scb(
	([, chars], start, end) => new CharsParse(start, end, chars)
);
o.squotedString = p(c`'`, star(o.squotedStringChar), c`'`).scb(
	([, chars], start, end) => new CharsParse(start, end, chars)
);
o.smartQuotedString = p(c`“`, star(o.smartQuotedStringChar), c`”`).scb(
	([, chars], start, end) => new CharsParse(start, end, chars)
);

o.backtickQuotedString = p(c`\``, star(o.backtickQuotedStringChar), c`\``).scb(
	([, chars], start, end) => new CharsParse(start, end, chars)
);

// o.triplequotedString = p(c`\`\`\``, star(o.triplequotedStringChar), c`\`\`\``).scb(
// 	([, chars], start, end) => new CharsParse(start, end, chars)
// );

// o.tripleQuotedStringChar = or(regex(/^[^`]+/));
//
// o.triplequotedString = p(
// 	c`\`\`\``,
// 	newline,
// 	star(o.tripleQuotedStringChar),
// 	c`\`\`\``
// );

o.string = or(
	o.dquotedString,
	o.squotedString,
	o.smartQuotedString,
	o.backtickQuotedString
);

o.barlistitem = p(newline, _, c`|`, _, o.chars).scb(([, , , , dat]) => dat);
o.barlist = plus(o.barlistitem).scb(
	(items, start, end) => new BarlistParse(start, end, items)
);
o.extendedarg = p(newline, _, c`>`, _, o.argument).scb(([, , , , arg]) => arg);
o.argflagarrow = or(c`->`, c`=>`).scb(_ => null);
o.argflag = p(o.argflagarrow, _, o.variable).scb(
	([, , variable], start, end) => new VariableFlagParse(start, end, variable)
);
o.namedargument = p(o.identifier, _, c`=`, _, o.value).scb(
	([key, , , , value], start, end) =>
		new ArglistParse(start, end, [{ key: key, value: value }])
);
o.errorparse = regex(/^\?\?(.+?)\?\?/).scb(
	([message], start, end) => new ErrorParse(start, end, message)
);
o.argument = or(
	o.arglist, // arglist should be removed.
	o.namedargument,
	o.value,
	o.inputarg,
	o.barlist,
	o.argflag,
	o.arglistparenthesis,
	o.extendedarg,
	o.errorparse
	// if something reaches the end of this without matching anything we can probably error right here rather than going all the way back up to an actionsparse
);
o.macroBlock = p(c`@{`, o.actions, c`}`).scb(([, actions]) => actions);
o.action = or(o.flaggedaction, o.variable, o.onlyaction);
o.arglistparenthesis = p(
	c`(`,
	star(p(_n, o.keyvaluepair, _n).scb(([, v]) => v)),
	c`)`
).scb(([, kvps], start, end) => new ArglistParse(start, end, kvps)); // (a:b, a=b)
o.arglist = p(c`a{`, star(p(_, o.keyvaluepair, _).scb(([, v]) => v)), c`}`).scb(
	([, kvps], start, end) => new ArglistParse(start, end, kvps)
);
o.inputarg = p(c`^`, or(o.parenthesis, o.variable)).scb(([, paren]) => {
	paren.special = "InputArg";
	return paren;
});
o.flaggedaction = p(o.variable, _, c`=`, _, o.onlyaction).scb(
	([variable, , , , action], start, end) => {
		action.variable = variable;
		return action;
	}
);
o.onlyaction = p(
	or(o.identifier, p(c`:raw`, _, o.string).scb(([, , v]) => v)),
	_,
	o.args
).scb(([actionIdentifier, _, args], start, end) => {
	const flags: any = [];
	args = args.filter((arg: any) =>
		arg && arg instanceof VariableFlagParse
			? flags.push(arg) && false
			: true
	);
	if (flags.length > 1) {
		return new ErrorParse(
			start,
			end,
			"Actions cannot output to multiple variables"
		);
	}
	const res: {
		type: string;
		action: Parse;
		args: Parse[];
		variable?: Parse;
	} = {
		type: "action",
		action: actionIdentifier,
		args: args
	};
	if (flags[0]) {
		res.variable = flags[0].variable;
	}
	// @ts-ignore
	const actionParse = new ActionParse(
		start,
		end,
		res.action,
		res.args,
		res.variable
	);
	return actionParse;
});

o.args = star(p(o.argument, _).scb(data => data[0]));

o.value = or(
	o.variable,
	o.string,
	o.number,
	o.macroBlock,
	o.identifier,
	o.parenthesis,
	o.dictionary,
	o.list,
	o.filter,
	o.rawvalue
);
o.rawvalue = p(
	c`:raw`,
	_,
	or(
		o.dictionary,
		o.string,
		c`true`.scb(() => true),
		c`false`.scb(_ => false),
		regex(/^-?(?:[0-9]*\.[0-9]+|[0-9]+)/).scb(([v]) => +v)
		// o.array
	)
).scb(([, , dict], start, end) => new RawParse(start, end, dict));

o.dictionary = p(
	c`{`,
	_n,
	//  [ [  ,         [  [   ,     id       ,     ]] , item         ]]
	star(
		p(
			_n,
			optional(p(c`<`, o.identifier, c`>`).scb(([, m]) => m)).scb(
				([a]) => a
			),
			o.keyvaluepair
		)
	).scb(items => {
		return items.map((item: any) => {
			const [, type, kvp] = item;
			kvp.type = type;
			return kvp;
		});
	}),
	_n,
	c`}`
).scb(([, , kvps], start, end) => new DictionaryParse(start, end, kvps));
o.list = p(c`[`, _n, star(p(o.value, _n).scb(([value]) => value)), c`]`).scb(
	([, , values], start, end) => new ListParse(start, end, values)
);

o.filter = or(o.filterand, o.filteror);

o.filterand = p(
	c`:filter{`,
	_n,
	star(
		p(_n, o.filteritem, _n, or(c`&`, c`:and:`), _n).scb(([, item]) => item)
	),
	o.filteritem,
	_n,
	c`}`
).scb(
	([, , filterItems, lastFilterItem], start, end) =>
		new FilterParse(start, end, "and", [...filterItems, lastFilterItem])
);

o.filteror = p(
	c`:filter{`,
	_n,
	star(
		p(_n, o.filteritem, _n, or(c`|`, c`:or:`), _n).scb(([, item]) => item)
	),
	o.filteritem,
	_n,
	c`}`
).scb(
	([, , filterItems, lastFilterItem], start, end) =>
		new FilterParse(start, end, "or", [...filterItems, lastFilterItem])
);
// :filter{name is "hello there" :or: name "starts with" "test"}

o.filteritem = or(
	p(o.value, _n, o.value, _n, o.value, _n, o.value).scb(
		([property, , comparator, , value, , units], start, end) =>
			new FilterItemParse(start, end, property, comparator, value, units)
	),
	p(o.value, _n, o.value, _n, o.value).scb(
		([property, , comparator, , value], start, end) =>
			new FilterItemParse(start, end, property, comparator, value)
	)
);

o.keyvaluepair = p(
	_n,
	or(o.string, o.identifier),
	_n,
	or(c`=`, c`:`),
	_n,
	o.value, // ...
	_n
).scb(([, key, , , , value]) => ({ key: key, value: value }));

o.variable = p(
	o.identifier,
	c`:`,
	or(o.identifier, o.string, o.errorparse),
	optional(
		p(or(c`:`, c`.`), or(o.identifier, o.string)).scb(([, val]) => val)
	).scb(([val]) => val),
	optional(o.dictionary).scb(([dict]) => dict)
).scb(([type, , name, forkey, options], start, end) => {
	if (type.value === "@") {
		return new ConvertVariableParse(start, end, name, options);
	}
	if (type.value === "q") {
		return new ImportQuestionParse(start, end, name, options);
	}
	return new VariableParse(start, end, type, name, forkey, options);
});

o.parenthesis = p(c`(`, _n, or(o.action, o.variable), _n, c`)`).scb(
	([, , actionOrVariable]) => actionOrVariable
);

o.actions = p(
	_n,
	star(p(_n, o.action, newline).scb(([, action]) => action)),
	optional(p(_n, o.action).scb(([, action]) => action)),
	_n
).scb(
	([, v, e], start, end) => new ActionsParse(start, end, e ? [...v, ...e] : v)
);

export default o.actions.getProd();
