import {Shortcut, Action, Parameters, Dictionary, Text, MagicVariable, NamedVariable, Variable, Attachment, Parameter, Aggrandizements, DictionaryKeyAggrandizement, CoercionAggrandizement, Aggrandizement, List} from "./OutputData";
import {actionsByName} from "./ActionData";
import {ConvertingContext} from "./Converter.js"
import {setVariable, getVariable} from "./HelpfulActions"

class Parse {
	constructor() {
	}
}


function canBe<AsType>(parse: Parse, fnName: string): parse is AsType {
    return (<AsType>parse)[fnName] !== undefined;
}

interface AsString{
	asString(): string
}

function canBeString(parse: Parse): parse is AsString {
    return (<AsString>parse).asString !== undefined;
}

interface AsBoolean{
	asBoolean(): boolean
}

function canBeBoolean(parse: Parse): parse is AsBoolean {
    return (<AsBoolean>parse).asBoolean !== undefined;
}

interface AsText{
	asText(cc: ConvertingContext): Text
}

function canBeText(parse: Parse): parse is AsText {
    return (<AsText>parse).asText !== undefined;
}

interface AsList{
	asList(cc: ConvertingContext): List
}

function canBeList(parse: Parse): parse is AsList {
    return (<AsList>parse).asList !== undefined;
}

interface AsArray{
	asArray(): Array<string>
}

function canBeArray(parse: Parse): parse is AsArray {
    return (<AsArray>parse).asArray !== undefined;
}

interface AsVariable{
	asVariable(cc: ConvertingContext): Variable
}

function canBeVariable(parse: Parse): parse is AsVariable {
    return (<AsVariable>parse).asVariable !== undefined;
}

interface AsAction{
	asAction(cc: ConvertingContext): Action
}

function canBeAction(parse: Parse): parse is AsAction {
    return (<AsAction>parse).asAction !== undefined;
}

interface AsDictionary{
	asDictionary(cc: ConvertingContext): Dictionary
}

function canBeDictionary(parse: Parse): parse is AsDictionary {
    return (<AsDictionary>parse).asDictionary !== undefined;
}

interface AsRawDictionary{
	asRawDictionary(): {[key: string]: string}
}

function canBeRawDictionary(parse: Parse): parse is AsRawDictionary {
    return (<AsRawDictionary>parse).asRawDictionary !== undefined;
}

interface AsRawKeyedDictionary{
	asRawKeyedDictionary(): {[key: string]: AsAble}
}

function canBeRawKeyedDictionary(parse: Parse): parse is AsRawKeyedDictionary {
    return (<AsDictionary>parse).asDictionary !== undefined;
}

interface AsNameType{
	asNameType(): {name: string, type: string}
}

function canBeNameType(parse: Parse): parse is AsNameType {
    return (<AsNameType>parse).asNameType !== undefined;
}

type AsAble = AsString | AsText | AsList | AsArray | AsVariable | AsAction | AsDictionary | AsRawDictionary | AsRawKeyedDictionary | AsNameType | AsBoolean;

export class DictionaryParse extends Parse implements AsRawDictionary, AsRawKeyedDictionary, AsDictionary {
	keyvaluepairs: Array<{key: AsAble, value: AsAble}>

	constructor(keyvaluepairs) {
		super();
		this.keyvaluepairs = keyvaluepairs;
	}
	asRawDictionary() { // for static things that cannot have interpolated keys or values
		const dictionary = {};
		this.keyvaluepairs.forEach(({key, value}) => {
			if(!canBeString(key)) {throw new Error("To convert to a raw dictionary, key must be a string")}
			if(!canBeString(value)) {throw new Error("To convert to a raw dictionary, value must be a string")}
			const stringKey = key.asString();
			if(dictionary[stringKey]) {throw new Error(`Key ${stringKey} is already defined in this dictionary.`);}
			dictionary[stringKey] = value.asString();
		});
		return dictionary;
	}
	asRawKeyedDictionary() {
		// returns a raw dictionary (keys are raw, not values) for this DictionaryParse
		const dictionary = {};
		this.keyvaluepairs.forEach(({key, value}) => {
			if(!canBeString(key)) {throw new Error("To convert to a raw keyed dictionary, key must be a string")}
			const stringKey = key.asString();
			if(dictionary[stringKey]) {throw new Error(`Key ${stringKey} is already defined in this dictionary.`);}
			dictionary[stringKey] = value;
		});
		return dictionary;
	}
	asDictionary(cc) {
		// returns an Output Dictionary for this DictionaryParse
		const dictionary = new Dictionary();
		this.keyvaluepairs.forEach(({key, value}) => {
			let type;
			if(!canBeText(key)) {throw new Error("Dictionary keys must be texts")}
			if(canBeList(value)) {type = 2; value = value.asList(cc);}
			else if(canBeDictionary(value)) {type = 1; value = value.asDictionary(cc);}
			else if(canBeText(value)) {type = 0; value = value.asText(cc);}
			else{throw new Error("This dictionary can only values that are lists, texts, or dictionaries.");}
			dictionary.add(key.asText(cc), value, type);
		});
		return dictionary;
	}
}
export class ListParse extends Parse {
	items: Array<AsAble>;

