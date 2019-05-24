import { Action, ParameterType } from "../OutputData";
import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";
import {
	WFResource,
	WFWorkflowHiddenResource,
	resourceTypes
} from "../WFResource";

import { genShortName } from "../ActionData";

export class WFParameter {
	_data: any;
	defaultValue: string;
	requiredResources: Array<WFResource>;
	allowsVariables: boolean;
	name: string;
	internalName: string;
	shortName: string;
	readableName: string;
	typeName: string;
	docs: string;
	constructor(data: any, typeName: string, docs: string) {
		this._data = data;
		this.defaultValue = this._data.DefaultValue;
		this.requiredResources = this._data.RequiredResources || [];
		this.allowsVariables =
			(this._data.DisallowedVariableTypes || []).join`` !== "AskVariable";
		this.name = this._data.Label;
		this.internalName = this._data.Key;
		this.shortName = genShortName(this.name, this.internalName);
		this.readableName = genShortName(this.name, this.internalName, true);
		if (!this.readableName.startsWith("wf")) {
			this.readableName =
				this.readableName.charAt(0).toLowerCase() +
				this.readableName.slice(1);
		}
		this.name = this.name || this.shortName;
		this.typeName = typeName;
		this.docs = docs;

		this.requiredResources = this.requiredResources.map((resource: any) => {
			const type = resource.WFResourceClass;
			const resourceClass = resourceTypes[type];
			if (!resourceClass) {
				throw new Error(`${type} is not a defined resource class.`);
			}
			// @ts-ignore
			return new resourceClass(resource);
		});
		if (this._data.Hidden) {
			this.requiredResources.push(
				new WFWorkflowHiddenResource({ Hidden: true })
			);
		}
	}
	shouldEnable(action: Action) {
		return this.requiredResources.every((resource: WFResource) =>
			resource.shouldEnable(action)
		);
	}
	genDocsArgName() {
		return "[???]";
	}
	genDocsDefaultValue(value: string) {
		return `\`\`\`
		${value}
		\`\`\``;
	}
	genDocsAutocompletePlaceholder() {
		return `:${
			this._data.DefaultValue
				? `${this.genDocsArgName()}:"${this._data.DefaultValue}"`
				: `${this.genDocsArgName()}`
		}`;
	}
	genDocs() {
		let docs = `### ${this.readableName}: ${this.typeName} [(Docs)](${
			this.docs
		})\n`;
		if (this._data.Placeholder) {
			docs += `**Placeholder**: ${this.genDocsDefaultValue(
				this._data.Placeholder
			)}
`;
		}
		if (this._data.DefaultValue) {
			docs += `**Default Value**: ${this.genDocsDefaultValue(
				this._data.DefaultValue
			)}
`;
		}
		if (this.allowsVariables) {
			docs += `**Allows Variables**: ${this.allowsVariables}\n\n`;
		}
		docs += `${this.requiredResources
			.map(resource => `**Only enabled if**: ${resource.genDocs()}`)
			.join("\n\n")}`;
		return docs;
	}
	build(cc: ConvertingContext, parse: AsAble): ParameterType {
		throw parse.error(
			cc,
			"This parameter was implemented wrong in ScPL. build() should be overridden by subclasses of WFParameter."
		);
	}
}
