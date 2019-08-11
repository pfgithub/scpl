import { Action, MagicVariable } from "./OutputData";
import { getVariable } from "./HelpfulActions";
import { ConvertingContext } from "./Converter";
import { AsAble } from "./ParserData";

import { ArgParser } from "./ArgParser";

import actionList from "./Data/Actions";

import { ShortcutsActionSpec } from "./Data/ActionDataTypes/ShortcutsActionSpec";
import {
	ShortcutsParameterSpec,
	ShortcutsEnumerationParameterSpec,
	ShortcutsDynamicEnumerationParameterSpec,
	ShortcutsCustomDateFormatParameterSpec,
	ShortcutsCountryFieldParameterSpec,
	ShortcutsDateFieldParameterSpec,
	ShortcutsLocationFieldParameterSpec
} from "./Data/ActionDataTypes/ShortcutsParameterSpec";

export function genShortName(
	longName: string | undefined,
	internalName?: string | undefined,
	allowUppercase?: boolean
) {
	let shortName = longName || internalName || "nameless";
	// lower case
	if (!allowUppercase) {
		shortName = (longName || internalName || "nameless").toLowerCase();
	}
	// remove special characters
	shortName = shortName.replace(/[^A-Za-z0-9]/g, "");
	return shortName;
}

import { WFParameter } from "./Parameters/WFParameter";
export { WFParameter } from "./Parameters/WFParameter";

type InstanceOfParameterType = typeof WFParameter;

const types: {
	[key: string]: InstanceOfParameterType;
} = {};
types.WFParameter = WFParameter;

import { WFEnumerationParameter } from "./Parameters/WFEnumerationParameter";
types.WFEnumerationParameter = WFEnumerationParameter;

import { WFDynamicEnumerationParameter } from "./Parameters/WFDynamicEnumerationParameter";
types.WFDynamicEnumerationParameter = WFDynamicEnumerationParameter;

import { WFAppPickerParameter } from "./Parameters/WFAppPickerParameter";
types.WFAppPickerParameter = WFAppPickerParameter;

import { WFNumberFieldParameter } from "./Parameters/WFNumberFieldParameter";
types.WFNumberFieldParameter = WFNumberFieldParameter;

import { WFStepperParameter } from "./Parameters/WFStepperParameter";
types.WFStepperParameter = WFStepperParameter;

import { WFSliderParameter } from "./Parameters/WFSliderParameter";
types.WFSliderParameter = WFSliderParameter;

import { WFSpeakTextRateParameter } from "./Parameters/WFSpeakTextRateParameter";
types.WFSpeakTextRateParameter = WFSpeakTextRateParameter;

import { WFContentArrayParameter } from "./Parameters/WFContentArrayParameter";
types.WFContentArrayParameter = WFContentArrayParameter;

types.WFArrayParameter = class extends WFContentArrayParameter {}; // not sure what the difference is

import { WFVariablePickerParameter } from "./Parameters/WFVariablePickerParameter";
types.WFVariablePickerParameter = WFVariablePickerParameter;

import { WFTextInputParameter } from "./Parameters/WFTextInputParameter";
types.WFTextInputParameter = WFTextInputParameter;

class WFCustomDateFormatParameter extends WFTextInputParameter {
	constructor(
		data: ShortcutsCustomDateFormatParameterSpec,
		name: string = "Date Format String",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#text-field"
	) {
		super(data, name, docs);
	}
}
types.WFCustomDateFormatParameter = WFCustomDateFormatParameter;

class WFCountryFieldParameter extends WFTextInputParameter {
	constructor(
		data: ShortcutsCountryFieldParameterSpec,
		name: string = "Country",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#text-field"
	) {
		super(data, name, docs);
	}
}
types.WFCountryFieldParameter = WFCountryFieldParameter;

class WFDateFieldParameter extends WFTextInputParameter {
	constructor(
		data: ShortcutsDateFieldParameterSpec,
		name = "Date",
		docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#text-field"
	) {
		super(data, name, docs);
	}
}
types.WFDateFieldParameter = WFDateFieldParameter;