	constructor(items) {
		super();
		this.items = items;
	}
	asArray(cc) { // -> ""[]
		return this.items.map(item => {
			if(!canBeString(item)) {throw new Error("To convert to an array, all elements must be strings")}
			item.asString()
		});
	}
	asList(cc) { // -> Text[]
		return new List(this.items.map(item => {
			if(!canBeText(item)) {throw new Error("To convert to a list, all items must be texts")}
			item.asText(cc)
		}));
	}
}
export class BarlistParse extends ListParse {
	asString() {
		return this.items.map(item => {
			if(!canBeString(item)) {throw new Error("To convert to an array, all elements must be strings")}
			item.asString()
		}).join("\n");
	}
	asText(cc) { // -> Text
		const finalText = new Text;
		this.items.forEach((item, i) => {
			if(!canBeText(item)) {throw new Error("To convert to a text, all elements must be texts")}
			finalText.add(item.asText(cc));
			if(this.items.length - 1 !== i) {
				finalText.add("\n");
			}
		});
		// this.data.join`\n` but for non-strings
		// finalText.add(...this.data.items.map(i=>i.asText()));
		return finalText;
	}
}

export class CharsParse extends Parse {
	// [...string|Parse(has asVariable)]
	items: [string | AsAble]
	constructor(items) {
		super();
		this.items = items;
	}
	asString() { // returns a raw string
		let string = "";
		this.items.forEach(item => {
			if(typeof item === "string") {
				string += item;
				return;
			}
			throw new Error(`To convert to a string, all items must be strings.`);
		});
		return string;
	}
	asText(cc) {
		const text = new Text;
		this.items.forEach(item => {
			if(typeof item === "string") {
				return text.add(item);
			}
			if(!canBeVariable(item)) {throw new Error("To convert to text, all items must be variables")}
			return text.add(item.asVariable(cc));
		});
		return text;
	}
}
export class IdentifierParse extends Parse {
	value: string
	constructor(str) {
		super();
		this.value = str;
	}
	asString() {
		return this.value;
	}
	asBoolean() {
		const string = this.asString();
		if(string === "true") {return true;}
		if(string === "false") {return false;}
		throw new Error("This boolean must be either true or false.");
	}
	asText(cc) {
		const text = new Text;
		text.add(this.value);
		return text;
	}
}
export class ArglistParse extends DictionaryParse {
	get special() {
		return "Arglist";
	}
}
export class VariableFlagParse extends Parse {
	variable: AsAble
	constructor(variable) {
		super();
		this.variable = variable;
	}
}
export class ActionParse extends Parse {
	name: AsAble
	args: [AsAble]
	variable: AsAble
	constructor(name, args, variable) {
		super();
		this.name = name;
		this.args = args;
		this.variable = variable;
	}
	// Action[Argument,Argument...]
	asText(cc) { // Gets a text containing this action as a variable
		const variable = this.asVariable(cc);
		const text = new Text();
		text.add(variable);
		return text;
	}
	asVariable(cc) { // returns the Variable for this ActionParse
		const action = this.asAction(cc); // adds the action
		if(action.info.hasVariable) {
			return action.variable;
		}
		// otherwise: add a Set Variable action
		throw new Error(`Actions of type ${action.info.id} cannot be converted to a variable.`);
	}
	asAction(cc) { // returns an Action for this ActionParse
		if(!canBeString(this.name)) {throw new Error("To convert to an action, the action name must be a string")}
		const actionName = this.name.asString().toLowerCase();
		let wfAction;
		let controlFlowData;
		if(actionName === "flow"
		|| actionName === "otherwise"
		|| actionName === "else"
		|| actionName === "case") { // flow/case/otherwise action
			controlFlowData = cc.nextControlFlow();
			wfAction = controlFlowData.wfaction;
		}else if(actionName === "end") {
			controlFlowData = cc.endControlFlow();
			wfAction = controlFlowData.wfaction;
		}else{
			wfAction = actionsByName(actionName);
		}
		if(!wfAction) {
			throw new Error(`The action named ${actionName.toLowerCase()} could not be found.`);
		}
		const action = wfAction.build(cc, controlFlowData, ...this.args);
		// WFAction adds it to cc for us, no need to do it ourselves.
		// now add any required set variable actions
		if(this.variable) {
			if(!canBeNameType(this.variable)) {throw new Error("To convert to an action, the output variable must be a nametype")}
			const {name, type} = this.variable.asNameType(); // TODO not this
			if(type === "v") {
				cc.add(setVariable(name));
				cc.vardata[name] = {action: action};
			}else if(type === "mv") {
				action.magicvarname = `${type}:${name}`;
				cc.magicvardata[name] = {action: action};
			}
		}
		return action;
	}
}
export class VariableParse extends Parse {
	type: AsAble
	name: AsAble
	forkey: AsAble
	options: AsAble

