
import {Action, MagicVariable, ParameterType} from "./OutputData";
import {getVariable} from "./HelpfulActions";
import { ConvertingContext } from "./Converter";
import {AsAble} from "./ParserData";
import {WFResource, WFWorkflowHiddenResource, resourceTypes} from "./WFResource";
import {appNames} from "./Data/AppNames";

import actionList from "./Data/Actions";

function genShortName(longName: string, internalName?: string) {
	// lower case
	let shortName = (longName || internalName || "nameless").toLowerCase();
	// remove special characters
	shortName = shortName.replace(/[^A-Za-z0-9]/g, "");
	return shortName;
}



class WFParameter {
	_data: any
	defaultValue: string
	requiredResources: Array<WFResource>
	allowsVariables: boolean
	name: string
	internalName: string
	shortName: string
	typeName: string
	docs: string
	constructor(data: any, typeName: string, docs: string) {
		this._data = data;
		this.defaultValue = this._data.DefaultValue;
		this.requiredResources = this._data.RequiredResources || [];
		this.allowsVariables = (this._data.DisallowedVariableTypes || []).join`` !== "AskVariable";
		this.name = this._data.Label;
		this.internalName = this._data.Key;
		this.shortName = genShortName(this.name, this.internalName);
		this.name = this.name || this.shortName;
		this.typeName = typeName;
		this.docs = docs;

		this.requiredResources = this.requiredResources.map((resource: any) => {
			const type = resource.WFResourceClass;
			const resourceClass = resourceTypes[type];
			if(!resourceClass) {throw new Error(`${type} is not a defined resource class.`);}
			// @ts-ignore
			return new resourceClass(resource);
		});
		if(this._data.Hidden) {this.requiredResources.push(new WFWorkflowHiddenResource({Hidden: true}));}
	}
	shouldEnable(action: Action) {
		return this.requiredResources.every((resource: WFResource) => resource.shouldEnable(action));
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
		return `:${this._data.DefaultValue ? `${this.genDocsArgName()}:"${this._data.DefaultValue}"` : `${this.genDocsArgName()}`}`;
	}
	genDocs() {
		let docs = `### ${this.shortName}: ${this.typeName} [(Docs)](${this.docs})\n`;
		if(this._data.Placeholder) {docs += `**Placeholder**: ${this.genDocsDefaultValue(this._data.Placeholder)}
`;}
		if(this._data.DefaultValue) {docs += `**Default Value**: ${this.genDocsDefaultValue(this._data.DefaultValue)}
`;}
		if(this.allowsVariables) {docs += `**Allows Variables**: ${this.allowsVariables}\n\n`;}
		docs += `${this.requiredResources.map(resource => `**Only enabled if**: ${resource.genDocs()}`).join("\n\n")}`;
		return docs;
	}
	build(cc: ConvertingContext, parse: AsAble): ParameterType {
		throw parse.error(cc, "This parameter was implemented wrong in ScPL. build() should be overridden by subclasses of WFParameter.");
	}
}

const types: {[key: string]: any } = {};
types.WFParameter = WFParameter;

class WFEnumerationParameter extends WFParameter {
	options: Array<string>
	constructor(data: any, name: string = "Enumeration", docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field") {
		super(data, name, docs);
		this.options = this._data.Items;
	}
	genDocsAutocompletePlaceholder() {
		return `|${this.options.map(o=>`"${o}"`).join(",")}${this.allowsVariables?`,variable`:``}|`;
	}
	genDocsArgName() {
		const strInfo = this.options.join("\" | \"");
		return this.allowsVariables ? `("${strInfo}")` : `("${strInfo}" | variable)`;
	}
	genDocsDefaultValue(value: string) {
		return `\`"${value}"\``;
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
		if(parse.canBeVariable(cc)) {
			const res = parse.asVariable(cc);
			if(!this.allowsVariables) {
				throw parse.error(cc, "This enum field does not accept variables.");
			}
			return res;
		}else if(parse.canBeString(cc)) {
			const res = parse.asString(cc); // asString returns a string like ""
			if(this.options.indexOf(res) > -1) {return res;}
			throw parse.error(cc, `This enumeration field must be one of the following: \`${this.options.join("`, `")}\``);
		}else{
			throw parse.error(cc, "Enumeration fields only accept strings and variables.");
		}
	}
}
types.WFEnumerationParameter = WFEnumerationParameter;

