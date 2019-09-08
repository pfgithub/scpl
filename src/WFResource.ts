import { Action } from "./OutputData";

import {
	ShortcutsBaseResourceSpec,
	ShortcutsDeviceAttributesResourceSpec,
	ShortcutsWorkflowTypeResourceSpec,
	ShortcutsParameterRelationResourceSpec
} from "./Data/ActionDataTypes/ShortcutsResourceSpec";

export class WFResource {
	_data: ShortcutsBaseResourceSpec;
	constructor(data: ShortcutsBaseResourceSpec) {
		this._data = data;
	}
	shouldEnable(_action: Action) {
		return true;
	}
	genDocs() {
		return `Always enabled`;
	}
}

const resourceTypes: { [key: string]: typeof WFResource } = {};

class WFDeviceAttributesResource extends WFResource {
	_data: ShortcutsDeviceAttributesResourceSpec;
	constructor(data: ShortcutsDeviceAttributesResourceSpec) {
		super(data);
		this._data = data;
	}
	shouldEnable(_action: Action) {
		return true;
	}
	genDocs() {
		return `Device attributes match \`${JSON.stringify(
			this._data.WFDeviceAttributes
		)}\` This action is always enabled inside Shortcutslang.`;
	}
}
resourceTypes.WFDeviceAttributesResource = WFDeviceAttributesResource;

class WFWorkflowTypeResource extends WFResource {
	_data: ShortcutsWorkflowTypeResourceSpec;
	constructor(data: ShortcutsWorkflowTypeResourceSpec) {
		super(data);
		this._data = data;
	}
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
	_data: ShortcutsParameterRelationResourceSpec;
	relation: string;
	argInternalName: string;
	argValue: string | number | boolean | object | undefined;
	argValues: (string | number | boolean | object | undefined)[];
	constructor(data: ShortcutsParameterRelationResourceSpec) {
		super(data);
		this._data = data;
		this.relation = this._data.WFParameterRelation || "==";
		this.argInternalName = this._data.WFParameterKey;
		this.argValue =
			"WFParameterValue" in this._data
				? this._data.WFParameterValue
				: undefined;
		this.argValues =
			"WFParameterValues" in this._data
				? this._data.WFParameterValues
				: [this.argValue];
		const relations: { [key: string]: number } = {
			"==": 1,
			"!=": 1,
			">=": 1,
			"<=": 1,
			">": 1,
			"<": 1,
			"??": 1
		};
		if (!relations[this.relation]) {
			throw new Error(
				`RelationResource relation type ${this.relation} is not implemented.`
			);
		}
	}
	genDocs() {
		return `argument ${this.argInternalName} ${
			this.relation
		} \`${this.argValues.join(`\` or \``)}\``;
	}
	shouldEnable(action: Action) {
		const currentValue = action.parameters.get(this.argInternalName);
		const currentValueNum = +currentValue;
		const isNum = !isNaN(currentValueNum);
		switch (this.relation) {
			case "==":
				return this.argValues.some(
					(val: string | number | boolean | object | undefined) =>
						val === currentValue
				);
			case "!=":
				if (
					typeof currentValue === "string" ||
					typeof currentValue === "number" ||
					typeof currentValue === "boolean"
				) {
					return this.argValues.indexOf(currentValue) === -1;
				}
				return false;
			case ">=":
				if (!isNum) {
					return false;
				}
				return currentValueNum >= <number>this.argValue;
			case "<=":
				if (!isNum) {
					return false;
				}
				return currentValueNum <= <number>this.argValue;
			case ">":
				if (!isNum) {
					return false;
				}
				return currentValueNum > <number>this.argValue;
			case "<":
				if (!isNum) {
					return false;
				}
				return currentValueNum < <number>this.argValue;
			case "??":
				return action.parameters.has(this.argInternalName);
			default:
				throw new Error(
					`RelationResource relation type ${this.relation} is not implemented.`
				);
		}
	}
}
resourceTypes.WFParameterRelationResource = WFParameterRelationResource;

export { resourceTypes };