class WFLocationFieldParameter extends WFTextInputParameter {
	constructor(
		data: ShortcutsLocationFieldParameterSpec,
		name = "Location",
		docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#text-field"
	) {
		super(data, name, docs);
	}
}
types.WFLocationFieldParameter = WFLocationFieldParameter;

import { WFEmailAddressFieldParameter } from "./Parameters/WFEmailAddressFieldParameter";
types.WFEmailAddressFieldParameter = WFEmailAddressFieldParameter;

import { WFDictionaryParameter } from "./Parameters/WFDictionaryParameter";
types.WFDictionaryParameter = WFDictionaryParameter;

import { WFSwitchParameter } from "./Parameters/WFSwitchParameter";
types.WFSwitchParameter = WFSwitchParameter;

import { WFExpandingParameter } from "./Parameters/WFExpandingParameter";
types.WFExpandingParameter = WFExpandingParameter;

import { WFFilterParameter } from "./Parameters/WFFilterParameter";
types.WFFilterParameter = WFFilterParameter;

import { WFTimeOffsetParameter } from "./Parameters/WFTimeOffsetParameter";
types.WFTimeOffsetParameter = WFTimeOffsetParameter;

import { WFVariableFieldParameter } from "./Parameters/WFVariableFieldParameter";
types.WFVariableFieldParameter = WFVariableFieldParameter;

function addStaticEnum(
	internalName: string,
	visibleName: string,
	options: string[]
) {
	types[internalName] = class extends WFEnumerationParameter {
		constructor(
			data: ShortcutsEnumerationParameterSpec,
			name: string = visibleName,
			docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field"
		) {
			super(data, name, docs);
			this.options = options;
			this.allowsVariables = true;
		}
	};
}
function addDynamicEnum(internalName: string, visibleName: string) {
	types[internalName] = class extends WFDynamicEnumerationParameter {
		constructor(
			data: ShortcutsDynamicEnumerationParameterSpec,
			name: string = visibleName,
			docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields"
		) {
			super(data, name, docs);
		}
	};
}
addDynamicEnum("WFWorkflowPickerParameter", "Shortcut Picker");
addDynamicEnum("WFCalendarPickerParameter", "Calendar Picker");
addDynamicEnum("WFWunderlistListPickerParameter", "Wunderlist List Picker");
addDynamicEnum("WFTrelloBoardPickerParameter", "Trello Board Picker");
addDynamicEnum("WFTrelloListPickerParameter", "Trello List Picker");
addDynamicEnum("WFTodoistProjectPickerParameter", "Todoist Project Picker");
addDynamicEnum("WFPlaylistPickerParameter", "Music Playlist Picker");
addDynamicEnum("WFEvernoteNotebookPickerParameter", "Evernote Notebook Picker");
addDynamicEnum("WFIntentAppPickerParameter", "Intent App Picker");
addDynamicEnum("WFDictateTextLanguagePickerParameter", "Language Picker");
addDynamicEnum("WFLightroomPresetPickerParameter", "Lightroom Preset Picker");
addDynamicEnum("WFPhotoAlbumPickerParameter", "Photo Album Picker");
addDynamicEnum(
	"WFiTunesStoreCountryPickerParameter",
	"iTunes Store Country Picker"
);
addDynamicEnum("WFEmailAccountPickerParameter", "Email Account Picker");
// addDynamicEnum("WFAppPickerParameter", "App Identifier"); // open app uses app ids like com.apple.appname, don't add it for now
addDynamicEnum("WFAccountPickerParameter", "Account Picker");
addDynamicEnum("WFSlackChannelPickerParameter", "Slack Channel Picker");
addDynamicEnum("WFTumblrBlogPickerParameter", "Tumblr Blog Picker");
addDynamicEnum(
	"WFSpeakTextLanguagePickerParameter",
	"Speak Text Language Picker"
);
addDynamicEnum("WFSpeakTextVoicePickerParameter", "Speak Text Voice Picker");
addDynamicEnum("WFAlarmPickerParameter", "Alarm Picker");
addDynamicEnum(
	"WFTranslateTextLanguagePickerParameter",
	"Translate Language Picker"
);
addDynamicEnum("WFIFTTTTriggerNameParameter", "IFTTT Trigger Name Picker"); // RIP ifttt support, you will be missed.
// addDynamicEnum("aaaa", "aaaa Picker");
addStaticEnum("WFStorageServicePickerParameter", "Storage Service Picker", [
	"iCloud Drive",
	"Dropbox"
]);
addStaticEnum("WFImageConvertFormatPickerParameter", "Image Format Picker", [
	"JPEG",
	"PNG",
	"TIFF",
	"GIF",
	"JPEG-2000",
	"BMP",
	"PDF",
	"Match Input"
]);
addStaticEnum("WFUnitTypePickerParameter", "Unit Picker", [
	"Acceleration",
	"Angle",
	"Area",
	"Concentration Mass",
	"Dispersion",
	"Duration",
	"Eletric Charge",
	"Electric Potential Difference",
	"Electric Resistance",
	"Energy",
	"Frequency",
	"Fuel Efficiency",
	"Illuminance",
	"Length",
	"Mass",
	"Power",
	"Pressure",
	"Speed",
	"Temperature",
	"Volume"
]);
addDynamicEnum("WFUnitTypePickerParameter", "Unit Type Picker");
// it's different for every unit type...
// don't worry, :filter is coming to save you
addStaticEnum("WFNetworkPickerParameter", "Network Type Picker", [
	"Wi-Fi",
	"Cellular"
]);
addStaticEnum("WFArchiveFormatParameter", "Archive Format", [
	".zip",
	".tar.gz",
	".tar.bz2",
	".tar.xz",
	".tar",
	".gz",
	".cpio",
	".iso"
]);
addStaticEnum("WFMapsAppPickerParameter", "Maps App", [
	"Maps",
	"Google Maps",
	"Waze"
]);
// TODO WFDynamicTagFieldParameter gives a list of options that you can check
// AlarmFrequencyPicker is a static tag, accepts an array of values which must be one of [Sunday,Monday,...]. Check what the output looks like.
// WFEvernoteTagsTagFieldParameter is a dynamic tag
// phone number is like email but accepts phone numbers
// WFContactHandleField: Must be Ask When Run or Variable