class WFDynamicEnumerationParameter extends WFParameter {
	constructor(data: any, name = "Picker", docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields") {
		super(data, name, docs);
	}
	genDocsArgName() {
		return `("string" | variable)]`;
	}
	genDocs() {
		return `${super.genDocs()}

		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. `;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(parse.canBeVariable(cc)) {
			const res = parse.asVariable(cc);
			return res;
		}else if(parse.canBeString(cc)) {
			const res = parse.asString(cc);
			return res;
		}
		throw parse.error(cc, `${this.name} fields can only contain strings and variables.`);
	}
}
types.WFDynamicEnumerationParameter = WFDynamicEnumerationParameter;


function addStaticEnum(internalName: string, visibleName: string, options: string[]) {
	types[internalName] = class extends WFEnumerationParameter {
		constructor(data: any, name: string = visibleName, docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field") {
			super(data, name, docs);
			this.options = options;
			this.allowsVariables = true;
		}
	};
}
function addDynamicEnum(internalName: string, visibleName: string) {
	types[internalName] = class extends WFDynamicEnumerationParameter {
		constructor(data: any, name: string = visibleName, docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields") {
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
addDynamicEnum("WFiTunesStoreCountryPickerParameter", "iTunes Store Country Picker");
addDynamicEnum("WFEmailAccountPickerParameter", "Email Account Picker");
// addDynamicEnum("WFAppPickerParameter", "App Identifier"); // open app uses app ids like com.apple.appname, don't add it for now
addDynamicEnum("WFAccountPickerParameter", "Account Picker");
addDynamicEnum("WFSlackChannelPickerParameter", "Slack Channel Picker");
addDynamicEnum("WFTumblrBlogPickerParameter", "Tumblr Blog Picker");
addDynamicEnum("WFSpeakTextLanguagePickerParameter", "Speak Text Language Picker");
addDynamicEnum("WFSpeakTextVoicePickerParameter", "Speak Text Voice Picker");
addDynamicEnum("WFAlarmPickerParameter", "Alarm Picker");
addDynamicEnum("WFTranslateTextLanguagePickerParameter", "Translate Language Picker");
addDynamicEnum("WFIFTTTTriggerNameParameter", "IFTTT Trigger Name Picker"); // RIP ifttt support, you will be missed.
// addDynamicEnum("aaaa", "aaaa Picker");
addStaticEnum("WFStorageServicePickerParameter", "Storage Service Picker", ["iCloud Drive", "Dropbox"]);
addStaticEnum("WFImageConvertFormatPickerParameter", "Image Format Picker", ["JPEG", "PNG", "TIFF", "GIF", "JPEG-2000", "BMP", "PDF", "Match Input"]);
addStaticEnum("WFUnitTypePickerParameter", "Unit Picker", ["Acceleration", "Angle", "Area", "Concentration Mass", "Dispersion", "Duration", "Eletric Charge", "Electric Potential Difference",
	"Electric Resistance", "Energy", "Frequency", "Fuel Efficiency", "Illuminance", "Length", "Mass", "Power", "Pressure", "Speed", "Temperature", "Volume"]);
addDynamicEnum("WFUnitTypePickerParameter", "Unit Type Picker"); // it's different for every unit type...
addStaticEnum("WFNetworkPickerParameter", "Network Type Picker", ["Wi-Fi", "Cellular"]);
addStaticEnum("WFArchiveFormatParameter", "Archive Format", [".zip", ".tar.gz", ".tar.bz2", ".tar.xz", ".tar", ".gz", ".cpio", ".iso"]);
addStaticEnum("WFMapsAppPickerParameter", "Maps App", ["Maps", "Google Maps", "Waze"]);
// TODO WFDynamicTagFieldParameter gives a list of options that you can check
// AlarmFrequencyPicker is a static tag, accepts an array of values which must be one of [Sunday,Monday,...]. Check what the output looks like.
// WFEvernoteTagsTagFieldParameter is a dynamic tag
// phone number is like email but accepts phone numbers
// WFContactHandleField: Must be Ask When Run or Variable

class WFAppPickerParameter extends WFParameter {
	constructor(data: any, name = "App", docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields") {
		super(data, name, docs);
	}
	genDocsArgName() {
		return `("app name" | "com.identifier.for.app")]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string containing a supported app or an app identifier.
You can use [this shortcut](https://www.icloud.com/shortcuts/7aff3fcdd0ca4bbc9c0d1b70e2825ed8) to get an app identifier for an unsupported app.
Supported apps are:
${Object.keys(appNames).map(appName => `- \`${appName}\` (${appNames[appName].name})`).join("\n")}
- Any other app by entering its id from [this shortcut](https://www.icloud.com/shortcuts/7aff3fcdd0ca4bbc9c0d1b70e2825ed8)
		`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(parse.canBeString(cc)) {
			const res = parse.asString(cc);
			const appName = res.toLowerCase().replace(/[^a-z0-9]/g, "");
			if(appNames[appName]) {
				return appNames[appName].id;
			}
			if(res.indexOf(".") === -1) {
				throw parse.error(cc, `The app ${res} is not supported by default. Enter its app id which you can get from this shortcut: https://www.icloud.com/shortcuts/7aff3fcdd0ca4bbc9c0d1b70e2825ed8 (More info on the documentation page for this action)`);
			}
			return res;
		}
		throw parse.error(cc, `${this.name} fields can only contain strings with an app name or identifier.`);
	}
}
types.WFAppPickerParameter = WFAppPickerParameter;

