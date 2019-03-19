"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OutputData_1 = require("./OutputData");
const ActionData_1 = require("./ActionData");
const NUMBER = /^-?(?:[0-9]*\.[0-9]+|[0-9]+)$/;
const IDENTIFIER = /^[A-Za-z@_][A-Za-z0-9@_]*$/;
const ESCAPEDQUOTEDSTRING = (value) => value.replace(/(["\\\n])/g, d => d === "\n" ? "\\n" : `\\${d}`);
const DQUOTEDSTRING = (value) => `"${ESCAPEDQUOTEDSTRING(value)}"`;
const ESCAPESQUOTEDSTRING = (value) => value.replace(/(['\\\n])/g, d => d === "\n" ? "\\n" : `\\${d}`);
const SQUOTEDSTRING = (value) => `"${ESCAPESQUOTEDSTRING(value)}"`;
// FOR NOW:
// put argument labels on all arguments
// FOR FUTURE:
// look at wfrequiredresources and order things to avoid argument labels as much as possible
class InverseConvertingContext {
    constructor(options = {}) {
        this.magicVariables = {};
        this.quotes = options.quotes || '"';
        if (typeof options.indent === "number") {
            options.indent = " ".repeat(options.indent);
        }
        this.indent = options.indent || "\t";
        this._indentLevel = 0;
    }
    createActionsAble(value) {
        return value.actions.map(action => {
            const createdAction = this.createActionAble(action);
            return `${createdAction}`;
        }).join("\n");
    }
    createActionAble(value) {
        const result = [];
        // get action data
        const actionData = ActionData_1.getActionFromID(value.id);
        // let parameters = actionData.getParameters();
        const order = actionData.getParameterOrder(); // TODO future
        order.forEach(param => {
            if (typeof param === "string") {
                return;
            }
            const paramValue = value.parameters.get(param.internalName);
            if (!paramValue) {
                return;
            }
            if (order.length === 1) {
                return result.push(this.handleArgument(OutputData_1.toParam(paramValue)));
            }
            result.push(`${param.shortName}=${this.handleArgument(OutputData_1.toParam(paramValue))}`);
        });
        const uuid = value.parameters.get("UUID");
        if (uuid) {
            const baseName = value.magicvarname || value.name || "?";
            let name = baseName;
            if (this.magicVariables[name]) {
                for (let i = 1; this.magicVariables[name]; i++) {
                    name = baseName + i;
                }
            }
            this.magicVariables[name] = uuid;
        }
        const controlFlowMode = value.parameters.get("WFControlFlowMode");
        if (controlFlowMode === 1) {
            if (value.id === "is.workflow.actions.conditional") {
                return `${this.indent.repeat(this._indentLevel - 1)}otherwise`;
            }
            if (value.id === "is.workflow.actions.choosefrommenu") {
                return `${this.indent.repeat(this._indentLevel - 1)}case`;
            }
            return `${this.indent.repeat(this._indentLevel - 1)}flow`;
        }
        else if (controlFlowMode === 2) {
            this._indentLevel--;
            return `${this.indent.repeat(this._indentLevel)}end`;
        }
        const indentLevel = this._indentLevel;
        if (actionData._data.BlockInfo) {
            this._indentLevel++;
        }
        return `${this.indent.repeat(indentLevel) + actionData.shortName} ${result.join(" ")}`;
    }
    handleArgument(thing) {
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
        return this.quoteAndEscape(value);
    }
    createNumberAble(data) {
        const value = data.toString();
        if (value.match(NUMBER)) {
            return value;
        }
        if (value.match(IDENTIFIER)) {
            return value;
        }
        return this.quoteAndEscape(value);
    }
    createListAble(value) {
        const items = value.getItems();
        const result = items.map(item => {
            return this.createTextAble(item);
        });
        return `[${result.join(", ")}]`;
    }
    createDictionaryAble(value) {
        const result = value.items.map(item => {
            const key = this.createTextAble(item.key);
            const value = this.handleArgument(item.value);
            return `${key}: ${value}`;
        });
        return `{${result.join(", ")}}`;
    }
    createAggrandizementsAble(value) {
        if (!value) {
            return "";
        }
        const aggrandizements = [];
        let forKey = "";
        if (value.getForKey) {
            forKey = `.${this.createStringAble(value.getForKey)}`;
        }
        else if (value.coercionType) {
            aggrandizements.push(`as: ${OutputData_1.inverseCoercionTypes[value.coercionType]}`);
        }
        if (value.getProperty) {
            if (!value.coercionType) {
                return `??get: ${value.getProperty.name} without as: value??`;
            }
            aggrandizements.push(`get: ${value.getProperty.name.toLowerCase().replace(/[^a-z]/g, "")}`);
        }
        let res = "";
        if (forKey) {
            res += forKey;
        }
        if (aggrandizements.length > 0) {
            res += `{${aggrandizements.join(", ")}}`;
        }
        return res;
    }
    createVariableAble(value) {
        if (value instanceof OutputData_1.NamedVariable) {
            if (value.varname.match(IDENTIFIER)) {
                return `v:${value.varname}${this.createAggrandizementsAble(value.aggrandizements)}`;
            }
            return `v:${this.quoteAndEscape(value.varname)}${this.createAggrandizementsAble(value.aggrandizements)}`;
        }
        if (value instanceof OutputData_1.MagicVariable) {
            const varname = this.magicVariables[value.uuid];
            if (!varname) {
                return "mv:??broken magic variable??";
            }
            if (varname.match(IDENTIFIER)) {
                return `mv:${varname}${this.createAggrandizementsAble(value.aggrandizements)}`;
            }
            return `mv:${this.quoteAndEscape(varname)}${this.createAggrandizementsAble(value.aggrandizements)}`;
        }
        const data = { Clipboard: "clipboard", Ask: "askWhenRun", CurrentDate: "currentDate", ExtensionInput: "shortcutinput", Input: "actioninput", Variable: undefined, ActionOutput: undefined };
        if (!data[value.type]) {
            throw new Error("Attachment type is either Variable or ActionOutput. This should've been caught earlier.");
        }
        return `s:${data[value.type]}${this.createAggrandizementsAble(value.aggrandizements)}`;
    }
    createTextAble(value) {
        const components = value.components();
        const firstComponent = components[0];
        if (components.length === 1 && firstComponent instanceof OutputData_1.Attachment) {
            return this.createVariableAble(firstComponent);
        }
        let resstr = "";
        components.forEach((component) => {
            if (typeof component === "string") {
                return resstr += ESCAPEDQUOTEDSTRING(component);
            }
            resstr += `\\(${this.createVariableAble(component)})`;
        });
        if (resstr.match(IDENTIFIER)) {
            return resstr;
        } // \() will never match identifier
        return `"${resstr}"`;
    }
    quoteAndEscape(val) {
        if (this.quotes === "'") {
            return SQUOTEDSTRING(val);
        }
        return DQUOTEDSTRING(val);
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