const _debugMissingTypes: { [key: string]: number } = {};
const _debugTypes: {
	[key: string]: { paramClass: string; missing: boolean; count: number };
} = {};

export class WFAction {
	_data: ShortcutsActionSpec;
	id: string;
	isComplete: boolean;
	_parameters: Array<WFParameter | string>;
	internalName: string;
	shortName: string;
	name: string;
	readableName: string;

	constructor(data: ShortcutsActionSpec, id: string) {
		//
		this._data = data;
		this.id = id;

		this.isComplete = true;
		this._parameters = [];
		this.internalName = this.id;
		let name = this._data.Name;
		if (data.AppInfo) {
			name += ` (${data.AppInfo})`;
		}
		this.shortName = genShortName(name, this.internalName);
		this.readableName = genShortName(name, this.internalName, true);
		this.name = name || this.shortName;
		const parameterNames: { [key: string]: true | undefined } = {};
		if (this._data.Parameters) {
			this._parameters = this._data.Parameters.map(
				(param: ShortcutsParameterSpec) => {
					_debugTypes[param.Class] = {
						paramClass: param.Class,
						missing: !types[param.Class],
						count: _debugTypes[param.Class]
							? _debugTypes[param.Class].count + 1
							: 1
					};
					// if(param.Class === "WFExpandingParameter") {
					// 	return;
					// }
					if (types[param.Class]) {
						const type: InstanceOfParameterType =
							types[param.Class];
						const paramVal: WFParameter = new type(param); // false. it has a consistent call structure.
						if (parameterNames[paramVal.shortName]) {
							// console.warn(`IN: ${this.internalName}: Two parameters named ${paramVal.shortName} exist.`);
							paramVal.shortName += "2";
							paramVal.readableName += "2";
						}
						parameterNames[paramVal.shortName] = true;
						if (!paramVal.isComplete) {
							this.isComplete = false;
						}
						return paramVal;
					}
					this.isComplete = false;
					_debugMissingTypes[param.Class] =
						_debugMissingTypes[param.Class] !== undefined
							? _debugMissingTypes[param.Class] + 1
							: 1;
					return `${param.Class}`;
				}
			);
		}
	}
	get inputPassthrough() {
		return this._data.InputPassthrough;
	}
	get hasVariable() {
		// If this action has a magic variable
		return !this.inputPassthrough;
	}
	get requiresInput() {
		return true;
	}
	genDocsParams() {
		return this._parameters.map(param => {
			if (typeof param === "string") {
				return { argType: `NotImplemented` };
			}
			return {
				argName: param.readableName,
				argType: param.genDocsArgName(),
				argAutocompletePlaceholder: param.genDocsAutocompletePlaceholder()
			};
		});
	}
	genDocsAutocompleteUsage() {
		const docsParams = this.genDocsParams();
		let autocompleteUsage = `${this.readableName} ${docsParams
			.map(
				(arg, i) =>
					`${arg.argName}=\${${i + 1}${
						arg.argAutocompletePlaceholder
					}}`
			)
			.join(" ")}`.trim();
		if (autocompleteUsage.replace(/${.+?}/g, "valuehere").length > 120) {
			autocompleteUsage = `${this.readableName} (\n${docsParams
				.map(
					(arg, i) =>
						`\t${arg.argName}=\${${i + 1}${
							arg.argAutocompletePlaceholder
						}}`
				)
				.join(",\n")}\n)`.trim();
		}
		if (docsParams.length === 1) {
			autocompleteUsage = `${this.readableName} \${1${docsParams[0].argAutocompletePlaceholder}}`;
		}
		// 		let autocompleteUsage = `${this.readableName} (
		// ${docsParams
		// 	.map(
		// 		(arg, i) =>
		// 			`\t${arg.argName}=\${${i + 1}${arg.argAutocompletePlaceholder}}`
		// 	)
		// 	.join(",\n")}
		// )${this._data.BlockInfo ? this._data.BlockInfo.Completion : ""}
		// `;
		// 		if (docsParams.length === 1) {
		// 			autocompleteUsage = `${this.readableName} ${docsParams
		// 				.map(
		// 					(arg, i) => `\${${i + 1}${arg.argAutocompletePlaceholder}}`
		// 				)
		// 				.join(" ")}${
		// 				this._data.BlockInfo ? this._data.BlockInfo.Completion : ""
		// 			}`;
		// 		}
		// 		if (autocompleteUsage.length < 80) {
		// 			autocompleteUsage = `${this.readableName} ${docsParams
		// 				.map(
		// 					(arg, i) =>
		// 						`${arg.argName}=\${${i + 1}${
		// 							arg.argAutocompletePlaceholder
		// 						}}`
		// 				)
		// 				.join(" ")}${
		// 				this._data.BlockInfo ? this._data.BlockInfo.Completion : ""
		// 			}
		// `;
		// 		}
		return (
			autocompleteUsage +
			(this._data.BlockInfo ? this._data.BlockInfo.Completion : "")
		);
	}
	genDocsUsage() {
		const docsParams = this.genDocsParams();
		let paramUsage;

		if (docsParams.length === 1) {
			paramUsage = docsParams[0].argType;
		} else {
			paramUsage = docsParams
				.map(({ argName, argType }) => `${argName}=${argType}`)
				.join(" ");
		}
		return `\`\`\`
${this.readableName} ${paramUsage}${
			this._data.BlockInfo ? this._data.BlockInfo.Example : ""
		}
\`\`\``;
	}
	genDocs() {
		const docs = `
## ${this.name} / ${this.readableName} (internally \`${this.internalName}\`)
${
	this.isComplete
		? ""
		: `
> This action is not yet complete. Some arguments may be missing.
`
}${
			this._data.RequiredResources
				? `
> This action requires that Shortcuts has permission to use ${this._data.RequiredResources}.
`
				: ""
		}${
			this._data.BlockInfo
				? `
> This action has a block. Make sure to end it with an end. (More info in usage below)
`
				: ""
		}
${
	this._data.Description
		? `
## description${
				this._data.Description.DescriptionSummary
					? `

### summary

${this._data.Description.DescriptionSummary}
`
					: ""
		  }${
				this._data.Description.DescriptionNote
					? `

### note

${this._data.Description.DescriptionNote}
`
					: ""
		  }${
				this._data.Description.DescriptionInput
					? `

### input

${this._data.Description.DescriptionInput}
`
					: ""
		  }${
				this._data.Description.DescriptionResult
					? `

### output

${this._data.Description.DescriptionResult}`
					: ""
		  }`
		: ""
}

### usage
${this.genDocsUsage()}

### arguments

---

${this._parameters.map(param =>
	typeof param === "string" ? `#### ${param}` : param.genDocs()
).join(`

---

`)}