class WFNumberFieldParameter extends WFParameter {
	constructor(data: any, name: string = "Number", docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#number-field") {
		super(data, name, docs);
	}
	genDocsArgName(): string {
		return this.allowsVariables ? `number` : `(number | variable)`;
	}
	genDocs() {
		return `${super.genDocs()}

		Accepts a number ${this.allowsVariables ? `
		or variable`: ""}
		with a number.`;
	}
	genDocsDefaultValue(value: string) {
		return `\`${value}\``;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(parse.canBeVariable(cc)) {
			const res = parse.asVariable(cc);
			if(!this.allowsVariables) {
				throw parse.error(cc, "This number field does not acccept variables.");
			}
			return res;
		}else if(parse.canBeNumber(cc)) {
			const num = parse.asNumber(cc); // asString returns a string like "" <-- that's a string
			return num;
		}
		throw parse.error(cc, "Number fields only accept numbers and variables.");
	}
}
types.WFNumberFieldParameter = WFNumberFieldParameter;

class WFStepperParameter extends WFNumberFieldParameter {
	constructor(data: any, name: string = "Stepper Number", docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields") {
		super(data, name, docs);
	}
	build(cc: ConvertingContext, parse: AsAble) {
		const val = super.build(cc, parse);
		if(typeof val === "number") {
			if(!Number.isInteger(val) || val < 0) {throw parse.error(cc, "Stepper fields only accept positive integer numbers.");}
		}
		return val;
	}
}
types.WFStepperParameter = WFStepperParameter;

class WFSliderParameter extends WFNumberFieldParameter {
	constructor(data: any, name: string = "Slider Number", docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#slider-number-fields") {
		super(data, name, docs);
	}
	build(cc: ConvertingContext, parse: AsAble) {
		const val = super.build(cc, parse);
		if(typeof val === "number") {
			if(val < 0 || val > 1) {throw parse.error(cc, "Slider fields only accept numbers from 0 to 1");}
		}
		return val;
	}
}
types.WFSliderParameter = WFSliderParameter;

class WFSpeakTextRateParameter extends WFNumberFieldParameter {
	constructor(data: any, name: string = "Speak Text Rate", docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#slider-number-fields") {
		super(data, name, docs);
	}
	build(cc: ConvertingContext, parse: AsAble) {
		const val = super.build(cc, parse);
		if(typeof val === "number") {
			if(val < 0 || val > 2) {throw parse.error(cc, "Speak text rate fields only accept numbers from 0 to 2");}
		}
		return val;
	}
}
types.WFSpeakTextRateParameter = WFSpeakTextRateParameter;

