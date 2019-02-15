const {Text, Action} = require("./OutputData");
const {CharsParse, IdentifierParse, InputArgParse, ActionParse, ParamListParse} = require("./ParserData");

const actionList = require("./WFActions.json")[0];

const types = {};

types.WFParameter = class {
	constructor(data) {
		this._data = data;
		this.defaultValue = this._data.DefaultValue;
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
	build(parse) {
		// TODO DisallowedVariableTypes
		// WARN Might not accept text types, may be variable||string only.
		//      If that is the case, then get parse.asText || parse.asVariable (with error check not ||)
		if(parse.asVariable) {
			const res = parse.asVariable();
			return res; // ¿ ?
		}else if(parse.asText) {
			const res = parse.asText();
			if(res.hasAttachments) {throw new Error("enumeration types cannot have strings with attachments");}
			const resString = res.rawString;
			if(this.options.indexOf(resString) > -1) {return resString;}
			throw new Error(`This enumeration field can only be one of the following: ${this.options.join`, `}`);
		}else{
			throw new Error("enumeration types must be either a text or an attachment");
		}
	}
};

types.WFTextInputParameter = class extends types.WFParameter {
	constructor(data) {
		super(data);
	}
	build(parse) {
		return parse.asText();
	}
};

types.WFSwitchParameter = class extends types.WFParameter {
	constructor(data) {
		super(data);
	}
	build(parse) {
		return parse.asBoolean();
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
	build(...params) {
		let parami = 0;
		const action = new Action(this.name, this.id);
		params.forEach(param => {
			if(param instanceof InputArgParse) {
				// this param should be ignored and instead used as an inputarg
				return;
			}
			if(param instanceof ParamListParse) {
				// this param contains a mapping of paramnames = paramvalues instead of being ordered.
				// ignore and merge at the end.
				return;
			}

			const paramtype = this._parameters[parami];
			action.parameters.set(paramtype.internalName, paramtype.build(param));
			parami++;
		});
		return action;
	}
}

// let textAction = new WFAction(actionList[0]["is.workflow.actions.gettext"], "is.workflow.acitons.gettext");
// console.log(
// 	textAction.build(new IdentifierParse("Hellothere"))
// );

const actions = {};

Object.keys(actionList).forEach(key => {
	console.log(key);
	const value = actionList[key];
	const action = new WFAction(value, key);
	if(action.name === undefined) {console.log("UNDEFINED||", value, key);}

	actions[action.name.toLowerCase().split` `.join``] = action;
});
console.log("All Actions:", Object.keys(actions).length);
console.log("Complete   :", Object.values(actions).filter(action=>action.isComplete).length);
console.log("Missing    :", Object.keys(_debugMissingTypes).length);
console.log("List:", Object.keys(_debugMissingTypes)
	.map(a=>[a, _debugMissingTypes[a]])
	.sort((a, b) => a[1] - b[1])
	.map(([a, b])=>`${a}: ${b}`)
);

// let getValueForKeyAction = new WFAction(actionList[0]["is.workflow.actions.getvalueforkey"], "is.workflow.acitons.getvalueforkey");
// console.log(
// 	getValueForKeyAction.build(
// 		new IdentifierParse("Value"),
// 		new IdentifierParse("myvalue")
// 	).build()
// );
