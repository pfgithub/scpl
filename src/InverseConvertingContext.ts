import {Attachment, MagicVariable, NamedVariable, Text, AttachmentType} from "./OutputData";

/*

Variable -> v:
string -> "..."
Text -> "...\()
Number: 1.2
List: []
Dictionary: {}



...Types:




*/

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
	magicVariables: {[key: string]: string | undefined};
	quotes: '"' | "'";
	indent: "\t" | number;
	constructor(options: {quotes?: '"' | "'", indent?: "\t" | number} = {}) {
		this.magicVariables = {};
		this.quotes = options.quotes || '"';
		this.indent = options.indent || "\t";
	}
	
	handleThing(thing: unknown): string {
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
		return DQUOTEDSTRING(value);
	}
	createNumberAble(data: number): string {
		const value = data.toString();
		if(value.match(NUMBER)) {return value;}
		if(value.match(IDENTIFIER)) {return value;}
		return DQUOTEDSTRING(value);
	}
	createVariableAble(value: Attachment): string {
		if(value instanceof NamedVariable) {
			if(value.varname.match(IDENTIFIER)) {return `v:${value.varname}`;}
			return `v:${ESCAPEDQUOTEDSTRING(value.varname)}`;
		}
		if(value instanceof MagicVariable) {
			const varname = this.magicVariables[value.uuid];
			
			if(!varname) {return "mv:??broken magic variable??";}
			if(varname.match(IDENTIFIER)) {return `mv:${varname}`;}
			return `mv:${ESCAPEDQUOTEDSTRING(varname)}`;
		}
		const data: {[key in AttachmentType]: string | undefined} = {Clipboard: "clipboard", Ask: "askWhenRun", CurrentDate: "currentDate", ExtensionInput: "shortcutinput", Input: "actioninput", Variable: undefined, ActionOutput: undefined};
		if(!data[value.type]) {throw new Error("Attachment type is either Variable or ActionOutput. This should've been caught earlier.");}
		return `s:${data[value.type]}`;
	}
	createTextAble(value: Text): string {
		let resstr = "";
		value.components().forEach((component: Attachment | string) => {
			if(typeof component === "string") {return resstr += ESCAPEDQUOTEDSTRING(component);}
			resstr += this.createVariableAble(component);
		});
		return "";
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