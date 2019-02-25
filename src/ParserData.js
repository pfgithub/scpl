const {Shortcut, Action, Parameters, Dictionary, Text, MagicVariable, NamedVariable, Variable, Attachment, Parameter, Aggrandizements, DictionaryKeyAggrandizement, CoercionAggrandizement, Aggrandizement, List} = require("./OutputData");
const {actionsByName} = require("./ActionData");
const {ConvertingContext} = require("./Converter.js");
const {setVariable, getVariable} = require("./HelpfulActions");

class Parse {
	constructor() {
	}
}

class DictionaryParse extends Parse {
	constructor(keyvaluepairs) {
		super();
		this.keyvaluepairs = keyvaluepairs;
	}
	asRawDictionary() { // for static things that cannot have interpolated keys or values
		const dictionary = {};
		this.keyvaluepairs.forEach(({key, value}) => {
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
			if(value.asList) {type = 2; value = value.asList(cc);}
			else if(value.asDictionary) {type = 1; value = value.asDictionary(cc);}
			else if(value.asText) {type = 0; value = value.asText(cc);}
			else{throw new Error("This dictionary can only values that are lists, texts, or dictionaries.");}
			dictionary.add(key.asText(cc), value, type);
		});
		return dictionary;
	}
}
class ListParse extends Parse {
	constructor(items) {
		super();
		this.items = items;
	}
	asList(cc) { // -> Text[]
		return new List(this.items.map(item => item.asText(cc)));
	}
}
class BarlistParse extends ListParse {
	asString() {
		return this.items.map(item => item.asString()).join`\n`;
	}
	asText(cc) { // -> Text
		const finalText = new Text;
		this.items.forEach((item, i) => {
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

class CharsParse extends Parse {
	// [...string|Parse(has asVariable)]
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
			throw new Error(`Interpolations are not allowed in this string.`);
		});
		return string;
	}
	asText(cc) {
		const text = new Text;
		this.items.forEach(item => {
			if(typeof item === "string") {
				return text.add(item);
			}
			return text.add(item.asVariable(cc));
		});
		return text;
	}
}
class IdentifierParse extends Parse {
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
class ParamListParse extends DictionaryParse {

}
class ArglistParse extends DictionaryParse {
	get special() {
		return "Arglist";
	}
}
class VariableFlagParse extends Parse {
	constructor(variable) {
		super();
		this.variable = variable;
	}
}
class ActionParse extends Parse {
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
		const actionName = this.name.asString();
		const wfAction = actionsByName(actionName);
		if(!wfAction) {
			throw new Error(`The action named ${actionName.toLowerCase()} could not be found.`);
		}
		const action = wfAction.build(cc, ...this.args);
		// WFAction adds it to cc for us, no need to do it ourselves.
		// now add any required set variable actions
		if(this.variable) {
			const {name, type} = this.variable.asNameType(); // TODO not this
			if(type === "v") {
				cc.add(setVariable(name));
				cc.vardata[name] = cc.lastVariableAction;
			}else if(type === "mv") {
				cc.magicvardata[name] = {action: cc.lastVariableAction};
			}
		}
		return action;
	}
}
class VariableParse extends Parse {
	constructor(type, name, options) {
		super();
		this.type = type;
		this.name = name;
		this.options = options;
	}
	asStringVariable() {
		let variable;

		const name = this.name.asString();
		const type = this.type.asString();

		if(type !== "v") {throw new Error(`Only named (v:) variables can be used in this field.`);}
		return name;
	}
	asNameType() {
		let variable;

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

		const name = this.name.asString();
		const type = this.type.asString();

		if(type === "v") { // named variable
			const vardata = cc.vardata[name];
			if(!vardata) {throw new Error(`${type}:${name} is not yet defined.`);}
			variable = new NamedVariable(name, vardata.type);
		}else if(type === "mv") { // magic variable
			const vardata = cc.magicvardata[name];
			if(!vardata) {throw new Error(`${type}:${name} is not yet defined.`);}
			const mvact = vardata.action;
			variable = new MagicVariable(mvact);
		}else if(type === "s") { // special variable
			const attachtype = {clipboard: "Clipboard", askwhenrun: "Ask", currentDate: "CurrentDate", extensionInput: "ExtensionInput"};
			variable = new Attachment(attachtype[name] || (_=>{throw new Error(`Invalid special variable type ${name} valid are ${Object.keys(attachtype)}`);})());
		}else{
			throw new Error(`Invalid vartype ${type}. Valid are v, mv, s`);
		}
		return variable;
	}
	asAction(cc) {
		const action = getVariable(this.asVariable(cc));
		cc.add(action);
		return action;
	}
}

class ActionsParse {
	constructor(actions) {
		this.actions = actions;
	}
	asShortcut() {
		const cc = new ConvertingContext();
		this.actions.forEach(action => action.asAction(cc));
		return cc.shortcut;
	}
}
// Text::asString
// Text::build

module.exports = {
	ActionParse,
	DictionaryParse,
	CharsParse,
	IdentifierParse,
	ParamListParse,
	BarlistParse,
	ListParse,
	VariableParse,
	ActionsParse,
	VariableFlagParse,
	ArglistParse
};
