import {ActionParse, DictionaryParse, CharsParse, IdentifierParse, ListParse, BarlistParse, VariableParse, ActionsParse, VariableFlagParse, ArglistParse, NumberParse} from "./ParserData.js";

import {p, regex, star, plus, optional, or, c, o} from "./ParserHelper.js";

// THINGS TO NOTE:
// https://github.com/no-context/moo
// supports string interpolation



o.identifier = regex(/^[A-Za-z0-9@_]+/)
	.scb(([fullmatch], start, end) => new IdentifierParse(start, end, fullmatch));

o.newline = p(
	o.space,
	optional(o.eolComment),
	plus(p(
		o.space,
		or(c`\n`, c`;`),
		o.space)
	)
).scb(_ => null);
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
o.space = p(o.spaceonly, optional(o.multilineComment), o.spaceonly).scb(_ => null);

o.optionalNewline = star(or(o.newline, o.space)).scb(() => null);

const _ = o.space;
const newline = o.newline;
const _n = o.optionalNewline;


o.number = regex(/^-?(?:[0-9]*\.[0-9]+|[0-9]+)/)
	.scb(([fullmatch], start, end) => new NumberParse(start, end, fullmatch));


o.escape = p(c`\\`, or(
	o.parenthesis,
	c`"`,
	c`'`,
	c`\`\`\``,
	c`\\`,
	c`n`.scb(_ => "\n")
)).scb(([, val])=>val); // \"
o.char = or(
	o.escape,
	regex(/^[^\\\n]+/).scb(data => data[0])
); // TODO star(not(c`"`,c`\\`, c`\n`))
o.chars = star(o.char)
	.scb((data, start, end) => (new CharsParse(start, end, data)));

o.dquotedStringChar = or(
	o.escape,
	regex(/^[^"\\\n]+/).scb(data => data[0])
);

o.squotedStringChar = or(
	o.escape,
	regex(/^[^'\\\n]+/).scb(data => data[0])
);

// o.triplequotedStringChar = or(
// 	o.escape,
// 	regex(/^[^'\\\n]+/).scb(data => data[0])
// ); // TODO or(not(c`\`\`\``))
// TODOn't implement this, how would you do escapes
// ${}? or a special thing for \() without other escape types? idk

o.dquotedString = p(c`"`, star(o.dquotedStringChar), c`"`)
	.scb(([, chars, ], start, end) => (new CharsParse(start, end, chars))); // a STRING is a CHARSPARSE
o.squotedString = p(c`'`, star(o.squotedStringChar), c`'`)
	.scb(([, chars, ], start, end) => (new CharsParse(start, end, chars))); // a STRING is a CHARSPARSE
// o.triplequotedString = p(c`\`\`\``, star(o.triplequotedStringChar), c`\`\`\``)
// 	.scb(([, chars, ]) => (new CharsParse(chars))); // a STRING is a CHARSPARSE

o.string = or(o.dquotedString, o.squotedString);

o.barlistitem = p(newline, _, c`|`, _, o.chars)
	.scb(([,,,, dat]) => dat);
o.barlist = plus(o.barlistitem)
	.scb((items, start, end) => new BarlistParse(start, end, items));
o.argflagarrow = or(c`->`, c`=>`).scb(_=>null);
o.argflag = p(o.argflagarrow, _, o.variable)
	.scb(([,, variable], start, end) => (new VariableFlagParse(start, end, variable)));
o.namedargument = p(
	o.identifier,
	_,
	c`=`,
	_,
	o.value
).scb(([key, , , , value], start, end) => new ArglistParse(start, end, [{key: key, value: value}]));
o.argument = or(
	o.arglist, // arglist has to go first because otherwise it will parse as `a` `{}`, this will be fixed with the new argflag syntax.
	o.namedargument,
	o.value,
	o.inputarg,
	o.barlist,
	o.controlFlowMode,
	o.argflag
);
o.action = or(
	o.flaggedaction,
	o.variable,
	o.onlyaction
);
o.arglist = p(
	c`a{`,
	star(p(_, o.keyvaluepair, _).scb(([, v])=>v)),
	c`}`
).scb(([, kvps, ], start, end) => new ArglistParse(start, end, kvps));
o.controlFlowMode = p(c`>c:`, o.identifier, c`:gid:`, o.identifier).scb(([, controlFlowMode, , groupingIdentifier]) => {return {special: "ControlFlowMode", controlFlowMode, groupingIdentifier};}); // TEMP >c:1
o.inputarg = p(c`^`, _, o.parenthesis, _).scb(([, , paren, ]) => {paren.special = "InputArg"; return paren;});
o.flaggedaction = p(o.variable, _, c`=`, _, o.action)
	.scb(([variable, , , , action]) => {
		if(action.variable) {throw new Error("Actions cannot output to multiple variables");}
		action.variable = variable;
		return action;
	});
o.onlyaction = p(o.identifier, _, o.args)
	.scb(([actionIdentifier, _, args], start, end) => {
		const flags: any = [];
		args = args.filter(
			(arg: any) =>
				arg &&
					arg instanceof VariableFlagParse
					? flags.push(arg) && false
					: true
		);
		if(flags.length > 1) {throw new Error("Actions cannot output to multiple variables");}
		const res = {type: "action", action: actionIdentifier, args: args};
		if(flags[0]) {Object.assign(res, {variable: flags[0].variable});}
		// @ts-ignore
		const actionParse = new ActionParse(start, end, res.action, res.args, res.variable);
		return actionParse;
	});

o.args = star(p(o.argument, _).scb(data => data[0]));

o.value = or(o.variable, o.string, o.number, o.identifier, o.parenthesis, o.dictionary, o.list);

o.dictionary = p(
	c`{`,
	star( o.keyvaluepair ).scb(items => items),
	c`}`).scb(([, kvps, ], start, end) => (new DictionaryParse(start, end, kvps)));
o.list = p(
	c`[`,
	_n,
	star(
		p(o.value, _n).scb(([value, ])=>value)
	),
	c`]`
).scb(([,, values, ], start, end) => new ListParse(start, end, values));

o.keyvaluepair = p(
	_n,
	or(o.string, o.identifier),
	_n,
	or(c`=`, c`:`),
	_n,
	o.value, // ...
	_n
).scb( ([, key, , , , value]) => ({key: key, value: value}));


// o.canBeString
// o.canBeText
// ...

o.variable = p(
	o.identifier, c`:`, or(o.identifier, o.string),
	optional(p(c`:`, or(o.identifier, o.string)).scb(([, val])=>val)).scb(([val])=>val),
	optional(o.dictionary).scb(([dict]) => dict)
).scb(([type, , name, forkey, options], start, end)=>new VariableParse(start, end, type, name, forkey, options));

o.parenthesis = p(c`(`, or(o.action, o.variable), c`)`) .scb(([, actionOrVariable, ]) => actionOrVariable);
// TODO paramlistparens like (name=hi,value=hmm) for=things like Get Contents Of URL which have lots of complex parameters

o.actions = star(
	p(_n, o.action, newline).scb(([, action, ]) => action) // newlines action newline star ok sure but why isn't vv happening
).scb(list => new ActionsParse(list)); // THIS CB ISN"T GETTING CALLED, why not?


// TODO [arrays of things]
// TODO @macros
// TODOn't imports jk that will be done by some magic in the converter

export default o.actions.getProd();

// would it be bad if this imported converter and handled the whole thing?