	constructor(type, name, forkey, options) {
		super();
		this.type = type;
		this.name = name;
		this.forkey = forkey;
		this.options = options;
	}
	asStringVariable() {
		let variable;

		if(!canBeString(this.name)) {throw new Error("To convert to a stringvariable, the variable name must be a string")}
		if(!canBeString(this.type)) {throw new Error("To convert to a stringvariable, the variable type must be a string")}
		const name = this.name.asString();
		const type = this.type.asString();

		if(type !== "v") {throw new Error(`Only named (v:) variables can be used in this field.`);}
		return name;
	}
	asNameType() {
		let variable;

		if(!canBeString(this.name)) {throw new Error("To convert to a nametype, the variable name must be a string")}
		if(!canBeString(this.type)) {throw new Error("To convert to a nametype, the variable type must be a string")}
		const name = this.name.asString();
		const type = this.type.asString();

		if(type !== "v" && type !== "mv") {throw new Error(`Only v:and mv: variables can be used in an arrow.`);}
		return {name, type};
	}
	asText(cc) {
		const text = new Text;
		text.add(this.asVariable(cc));
		return text;
	}
	asVariable(cc) { //Converts this v:variable to a variable
		let variable;

		if(!canBeString(this.name)) {throw new Error("To convert to a variable, the variable name must be a string")}
		if(!canBeString(this.type)) {throw new Error("To convert to a variable, the variable type must be a string")}
		const name = this.name.asString();
		const type = this.type.asString();
		let aggrandizements;
		if(this.options) {
			if(!canBeRawDictionary(this.options)) {throw new Error("To convert to a variable, the aggrandizements object must be a raw dictionary")}
			aggrandizements = this.options.asRawDictionary(); // should be asRawKeyedDictionary and then use asstirng inside
		}else{
			aggrandizements = {};
		}

		if(type === "v") { // named variable
			let vardata = cc.vardata[name];
			if(name.startsWith("Repeat Index") || name.startsWith("Repeat Item")) {vardata = {};}
			if(!vardata) {throw new Error(`${type}:${name} is not yet defined.`);}
			variable = new NamedVariable(name);
		}else if(type === "mv") { // magic variable
			const vardata = cc.magicvardata[name];
			if(!vardata) {throw new Error(`${type}:${name} is not yet defined.`);}
			const mvact = vardata.action;
			variable = new MagicVariable(mvact);
		}else if(type === "s") { // special variable
			const attachtype = {clipboard: "Clipboard", askwhenrun: "Ask", currentdate: "CurrentDate", shortcutinput: "ExtensionInput", actioninput: "Input"};
			const attachvalue = attachtype[name.toLowerCase()];
			if(!attachvalue) {
				throw new Error(`Invalid special variable type ${name.toLowerCase()} valid are ${Object.keys(attachtype)}`);
			}
			variable = new Attachment(attachvalue);
		}else{
			throw new Error(`Invalid vartype ${type}. Valid are v, mv, s`);
		}
		if(this.forkey) {
			variable.aggrandizements.coerce("dictionary");
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
		const action = getVariable(this.asVariable(cc));
		cc.add(action);
		return action;
	}
}

export class ActionsParse {
	actions: [AsAble]
	constructor(actions) {
		this.actions = actions;
	}
	asShortcut() {
		const cc = new ConvertingContext();
		this.actions.forEach(action => {
			if(!canBeAction(action)) {throw new Error("To convert to a shortcut, all actions must be actions")}
			action.asAction(cc)
		});
		if(cc.controlFlowStack.length !== 0) {
			throw new Error(`There are ${cc.controlFlowStack.length} unterminated block actions. Check to make sure every block has an else.`);
		}
		return cc.shortcut;
	}
}
// Text::asString
// Text::build