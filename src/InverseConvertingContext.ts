import {Attachment, MagicVariable, NamedVariable, Text, AttachmentType, Shortcut, Action, ParameterType, List, Dictionary, toParam, Aggrandizements, inverseCoercionTypes} from "./OutputData";
import {getActionFromID} from "./ActionData"

const NUMBER = /^-?(?:[0-9]*\.[0-9]+|[0-9]+)$/;
const IDENTIFIER = /^[A-Za-z@_][A-Za-z0-9@_]*$/;
const ESCAPEDQUOTEDSTRING = (value: string) => value.replace(/(["\\\n])/g, d => d==="\n" ? "\\n" : `\\${d}`);
const DQUOTEDSTRING = (value: string) => `"${ESCAPEDQUOTEDSTRING(value)}"`;
const ESCAPESQUOTEDSTRING = (value: string) => value.replace(/(['\\\n])/g, d => d==="\n" ? "\\n" : `\\${d}`);
const SQUOTEDSTRING = (value: string) => `"${ESCAPESQUOTEDSTRING(value)}"`;


// FOR NOW:
// put argument labels on all arguments
// FOR FUTURE:
// look at wfrequiredresources and order things to avoid argument labels as much as possible

export class InverseConvertingContext {
	magicVariables: {[key: string]: string};
	quotes: '"' | "'";
	indent: string;
	_indentLevel: number;
	constructor(options: {quotes?: '"' | "'", indent?: string | number} = {}) {
		this.magicVariables = {};
		this.quotes = options.quotes || '"';
		if(typeof options.indent === "number") {options.indent = " ".repeat(options.indent)}
		this.indent = options.indent || "\t";
		this._indentLevel = 0;
	}

	createActionsAble(value: Shortcut){
		return value.actions.map(action => {

			let createdAction = this.createActionAble(action);
			return `${createdAction}`

		}).join("\n");
	}
	createActionAble(value: Action){
		let result: string[] = [];

		// get action data
		let actionData = getActionFromID(value.id);

		// let parameters = actionData.getParameters();
		let order = actionData.getParameterOrder(); // TODO future
		order.forEach(param => {
			if(typeof param === "string") {return;}

			let paramValue = value.parameters.get(param.internalName);
			if(!paramValue) {return;}
			result.push(param.shortName + "=" + this.handleArgument(toParam(paramValue)));
		});

		let uuid = <string|undefined>value.parameters.get("UUID");
		if(uuid){
			let baseName = value.magicvarname || value.name || "?";
			let name = baseName;
			if(this.magicVariables[name]){
				for(let i = 1; this.magicVariables[name]; i++){
					name = baseName + i;
				}
			}
			this.magicVariables[name] = uuid;
		}

		let controlFlowMode = <number|undefined>value.parameters.get("WFControlFlowMode");
		if(controlFlowMode === 1){
			if(value.id === "is.workflow.actions.conditional") {return this.indent.repeat(this._indentLevel - 1) + "otherwise";}
			if(value.id === "is.workflow.actions.choosefrommenu") {return this.indent.repeat(this._indentLevel - 1) + "case";}
			return this.indent.repeat(this._indentLevel - 1) + "flow";
		}else if(controlFlowMode === 2){
			this._indentLevel--;
			return this.indent.repeat(this._indentLevel) + "end";
		}
		let indentLevel = this._indentLevel;
		if(actionData._data.BlockInfo){this._indentLevel++;}

		return this.indent.repeat(indentLevel) + actionData.shortName + " " + result.join(" ");
	}

	handleArgument(thing: ParameterType): string {
		if(typeof thing === "string") {
			return this.createStringAble(thing);
		}
		if(typeof thing === "number") {
			return this.createNumberAble(thing);
		}
		if(thing instanceof Attachment) {
			return this.createVariableAble(thing);
		}
		if(thing instanceof Text) {
			return this.createTextAble(thing);
		}
		return "??this argument type is not supported yet??";
	}

	createStringAble(value: string): string {
		// One of: "string", ident, -1.5, \n|barlist (ifend)
		if(value.match(NUMBER)) {return value;}
		if(value.match(IDENTIFIER)) {return value;}
		return this.quoteAndEscape(value);
	}
	createNumberAble(data: number): string {
		const value = data.toString();
		if(value.match(NUMBER)) {return value;}
		if(value.match(IDENTIFIER)) {return value;}
		return this.quoteAndEscape(value);
	}
	createListAble(value: List): string{
		let items = value.getItems();
		let result = items.map(item => {
			return this.createTextAble(item);
		});
		return "["+result.join(", ")+"]";
	}
	createDictionaryAble(value: Dictionary): string{
		let result = value.items.map(item => {
			let key = this.createTextAble(item.key);
			let value = this.handleArgument(item.value);
			return key + ": " + value;
		});
		return "{" + result.join(", ") + "}";
	}
	createAggrandizementsAble(value: Aggrandizements | undefined): string{
		if(!value) {return "";}
		let aggrandizements = [];
		let forKey = "";
		if(value.getForKey){
			forKey = "." + this.createStringAble(value.getForKey);
		}else{
			if(value.coercionType){
				aggrandizements.push("as: "+inverseCoercionTypes[value.coercionType]);
			}
		}
		if(value.getProperty){
			if(!value.coercionType){return "??get: "+value.getProperty.name+" without as: value??"}
			aggrandizements.push("get: "+value.getProperty.name.toLowerCase().replace(/[^a-z]/g, ""));
		}
		let res = "";
		if(forKey) {res += forKey;}
		if(aggrandizements.length > 0) {res += "{" + aggrandizements.join(", ") + "}"}
		return res;
	}
	createVariableAble(value: Attachment): string { // createVariAble
		if(value instanceof NamedVariable) {
			if(value.varname.match(IDENTIFIER)) {return `v:${value.varname}`;}
			return `v:${this.quoteAndEscape(value.varname)}${this.createAggrandizementsAble(value.aggrandizements)}`;
		}
		if(value instanceof MagicVariable) {
			const varname = this.magicVariables[value.uuid];

			if(!varname) {return "mv:??broken magic variable??";}
			if(varname.match(IDENTIFIER)) {return `mv:${varname}`;}
			return `mv:${this.quoteAndEscape(varname)}${this.createAggrandizementsAble(value.aggrandizements)}`;
		}
		const data: {[key in AttachmentType]: string | undefined} = {Clipboard: "clipboard", Ask: "askWhenRun", CurrentDate: "currentDate", ExtensionInput: "shortcutinput", Input: "actioninput", Variable: undefined, ActionOutput: undefined};
		if(!data[value.type]) {throw new Error("Attachment type is either Variable or ActionOutput. This should've been caught earlier.");}
		return `s:${data[value.type]}${this.createAggrandizementsAble(value.aggrandizements)}`;
	}
	createTextAble(value: Text): string {
		let resstr = "";
		value.components().forEach((component: Attachment | string) => {
			if(typeof component === "string") {return resstr += ESCAPEDQUOTEDSTRING(component);}
			resstr += "\(" + this.createVariableAble(component) + ")";
		});
		if(resstr.match(IDENTIFIER)) {return resstr;} // \() will never match identifier
		return this.quoteAndEscape(resstr);
	}
	quoteAndEscape(val: string): string {
		if(this.quotes === "'") {return SQUOTEDSTRING(val)};
		return DQUOTEDSTRING(val);
	}
}

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
