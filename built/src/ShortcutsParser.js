"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParserData_js_1 = require("./ParserData.js");
const ParserHelper_js_1 = require("./ParserHelper.js");
// THINGS TO NOTE:
// https://github.com/no-context/moo
// supports string interpolation
ParserHelper_js_1.o.identifier = ParserHelper_js_1.regex(/^[A-Za-z@_][A-Za-z0-9@_]*/)
    .scb(([fullmatch], start, end) => new ParserData_js_1.IdentifierParse(start, end, fullmatch));
ParserHelper_js_1.o.newline = ParserHelper_js_1.p(ParserHelper_js_1.o.space, ParserHelper_js_1.optional(ParserHelper_js_1.o.eolComment), ParserHelper_js_1.plus(ParserHelper_js_1.p(ParserHelper_js_1.o.space, ParserHelper_js_1.or(ParserHelper_js_1.c `\n`, ParserHelper_js_1.c `;`), ParserHelper_js_1.o.space))).scb(_ => null);
ParserHelper_js_1.o.multilineComment = ParserHelper_js_1.or(ParserHelper_js_1.regex(/^--\[\[[\s\S]+?--\]\]/), // --[[ Lua style multiline comments --]]
ParserHelper_js_1.regex(/^\/\*[\s\S]+?\*\//) // /* CLike multiline comments*/
).scb(_ => null);
ParserHelper_js_1.o.eolComment = ParserHelper_js_1.or(ParserHelper_js_1.regex(/^\/\/.*/), // // CLike single line comments
ParserHelper_js_1.regex(/^--.*/), // -- Lua style single line comments
ParserHelper_js_1.regex(/^#.*/) // # Python style single line comments
); // or --
ParserHelper_js_1.o.spaceonly = ParserHelper_js_1.regex(/^[ ,\r\t]*/).scb(_ => null);
ParserHelper_js_1.o.space = ParserHelper_js_1.p(ParserHelper_js_1.o.spaceonly, ParserHelper_js_1.optional(ParserHelper_js_1.o.multilineComment), ParserHelper_js_1.o.spaceonly).scb(_ => null);
ParserHelper_js_1.o.optionalNewline = ParserHelper_js_1.star(ParserHelper_js_1.or(ParserHelper_js_1.o.newline, ParserHelper_js_1.o.space)).scb(() => null);
const _ = ParserHelper_js_1.o.space;
const newline = ParserHelper_js_1.o.newline;
const _n = ParserHelper_js_1.o.optionalNewline;
ParserHelper_js_1.o.number = ParserHelper_js_1.regex(/^-?(?:[0-9]*\.[0-9]+|[0-9]+)/)
    .scb(([fullmatch], start, end) => new ParserData_js_1.NumberParse(start, end, fullmatch));
ParserHelper_js_1.o.escape = ParserHelper_js_1.p(ParserHelper_js_1.c `\\`, ParserHelper_js_1.or(ParserHelper_js_1.o.parenthesis, ParserHelper_js_1.c `"`, ParserHelper_js_1.c `'`, ParserHelper_js_1.c `\`\`\``, ParserHelper_js_1.c `\\`, ParserHelper_js_1.c `n`.scb(_ => "\n"))).scb(([, val]) => val); // \"
ParserHelper_js_1.o.char = ParserHelper_js_1.or(ParserHelper_js_1.o.escape, ParserHelper_js_1.regex(/^[^\\\n]+/).scb(data => data[0])); // TODO star(not(c`"`,c`\\`, c`\n`))
ParserHelper_js_1.o.chars = ParserHelper_js_1.star(ParserHelper_js_1.o.char)
    .scb((data, start, end) => (new ParserData_js_1.CharsParse(start, end, data)));
ParserHelper_js_1.o.dquotedStringChar = ParserHelper_js_1.or(ParserHelper_js_1.o.escape, ParserHelper_js_1.regex(/^[^"\\\n]+/).scb(data => data[0]));
ParserHelper_js_1.o.squotedStringChar = ParserHelper_js_1.or(ParserHelper_js_1.o.escape, ParserHelper_js_1.regex(/^[^'\\\n]+/).scb(data => data[0]));
// o.triplequotedStringChar = or(
// 	o.escape,
// 	regex(/^[^'\\\n]+/).scb(data => data[0])
// ); // TODO or(not(c`\`\`\``))
// TODOn't implement this, how would you do escapes
// ${}? or a special thing for \() without other escape types? idk
ParserHelper_js_1.o.dquotedString = ParserHelper_js_1.p(ParserHelper_js_1.c `"`, ParserHelper_js_1.star(ParserHelper_js_1.o.dquotedStringChar), ParserHelper_js_1.c `"`)
    .scb(([, chars,], start, end) => (new ParserData_js_1.CharsParse(start, end, chars))); // a STRING is a CHARSPARSE
ParserHelper_js_1.o.squotedString = ParserHelper_js_1.p(ParserHelper_js_1.c `'`, ParserHelper_js_1.star(ParserHelper_js_1.o.squotedStringChar), ParserHelper_js_1.c `'`)
    .scb(([, chars,], start, end) => (new ParserData_js_1.CharsParse(start, end, chars))); // a STRING is a CHARSPARSE
// o.triplequotedString = p(c`\`\`\``, star(o.triplequotedStringChar), c`\`\`\``)
// 	.scb(([, chars, ]) => (new CharsParse(chars))); // a STRING is a CHARSPARSE
ParserHelper_js_1.o.string = ParserHelper_js_1.or(ParserHelper_js_1.o.dquotedString, ParserHelper_js_1.o.squotedString);
ParserHelper_js_1.o.barlistitem = ParserHelper_js_1.p(newline, _, ParserHelper_js_1.c `|`, _, ParserHelper_js_1.o.chars)
    .scb(([, , , , dat]) => dat);
ParserHelper_js_1.o.barlist = ParserHelper_js_1.plus(ParserHelper_js_1.o.barlistitem)
    .scb((items, start, end) => new ParserData_js_1.BarlistParse(start, end, items));
ParserHelper_js_1.o.argflagarrow = ParserHelper_js_1.or(ParserHelper_js_1.c `->`, ParserHelper_js_1.c `=>`).scb(_ => null);
ParserHelper_js_1.o.argflag = ParserHelper_js_1.p(ParserHelper_js_1.o.argflagarrow, _, ParserHelper_js_1.o.variable)
    .scb(([, , variable], start, end) => (new ParserData_js_1.VariableFlagParse(start, end, variable)));
ParserHelper_js_1.o.namedargument = ParserHelper_js_1.p(ParserHelper_js_1.o.identifier, _, ParserHelper_js_1.c `=`, _, ParserHelper_js_1.o.value).scb(([key, , , , value], start, end) => new ParserData_js_1.ArglistParse(start, end, [{ key: key, value: value }]));
ParserHelper_js_1.o.argument = ParserHelper_js_1.or(ParserHelper_js_1.o.arglist, // arglist has to go first because otherwise it will parse as `a` `{}`, this will be fixed with the new argflag syntax.
ParserHelper_js_1.o.namedargument, ParserHelper_js_1.o.value, ParserHelper_js_1.o.inputarg, ParserHelper_js_1.o.barlist, ParserHelper_js_1.o.controlFlowMode, ParserHelper_js_1.o.argflag);
ParserHelper_js_1.o.macroBlock = ParserHelper_js_1.p(ParserHelper_js_1.c `@{`, ParserHelper_js_1.o.actions, ParserHelper_js_1.c `}`).scb(([, actions,]) => actions);
ParserHelper_js_1.o.action = ParserHelper_js_1.or(ParserHelper_js_1.o.flaggedaction, ParserHelper_js_1.o.variable, ParserHelper_js_1.o.onlyaction);
ParserHelper_js_1.o.arglist = ParserHelper_js_1.p(ParserHelper_js_1.c `a{`, ParserHelper_js_1.star(ParserHelper_js_1.p(_, ParserHelper_js_1.o.keyvaluepair, _).scb(([, v]) => v)), ParserHelper_js_1.c `}`).scb(([, kvps,], start, end) => new ParserData_js_1.ArglistParse(start, end, kvps));
ParserHelper_js_1.o.controlFlowMode = ParserHelper_js_1.p(ParserHelper_js_1.c `>c:`, ParserHelper_js_1.o.identifier, ParserHelper_js_1.c `:gid:`, ParserHelper_js_1.o.identifier).scb(([, controlFlowMode, , groupingIdentifier]) => { return { special: "ControlFlowMode", controlFlowMode, groupingIdentifier }; }); // TEMP >c:1
ParserHelper_js_1.o.inputarg = ParserHelper_js_1.p(ParserHelper_js_1.c `^`, _, ParserHelper_js_1.o.parenthesis, _).scb(([, , paren,]) => { paren.special = "InputArg"; return paren; });
ParserHelper_js_1.o.flaggedaction = ParserHelper_js_1.p(ParserHelper_js_1.o.variable, _, ParserHelper_js_1.c `=`, _, ParserHelper_js_1.o.action)
    .scb(([variable, , , , action]) => {
    if (action.variable) {
        throw new Error("Actions cannot output to multiple variables");
    }
    action.variable = variable;
    return action;
});
ParserHelper_js_1.o.onlyaction = ParserHelper_js_1.p(ParserHelper_js_1.o.identifier, _, ParserHelper_js_1.o.args)
    .scb(([actionIdentifier, _, args], start, end) => {
    const flags = [];
    args = args.filter((arg) => arg &&
        arg instanceof ParserData_js_1.VariableFlagParse
        ? flags.push(arg) && false
        : true);
    if (flags.length > 1) {
        throw new Error("Actions cannot output to multiple variables");
    }
    const res = { type: "action", action: actionIdentifier, args: args };
    if (flags[0]) {
        Object.assign(res, { variable: flags[0].variable });
    }
    // @ts-ignore
    const actionParse = new ParserData_js_1.ActionParse(start, end, res.action, res.args, res.variable);
    return actionParse;
});
ParserHelper_js_1.o.args = ParserHelper_js_1.star(ParserHelper_js_1.p(ParserHelper_js_1.o.argument, _).scb(data => data[0]));
ParserHelper_js_1.o.value = ParserHelper_js_1.or(ParserHelper_js_1.o.variable, ParserHelper_js_1.o.string, ParserHelper_js_1.o.number, ParserHelper_js_1.o.macroBlock, ParserHelper_js_1.o.identifier, ParserHelper_js_1.o.parenthesis, ParserHelper_js_1.o.dictionary, ParserHelper_js_1.o.list);
ParserHelper_js_1.o.dictionary = ParserHelper_js_1.p(ParserHelper_js_1.c `{`, ParserHelper_js_1.star(ParserHelper_js_1.o.keyvaluepair).scb(items => items), ParserHelper_js_1.c `}`).scb(([, kvps,], start, end) => (new ParserData_js_1.DictionaryParse(start, end, kvps)));
ParserHelper_js_1.o.list = ParserHelper_js_1.p(ParserHelper_js_1.c `[`, _n, ParserHelper_js_1.star(ParserHelper_js_1.p(ParserHelper_js_1.o.value, _n).scb(([value,]) => value)), ParserHelper_js_1.c `]`).scb(([, , values,], start, end) => new ParserData_js_1.ListParse(start, end, values));
ParserHelper_js_1.o.keyvaluepair = ParserHelper_js_1.p(_n, ParserHelper_js_1.or(ParserHelper_js_1.o.string, ParserHelper_js_1.o.identifier), _n, ParserHelper_js_1.or(ParserHelper_js_1.c `=`, ParserHelper_js_1.c `:`), _n, ParserHelper_js_1.o.value, // ...
_n).scb(([, key, , , , value]) => ({ key: key, value: value }));
// o.canBeString
// o.canBeText
// ...
ParserHelper_js_1.o.variable = ParserHelper_js_1.p(ParserHelper_js_1.o.identifier, ParserHelper_js_1.c `:`, ParserHelper_js_1.or(ParserHelper_js_1.o.identifier, ParserHelper_js_1.o.string), ParserHelper_js_1.optional(ParserHelper_js_1.p(ParserHelper_js_1.or(ParserHelper_js_1.c `:`, ParserHelper_js_1.c `.`), ParserHelper_js_1.or(ParserHelper_js_1.o.identifier, ParserHelper_js_1.o.string)).scb(([, val]) => val)).scb(([val]) => val), ParserHelper_js_1.optional(ParserHelper_js_1.o.dictionary).scb(([dict]) => dict)).scb(([type, , name, forkey, options], start, end) => {
    if (type.value === "@") {
        return new ParserData_js_1.ConvertVariableParse(start, end, name, options);
    }
    return new ParserData_js_1.VariableParse(start, end, type, name, forkey, options);
});
ParserHelper_js_1.o.parenthesis = ParserHelper_js_1.p(ParserHelper_js_1.c `(`, ParserHelper_js_1.or(ParserHelper_js_1.o.action, ParserHelper_js_1.o.variable), ParserHelper_js_1.c `)`).scb(([, actionOrVariable,]) => actionOrVariable);
// TODO paramlistparens like (name=hi,value=hmm) for=things like Get Contents Of URL which have lots of complex parameters
ParserHelper_js_1.o.actions = ParserHelper_js_1.star(ParserHelper_js_1.p(_n, ParserHelper_js_1.o.action, newline).scb(([, action,]) => action) // newlines action newline star ok sure but why isn't vv happening
).scb((list, start, end) => new ParserData_js_1.ActionsParse(start, end, list)); // THIS CB ISN"T GETTING CALLED, why not?
// TODO [arrays of things]
// TODO @macros
// TODOn't imports jk that will be done by some magic in the converter
exports.default = ParserHelper_js_1.o.actions.getProd();
// would it be bad if this imported converter and handled the whole thing?
