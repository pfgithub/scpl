"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OutputData_1 = require("./OutputData");
const ActionData_1 = require("./ActionData");
const Converter_js_1 = require("./Converter.js");
const HelpfulActions_1 = require("./HelpfulActions");
class PositionedError extends Error {
    constructor(message, start, end) {
        super(`Error from ${start.toString()} to ${end.toString()}: ${message}`);
        this.start = start;
        this.end = end;
    }
}
exports.PositionedError = PositionedError;
class Parse {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    error(_cc, message) {
        return new PositionedError(message, this.start, this.end);
    }
    canBeString(_cc) { return false; }
    canBeBoolean(_cc) { return false; }
    canBeText(_cc) { return false; }
    canBeList(_cc) { return false; }
    canBeArray(_cc) { return false; }
    canBeAbleArray(_cc) { return false; }
    canBeVariable(_cc) { return false; }
    canBeAction(_cc) { return false; }
    canBeDictionary(_cc) { return false; }
    canBeRawDictionary(_cc) { return false; }
    canBeRawKeyedDictionary(_cc) { return false; }
    canBeNameType(_cc) { return false; }
    canBeStringVariable(_cc) { return false; }
    canBeNumber(_cc) { return false; }
}
exports.Parse = Parse;
class ConvertVariableParse extends Parse {
    constructor(start, end, name, options) {
        super(start, end);
        this.name = name;
        this.options = options;
    }
    getValue(cc) {
        if (!this.name.canBeString(cc)) {
            throw this.name.error(cc, "Name must be a string with no variables.");
        }
        const name = this.name.asString(cc);
        const me = cc.getParserVariable(name);
        if (!me) {
            throw super.error(cc, `Parser Variable @:${name} is not defined.`);
        }
        return me;
    }
    error(cc, message) {
        const me = this.getValue(cc);
        return me.error(cc, `${this.start} ${this.end} ${message}`);
    }
}
exports.ConvertVariableParse = ConvertVariableParse;
// there has to be a better way
["String", "Boolean", "Text", "List", "Array", "AbleArray", "Variable", "Action", "Dictionary", "RawDictionary", "RawKeyedDictionary", "NameType", "StringVariable", "Number"].forEach(val => {
    ConvertVariableParse.prototype[`canBe${val}`] = function (cc) {
        const me = this.getValue(cc);
        return me[`canBe${val}`](cc);
    };
    ConvertVariableParse.prototype[`as${val}`] = function (cc) {
        const me = this.getValue(cc);
        const options = this.options;
        let rawKeyedOptions;
        if (!options) {
            rawKeyedOptions = {};
        }
        else if (options.canBeRawKeyedDictionary(cc)) {
            rawKeyedOptions = options.asRawKeyedDictionary();
        }
        else {
            throw options.error("Options must be a dictionary.");
        }
        // here we want to make a new cc on top of the old one
        const newCC = cc.in();
        Object.keys(rawKeyedOptions).forEach(key => {
            const value = rawKeyedOptions[key];
            newCC.setParserVariable(key, value);
        });
        return me[`as${val}`](newCC);
    };
});
class DictionaryParse extends Parse {
    constructor(start, end, keyvaluepairs) {
        super(start, end);
        this.keyvaluepairs = keyvaluepairs;
    }
    canBeRawDictionary(_cc) { return true; }
    asRawDictionary(cc) {
        const dictionary = {};
        this.keyvaluepairs.forEach(({ key, value }) => {
            if (!key.canBeString(cc)) {
                throw key.error(cc, "This key name must be a string with no variables.");
            }
            if (!value.canBeString(cc)) {
                throw value.error(cc, "This value must be a string with no variables.");
            }
            const stringKey = key.asString(cc);
            if (dictionary[stringKey]) {
                throw key.error(cc, `This key was already defined in this dictionary.`);
            }
            dictionary[stringKey] = value.asString(cc);
        });
        return dictionary;
    }
    canBeRawKeyedDictionary(_cc) { return true; }
    asRawKeyedDictionary(cc) {
        // returns a raw dictionary (keys are raw, not values) for this DictionaryParse
        const dictionary = {};
        this.keyvaluepairs.forEach(({ key, value }) => {
            if (!key.canBeString(cc)) {
                throw key.error(cc, "This key name must be a string with no variables.");
            }
            const stringKey = key.asString(cc);
            if (dictionary[stringKey]) {
                throw key.error(cc, `This key name was already defined in this dictionary.`);
            }
            dictionary[stringKey] = value;
        });
        return dictionary;
    }
    canBeDictionary(_cc) { return true; }
    asDictionary(cc) {
        // returns an Output Dictionary for this DictionaryParse
        const dictionary = new OutputData_1.Dictionary();
        this.keyvaluepairs.forEach(({ key, value }) => {
            let outputValue;
            if (!key.canBeText(cc)) {
                throw key.error(cc, "Dictionary keys must be texts");
            }
            if (value.canBeList(cc)) {
                outputValue = value.asList(cc);
            }
            else if (value.canBeDictionary(cc)) {
                outputValue = value.asDictionary(cc);
            }
            else if (value.canBeText(cc)) {
                outputValue = value.asText(cc);
            }
            else {
                throw value.error(cc, "This value must be a list, string, or dictionary.");
            }
            dictionary.add(key.asText(cc), outputValue);
        });
        return dictionary;
    }
}
exports.DictionaryParse = DictionaryParse;
class ListParse extends Parse {
    constructor(start, end, items) {
        super(start, end);
        this.items = items;
    }
    canBeArray(_cc) { return true; }
    asArray(cc) {
        return this.items.map(item => {
            if (!item.canBeString(cc)) {
                throw item.error(cc, "This list can only contain strings with no variables.");
            }
            return item.asString(cc);
        });
    }
    canBeAbleArray(_cc) { return true; }
    asAbleArray(_cc) {
        return this.items;
    }
    canBeList(_cc) { return true; }
    asList(cc) {
        return new OutputData_1.List(this.items.map(item => {
            if (!item.canBeText(cc)) {
                throw item.error(cc, "This list can only contain strings.");
            }
            return item.asText(cc);
        }));
    }
}
exports.ListParse = ListParse;
class BarlistParse extends ListParse {
    canBeString(_cc) { return true; }
    asString(cc) {
        return this.items.map(item => {
            if (!item.canBeString(cc)) {
                throw item.error(cc, "This barlist can only contain strings with no variables.");
            }
            return item.asString(cc);
        }).join("\n");
    }
    canBeText(_cc) { return true; }
    asText(cc) {
        const finalText = new OutputData_1.Text;
        this.items.forEach((item, i) => {
            if (!item.canBeText(cc)) {
                throw item.error(cc, "This barlist can only contain strings.");
            }
            finalText.add(item.asText(cc));
            if (this.items.length - 1 !== i) {
                finalText.add("\n");
            }
        });
        // this.data.join`\n` but for non-strings
        // finalText.add(...this.data.items.map(i=>i.asText()));
        return finalText;
    }
}
exports.BarlistParse = BarlistParse;
class CharsParse extends Parse {
    constructor(start, end, items) {
        super(start, end);
        this.items = items;
    }
    canBeString(_cc) { return true; }
    asString(cc) {
        let string = "";
        this.items.forEach(item => {
            if (typeof item === "string") {
                string += item;
                return;
            }
            if (item instanceof ConvertVariableParse) {
                if (item.canBeString(cc)) {
                    string += item.asString(cc);
                    return;
                }
            }
            throw item.error(cc, `This string is not allowed to have variables.`);
        });
        return string;
    }
    canBeNumber(_cc) { return true; }
    asNumber(cc) {
        const num = +this.asString(cc);
        if (isNaN(num)) {
            throw this.error(cc, "This number could not be converted to a number.");
        }
        return num;
    }
    canBeText(_cc) { return true; }
    asText(cc) {
        const text = new OutputData_1.Text;
        this.items.forEach(item => {
            if (typeof item === "string") {
                return text.add(item);
            }
            if (item instanceof ConvertVariableParse) {
                if (item.canBeText(cc)) {
                    text.add(item.asText(cc));
                    return;
                }
            }
            if (!item.canBeVariable(cc)) {
                throw item.error(cc, "String interpolations can only contain variables.");
            }
            return text.add(item.asVariable(cc));
        });
        return text;
    }
}
exports.CharsParse = CharsParse;
class IdentifierParse extends Parse {
    constructor(start, end, str) {
        super(start, end);
        this.value = str;
    }
    canBeString(_cc) { return true; }
    asString(_cc) {
        return this.value;
    }
    canBeNumber(_cc) { return true; }
    asNumber(cc) {
        const num = +this.value;
        if (isNaN(num)) {
            throw this.error(cc, "This number could not be converted to a number.");
        }
        return num;
    }
    canBeBoolean(_cc) { return true; }
    asBoolean(cc) {
        const string = this.asString(cc);
        if (string === "true") {
            return true;
        }
        if (string === "false") {
            return false;
        }
        throw this.error(cc, "This boolean must be either true or false.");
    }
    canBeText(_cc) { return true; }
    asText(_cc) {
        const text = new OutputData_1.Text;
        text.add(this.value);
        return text;
    }
}
exports.IdentifierParse = IdentifierParse;
class NumberParse extends IdentifierParse {
}
exports.NumberParse = NumberParse;
class ArglistParse extends DictionaryParse {
    constructor(start, end, keyValuePairs) {
        super(start, end, keyValuePairs);
        this.special = "Arglist";
    }
}
exports.ArglistParse = ArglistParse;
class VariableFlagParse extends Parse {
    constructor(start, end, variable) {
        super(start, end);
        this.variable = variable;
    }
}
exports.VariableFlagParse = VariableFlagParse;
class ActionParse extends Parse {
    constructor(start, end, name, args, variable) {
        super(start, end);
        this.name = name;
        this.args = args;
        this.variable = variable;
    }
    // Action[Argument,Argument...]
    canBeText(_cc) { return true; }
    asText(cc) {
        const variable = this.asVariable(cc);
        const text = new OutputData_1.Text();
        text.add(variable);
        return text;
    }
    canBeVariable(_cc) { return true; }
    asVariable(cc) {
        const action = this.asAction(cc); // adds the action
        if (!action) {
            throw this.error(cc, "This action does not have an action.");
        }
        return new OutputData_1.MagicVariable(action);
        // otherwise: add a Set Variable action
        // throw new Error(`Actions of type ${action.info.id} cannot be converted to a variable.`);
    }
    canBeAction(_cc) { return true; }
    asAction(cc) {
        if (!this.name.canBeString(cc)) {
            throw this.name.error(cc, "This action must contain a string name with no variables.");
        }
        const actionName = this.name.asString(cc).toLowerCase();
        let wfAction;
        let controlFlowData;
        if (actionName === "flow"
            || actionName === "otherwise"
            || actionName === "else"
            || actionName === "case") { // flow/case/otherwise action
            controlFlowData = cc.nextControlFlow();
            if (!controlFlowData) {
                throw this.name.error(cc, "There are no open block actions. Make you have a block action such as `if` or `chooseFromMenu` and that you don't have any extra ends.");
            }
            wfAction = controlFlowData.wfaction;
        }
        else if (actionName === "end") {
            controlFlowData = cc.endControlFlow();
            if (!controlFlowData) {
                throw this.name.error(cc, "There are no open block actions. Make you have a block action such as `if` or `chooseFromMenu` and that you don't have any extra ends.");
            }
            wfAction = controlFlowData.wfaction;
        }
        else if (actionName.startsWith("@")) {
            const preprocessorAction = cc.getParserAction(actionName.toLowerCase());
            if (preprocessorAction) {
                preprocessorAction(cc, ...this.args);
            }
            else {
                throw this.name.error(cc, `There is no converter action with the name ${actionName}.`);
            }
            return;
        }
        else {
            wfAction = ActionData_1.getActionFromName(actionName);
            if (!wfAction) {
                throw this.name.error(cc, `This action could not be found. Check the documentation for a list of actions.`);
            }
        }
        if (!wfAction) {
            throw this.name.error(cc, `The action named ${actionName.toLowerCase()} could not be found.`);
        }
        const action = wfAction.build(cc, this, controlFlowData, ...this.args);
        // WFAction adds it to cc for us, no need to do it ourselves.
        // now add any required set variable actions
        if (this.variable) {
            if (!this.variable.canBeNameType(cc)) {
                throw this.variable.error(cc, "To set an output variable, the output variable must be a variable.");
            }
            const { name, type } = this.variable.asNameType(cc); // TODO not this
            if (type === "v") {
                cc.add(HelpfulActions_1.setVariable(this.variable, name));
                cc.setNamedVariable(name);
            }
            else if (type === "mv") {
                action.magicvarname = name;
                cc.setMagicVariable(name, action);
            }
        }
        return action;
    }
}
exports.ActionParse = ActionParse;
class VariableParse extends Parse {
    constructor(start, end, type, name, forkey, options) {
        super(start, end);
        this.type = type;
        this.name = name;
        this.forkey = forkey;
        this.options = options;
    }
    canBeStringVariable(_cc) { return true; }
    asStringVariable(cc) {
        if (!this.name.canBeString(cc)) {
            throw this.name.error(cc, "This variable must have a string name with no variables.");
        }
        if (!this.type.canBeString(cc)) {
            throw this.type.error(cc, "This variable must have a string type with no variables.");
        }
        const name = this.name.asString(cc);
        const type = this.type.asString(cc);
        if (type !== "v") {
            throw this.type.error(cc, `This variable must be a v:named variable.`);
        }
        return name;
    }
    canBeNameType(_cc) { return true; }
    asNameType(cc) {
        if (!this.name.canBeString(cc)) {
            throw this.name.error(cc, "This variable must have a string name with no variables.");
        }
        if (!this.type.canBeString(cc)) {
            throw this.type.error(cc, "This variable must have a string type with no variables.");
        }
        const name = this.name.asString(cc);
        const type = this.type.asString(cc);
        if (type !== "v" && type !== "mv") {
            throw this.type.error(cc, `This variable must be either a v: named variable or a mv: magic variable.`);
        }
        return { name, type };
    }
    canBeText(_cc) { return true; }
    asText(cc) {
        const text = new OutputData_1.Text;
        text.add(this.asVariable(cc));
        return text;
    }
    canBeVariable(_cc) { return true; }
    asVariable(cc) {
        let variable;
        if (!this.name.canBeString(cc)) {
            throw this.name.error(cc, "This variable must have a string name with no variables.");
        }
        if (!this.type.canBeString(cc)) {
            throw this.type.error(cc, "This variable must have a string type with no variables.");
        }
        const name = this.name.asString(cc);
        const type = this.type.asString(cc);
        let aggrandizements;
        if (this.options) {
            if (!this.options.canBeRawKeyedDictionary(cc)) {
                throw this.options.error(cc, "The aggrandizements for this variable must be a dictionary with no variables in keys.");
            }
            aggrandizements = this.options.asRawKeyedDictionary(cc); // should be asRawKeyedDictionary and then use asstirng inside
        }
        else {
            aggrandizements = {};
        }
        if (type === "v") { // named variable
            let vardata = cc.getNamedVariable(name);
            if (name.startsWith("Repeat Index") || name.startsWith("Repeat Item")) {
                vardata = true;
            }
            if (!vardata) {
                throw this.error(cc, `The variable \`${type}:${name}\` has not been defined yet. Define it with a \`setVariable\` action.`);
            }
            variable = new OutputData_1.NamedVariable(name);
        }
        else if (type === "mv") { // magic variable
            const vardata = cc.getMagicVariable(name);
            if (!vardata) {
                throw this.error(cc, `The magic variable \`${type}:${name}\` has not been defined yet. Define it by putting an arrow on an action, for example \`myaction -> ${type}:${name}\``);
            }
            const mvact = vardata.action;
            variable = new OutputData_1.MagicVariable(mvact);
        }
        else if (type === "s") { // special variable
            const attachtype = { clipboard: "Clipboard", askwhenrun: "Ask", currentdate: "CurrentDate", shortcutinput: "ExtensionInput", actioninput: "Input" };
            const attachvalue = attachtype[name.toLowerCase()];
            if (!attachvalue) {
                throw this.name.error(cc, `This special variable does not exist. Valid special variables are ${Object.keys(attachtype)}`);
            }
            variable = new OutputData_1.Attachment(attachvalue);
        }
        else {
            throw this.type.error(cc, `Variables must be either v: named variables, mv: magic variables, or s: special variables.`);
        }
        if (this.forkey) {
            variable.aggrandizements.setCoercionType("dictionary");
            if (!this.forkey.canBeString(cc)) {
                throw this.forkey.error(cc, "The forkey section of this variable must be a string with no variables.");
            }
            variable.aggrandizements.setForKey(this.forkey.asString(cc));
        }
        ["as", "coerce", "key", "forkey", "get", "property"].forEach(key => {
            const valueA = aggrandizements[key];
            if (!valueA) {
                return;
            } // skip
            if (!valueA.canBeString(cc)) {
                throw valueA.error(cc, "Aggrandizements dictionary values must be strings");
            }
            const value = valueA.asString(cc);
            const shortKey = key.toLowerCase().replace(/[^a-z]/g, "");
            if (shortKey === "key"
                || shortKey === "forkey") {
                const result = variable.aggrandizements.setForKey(value);
                if (typeof result === "string") {
                    throw valueA.error(cc, result);
                }
            }
            else if (shortKey === "as"
                || shortKey === "coerce") {
                const result = variable.aggrandizements.setCoercionType(value);
                if (typeof result === "string") {
                    throw valueA.error(cc, result);
                }
            }
            else if (shortKey === "get"
                || shortKey === "property") {
                const result = variable.aggrandizements.setProperty(value);
                if (typeof result === "string") {
                    throw valueA.error(cc, result);
                }
            }
            else {
                // it would be better to throw at the key but asRawKyeedDictionary doesn't allow that
                // throwing at the value has strange problems with @; parser variables where it throws in the wrong place
                throw valueA.error(cc, `The aggrandizement ${key.toLowerCase()} has not been implemented yet or is invalid. Valid are \`key\`, \`as\`, or \`get\`]`);
            }
        });
        return variable;
    }
    canBeAction(_cc) { return true; }
    asAction(cc) {
        const action = HelpfulActions_1.getVariable(this, this.asVariable(cc));
        cc.add(action);
        return action;
    }
}
exports.VariableParse = VariableParse;
class ActionsParse extends Parse {
    constructor(start, end, actions) {
        super(start, end);
        this.actions = actions;
    }
    canBeText(_cc) { return true; }
    asText(cc) {
        const variable = this.asVariable(cc);
        const text = new OutputData_1.Text();
        text.add(variable);
        return text;
    }
    canBeVariable(_cc) { return true; }
    asVariable(cc) {
        const action = this.asAction(cc);
        return new OutputData_1.MagicVariable(action);
    }
    canBeAction(_cc) { return true; }
    asAction(cc) {
        let lastAction;
        this.actions.forEach(action => {
            if (!action.canBeAction(cc)) {
                throw action.error(cc, "This value must be an action.");
            }
            lastAction = action.asAction(cc);
        });
        if (!lastAction) {
            throw this.error(cc, "There must be at least one action");
        }
        return lastAction;
    }
    asShortcut(converterActions) {
        const cc = new Converter_js_1.ConvertingContext();
        if (converterActions) {
            Object.keys(converterActions).forEach(key => {
                cc.setParserAction(key, converterActions[key]);
            });
        }
        this.asAction(cc);
        if (cc.controlFlowStack.length !== 0) {
            throw this.error(cc, `There are ${cc.controlFlowStack.length} unended block actions. Check to make sure that every block has an end.`);
        }
        return cc.shortcut;
    }
}
exports.ActionsParse = ActionsParse;
// Text::asString
// Text::build
