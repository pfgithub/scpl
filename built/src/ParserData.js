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
    error(message) {
        return new PositionedError(message, this.start, this.end);
    }
}
function canBeString(parse) {
    return parse.asString !== undefined;
}
exports.canBeString = canBeString;
function canBeBoolean(parse) {
    return parse.asBoolean !== undefined;
}
exports.canBeBoolean = canBeBoolean;
function canBeText(parse) {
    return parse.asText !== undefined;
}
exports.canBeText = canBeText;
function canBeList(parse) {
    return parse.asList !== undefined;
}
exports.canBeList = canBeList;
function canBeArray(parse) {
    return parse.asArray !== undefined;
}
exports.canBeArray = canBeArray;
function canBeVariable(parse) {
    return parse.asVariable !== undefined;
}
exports.canBeVariable = canBeVariable;
function canBeAction(parse) {
    return parse.asAction !== undefined;
}
exports.canBeAction = canBeAction;
function canBeDictionary(parse) {
    return parse.asDictionary !== undefined;
}
exports.canBeDictionary = canBeDictionary;
function canBeRawDictionary(parse) {
    return parse.asRawDictionary !== undefined;
}
exports.canBeRawDictionary = canBeRawDictionary;
function canBeRawKeyedDictionary(parse) {
    return parse.asDictionary !== undefined;
}
exports.canBeRawKeyedDictionary = canBeRawKeyedDictionary;
function canBeNameType(parse) {
    return parse.asNameType !== undefined;
}
exports.canBeNameType = canBeNameType;
function canBeStringVariable(parse) {
    return parse.asStringVariable !== undefined;
}
exports.canBeStringVariable = canBeStringVariable;
function canBeNumber(parse) {
    return parse.asNumber !== undefined;
}
exports.canBeNumber = canBeNumber;
class DictionaryParse extends Parse {
    constructor(start, end, keyvaluepairs) {
        super(start, end);
        this.keyvaluepairs = keyvaluepairs;
    }
    asRawDictionary() {
        const dictionary = {};
        this.keyvaluepairs.forEach(({ key, value }) => {
            if (!canBeString(key)) {
                throw key.error("To convert to a raw dictionary, key must be a string");
            }
            if (!canBeString(value)) {
                throw value.error("To convert to a raw dictionary, value must be a string");
            }
            const stringKey = key.asString();
            if (dictionary[stringKey]) {
                throw new Error(`Key ${stringKey} is already defined in this dictionary.`);
            }
            dictionary[stringKey] = value.asString();
        });
        return dictionary;
    }
    asRawKeyedDictionary() {
        // returns a raw dictionary (keys are raw, not values) for this DictionaryParse
        const dictionary = {};
        this.keyvaluepairs.forEach(({ key, value }) => {
            if (!canBeString(key)) {
                throw key.error("To convert to a raw keyed dictionary, key must be a string");
            }
            const stringKey = key.asString();
            if (dictionary[stringKey]) {
                throw new Error(`Key ${stringKey} is already defined in this dictionary.`);
            }
            dictionary[stringKey] = value;
        });
        return dictionary;
    }
    asDictionary(cc) {
        // returns an Output Dictionary for this DictionaryParse
        const dictionary = new OutputData_1.Dictionary();
        this.keyvaluepairs.forEach(({ key, value }) => {
            let type;
            let outputValue;
            if (!canBeText(key)) {
                throw key.error("Dictionary keys must be texts");
            }
            if (canBeList(value)) {
                type = 2;
                outputValue = value.asList(cc);
            }
            else if (canBeDictionary(value)) {
                type = 1;
                outputValue = value.asDictionary(cc);
            }
            else if (canBeText(value)) {
                type = 0;
                outputValue = value.asText(cc);
            }
            else {
                throw value.error("This dictionary can only values that are lists, texts, or dictionaries.");
            }
            dictionary.add(key.asText(cc), outputValue, type);
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
    asArray() {
        return this.items.map(item => {
            if (!canBeString(item)) {
                throw item.error("To convert to an array, all elements must be strings");
            }
            return item.asString();
        });
    }
    asList(cc) {
        return new OutputData_1.List(this.items.map(item => {
            if (!canBeText(item)) {
                throw item.error("To convert to a list, all items must be texts");
            }
            return item.asText(cc);
        }));
    }
}
exports.ListParse = ListParse;
class BarlistParse extends ListParse {
    asString() {
        return this.items.map(item => {
            if (!canBeString(item)) {
                throw item.error("To convert to an array, all elements must be strings");
            }
            return item.asString();
        }).join("\n");
    }
    asText(cc) {
        const finalText = new OutputData_1.Text;
        this.items.forEach((item, i) => {
            if (!canBeText(item)) {
                throw item.error("To convert to a text, all elements must be texts");
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
    asString() {
        let string = "";
        this.items.forEach(item => {
            if (typeof item === "string") {
                string += item;
                return;
            }
            throw item.error(`To convert to a string, all items must be strings.`);
        });
        return string;
    }
    asText(cc) {
        const text = new OutputData_1.Text;
        this.items.forEach(item => {
            if (typeof item === "string") {
                return text.add(item);
            }
            if (!canBeVariable(item)) {
                throw item.error("To convert to text, all items must be variables");
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
    asString() {
        return this.value;
    }
    asNumber() {
        const num = +this.value;
        if (isNaN(num)) {
            throw this.error("Could not convert to number");
        }
        return num;
    }
    asBoolean() {
        const string = this.asString();
        if (string === "true") {
            return true;
        }
        if (string === "false") {
            return false;
        }
        throw this.error("To convert to a boolean, the value must be true or false.");
    }
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
    asText(cc) {
        const variable = this.asVariable(cc);
        const text = new OutputData_1.Text();
        text.add(variable);
        return text;
    }
    asVariable(cc) {
        const action = this.asAction(cc); // adds the action
        return new OutputData_1.MagicVariable(action);
        // otherwise: add a Set Variable action
        // throw new Error(`Actions of type ${action.info.id} cannot be converted to a variable.`);
    }
    asAction(cc) {
        if (!canBeString(this.name)) {
            throw this.name.error("To convert to an action, the action name must be a string");
        }
        const actionName = this.name.asString().toLowerCase();
        let wfAction;
        let controlFlowData;
        if (actionName === "flow"
            || actionName === "otherwise"
            || actionName === "else"
            || actionName === "case") { // flow/case/otherwise action
            controlFlowData = cc.nextControlFlow();
            if (!controlFlowData) {
                throw this.name.error("There are no open block actions");
            }
            wfAction = controlFlowData.wfaction;
        }
        else if (actionName === "end") {
            controlFlowData = cc.endControlFlow();
            if (!controlFlowData) {
                throw this.name.error("There are no open block actions");
            }
            wfAction = controlFlowData.wfaction;
        }
        else {
            wfAction = ActionData_1.getActionFromName(actionName);
            if (!wfAction) {
                throw this.name.error(`There is no action with the name ${actionName}`);
            }
        }
        if (!wfAction) {
            throw new Error(`The action named ${actionName.toLowerCase()} could not be found.`);
        }
        const action = wfAction.build(cc, controlFlowData, ...this.args);
        // WFAction adds it to cc for us, no need to do it ourselves.
        // now add any required set variable actions
        if (this.variable) {
            if (!canBeNameType(this.variable)) {
                throw this.variable.error("To convert to an action, the output variable must be a nametype");
            }
            const { name, type } = this.variable.asNameType(); // TODO not this
            if (type === "v") {
                cc.add(HelpfulActions_1.setVariable(name));
                cc.vardata[name] = true;
            }
            else if (type === "mv") {
                action.magicvarname = `${type}:${name}`;
                cc.magicvardata[name] = { action: action };
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
    asStringVariable() {
        if (!canBeString(this.name)) {
            throw this.name.error("To convert to a stringvariable, the variable name must be a string");
        }
        if (!canBeString(this.type)) {
            throw this.type.error("To convert to a stringvariable, the variable type must be a string");
        }
        const name = this.name.asString();
        const type = this.type.asString();
        if (type !== "v") {
            throw new Error(`Only named (v:) variables can be used in this field.`);
        }
        return name;
    }
    asNameType() {
        if (!canBeString(this.name)) {
            throw this.name.error("To convert to a nametype, the variable name must be a string");
        }
        if (!canBeString(this.type)) {
            throw this.type.error("To convert to a nametype, the variable type must be a string");
        }
        const name = this.name.asString();
        const type = this.type.asString();
        if (type !== "v" && type !== "mv") {
            throw new Error(`Only v:and mv: variables can be used in an arrow.`);
        }
        return { name, type };
    }
    asText(cc) {
        const text = new OutputData_1.Text;
        text.add(this.asVariable(cc));
        return text;
    }
    asVariable(cc) {
        let variable;
        if (!canBeString(this.name)) {
            throw this.name.error("To convert to a variable, the variable name must be a string");
        }
        if (!canBeString(this.type)) {
            throw this.type.error("To convert to a variable, the variable type must be a string");
        }
        const name = this.name.asString();
        const type = this.type.asString();
        let aggrandizements;
        if (this.options) {
            if (!canBeRawDictionary(this.options)) {
                throw this.options.error("To convert to a variable, the aggrandizements object must be a raw dictionary");
            }
            aggrandizements = this.options.asRawDictionary(); // should be asRawKeyedDictionary and then use asstirng inside
        }
        else {
            aggrandizements = {};
        }
        if (type === "v") { // named variable
            let vardata = cc.vardata[name];
            if (name.startsWith("Repeat Index") || name.startsWith("Repeat Item")) {
                vardata = true;
            }
            if (!vardata) {
                throw new Error(`${type}:${name} is not yet defined.`);
            }
            variable = new OutputData_1.NamedVariable(name);
        }
        else if (type === "mv") { // magic variable
            const vardata = cc.magicvardata[name];
            if (!vardata) {
                throw new Error(`${type}:${name} is not yet defined.`);
            }
            const mvact = vardata.action;
            variable = new OutputData_1.MagicVariable(mvact);
        }
        else if (type === "s") { // special variable
            const attachtype = { clipboard: "Clipboard", askwhenrun: "Ask", currentdate: "CurrentDate", shortcutinput: "ExtensionInput", actioninput: "Input" };
            const attachvalue = attachtype[name.toLowerCase()];
            if (!attachvalue) {
                throw new Error(`Invalid special variable type ${name.toLowerCase()} valid are ${Object.keys(attachtype)}`);
            }
            variable = new OutputData_1.Attachment(attachvalue);
        }
        else {
            throw new Error(`Invalid vartype ${type}. Valid are v, mv, s`);
        }
        if (this.forkey) {
            variable.aggrandizements.coerce("dictionary");
            if (!canBeString(this.forkey)) {
                throw this.forkey.error("To convert to a variable, the forkey value must be a string");
            }
            variable.aggrandizements.forKey(this.forkey.asString());
        }
        Object.keys(aggrandizements).forEach(key => {
            const value = aggrandizements[key];
            switch (key.toLowerCase()) {
                case "key":
                case "forkey":
                    variable.aggrandizements.forKey(value);
                    break;
                case "as":
                case "coerce":
                    variable.aggrandizements.coerce(value);
                    break;
                case "get":
                case "property":
                    variable.aggrandizements.property(value);
                    break;
                default:
                    throw new Error(`Invalid aggrandizement ${key.toLowerCase()}, valid are [key, as, get]`);
            }
        });
        return variable;
    }
    asAction(cc) {
        const action = HelpfulActions_1.getVariable(this.asVariable(cc));
        cc.add(action);
        return action;
    }
}
exports.VariableParse = VariableParse;
class ActionsParse {
    constructor(actions) {
        this.actions = actions;
    }
    asShortcut() {
        const cc = new Converter_js_1.ConvertingContext();
        this.actions.forEach(action => {
            if (!canBeAction(action)) {
                throw action.error("To convert to a shortcut, all actions must be actions");
            }
            action.asAction(cc);
        });
        if (cc.controlFlowStack.length !== 0) {
            throw new Error(`There are ${cc.controlFlowStack.length} unterminated block actions. Check to make sure every block has an else.`);
        }
        return cc.shortcut;
    }
}
exports.ActionsParse = ActionsParse;
// Text::asString
// Text::build
