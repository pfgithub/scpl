const uuidv4 = require("uuid/v4");

import {Text, Action, MagicVariable} from "./OutputData";
import {getVariable} from "./HelpfulActions";
import { ConvertingContext } from "./Converter";
import {canBeString, canBeBoolean, canBeText, canBeArray, canBeList, canBeVariable, canBeAction, canBeDictionary, canBeRawDictionary, canBeRawKeyedDictionary, canBeNameType, canBeStringVariable, AsAble, IdentifierParse, CharsParse, ListParse, BarlistParse, DictionaryParse, ArglistParse, VariableFlagParse, ActionParse, VariableParse} from "./ParserData"

const actionList = require("./Data/Actions")[0];

function genShortName(longName: string, internalName?: string) {
	// lower case
	let shortName = (longName || internalName || "nameless").toLowerCase();
	// remove special characters
	shortName = shortName.replace(/[^A-Za-z0-9]/g, "");
	return shortName;
}

class WFResource {
	_data: any
	constructor(data: any) {
		this._data = data;
	}
	shouldEnable(action: Action) {
		return true;
	}
	genDocs() {
		return `Always enabled`;
	}
};

const resourceTypes: {[key: string]: any} = {}; // I can't figure out what to put the type as here

class WFDeviceAttributesResource extends WFResource {
	shouldEnable(action: Action) {
		return true;
	}
	genDocs() {
		return `Device attributes match \`${JSON.stringify(this._data.WFDeviceAttributes)}\` This action is always enabled inside Shortcutslang.`;
	}
};
resourceTypes.WFDeviceAttributesResource = WFDeviceAttributesResource;

class WFWorkflowTypeResource extends WFResource {
	shouldEnable(action: Action) {
		return true;
	}
	genDocs() {
		return `Workflow type is \`${this._data.WFWorkflowType}\`. This action is always enabled inside Shortcutslang.`;
	}
};
resourceTypes.WFWorkflowTypeResource = WFWorkflowTypeResource

class WFWorkflowHiddenResource extends WFResource {
	shouldEnable(action: Action) {
		return false;
	}
	genDocs() {
		return `This action is always **disabled** inside Shortcutslang.`;
	}
};

class WFParameterRelationResource extends WFResource {
	relation: string;
	argInternalName: string;
	argValue: any;
	argValues: any;
	constructor(data: any) {
		super(data);
		this.relation = this._data.WFParameterRelation || "=";
		this.argInternalName = this._data.WFParameterKey;
		this.argValue = this._data.WFParameterValue;
		this.argValues = this._data.WFParameterValues || [this.argValue];
		const relations: {[key: string]: number}  = {"=": 1, "!=": 1, ">=": 1, "<=": 1, ">": 1, "<": 1, "??": 1};
		if(!(relations)[this.relation]) {
			throw new Error(`RelationResource relation type ${this.relation} is not implemented.`);
		}
	}
	genDocs() {
		return `argument ${this.argInternalName} ${this.relation} \`${this.argValues.join`\` or \``}\``;
	}
	shouldEnable(action: Action) {
		const currentValue = action.parameters.get(this.argInternalName);
		const currentValueNum = +currentValue;
		const isNum = !isNaN(currentValueNum);
		switch(this.relation) {
			case "=":
				return this.argValues.some((val: any) => val === currentValue);
			case "!=":
				return this.argValues.indexOf(currentValue) === -1;
			case ">=":
				if(!isNum) {return false;}
				return currentValueNum >= this.argValue;
			case "<=":
				if(!isNum) {return false;}
				return currentValueNum <= this.argValue;
			case ">":
				if(!isNum) {return false;}
				return currentValueNum > this.argValue;
			case "<":
				if(!isNum) {return false;}
				return currentValueNum < this.argValue;
			case "??":
				return action.parameters.has(this.argInternalName);
			default:
				throw new Error(`RelationResource relation type ${this.relation} is not implemented.`);
		}
	}
};
resourceTypes.WFParameterRelationResource = WFParameterRelationResource