---

### source json (for developers)

\`\`\`json
${JSON.stringify(this._data, null, "\t")}
\`\`\`
`;
		return docs;
	}
	getParameters(): { [key: string]: WFParameter } {
		const res: { [key: string]: WFParameter } = {};
		this._parameters.forEach(param => {
			if (typeof param === "string") {
				return;
			}
			res[param.shortName] = param;
		});
		return res;
	}
	getParameterOrder() {
		return this._parameters;
	}
	build(
		cc: ConvertingContext,
		actionPosition: AsAble,
		controlFlowData?: {
			uuid: string;
			number: number;
			wfaction: WFAction;
		},
		...params: Array<AsAble>
	): Action {
		let actionAbove = cc.lastVariableAction;
		// TODO actionAbove = cc.lastVariableAction
		//
		const action = new Action(
			actionPosition.start,
			actionPosition.end,
			this.name,
			this.id
		);
		if (controlFlowData) {
			const { uuid, number } = controlFlowData;
			action.parameters.set("WFControlFlowMode", number);
			action.parameters.set("GroupingIdentifier", uuid);
			params = []; // Params should be ignored if we are a second or third... in control flow
		} else if (this._data.BlockInfo) {
			// this action has a block.
			const [{ uuid, number }] = cc.pushControlFlow(this); // Add the controlflow
			action.parameters.set("WFControlFlowMode", number);
			action.parameters.set("GroupingIdentifier", uuid);
		}
		let vi = 0;
		ArgParser<string | WFParameter>(
			this._parameters.map(param => ({
				name:
					typeof param === "string"
						? `undefined${vi++}`
						: param.shortName,
				data: param
			})),
			(
				name: { name: string; data: string | WFParameter },
				param: AsAble
			) => {
				if (typeof name.data === "string") {
					throw param.error(
						cc,
						"Data is string. This should have been caught earlier. This should never happen."
					);
				}
				if (param.canBeRaw(cc)) {
					return action.parameters.set(
						name.data.internalName,
						param.asRaw(cc)
					);
				}
				action.parameters.set(
					name.data.internalName,
					name.data.build(cc, param)
				);
			},
			(param: AsAble) => {
				if (!param.canBeAction(cc)) {
					throw param.error(
						cc,
						"InputArg fields only accept actions and variables."
					);
				}
				actionAbove = param.asAction(cc);
				return;
			},
			(name: { data: string | WFParameter }, param: AsAble) => {
				if (typeof name.data === "string") {
					throw param.error(
						cc,
						`This field is not supported yet. If you need this field, submit an issue or pull request on github requesting it. Reason: ${name.data}`
					);
				}
				if (action.parameters.has(name.data.internalName)) {
					return false;
				}
				return name.data.shouldEnable(action);
			},
			{ cc: cc, args: params },
			{
				noArgumentExistsHandler: (key, value, paramList) => {
					if (!value.canBeRaw(cc)) {
						throw value.error(
							cc,
							`No argument exists with the name ${value}. Valud are ${paramList.join(
								","
							)}`
						);
					}
					action.parameters.set(key, value.asRaw(cc));
				}
			}
		);
		if (
			actionAbove &&
			this.requiresInput &&
			actionAbove !== cc.lastVariableAction
		) {
			cc.add(
				getVariable(
					{
						start: <[number, number]>actionAbove.start,
						end: <[number, number]>actionAbove.end
					},
					new MagicVariable(actionAbove)
				)
			);
		}
		// TODO if(actionAbove) cc.add(getVariableAction(actionAbove))
		cc.add(action);
		return action;
	}
}