class WFContentArrayParameter extends WFParameter {
	constructor(data: any, name: "List", docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#list-field") {
		super(data, name, docs);
	}
	genDocsArgName() {
		return `[list, items]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a list.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(!parse.canBeList(cc)) {throw parse.error(cc, "List fields only accept lists.");}
		const list = parse.asList(cc);
		return list;
	}
}
types.WFContentArrayParameter = WFContentArrayParameter;

types.WFArrayParameter = class extends WFContentArrayParameter {}; // not sure what the difference is

class WFVariablePickerParameter extends WFParameter {
	constructor(data: any, name = "Variable Picker", docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields") {
		super(data, name, docs);
	}
	genDocsArgName() {
		return `(v:myvar | mv:myvar | s:myvar)`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a variable.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(!parse.canBeVariable(cc)) {throw parse.error(cc, "Variable picker fields only accept variables.");}
		const variable = parse.asVariable(cc);
		return variable;
	}
}
types.WFVariablePickerParameter = WFVariablePickerParameter;

class WFTextInputParameter extends WFParameter {
	constructor(data: any, name = "Text", docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#text-field") {
		super(data, name, docs);
	}
	genDocsArgName() {
		return `"string"`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string ${this.allowsVariables ? `
or text`: ""}
with the text.`;
	}
	genDocsDefaultValue(value: string) {
		return `\`"${value}"\``;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(!this.allowsVariables) {
			if(!parse.canBeString(cc)) {throw parse.error(cc, "This text field only accepts text with no variables.");}
			return parse.asString(cc);
		}
		if(!parse.canBeText(cc)) {throw parse.error(cc, "Text fields only accept text.");}
		return parse.asText(cc);
	}
}
types.WFTextInputParameter = WFTextInputParameter;


class WFCustomDateFormatParameter extends WFTextInputParameter {
	constructor(data: any, name: string = "Date Format String", docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#text-field") {
		super(data, name, docs);
	}
}
types.WFCustomDateFormatParameter = WFCustomDateFormatParameter;

class WFCountryFieldParameter extends WFTextInputParameter {
	constructor(data: any, name: string = "Country", docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#text-field") {
		super(data, name, docs);
	}
}
types.WFCountryFieldParameter = WFCountryFieldParameter;

class WFDateFieldParameter extends WFTextInputParameter {
	constructor(data: any, name = "Date", docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#text-field") {
		super(data, name, docs);
	}
}
types.WFDateFieldParameter = WFDateFieldParameter;

class WFLocationFieldParameter extends WFTextInputParameter {
	constructor(data: any, name = "Location", docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#text-field") {
		super(data, name, docs);
	}
}
types.WFLocationFieldParameter = WFLocationFieldParameter;

class WFEmailAddressFieldParameter extends WFParameter {
	constructor(data: any, name = "Email", docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields") {
		super(data, name, docs);
	}
	genDocsArgName() {
		return `("string" | [list, of, strings] | variable)`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string or string array or variable of email addresses.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(parse.canBeVariable(cc)) {
			return parse.asVariable(cc);
		}
		if(parse.canBeArray(cc)) {
			return parse.asArray(cc);
		}
		if(parse.canBeString(cc)) {
			return [parse.asString(cc)];
		}
		throw parse.error(cc, "Email adress fields only accept variables, lists without variables, and strings without variables.");
	}
}
types.WFEmailAddressFieldParameter = WFEmailAddressFieldParameter;

class WFDictionaryParameter extends WFParameter {
	constructor(data: any, name = "Dictionary", docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#dictionary-field") {
		super(data, name, docs);
	}
	genDocsArgName() {
		return `{dictionary}`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a dictionary.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(!parse.canBeDictionary(cc)) {throw parse.error(cc, "Dictionary fields only accept fields.");}
		return parse.asDictionary(cc);
	}
}
types.WFDictionaryParameter = WFDictionaryParameter;