class WFParameter {
	_data: any
	defaultValue: string
	requiredResources: Array<WFResource>
	allowsVariables: boolean
	name: string
	internalName: string
	shortName: string
	typeName: string
	constructor(data: any, typeName: string) {
		this._data = data;
		this.defaultValue = this._data.DefaultValue;
		this.requiredResources = this._data.RequiredResources || [];
		this.allowsVariables = (this._data.DisallowedVariableTypes || []).join`` !== "AskVariable";
		this.name = this._data.Label;
		this.internalName = this._data.Key;
		this.shortName = genShortName(this.name, this.internalName);
		this.name = this.name || this.shortName;
		this.typeName = typeName;

		this.requiredResources = this.requiredResources.map((resource: any) => {
			const type = resource.WFResourceClass;
			const resourceClass = types[type];
			if(!resourceClass) {throw new Error(`${resourceClass} is not a defined resource class.`);}
			// @ts-ignore
			return new resourceClass(resource);
		});
		if(this._data.Hidden) {this.requiredResources.push(new WFWorkflowHiddenResource({Hidden: true}));}
	}
	shouldEnable(action: Action) {
		return this.requiredResources.every((resource: WFResource) => resource.shouldEnable(action));
	}
	genDocsArgName(){
		return "[???]"
	}
	genDocsAutocompletePlaceholder() {
		return `:${this._data.DefaultValue ? `${this.genDocsArgName()}:"${this._data.DefaultValue}"` : `${this.genDocsArgName()}`}`;
	}
	genDocs() {
		let docs = `### ${this.typeName}: ${this.name} / ${this.shortName} (internally \`${this.internalName}\`)\n`;
		if(this._data.Placeholder) {docs += `**Placeholder**:
\`\`\`
${this._data.Placeholder}
\`\`\`
`;}
		if(this._data.DefaultValue) {docs += `**Default Value**:
\`\`\`
${this._data.DefaultValue}
\`\`\`
`;}
		if(this.allowsVariables) {docs += `**Allows Variables**: ${this.allowsVariables}\n\n`;}
		docs += `${this.requiredResources.map(resource => `**Only enabled if**: ${resource.genDocs()}`).join("\n\n")}`;
		return docs;
	}
	build(cc: ConvertingContext, parse: AsAble): any{
	
	}
};

const types: {[key: string]: any } = {};

class WFEnumerationParameter extends WFParameter {
	options: Array<string>
	constructor(data: any, name: string) {
		super(data, name || "Enumeration");
		this.options = this._data.Items;
	}
	genDocsAutocompletePlaceholder() {
		return `|${this.options.map(o=>`"${o}"`).join(",")}${this.allowsVariables?`,variable`:``}|`;
	}
	genDocsArgName() {
		const strInfo = this.options.join(" | ");
		return this.allowsVariables ? `[string <${strInfo}>]` : `[string <${strInfo}>|variable]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string ${this.allowsVariables ? `
or variable`: ""}
containing one of the options:

- \`${this.options.join(`\`\n- \``)}\``;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		// asVariable may require additional actions to be inserted above this one.
		// for example, if ^("hello") (v:comparison) "hi"
		if(canBeVariable(parse)) {
			const res = parse.asVariable(cc);
			if(!this.allowsVariables) {
				throw new Error("This enumeration field does not allow variables.");
			}
			return res;
		}else if(canBeString(parse)) {
			const res = parse.asString(); // asString returns a string like ""
			if(this.options.indexOf(res) > -1) {return res;}
			throw new Error(`This enumeration field can only be one of the following: ${this.options.join(", ")}`);
		}else{
			throw new Error("This enumeration field only accepts strings and variables.");
		}
	}
};
types.WFEnumerationParameter = WFEnumerationParameter;

class WFStorageServicePickerParameter extends WFEnumerationParameter {
	constructor(data: any, name: string) {
		super(data, name || "Storage Service Picker");
		this.options = ["iCloud Drive", "Dropbox"];
	}
};
types.WFStorageServicePickerParameter = WFStorageServicePickerParameter;

class WFWorkflowPickerParameter extends types.WFParameter {
	constructor(data: any, name = "Shortcut Picker") {
		super(data, name);
	}
	genDocsArgName() {
		return `[string|variable]`;
	}
	genDocs() {
		return `${super.genDocs()}

	Accepts a string ${this.allowsVariables ? `
	or variable`: ""}
	with the name of the shortcut to run`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		// asVariable may require additional actions to be inserted above this one.
		// for example, if ^("hello") (v:comparison) "hi"
		if(canBeVariable(parse)) {
			const res = parse.asVariable(cc);
			return res;
		}else if(canBeString(parse)) {
			const res = parse.asString(); // asString returns a string like ""
			return res;
		}
		throw new Error("This shortcut field only accepts strings and variables.");
	}
};
types.WFWorkflowPickerParameter = WFWorkflowPickerParameter;

