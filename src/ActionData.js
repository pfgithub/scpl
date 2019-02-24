const {Text, Action} = require("./OutputData");

const actionList = require("./WFActions.json")[0];

const types = {};

types.WFParameter = class {
	constructor(data) {
		this._data = data;
		this.defaultValue = this._data.DefaultValue;
		this.requiredResources = this._data.RequiredResources;
		this.allowsVariables = (this._data.DisallowedVariableTypes || []).join`` === "AskVariable";
	}
	get internalName() {
		return this._data.Key;
	}
};

types.WFEnumerationParameter = class extends types.WFParameter {
// A list of options
// Input: anything with .asText()
	constructor(data) {
		super(data);
		this.options = this._data.Items;
	}
	build(cc, parse) {
		// asVariable may require additional actions to be inserted above this one.
		// for example, if ^("hello") (v:comparison) "hi"
		if(parse.asVariable) {
			const res = parse.asVariable(cc);
			if(this.allowsVariables) {
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
		super(data);
	}
	build(cc, parse) {
		if(parse.asVariable) {
			const res = parse.asVariable(cc);
			if(this._allowsVariables) {
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
		super(data);
	}
	build(cc, parse) {
		const list = parse.asList(cc);
		return list;
	}
};

types.WFArrayParameter = class extends types.WFContentArrayParameter {};

types.WFStepperParameter = class extends types.WFParameter {
	constructor(data) {
		super(data);
	}
	build(cc, parse) {
		if(parse.asVariable) {
			const res = parse.asVariable(cc);
			if(this._allowsVariables) {
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
		super(data);
	}
	build(cc, parse) {
		const variable = parse.asVariable(cc);
		return variable;
	}
};

types.WFTextInputParameter = class extends types.WFParameter {
	constructor(data) {
		super(data);
	}
	build(cc, parse) {
		if(this.allowsVariables) {
			return parse.asString();
		}
		return parse.asText(cc);
	}
};

types.WFSwitchParameter = class extends types.WFParameter {
	constructor(data) {
		super(data);
	}
	build(cc, parse) {
		return parse.asBoolean(cc);
	}
};
types.WFVariableFieldParameter = class extends types.WFParameter {
	constructor(data) {
		super(data);
	}
	build(cc, parse) {
		// -> string I assume
		const varname = parse.asStringVariable();
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
	}
	get actionOutputType() {
		// TODO !!! used for the default output type in variables
		return this._data.Output.Types[0];
	}
	get name() {
		return this._data.Name || "undefinedaction";
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
### usage
\`${this.name} <arguments...>\`
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
			const getVariableAction = new Action("get variable", "is.workflow.actions.getvariable", {});
			getVariableAction.parameters.set("WFVariable", actionAbove.variable);
			cc.add(getVariableAction);
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
	if(action.name === undefined) {console.log("UNDEFINED||", value, key);}

	actionsByID[key] = action;
	actionsByName[action.name.toLowerCase().split` `.join``] = action;
	// actions[action.name.toLowerCase().split` `.join``] = action;
});


console.log("All Actions:", Object.keys(actionsByID).length);
console.log("Complete   :", Object.values(actionsByID).filter(action=>action.isComplete).length);
console.log("Missing    :", Object.keys(_debugMissingTypes).length);
console.log("List:", Object.keys(_debugMissingTypes)
	.map(a=>[a, _debugMissingTypes[a]])
	.sort((a, b) => a[1] - b[1])
	.map(([a, b])=>`${a}: ${b}`)
);

module.exports = {actionsByID, actionsByName};

// let getValueForKeyAction = new WFAction(actionList[0]["is.workflow.actions.getvalueforkey"], "is.workflow.acitons.getvalueforkey");
// console.log(
// 	getValueForKeyAction.build(
// 		new IdentifierParse("Value"),
// 		new IdentifierParse("myvalue")
// 	).build()
// );