class WFSwitchParameter extends WFParameter {
	constructor(data: any, name = "Switch", docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields") {
		super(data, name, docs);
	}
	genDocsArgName() {
		return this.allowsVariables ? `(true | f alse | variable)` : `(true | false)`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a boolean${this.allowsVariables ? `
or a variable.`: ""}`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(parse.canBeVariable(cc)) {
			if(!this.allowsVariables) {throw parse.error(cc, "This toggle switch field does not accept variables.");}
			return parse.asVariable(cc);
		}else if(parse.canBeBoolean(cc)) {
			return parse.asBoolean(cc);
		}
		throw parse.error(cc, "Toggle switch fields only accept booleans (true/false) and variables.");
	}
}
types.WFSwitchParameter = WFSwitchParameter;

class WFExpandingParameter extends WFParameter {
	constructor(data: any, name = "Expand Arrow", docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields") {
		super(data, name, docs);
		this.allowsVariables = false;
	}
	genDocsArgName() {
		return `(true | false)`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a boolean for if this
parameter is expanded or not.
Often expanding fields will
enable or disable other
arguments. If you are using
labels, these can be ignored.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if(parse.canBeBoolean(cc)) {
			return parse.asBoolean(cc);
		}
		throw parse.error(cc, "Expanding fields only accept booleans (true/false).");
	}
}
types.WFExpandingParameter = WFExpandingParameter;

class WFVariableFieldParameter extends WFParameter {
	constructor(data: any, name = "Variable Input", docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#variable-field") {
		super(data, name, docs);
	}
	genDocsArgName() {
		return `(v:variableName | variableName)`;
	}
	genDocs() {
		const docs = `${super.genDocs()}

Accepts a string with the name of the named variable (v:) you want to set,
or a named variable (v:) that you want to set.
`;
		return docs;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		const varname = parse.canBeString(cc) ? parse.asString(cc) : parse.canBeStringVariable(cc) ? parse.asStringVariable(cc) : (()=>{throw parse.error(cc, "Variable fields only accept strings and named variables with no aggrandizements.");})();
		cc.setNamedVariable(varname);
		return varname;
	}
}
types.WFVariableFieldParameter = WFVariableFieldParameter;

const _debugMissingTypes: {[key: string]: number} = {};
const _debugTypes: {[key: string]: {paramClass: string, missing: boolean, count: number}} = {};

import getTypes from "./Data/GetTypes";
import {isCoercionTypeClass} from "./WFTypes/Types";

export class WFAction {
	_data: any
	id: string
	isComplete: boolean
	_parameters: Array<WFParameter | string>
	internalName: string
	shortName: string
	name: string

	constructor(data: any, id: string) { //
		this._data = data;
		this.id = id;

		this.isComplete = true;
		this._parameters = [];
		this.internalName = this.id;
		this.name = this._data.Name;
		this.shortName = genShortName(this.name, this.internalName);
		this.name = this.name || this.shortName;
		const parameterNames: {[key: string]: true | undefined} = {};
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
					const type: any = types[param.Class];
					const paramVal: WFParameter = new type(param);
					if(parameterNames[paramVal.shortName]) {
						paramVal.shortName += "2";
					}
					parameterNames[paramVal.shortName] = true;
					return paramVal;
				}
				this.isComplete = false;
				_debugMissingTypes[param.Class] =
					_debugMissingTypes[param.Class] !== undefined
						? _debugMissingTypes[param.Class] + 1
						: 1;
				return `This paramtype is not implemented. ${param.Class}`;
			});
		}
		if(this._data.ActionClass === "WFContentItemPropertiesAction") { // TODO use a seperate Get Type Class instead of writing json for WFEnumerationParameter
			const getTypeItemClass = this._data.WFContentItemClass;
			if(!isCoercionTypeClass(getTypeItemClass)) {this._parameters.push(`Get Details Of ${getTypeItemClass} is not yet implemented.`); this.isComplete = false;}
			else{this._parameters.push(new WFEnumerationParameter({
				Key: "WFContentItemPropertyName",
				Label: "Get",
				Items: Object.values(getTypes[getTypeItemClass]).map(t => t.name),
			}, "Get Property"));}
		}
		if(this._data.ActionClass === "WFContentItemFilterAction") {
			this._parameters.push(`Filter * actions are not implemented yet.`);
			this.isComplete = false;
		}
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
				return {argType: `NotImplemented`};
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
${this.shortName} ${this.genDocsParams().map(({argName, argType}) => `${argName}=${argType}`).join(" ")}${this._data.BlockInfo ? this._data.BlockInfo.Example : ""}
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
` : ""}${this._data.Description.DescriptionNote ? `

### note

${this._data.Description.DescriptionNote}
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

### source json (for developers)

\`\`\`json
${JSON.stringify(this._data, null, "\t")}
\`\`\`
`;
		return docs;
	}
	build(cc: ConvertingContext, actionPosition: AsAble, controlFlowData?: {uuid: string, number: number, wfaction: any}, ...params: Array<AsAble>) {
		let parami = 0;
		let actionAbove = cc.lastVariableAction;
		// TODO actionAbove = cc.lastVariableAction
		//
		const action = new Action(actionPosition.start, actionPosition.end, this.name, this.id);
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
				if(!param.canBeAction(cc)) {throw param.error(cc, "InputArg fields only accept actions and variables.");}
				actionAbove = param.asAction(cc);
				return;
			}
			if(param.special === "ControlFlowMode") {
				throw param.error(cc, "This type of parameter is no longer implemented. Please use the `flow` and `end` pseudoactions in place of >c:1:gid:x and >c>2:gid:x.");
			}
			if(param.special === "Arglist") {
				if(!param.canBeRawKeyedDictionary(cc)) {throw param.error(cc, "ArgList fields only accept dictionaries.");}
				const dictionary = param.asRawKeyedDictionary(cc);
				Object.keys(dictionary).forEach(key => {
					const value = dictionary[key];
					const shortKey = genShortName(key);
					const paramtype = this._parameters.find(param => typeof param !== "string" && param.shortName === shortKey);
					if(typeof paramtype === "string") {throw value.error(cc, "This should never happen. Find should exclude string paramtypes.");}
					if(!paramtype) {throw param.error(cc, `This action does not have a parameter named ${shortKey}.`);}
					if(action.parameters.has(paramtype.internalName)) {throw value.error(cc, `The parameter named ${shortKey} has already been set for this action.`);}
					action.parameters.set(paramtype.internalName, paramtype.build(cc, value));
				});
				return;
			}