class RawAction {
	id: string;
	constructor(id: string) {
		this.id = id;
	}
	build(
		cc: ConvertingContext,
		actionPosition: AsAble,
		_controlFlowData?: {
			uuid: string;
			number: number;
			wfaction: WFAction;
		},
		...params: Array<AsAble>
	): Action {
		let actionAbove = cc.lastVariableAction;
		// TODO actionAbove = cc.lastVariableAction
		//
		const action = new Action(
			actionPosition.start,
			actionPosition.end,
			this.id,
			this.id
		);
		const vi = 0;
		ArgParser(
			"any",
			(name: { name: string; data: string }, param: AsAble) => {
				if (!param.canBeRaw(cc)) {
					throw param.error(
						cc,
						"Raw arguments must have raw parameters"
					);
				}
				action.parameters.set(name.data, param.asRaw(cc));
			},
			(param: AsAble) => {
				if (!param.canBeAction(cc)) {
					throw param.error(
						cc,
						"InputArg fields only accept actions and variables."
					);
				}
				actionAbove = param.asAction(cc);
				return;
			},
			(name: { data: string | WFParameter }, param: AsAble) => {
				if (typeof name.data === "string") {
					throw param.error(
						cc,
						`This field is not supported yet. If you need this field, submit an issue or pull request on github requesting it. Reason: ${name.data}`
					);
				}
				if (action.parameters.has(name.data.internalName)) {
					return false;
				}
				return name.data.shouldEnable(action);
			},
			{ cc: cc, args: params }
		);
		if (actionAbove && actionAbove !== cc.lastVariableAction) {
			cc.add(
				getVariable(
					{
						start: <[number, number]>actionAbove.start,
						end: <[number, number]>actionAbove.end
					},
					new MagicVariable(actionAbove)
				)
			);
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

const actionsByName: { [key: string]: WFAction } = {};
const actionsByID: { [key: string]: WFAction } = {};

Object.keys(actionList).forEach(key => {
	// console.log(key);
	const value = actionList[key];
	const action = new WFAction(value, key);

	if (actionsByName[action.shortName]) {
		//eslint-disable-next-line no-console
		console.warn(
			`WARNING, ${action.shortName} (${action.internalName}) is already defined`
		);
		return;
	}

	actionsByID[key] = action;
	actionsByName[action.shortName] = action;
	// actions[action.name.toLowerCase().split` `.join``] = action;
});

export function genReadme() {
	const totalActions = Object.keys(actionsByID).length;
	const completedActions = Object.values(actionsByID).filter(
		action => action.isComplete
	).length;
	const typeList = Object.values(_debugTypes)
		.sort((a, b) => a.count - b.count)
		.map(
			({ paramClass, count, missing }) =>
				`- [${missing ? " " : "x"}] ${
					missing ? "" : "Complete - "
				}${count}: ${paramClass}`
		);
	return `# ScPL

[Getting Started Guide](https://pfgithub.github.io/shortcutslang/gettingstarted.html)

[Try Shortcutslang in a web browser](https://editor.scpl.dev)

${completedActions}/${totalActions} builtin actions supported

## All Actions:

${Object.values(actionsByID)
	.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
	.map(
		action =>
			`- [${action.name} (\`${action.readableName}\`)](actions/${
				action.shortName
			})${action.isComplete ? "" : " (Incomplete)"}`
	)
	.join(`\n`)}

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
export function getActionFromID(id: string): WFAction | undefined {
	if (!actionsByID[id]) {
		return undefined;
	}
	return actionsByID[id];
}
export function getActionFromName(
	name: string
): WFAction | RawAction | undefined {
	if (name.indexOf(".") > -1) {
		return new RawAction(name);
	}
	name = name.toLowerCase();
	if (!actionsByName[name]) {
		return undefined;
	}
	return actionsByName[name];
}
export const allActions = Object.values(actionsByID);
export const WFTypes = types;

// let getValueForKeyAction = new WFAction(actionList[0]["is.workflow.actions.getvalueforkey"], "is.workflow.acitons.getvalueforkey");
// console.log(
// 	getValueForKeyAction.build(
// 		new IdentifierParse("Value"),
// 		new IdentifierParse("myvalue")
// 	).build()
// );