class WFNumberFieldParameter extends WFParameter {
	constructor(data: any) {
		super(data, "Number");
	}
	genDocsArgName() {
		return this.allowsVariables ? `[string number]` : `[string number|variable]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string ${this.allowsVariables ? `
or variable`: ""}
with a number.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(canBeVariable(parse)) {
			const res = parse.asVariable(cc);
			if(!this.allowsVariables) {
				throw new Error("This number field does not allow variables.");
			}
			return res;
		}else if(canBeString(parse)) {
			const res = parse.asString(); // asString returns a string like "" <-- that's a string
			const num = +res;
			if(isNaN(num)) {throw new Error(`This number field only accepts numbers. The value \`${res}\` could not be converted to a number`);}
			return num;
		}
		throw new Error("This number field only accepts strings or numbers");
	}
};
types.WFNumberFieldParameter = WFNumberFieldParameter

class WFContentArrayParameter extends WFParameter {
	constructor(data: any) {
		super(data, "List");
	}
	genDocsArgName() {
		return `[list]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a list.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(!canBeList(parse)){throw new Error("To make a content array, the argument must be a list")}
		const list = parse.asList(cc);
		return list;
	}
};
types.WFContentArrayParameter = WFContentArrayParameter;

types.WFArrayParameter = class extends WFContentArrayParameter {}; // not sure what the difference is

class WFStepperParameter extends types.WFParameter {
	constructor(data: any) {
		super(data, "Stepper Number");
	}
	genDocsArgName() {
		return this.allowsVariables ? `[string integer]` : `[string integer|variable]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string ${this.allowsVariables ? `
or variable`: ""}
containing an integer value.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(canBeVariable(parse)) {
			const res = parse.asVariable(cc);
			if(!this.allowsVariables) {
				throw new Error("This number field does not allow variables.");
			}
			return res;
		}else if(canBeString(parse)) {
			const res = parse.asString(); // asString returns a string like "" <-- that's a string
			const num = +res;
			if(isNaN(num)) {throw new Error(`This number field only accepts integers. The value \`${res}\` could not be converted to a number`);}
			if(!Number.isInteger(num)) {throw new Error(`This number field only accepts integers. The number \`${num}\` is not an integer.`);}
			return num;
		}
		throw new Error("This number field only accepts strings or variables");
	}
};
types.WFStepperParameter = WFStepperParameter

class WFSliderParameter extends types.WFParameter {
	constructor(data: any) {
		super(data, "Slider Number");
	}
	genDocsArgName() {
		return this.allowsVariables ? `[string number]` : `[string number|variable]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string ${this.allowsVariables ? `
or variable`: ""}
containing a number value from 0 to 1.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(canBeVariable(parse)) {
			const res = parse.asVariable(cc);
			if(!this.allowsVariables) {
				throw new Error("This slider field does not allow variables.");
			}
			return res;
		}else if(canBeString(parse)) {
			const res = parse.asString(); // asString returns a string like "" <-- that's a string
			const num = +res;
			if(isNaN(num)) {throw new Error(`This slider field only accepts numbers. The value \`${res}\` could not be converted to a number`);}
			if(num > 1 || num < 0) {throw new Error(`This slider field only accepts numbers from 0 to 1. The number \`${num}\` is not in this range..`);}
			return num;
		}
		throw new Error("This number field only accepts strings or variables");
	}
};
types.WFSliderParameter = WFSliderParameter;

class WFVariablePickerParameter extends WFParameter {
	constructor(data: any) {
		super(data, "Variable Picker");
	}
	genDocsArgName() {
		return `[variable]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a variable.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(!canBeVariable(parse)){throw new Error("To make a variable picker, the argument must be a variable")}
		const variable = parse.asVariable(cc);
		return variable;
	}
};
types.WFVariablePickerParameter = WFVariablePickerParameter

class WFTextInputParameter extends WFParameter {
	constructor(data: any, name: string) {
		super(data, name || "Text");
	}
	genDocsArgName() {
		return !this.allowsVariables ? `[string]` : `[string|text]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string ${this.allowsVariables ? `
or text`: ""}
with the text.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(!this.allowsVariables) {
			if(!canBeString(parse)) {throw new Error("To make a text input that does not allow variables, the argument must be a string")}
			return parse.asString();
		}
		if(!canBeText(parse)){throw new Error("To make a text input, the argument must be a text")}
		return parse.asText(cc);
	}
};
types.WFTextInputParameter = WFTextInputParameter

