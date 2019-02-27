
const {ActionParse, DictionaryParse, CharsParse, IdentifierParse, ListParse, BarlistParse, VariableParse, ActionsParse, VariableFlagParse, ArglistParse} = require("./ParserData.js");

const {p, regex, star, plus, optional, or, not, c, o} = require("./ParserHelper.js");

// THINGS TO NOTE:
// https://github.com/no-context/moo
// supports string interpolation



o.identifier = regex(/^[A-Za-z0-9@_]+/)
	.scb(([fullmatch]) => new IdentifierParse(fullmatch));

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


const _ = o.space;
const newline = o.newline;
const _n = star(or(o.newline, o.space));




o.escape = p(c`\\`, or(
	o.parenthesis,
	c`"`,
	c`n`.scb(_ => "\n")
)).scb(([, val])=>val); // \"
o.char = or(
	o.escape,
	regex(/^[^"\\\n]+/).scb(data => data[0])
); // TODO star(not(c`"`,c`\\`, c`\n`))
o.chars = star(o.char)
	.scb(data => (new CharsParse(data)));

o.string = p(c`"`, o.chars, c`"`)
	.scb(([, chars, ]) => (chars)); // a STRING is a CHARSPARSE


o.barlistitem = p(newline, _, c`|`, _, o.chars)
	.scb(([,,,, dat]) => dat);
o.barlist = plus(o.barlistitem)
	.scb(items => new BarlistParse(items));
o.argflagarrow = or(c`->`, c`=>`).scb(_=>null);
o.argflag = p(o.argflagarrow, _, o.variable)
	.scb(([,, variable]) => (new VariableFlagParse(variable)));
o.argument = or(
	o.arglist,
	o.value,
	o.inputarg,
	o.barlist,
	o.argflag,
	o.controlFlowMode);
o.action = or(
	o.flaggedaction,
	o.variable,
	o.onlyaction
);
o.arglist = p(
	c`a{`,
	star(p(_, o.keyvaluepair, _).scb(([, v])=>v)),
	c`}`
).scb(([, kvps, ]) => new ArglistParse(kvps));
o.controlFlowMode = p(c`>c:`, o.identifier, c`:gid:`, o.identifier).scb(([, controlFlowMode, , groupingIdentifier]) => {return {special: "ControlFlowMode", controlFlowMode, groupingIdentifier};}); // TEMP >c:1
o.inputarg = p(c`^`, o.parenthesis).scb(([, paren]) => {paren.special = "InputArg"; return paren;});
o.flaggedaction = p(o.variable, _, c`=`, _, o.action)
	.scb(([variable, , , , action]) => {
		if(action.variable) {throw new Error("Actions cannot output to multiple variables");}
		action.variable = variable;
		return action;
	});
o.onlyaction = p(o.identifier, _, o.args)
	.scb(([actionIdentifier, _, args]) => {
		const flags = [];
		args = args.filter(
			arg =>
				arg &&
					arg instanceof VariableFlagParse
					? flags.push(arg) && false
					: true
		);
		if(flags.length > 1) {throw new Error("Actions cannot output to multiple variables");}
		const res = {type: "action", action: actionIdentifier, args: args};
		if(flags[0]) {Object.assign(res, {variable: flags[0].variable});}
		const actionParse = new ActionParse(res.action, res.args, res.variable);
		return actionParse;
	});

o.args = star(p(o.argument, _).scb(data => data[0]));

o.value = or(o.variable, o.string, o.identifier, o.parenthesis, o.dictionary, o.list);

o.dictionary = p(
	c`{`,
	star( o.keyvaluepair ).scb(items => items),
	c`}`).scb(([, kvps, ]) => (new DictionaryParse(kvps)));
o.list = p(
	c`[`,
	_n,
	plus(
		p(o.value, _n).scb(([value, ])=>value)
	),
	c`]`
).scb(([,, values, ]) => new ListParse(values));

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
	optional(p(c`.`, or(o.identifier, o.string)).scb(([, val])=>val)).scb(([val])=>val),
	optional(o.dictionary).scb(([dict]) => dict)
).scb(([type, , name, forkey, options])=>new VariableParse(type, name, forkey, options));

o.parenthesis = p(c`(`, or(o.action, o.variable), c`)`) .scb(([, actionOrVariable, ]) => actionOrVariable);
// TODO paramlistparens like (name=hi,value=hmm) for=things like Get Contents Of URL which have lots of complex parameters

o.actions = star(
	p(_n, o.action, newline).scb(([, action, ]) => action)
).scb(list => new ActionsParse(list));


// TODO [arrays of things]
// TODO @macros
// TODOn't imports jk that will be done by some magic in the converter

// console.log(o.action.parse("v:test").data);

module.exports = o.actions.getProd();

// would it be bad if this imported converter and handled the whole thing?