			let paramtype;
			while(!paramtype) {
				paramtype = this._parameters[parami];

				if(!paramtype) {throw param.error(cc, `This action does not have any more arguments. Check the documentation page for a list of arguments.`);}
				if(typeof paramtype === "string") {throw param.error(cc, `This field is not supported yet. If you need this field, submit an issue or pull request on github requesting it. Reason: ${paramtype}`);}
				if(action.parameters.has(paramtype.internalName)) {paramtype = undefined; parami++; continue;} // Param [name] was already set
				if(!paramtype.shouldEnable(action)) {paramtype = undefined; parami++; continue;} // If the required resources are not set, skip

				parami++;
			}

			action.parameters.set(paramtype.internalName, paramtype.build(cc, param));
		});
		if(actionAbove && this.requiresInput && actionAbove !== cc.lastVariableAction) {
			cc.add(getVariable({start: actionAbove.start, end: actionAbove.end}, new MagicVariable(actionAbove)));
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
		console.warn(`WARNING, ${action.shortName} (${action.internalName}) is already defined`); //eslint-disable-line no-console
		return;
	}

	actionsByID[key] = action;
	actionsByName[action.shortName] = action;
	// actions[action.name.toLowerCase().split` `.join``] = action;
});

export function genReadme() {
	const totalActions = Object.keys(actionsByID).length;
	const completedActions = Object.values(actionsByID).filter(action=>action.isComplete).length;
	const typeList = Object.values(_debugTypes)
		.sort((a, b) => a.count - b.count)
		.map(({paramClass, count, missing})=>`- [${missing?" ":"x"}] ${missing?"":"Complete - "}${count}: ${paramClass}`);
	return `[![Banner image](image0.jpg)](https://pfgithub.github.io/shortcutslang/)

Banner by ROP#2788 on the [routinehub.co](https://routinehub.co) discord server.



# Shortcutslang

[Getting Started Guide](https://pfgithub.github.io/shortcutslang/gettingstarted.html)

[Try Shortcutslang in a web browser](https://editor.scpl.dev)

${completedActions}/${totalActions} builtin actions supported

## All Actions:

${Object.values(actionsByID).sort((a, b)=>a.name>b.name?1:(a.name<b.name?-1:0)).map(action => `- [${action.name} (\`${action.shortName}\`)](actions/${action.shortName})${action.isComplete ? "" : " (Incomplete)"}`).join(`\n`)}

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
export function getActionFromID(id: string): WFAction {
	if(!actionsByID[id]) {throw new Error(`There is no action with the id \`${id}\``);}
	return actionsByID[id];
}
export function getActionFromName(name: string): WFAction | undefined {
	name = name.toLowerCase();
	if(!actionsByName[name]) {return undefined;}
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