class WFDateFieldParameter extends WFTextInputParameter {
	constructor(data: any, name: string) {
		super(data, name || "Date");
	}
};
types.WFDateFieldParameter = WFDateFieldParameter

class WFEmailAddressFieldParameter extends WFParameter {
	constructor(data: any) {
		super(data, "Text Input");
	}
	genDocsArgName() {
		return `[string|string array|variable]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string or string array or variable of email addresses.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(canBeVariable(parse)) {
			return parse.asVariable(cc);
		}
		if(canBeArray(parse)) {
			return parse.asArray();
		}
		if(canBeString(parse)) {
			return [parse.asString()];
		}
		throw new Error("To make an email address, the argument must be a variable, array, or string");
	}
};
types.WFEmailAddressFieldParameter = WFEmailAddressFieldParameter

class WFDictionaryParameter extends WFParameter {
	constructor(data: any) {
		super(data, "Dictionary");
	}
	genDocsArgName() {
		return `[dictionary]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a dictionary.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(!canBeDictionary(parse)) {throw new Error("To make a dictionary, the argument must be a dictionary")}
		return parse.asDictionary(cc);
	}
};
types.WFDictionaryParameter = WFDictionaryParameter;

class WFSwitchParameter extends WFParameter {
	constructor(data: any) {
		super(data, "Switch");
	}
	genDocsArgName() {
		return this.allowsVariables ? `[string boolean|variable]` : `[string boolean]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a boolean${this.allowsVariables ? `
or a variable.`: ""}`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(canBeVariable(parse)) {
			if(!this.allowsVariables) {throw new Error("This boolean field does not accept variables");}
			return parse.asVariable(cc);
		}else if(canBeBoolean(parse)) {
			return parse.asBoolean();
		}
		throw new Error("This boolean field only accepts booleans or variables");
	}
};
types.WFSwitchParameter = WFSwitchParameter;

