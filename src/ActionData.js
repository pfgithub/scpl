const uuidv4 = require("uuid/v4");

const {Text, Action} = require("./OutputData");
const {getVariable} = require("./HelpfulActions");

const actionList = require("./Data/Actions")[0];

const types = {};

function genShortName(longName, internalName) {
	// lower case
	let shortName = (longName || internalName || "nameless").toLowerCase();
	// remove special characters
	shortName = shortName.replace(/[^A-Za-z0-9]/g, "");
	return shortName;
}

types.WFResource = class {
	constructor(data) {
		this._data = data;
	}
	shouldEnable(action) {
		return true;
	}
	genDocs() {
		return `Always enabled`;
	}
};

types.WFDeviceAttributesResource = class extends types.WFResource {
	shouldEnable(action) {
		return true;
	}
	genDocs() {
		return `Device attributes match \`${JSON.stringify(this._data.WFDeviceAttributes)}\` This action is always enabled inside Shortcutslang.`;
	}
};
types.WFWorkflowTypeResource = class extends types.WFResource {
	shouldEnable(action) {
		return true;
	}
	genDocs() {
		return `Workflow type is \`${this._data.WFWorkflowType}\`. This action is always enabled inside Shortcutslang.`;
	}
};
types.WFWorkflowHiddenResource = class extends types.WFResource {
	shouldEnable(action) {
		return false;
	}
	genDocs() {
		return `This action is always **disabled** inside Shortcutslang.`;
	}
};

/*
Example
{
	"WFParameterKey": "WFHTTPBodyType",
	"WFParameterValue": "Form",
	"WFResourceClass": "WFParameterRelationResource"
},
{
	"WFParameterKey": "WFHTTPMethod",
	"WFParameterRelation": "!=",
	"WFParameterValues": [
		"GET"
	],
	"WFResourceClass": "WFParameterRelationResource"
}

!= is an array
>= is a single value number
<= is a single value number
> is a single value number
< is a single value number
= is a single value
?? is... uuh... two question marks? just return true I guess
 */

