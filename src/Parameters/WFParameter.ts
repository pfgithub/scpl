import { Action, ParameterType } from "../OutputData";
import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";
import {
	WFResource,
	WFWorkflowHiddenResource,
	resourceTypes
} from "../WFResource";

import { genShortName } from "../ActionData";

import { ShortcutsBaseParameterSpec } from "../Data/ActionDataTypes/ShortcutsParameterSpec";
import { ShortcutsResourceSpec } from "../Data/ActionDataTypes/ShortcutsResourceSpec";

export abstract class WFParameter {
	_data: ShortcutsBaseParameterSpec;
	requiredResources: Array<WFResource>;
	allowsVariables: boolean;
	name: string;
	internalName: string;
	shortName: string;
	readableName: string;
	typeName: string;
	docs: string;
	isComplete: boolean;
	constructor(
		data: ShortcutsBaseParameterSpec,
		typeName: string = "WFParameter",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted"
	) {
		this._data = data;
		this.isComplete = true;
		const requiredResources = this._data.RequiredResources || [];
		this.allowsVariables =
			(this._data.DisallowedVariableTypes || []).join(``) !==
			"AskVariable";
		const name = this._data.Label;
		this.internalName = this._data.Key;
		this.shortName = genShortName(name, this.internalName);
		this.readableName = genShortName(name, this.internalName, true);
		if (!this.readableName.startsWith("WF")) {
			this.readableName =
				this.readableName.charAt(0).toLowerCase() +
				this.readableName.slice(1);
		}
		this.name = name || this.shortName;
		this.typeName = typeName;
		this.docs = docs;

		this.requiredResources = requiredResources.map(
			(resource: ShortcutsResourceSpec) => {
				if (typeof resource === "string") {
					return;
				}
				const type = resource.WFResourceClass;
				const resourceClass = resourceTypes[type];
				if (!resourceClass) {
					throw new Error(`${type} is not a defined resource class.`);
				}
				// @ts-ignore
				return new resourceClass(resource);
			}
		);
		if (this._data.Hidden) {
			this.requiredResources.push(
				new WFWorkflowHiddenResource({
					WFResourceClass: "WFWorkflowHiddenResource"
				})
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
	genDocsDefaultValue(value: string | number | true | string[]) {
		return `\`\`\`
		${Array.isArray(value) ? JSON.stringify(value) : value}
		\`\`\``;
	}
	genDocsAutocompletePlaceholder() {
		return `:${
			(<{ DefaultValue: string }>(<unknown>this._data)).DefaultValue
				? `${this.genDocsArgName()}:"${
						(<{ DefaultValue: string }>(<unknown>this._data))
							.DefaultValue
				  }"`
				: `${this.genDocsArgName()}`
		}`;
	}
	genDocs() {
		let docs = `### ${this.readableName}: ${this.typeName} [(Docs)](${this.docs})\n`;
		if ((<{ Placeholder: string }>(<unknown>this._data)).Placeholder) {
			docs += `**Placeholder**: ${this.genDocsDefaultValue(
				(<{ Placeholder: string }>(<unknown>this._data)).Placeholder
			)}
`;
		}
		if ((<{ DefaultValue: string }>(<unknown>this._data)).DefaultValue) {
			docs += `**Default Value**: ${this.genDocsDefaultValue(
				(<{ DefaultValue: string }>(<unknown>this._data)).DefaultValue
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
	abstract build(
		cc: ConvertingContext,
		parse: AsAble,
		action: Action
	): ParameterType;
}