class WFExpandingParameter extends WFParameter {
	constructor(data: any) {
		super(data, "Expand Arrow");
		this.allowsVariables = undefined;
	}
	genDocsArgName() {
		return `[boolean]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a boolean for if this
parameter is expanded or not.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(canBeBoolean(parse)) {
			return parse.asBoolean();
		}
		throw new Error("This expanding field only accepts booleans");
	}
};
types.WFExpandingParameter = WFExpandingParameter

class WFVariableFieldParameter extends types.WFParameter {
	constructor(data: any) {
		super(data, "Variable Field");
	}
	genDocsArgName() {
		return `[string|variable v:variableName]`;
	}
	genDocs() {
		const docs = `${super.genDocs()}

Accepts a string with the name of the named variable (v:) you want to set,
or a named variable (v:) that you want to set.
`;
		return docs;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		const varname = canBeString(parse) ? parse.asString() : canBeStringVariable(parse) ? parse.asStringVariable() : (()=>{throw new Error("To make a variable field, the argument must be a string or string variable")})();
		cc.vardata[varname] = true;
		return varname;
	}
};
types.WFVariableFieldParameter = WFVariableFieldParameter;

const _debugMissingTypes: {[key: string]: number} = {};
const _debugTypes: {[key: string]: {paramClass: string, missing: boolean, count: number}} = {};

class WFAction {
	_data: any
	id: string
	isComplete: boolean
	_parameters: Array<WFParameter>
	internalName: string
	shortName: string
	name: string
	constructor(data: any, id: string) {
		this._data = data;
		this.id = id;
		this.isComplete = true;
		this._parameters = [];
		if(this._data.Parameters) {
			this._parameters = this._data.Parameters.map((param: any) => {
				_debugTypes[param.Class] = {
					paramClass: param.Class,
					missing: !types[param.Class],
					count: _debugTypes[param.Class]
						? _debugTypes[param.Class].count + 1
						: 1
				};
				if(types[param.Class]) {
					const type = types[param.Class];
					return new type(param);
				}
				this.isComplete = false;
				_debugMissingTypes[param.Class] =
					_debugMissingTypes[param.Class] !== undefined
						? _debugMissingTypes[param.Class] + 1
						: 1;
				return `This paramtype is not implemented. ${param.Class}`;
			});
		}
		this.internalName = this.id;
		this.name = this._data.Name;
		this.shortName = genShortName(this.name, this.internalName);
		this.name = this.name || this.shortName;
	}
	get actionOutputType() {
		// TODO !!! used for the default output type in variables
		return this._data.Output.Types[0];
	}
	get inputPassthrough() {
		return this._data.InputPassthrough;
	}
	get hasVariable() { // If this action has a magic variable
		return !this.inputPassthrough;
	}
	get requiresInput() {
		return true;
	}
	genDocsParams() {
		return this._parameters.map(param => {
			if(typeof param === "string") {
				return {argType: `[???]`};
			}
			return {
				argName: param.shortName,
				argType: param.genDocsArgName(),
				argAutocompletePlaceholder: param.genDocsAutocompletePlaceholder()
			};
		} );
	}
	genDocsAutocompleteUsage() {
		return `${this.shortName} a{
${this.genDocsParams().map((arg, i) => `  ${arg.argName}=\${${i+1}${arg.argAutocompletePlaceholder}}`).join(",\n")}
}${this._data.BlockInfo ? this._data.BlockInfo.Completion : ""}
`;
	}
	genDocsUsage() {
		return `\`\`\`
${this.shortName} a{${this.genDocsParams().map(({argName, argType}) => `${argName}=${argType}`).join(" ")}}${this._data.BlockInfo ? this._data.BlockInfo.Example : ""}
\`\`\``;
	}
	genDocs() {
		const docs = `
## ${this.name} / ${this.shortName} (internally \`${this.internalName}\`)
${this.isComplete ? "" : `
> This action is not yet complete. Some arguments may be missing.
`}${this._data.RequiredResources ? `
> This action requires that Shortcuts has permission to use ${this._data.RequiredResources}.
` : ""}${this._data.BlockInfo ? `
> This action has a block. Make sure to end it with an end. (More info in usage below)
` : ""}
${this._data.Description ? `
## description${this._data.Description.DescriptionSummary ? `

### summary

${this._data.Description.DescriptionSummary}
` : ""}${this._data.Description.DescriptionInput ? `

### input

${this._data.Description.DescriptionInput}
` : ""}${this._data.Description.DescriptionResult ? `

### output

${this._data.Description.DescriptionResult}` : ""}` : ""}

### usage
${this.genDocsUsage()}

### arguments

---

${this._parameters.map(param => (typeof param === "string") ? `#### ${param}` : param.genDocs()).join(`

---

`)}

---

### source json

\`\`\`json
${JSON.stringify(this._data, null, "\t")}
\`\`\`
`;
		return docs;
	}
	build(cc: ConvertingContext, controlFlowData?: {uuid: string, number: number, wfaction: any}, ...params: Array<AsAble>) {
		let parami = 0;
		let actionAbove = cc.lastVariableAction;
		// TODO actionAbove = cc.lastVariableAction
		//
		const action = new Action(this.name, this.id);
		if(controlFlowData) {
			const {uuid, number} = controlFlowData;
			action.parameters.set("WFControlFlowMode", number);
			action.parameters.set("GroupingIdentifier", uuid);
			params = []; // Params should be ignored if we are a second or third... in control flow
		}else  if(this._data.BlockInfo) {
			// this action has a block.
			const {uuid, number} = cc.pushControlFlow(this); // Add the controlflow
			action.parameters.set("WFControlFlowMode", number);
			action.parameters.set("GroupingIdentifier", uuid);
		}
		params.forEach(param => {
			if(param.special === "InputArg") {
				if(!canBeAction(param)) {throw new Error("To use a param as an inputarg, it must be an action")}
				actionAbove = param.asAction(cc);
				return;
			}
			if(param.special === "ControlFlowMode") {
				throw new Error("ControlFlowMode is no longer implemented. Please use the Flow and End actions instead.");
			}
			if(param.special === "Arglist") {
				if(!canBeRawKeyedDictionary(param)) {throw new Error("To use a param as an arglist, it must be a raw keyed dictionary")}
				const dictionary = param.asRawKeyedDictionary();
				Object.keys(dictionary).forEach(key => {
					const value = dictionary[key];
					const shortKey = genShortName(key);
					const paramtype = this._parameters.find(param => param.shortName === shortKey);
					if(!paramtype) {throw new Error(`This action does not have a parameter named ${shortKey}.`);}
					if(action.parameters.has(paramtype.internalName)) {throw new Error(`The parameter named ${shortKey} was already set.`);}
					action.parameters.set(paramtype.internalName, paramtype.build(cc, value));
				});
				return;
			}

			let paramtype;
			while(!paramtype) {
				paramtype = this._parameters[parami];

				if(!paramtype) {throw new Error(`There are no more arguments for this action.`);}
				if(typeof paramtype === "string") {throw new Error(`This action is not supported yet. Reason: ${paramtype}`);}
				if(action.parameters.has(paramtype.internalName)) {paramtype = undefined; parami++; continue;} // Param [name] was already set
				if(!paramtype.shouldEnable(action)) {paramtype = undefined; parami++; continue;} // If the required resources are not set, skip

				parami++;
			}

			action.parameters.set(paramtype.internalName, paramtype.build(cc, param));
		});
		if(actionAbove && this.requiresInput && actionAbove.uuid !== cc.lastVariableAction.uuid) {
			cc.add(getVariable(new MagicVariable(actionAbove)));
		}
		// TODO if(actionAbove) cc.add(getVariableAction(actionAbove))
		cc.add(action);
		return action;
	}
}