types.WFParameterRelationResource = class extends types.WFResource {
	constructor(data) {
		super(data);
		this.relation = this._data.WFParameterRelation || "=";
		this.argInternalName = this._data.WFParameterKey;
		this.argValue = this._data.WFParameterValue;
		this.argValues = this._data.WFParameterValues || [this.argValue];
		if(!({"=": 1, "!=": 1, ">=": 1, "<=": 1, ">": 1, "<": 1, "=": 1, "??": 1})[this.relation]) {
			throw new Error(`RelationResource relation type ${this.relation} is not implemented.`);
		}
	}
	genDocs() {
		return `argument ${this.argInternalName} ${this.relation} \`${this.argValues.join`\` or \``}\``;
	}
	shouldEnable(action) {
		const currentValue = action.parameters.get(this.argInternalName);
		const currentValueNum = +currentValue;
		const isNum = !isNaN(currentValueNum);
		switch(this.relation) {
			case "=":
				return this.argValues.some(val => val === currentValue);
			case "!=":
				return this.argValues.indexOf(this.currentValue) === -1;
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

types.WFParameter = class {
	constructor(data, typeName) {
		this._data = data;
		this.defaultValue = this._data.DefaultValue;
		this.requiredResources = this._data.RequiredResources || [];
		this.allowsVariables = (this._data.DisallowedVariableTypes || []).join`` !== "AskVariable";
		this.name = this._data.Label;
		this.internalName = this._data.Key;
		this.shortName = genShortName(this.name, this.internalName);
		this.name = this.name || this.shortName;
		this.typeName = typeName;

		this.requiredResources = this.requiredResources.map(resource => {
			const type = resource.WFResourceClass;
			const resourceClass = types[type];
			if(!resourceClass) {throw new Error(`${resourceClass} is not a defined resource class.`);}
			return new resourceClass(resource);
		});
		if(this._data.Hidden) {this.requiredResources.push(new types.WFWorkflowHiddenResource({Hidden: true}));}
	}
	shouldEnable(action) {
		return this.requiredResources.every(resource => resource.shouldEnable(action));
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
		docs += `${this.requiredResources.map(resource => `**Only enabled if**: ${resource.genDocs()}`).join`\n`}`;
		return docs;
	}
};

types.WFEnumerationParameter = class extends types.WFParameter {
// A list of options
// Input: anything with .asText()
	constructor(data, name) {
		super(data, name || "Enumeration");
		this.options = this._data.Items;
	}
	genDocsAutocompletePlaceholder() {
		return `|${this.options.map(o=>`"${o}"`).join`,`}${this.allowsVariables?`,variable`:``}|`;
	}
	genDocsArgName() {
		const strInfo = this.options.join` | `;
		return this.allowsVariables ? `[string <${strInfo}>]` : `[string <${strInfo}>|variable]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string ${this.allowsVariables ? `
or variable`: ""}
containing one of the options:

- \`${this.options.join`\`\n- \``}\``;
	}
	build(cc, parse) {
		// asVariable may require additional actions to be inserted above this one.
		// for example, if ^("hello") (v:comparison) "hi"
		if(parse.asVariable) {
			const res = parse.asVariable(cc);
			if(!this.allowsVariables) {
				throw new Error("This enumeration field does not allow variables.");
			}
			return res;
		}else if(parse.asString) {
			const res = parse.asString(); // asString returns a string like ""
			if(this.options.indexOf(res) > -1) {return res;}
			throw new Error(`This enumeration field can only be one of the following: ${this.options.join`, `}`);
		}else{
			throw new Error("This enumeration field only accepts strings and variables.");
		}
	}
};

types.WFStorageServicePickerParameter = class extends types.WFEnumerationParameter {
	constructor(data, name) {
		super(data, name || "Storage Service Picker");
		this.options = ["iCloud Drive", "Dropbox"];
	}
};

types.WFWorkflowPickerParameter = class extends types.WFParameter {
	constructor(data, name = "Shortcut Picker") {
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
	build(cc, parse) {
		// asVariable may require additional actions to be inserted above this one.
		// for example, if ^("hello") (v:comparison) "hi"
		if(parse.asVariable) {
			const res = parse.asVariable(cc);
			return res;
		}else if(parse.asString) {
			const res = parse.asString(); // asString returns a string like ""
			return res;
		}
		throw new Error("This shortcut field only accepts strings and variables.");
	}
};
types.WFNumberFieldParameter = class extends types.WFParameter {
	constructor(data) {
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
	build(cc, parse) {
		if(parse.asVariable) {
			const res = parse.asVariable(cc);
			if(!this.allowsVariables) {
				throw new Error("This number field does not allow variables.");
			}
			return res;
		}else if(parse.asString) {
			const res = parse.asString(); // asString returns a string like "" <-- that's a string
			const num = +res;
			if(isNaN(num)) {throw new Error(`This number field only accepts numbers. The value \`${res}\` could not be converted to a number`);}
			return num;
		}
		throw new Error("This number field only accepts strings or numbers");
	}
};

types.WFContentArrayParameter = class extends types.WFParameter {
	constructor(data) {
		super(data, "List");
	}
	genDocsArgName() {
		return `[list]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a list.`;
	}
	build(cc, parse) {
		const list = parse.asList(cc);
		return list;
	}
};

types.WFArrayParameter = class extends types.WFContentArrayParameter {};

types.WFStepperParameter = class extends types.WFParameter {
	constructor(data) {
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
	build(cc, parse) {
		if(parse.asVariable) {
			const res = parse.asVariable(cc);
			if(!this.allowsVariables) {
				throw new Error("This number field does not allow variables.");
			}
			return res;
		}else if(parse.asString) {
			const res = parse.asString(); // asString returns a string like "" <-- that's a string
			const num = +res;
			if(isNaN(num)) {throw new Error(`This number field only accepts integers. The value \`${res}\` could not be converted to a number`);}
			if(!Number.isInteger(num)) {throw new Error(`This number field only accepts integers. The number \`${num}\` is not an integer.`);}
			return num;
		}
		throw new Error("This number field only accepts strings or variables");
	}
};

types.WFSliderParameter = class extends types.WFParameter {
	constructor(data) {
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
	build(cc, parse) {
		if(parse.asVariable) {
			const res = parse.asVariable(cc);
			if(!this.allowsVariables) {
				throw new Error("This slider field does not allow variables.");
			}
			return res;
		}else if(parse.asString) {
			const res = parse.asString(); // asString returns a string like "" <-- that's a string
			const num = +res;
			if(isNaN(num)) {throw new Error(`This slider field only accepts numbers. The value \`${res}\` could not be converted to a number`);}
			if(num > 1 || num < 0) {throw new Error(`This slider field only accepts numbers from 0 to 1. The number \`${num}\` is not in this range..`);}
			return num;
		}
		throw new Error("This number field only accepts strings or variables");
	}
};

types.WFVariablePickerParameter = class extends types.WFParameter {
	constructor(data) {
		super(data, "Variable Picker");
	}
	genDocsArgName() {
		return `[variable]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a variable.`;
	}
	build(cc, parse) {
		const variable = parse.asVariable(cc);
		return variable;
	}
};

types.WFTextInputParameter = class extends types.WFParameter {
	constructor(data, name) {
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
	build(cc, parse) {
		if(!this.allowsVariables) {
			return parse.asString();
		}
		return parse.asText(cc);
	}
};

types.WFDateFieldParameter = class extends types.WFTextInputParameter {
	constructor(data, name) {
		super(data, name || "Date");
	}
};

types.WFEmailAddressFieldParameter = class extends types.WFParameter {
	constructor(data) {
		super(data, "Text Input");
	}
	genDocsArgName() {
		return `[string|string array|variable]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string or string array or variable of email addresses.`;
	}
	build(cc, parse) {
		if(parse.asVariable) {
			return parse.asVariable(cc);
		}
		if(parse.asArray) {
			return parse.asArray();
		}
		if(parse.asString) {
			return [parse.asString()];
		}
	}
};

types.WFDictionaryParameter = class extends types.WFParameter {
	constructor(data) {
		super(data, "Dictionary");
	}
	genDocsArgName() {
		return `[dictionary]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a dictionary.`;
	}
	build(cc, parse) {
		return parse.asDictionary(cc);
	}
};

types.WFSwitchParameter = class extends types.WFParameter {
	constructor(data) {
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
	build(cc, parse) {
		if(parse.asVariable) {
			if(!this.allowsVariables) {throw new Error("This boolean field does not accept variables");}
			return parse.asVariable(cc);
		}else if(parse.asBoolean) {
			return parse.asBoolean();
		}
		throw new Error("This boolean field only accepts booleans or variables");
	}
};
types.WFExpandingParameter = class extends types.WFParameter {
	constructor(data) {
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
	build(cc, parse) {
		if(parse.asBoolean) {
			return parse.asBoolean();
		}
		throw new Error("This expanding field only accepts booleans");
	}
};
types.WFVariableFieldParameter = class extends types.WFParameter {
	constructor(data) {
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
	build(cc, parse) {
		// -> string I assume
		const varname = parse.asString ? parse.asString() : parse.asStringVariable();
		cc.vardata[varname] = {action: cc.lastVariableAction};
		return varname;
	}
};
// WFNumberFieldParameter: Number || Variable

const _debugMissingTypes = {};
const _debugTypes = {};

class WFAction {
	constructor(data, id) {
		this._data = data;
		this.id = id;
		this.isComplete = true;
		this._parameters = [];
		if(this._data.Parameters) {
			this._parameters = this._data.Parameters.map(param => {
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
${this.shortName} a{${this.genDocsParams().map(({argName, argType}) => `${argName}=${argType}`).join` `}}${this._data.BlockInfo ? this._data.BlockInfo.Example : ""}
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

${this._parameters.map(param => (typeof param === "string") ? `#### ${param}` : param.genDocs()).join`

---

`}

---

### source json

\`\`\`json
${JSON.stringify(this._data, null, "\t")}
\`\`\`
`;
		return docs;
	}
	build(cc, controlFlowData, ...params) {
		let parami = 0;
		let actionAbove = cc.lastVariableAction;
		// TODO actionAbove = cc.lastVariableAction
		//
		const action = new Action(this.name, this.id, this);
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
				actionAbove = param.asAction(cc);
				return;
			}
			if(param.special === "ControlFlowMode") {
				throw new Error("ControlFlowMode is no longer implemented. Please use the Flow and End actions instead.");
			}
			if(param.special === "Arglist") {
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
			cc.add(getVariable(actionAbove.variable));
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

const actionsByName = {};
const actionsByID = {};

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

function genReadme() {
	const totalActions = Object.keys(actionsByID).length;
	const completedActions = Object.values(actionsByID).filter(action=>action.isComplete).length;
	const missingTypes = Object.keys(_debugMissingTypes).length;
	const missingTypeList = Object.keys(_debugMissingTypes)
		.map(a=>[a, _debugMissingTypes[a]])
		.sort((a, b) => a[1] - b[1])
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

${Object.values(actionsByID).sort((a, b)=>a.name>b.name?1:(a.name<b.name?-1:0)).map(action => `- [${action.name}](actions/${action.shortName})${action.isComplete ? "" : " (Incomplete)"}`).join`\n`}

## Parameter Types:

\\# actions used in: parameter type

${typeList.join`\n`}

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

module.exports = {actionsByID: id => {
	if(!actionsByID[id]) {throw new Error(`There is no action with the id \`${id}\``);}
	return actionsByID[id];
}, actionsByName: name => {
	name = name.toLowerCase();
	if(!actionsByName[name]) {throw new Error(`There is no action with the short name \`${name}\``);}
	return actionsByName[name];
}, allActions: Object.values(actionsByID),
genReadme};

// let getValueForKeyAction = new WFAction(actionList[0]["is.workflow.actions.getvalueforkey"], "is.workflow.acitons.getvalueforkey");
// console.log(
// 	getValueForKeyAction.build(
// 		new IdentifierParse("Value"),
// 		new IdentifierParse("myvalue")
// 	).build()
// );
