const {Text, Action} = require("./OutputData");
const {getVariable} = require("./HelpfulActions");

const actionList = require("./WFActions.json")[0];

const types = {};

function genShortName(longName, internalName) {
	// lower case
	let shortName = (longName || internalName || "nameless").toLowerCase();
	// remove special characters
	shortName = shortName.replace(/[^A-Za-z0-9]/g, "");
	return shortName;
}

types.WFParameter = class {
	constructor(data, typeName) {
		this._data = data;
		this.defaultValue = this._data.DefaultValue;
		this.requiredResources = this._data.RequiredResources;
		this.allowsVariables = (this._data.DisallowedVariableTypes || []).join`` !== "AskVariable";
		this.name = this._data.Label;
		this.internalName = this._data.Key;
		this.shortName = genShortName(this.name, this.internalName);
		this.name = this.name || this.shortName;
		this.typeName = typeName;
	}
	genDocs() {
		let docs = `### ${this.typeName}: ${this.name} / ${this.shortName} (internally \`${this.internalName}\`)\n`;
		if(this._data.Placeholder) {docs += `**Placeholder**: ${this._data.Placeholder}\n`;}
		if(this._data.DefaultValue) {docs += `**Default Value**: ${this._data.DefaultValue}\n`;}
		if(this.allowsVariables) {docs += `**Allows Variables**: ${this.allowsVariables}\n`;}
		return docs;
	}
};

types.WFEnumerationParameter = class extends types.WFParameter {
// A list of options
// Input: anything with .asText()
	constructor(data) {
		super(data, "Enumeration");
		this.options = this._data.Items;
	}
	genDocsArgName() {
		const strInfo = this.options.join` | `;
		return this.allowsVariables ? `[string <\${strInfo}>]` : `[string <\${strInfo}>|variable]`;
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
		throw new Error("This number field only accepts strings or numbers");
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
	constructor(data) {
		super(data, "Text Input");
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

types.WFSwitchParameter = class extends types.WFParameter {
	constructor(data) {
		super(data, "Switch");
	}
	genDocsArgName() {
		return this.allowsVariables ? `[string boolean|variable]` : `[string boolean]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string with either true or false${this.allowsVariables ? `
or a variable.`: ""}`;
	}
	build(cc, parse) {
		if(parse.asVariable) {
			if(!this.allowsVariables) {throw new Error("This boolean field does not accept variables");}
			return parse.asVariable(cc);
		}else if(parse.asString) {
			const string = parse.asString();
			if(string !== "true" && string !== "false") {throw new Error("This boolean field must be either true or false");}
			return string === "true";
		}
		throw new Error("This boolean field only accepts strings or variables");
	}
};
types.WFExpandingParameter = class extends types.WFParameter {
	constructor(data) {
		super(data, "Expand Arrow");
		this.allowsVariables = undefined;
	}
	genDocsArgName() {
		return `[string boolean]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string with either true or false for if this
parameter is expanded or not.`;
	}
	build(cc, parse) {
		if(parse.asString) {
			const string = parse.asString();
			if(string !== "true" && string !== "false") {throw new Error("This expanding field must be either true or false");}
			return string === "true";
		}
		throw new Error("This expanding field only accepts strings");
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
		cc.vardata[varname] = cc.lastVariableAction;
		return varname;
	}
};
// WFNumberFieldParameter: Number || Variable

const _debugMissingTypes = {};

class WFAction {
	constructor(data, id) {
		this._data = data;
		this.id = id;
		this.isComplete = true;
		this._parameters = [];
		if(this._data.Parameters) {
			this._parameters = this._data.Parameters.map(param => {
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
	genDocs() {
		const docs = `
## ${this.name} / ${this.shortName} (internally \`${this.internalName}\`)
${this.isComplete ? "" : `
> This action is not yet complete. Some arguments may be missing.
`}
${this._data.RequiredResources ? `
> This action requires that Shortcuts has permission to use ${this._data.RequiredResources}.
` : ""}
### usage
\`${this.shortName} ${this._parameters.map(param => `${param.shortName}=${typeof param === "string" ? `[???]` : param.genDocsArgName()}`).join` `}\`

### arguments
${this._parameters.map(param => (typeof param === "string") ? `${param}` : param.genDocs()).join`

---

`}
`;
		return docs;
	}
	build(cc, ...params) {
		let parami = 0;
		let actionAbove = cc.lastVariableAction;
		// TODO actionAbove = cc.lastVariableAction
		//
		const action = new Action(this.name, this.id, this);
		params.forEach(param => {
			if(param.special === "InputArg") {
				param.asAction(cc);
				actionAbove = cc.lastVariableAction;
				return;
			}
			// if(param instanceof InputArgParse) { // TODO (avoid circular dependency)
			// 	// this param should be ignored and instead used as an inputarg
			// 	return;
			// }
			// if(param instanceof ParamListParse) {
			// 	// this param contains a mapping of paramnames = paramvalues instead of being ordered.
			// 	// ignore and merge at the end.
			// 	return;
			// }

			let paramtype;
			while(!paramtype) {
				paramtype = this._parameters[parami];

				if(typeof paramtype === "string") {throw new Error(`This action is not supported yet. Reason: ${paramtype}`);}

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
}, allActions: Object.values(actionsByID)};

// let getValueForKeyAction = new WFAction(actionList[0]["is.workflow.actions.getvalueforkey"], "is.workflow.acitons.getvalueforkey");
// console.log(
// 	getValueForKeyAction.build(
// 		new IdentifierParse("Value"),
// 		new IdentifierParse("myvalue")
// 	).build()
// );