// let textAction = new WFAction(actionList[0]["is.workflow.actions.gettext"], "is.workflow.acitons.gettext");
// console.log(
// 	textAction.build(new IdentifierParse("Hellothere"))
// );

const actionsByName: {[key: string]: WFAction} = {};
const actionsByID: {[key: string]: WFAction} = {};

Object.keys(actionList).forEach(key => {
	// console.log(key);
	const value = actionList[key];
	const action = new WFAction(value, key);

	if(actionsByName[action.shortName]) {
		console.warn(`WARNING, ${action.shortName} (${action.internalName}) is already defined`);
		return;
	}

	actionsByID[key] = action;
	actionsByName[action.shortName] = action;
	// actions[action.name.toLowerCase().split` `.join``] = action;
});

export function genReadme() {
	const totalActions = Object.keys(actionsByID).length;
	const completedActions = Object.values(actionsByID).filter(action=>action.isComplete).length;
	const missingTypes = Object.keys(_debugMissingTypes).length;
	const missingTypeList = Object.keys(_debugMissingTypes)
		.map(a=>[a, _debugMissingTypes[a]])
		// @ts-ignore
		.sort(([a, c], [b, d]) => c - d)
		.map(([a, b])=>`${b}: ${a}`);
	const typeList = Object.values(_debugTypes)
		.sort((a, b) => a.count - b.count)
		.map(({paramClass, count, missing})=>`- [${missing?" ":"x"}] ${missing?"":"Complete - "}${count}: ${paramClass}`);
	return `[![Banner image](image0.jpg)](https://pfgithub.github.io/shortcutslang/)

Banner by ROP#2788 on the [routinehub.co](https://routinehub.co) discord server.



# Shortcutslang

[Getting Started Guide](https://pfgithub.github.io/shortcutslang/gettingstarted.html)

[Syntax Documentation](https://pfgithub.github.io/shortcutslang/syntax.html)

[Try Shortcutslang in a web browser](https://pfgithub.github.io/shortcutslang/tryit.html)

${completedActions}/${totalActions} builtin actions supported

## All Actions:

${Object.values(actionsByID).sort((a, b)=>a.name>b.name?1:(a.name<b.name?-1:0)).map(action => `- [${action.name}](actions/${action.shortName})${action.isComplete ? "" : " (Incomplete)"}`).join(`\n`)}

## Parameter Types:

\\# actions used in: parameter type

${typeList.join(`\n`)}

`;
}
/*
console.log("All Actions:", Object.keys(actionsByID).length);
console.log("Complete   :", Object.values(actionsByID).filter(action=>action.isComplete).length);
console.log("Missing    :", Object.keys(_debugMissingTypes).length);
console.log("List:", Object.keys(_debugMissingTypes)
	.map(a=>[a, _debugMissingTypes[a]])
	.sort((a, b) => a[1] - b[1])
	.map(([a, b])=>`${a}: ${b}`)
);
*/
export function getActionFromID(id: string): WFAction{
	if(!actionsByID[id]) {throw new Error(`There is no action with the id \`${id}\``);}
	return actionsByID[id];
}
export function getActionFromName(name: string): WFAction{
	name = name.toLowerCase();
	if(!actionsByName[name]) {throw new Error(`There is no action with the short name \`${name}\``);}
	return actionsByName[name];
}

// let getValueForKeyAction = new WFAction(actionList[0]["is.workflow.actions.getvalueforkey"], "is.workflow.acitons.getvalueforkey");
// console.log(
// 	getValueForKeyAction.build(
// 		new IdentifierParse("Value"),
// 		new IdentifierParse("myvalue")
// 	).build()
// );
