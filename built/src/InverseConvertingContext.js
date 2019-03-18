"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OutputData_1 = require("./OutputData");
/*

Variable -> v:
string -> "..."
Text -> "...\()
Number: 1.2
List: []
Dictionary: {}



...Types:




*/
const NUMBER = /^-?(?:[0-9]*\.[0-9]+|[0-9]+)/;
const IDENTIFIER = /^[A-Za-z@_][A-Za-z0-9@_]*/;
const ESCAPEDQUOTEDSTRING = (value) => value.replace(/(["\\\n])/g, d => d === "\n" ? "\\n" : d);
const STRING = (value) => `"${ESCAPEDQUOTEDSTRING(value)}"`;
// FOR NOW:
// put argument labels on all arguments
// FOR FUTURE:
// look at wfrequiredresources and order things to avoid argument labels as much as possible
class InverseConvertingContext {
    constructor() {
        this.magicVariables = {};
    }
    handleThing(thing) {
        if (typeof thing === "string") {
            return this.createStringAble(thing);
        }
        if (typeof thing === "number") {
            return this.createNumberAble(thing);
        }
        if (thing instanceof OutputData_1.Attachment) {
            return this.createVariableAble(thing);
        }
        if (thing instanceof OutputData_1.Text) {
            return this.createTextAble(thing);
        }
        return "??this argument type is not supported yet??";
    }
    createStringAble(value) {
        // One of: "string", ident, -1.5, \n|barlist (ifend)
        if (value.match(NUMBER)) {
            return value;
        }
        if (value.match(IDENTIFIER)) {
            return value;
        }
        return STRING(value);
    }
    createNumberAble(data) {
        const value = data.toString();
        if (value.match(NUMBER)) {
            return value;
        }
        if (value.match(IDENTIFIER)) {
            return value;
        }
        return STRING(value);
    }
    createVariableAble(value) {
        if (value instanceof OutputData_1.NamedVariable) {
            if (value.varname.match(IDENTIFIER)) {
                return `v:${value.varname}`;
            }
            return `v:${STRING(value.varname)}`;
        }
        if (value instanceof OutputData_1.MagicVariable) {
            const varname = this.magicVariables[value.uuid];
            if (!varname) {
                return "mv:??broken magic variable??";
            }
            if (varname.match(IDENTIFIER)) {
                return `mv:${varname}`;
            }
            return `mv:${STRING(varname)}`;
        }
        const data = { Clipboard: "clipboard", Ask: "askWhenRun", CurrentDate: "currentDate", ExtensionInput: "shortcutinput", Input: "actioninput", Variable: undefined, ActionOutput: undefined };
        if (!data[value.type]) {
            throw new Error("Attachment type is either Variable or ActionOutput. This should've been caught earlier.");
        }
        return `s:${data[value.type]}`;
    }
    createTextAble(value) {
        let resstr = "";
        value.components().forEach((component) => {
            if (typeof component === "string") {
                return resstr += ESCAPEDQUOTEDSTRING(component);
            }
            resstr += this.createVariableAble(component);
        });
        return "";
    }
}
exports.InverseConvertingContext = InverseConvertingContext;
/*

invert(icc: InverseConvertingContext, value: unknown) {
    if(value instanceof Variable) {return icc.variable(value);} // v:variable/mv:variable/s:variable
    if(typeof value === "string") {
        if(value.match(/[^A-Za-z]/)) {return value.replace(/(["\\\n])/g, "\"$1\"");} // "Enum Value"
        return value; // EnumValue
    }
    return "??invalid value??";
}

*/ 
