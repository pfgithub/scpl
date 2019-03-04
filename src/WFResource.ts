import {Action} from "./OutputData";

export class WFResource {
	_data: any
	constructor(data: any) {
		this._data = data;
	}
	shouldEnable(_action: Action) {
		return true;
	}
	genDocs() {
		return `Always enabled`;
	}
}

const resourceTypes: {[key: string]: any} = {}; // I can't figure out what to put the type as here

class WFDeviceAttributesResource extends WFResource {
	shouldEnable(_action: Action) {
		return true;
	}
	genDocs() {
		return `Device attributes match \`${JSON.stringify(this._data.WFDeviceAttributes)}\` This action is always enabled inside Shortcutslang.`;
	}
}
resourceTypes.WFDeviceAttributesResource = WFDeviceAttributesResource;

class WFWorkflowTypeResource extends WFResource {
	shouldEnable(_action: Action) {
		return true;
	}
	genDocs() {
		return `Workflow type is \`${this._data.WFWorkflowType}\`. This action is always enabled inside Shortcutslang.`;
	}
}
resourceTypes.WFWorkflowTypeResource = WFWorkflowTypeResource;

export class WFWorkflowHiddenResource extends WFResource {
	shouldEnable(_action: Action) {
		return false;
	}
	genDocs() {
		return `This action is always **disabled** inside Shortcutslang.`;
	}
}

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
}
resourceTypes.WFParameterRelationResource = WFParameterRelationResource;

export {resourceTypes};