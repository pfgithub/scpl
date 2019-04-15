// ========≠==========
// This file is a mess
// Enter at your own risk
// ========≠==========

import * as uuidv4 from "uuid/v4";

/*
CoercionItemClass?: AggrandizementCoercionItemClass;
DictionaryKey?: string;
PropertyName?: AggrandizementPropertyName;
PropertyUserInfo?: AggrandizementPropertyUserInfo;
Type: AggrandizementType;
WFDateFormat?: string;
WFDateFormatStyle?: WFDateFormatStyle;
WFTimeFormatStyle?: WFTimeFormatStyle;
WFISO8601IncludeTime?: boolean;
WFRelativeDateFormatStyle?: WFRelativeDateFormatStyle;

From Shortcuts-js
 */

import {
	CoercionTypeClass,
	isAggrandizementPropertyName
} from "./WFTypes/Types";

const coercionTypes: { [name: string]: CoercionTypeClass } = {
	// remove name:string and make it typed too
	anything: "WFContentItem",
	appstoreapp: "WFAppStoreAppContentItem",
	article: "WFArticleContentItem",
	boolean: "WFBooleanContentItem",
	contact: "WFContactContentItem",
	date: "WFDateContentItem",
	dictionary: "WFDictionaryContentItem",
	emailaddress: "WFEmailAddressContentItem",
	file: "WFGenericFileContentItem",
	image: "WFImageContentItem",
	itunesmedia: "WFMPMediaContentItem",
	itunesproduct: "WFiTunesProductContentItem",
	location: "WFLocationContentItem",
	mapslink: "WFDCMapsLinkContentItem",
	media: "WFAVAssetContentItem",
	number: "WFNumberContentItem",
	pdf: "WFPDFContentItem",
	phonenumber: "WFPhoneNumberContentItem",
	photomedia: "WFPhotoMediaContentItem",
	place: "WFMKMapItemContentItem",
	richtext: "WFRichTextContentItem",
	safariwebpage: "WFSafariWebPageContentItem",
	text: "WFStringContentItem",
	url: "WFURLContentItem",
	vcard: "WFVCardContentItem"
};
export const inverseCoercionTypes: { [name in CoercionTypeClass]: string } = {
	WFContentItem: "anything",
	WFAppStoreAppContentItem: "appstoreapp",
	WFArticleContentItem: "article",
	WFBooleanContentItem: "boolean",
	WFContactContentItem: "contact",
	WFDateContentItem: "date",
	WFDictionaryContentItem: "dictionary",
	WFEmailAddressContentItem: "emailaddress",
	WFGenericFileContentItem: "file",
	WFImageContentItem: "image",
	WFMPMediaContentItem: "itunesmedia",
	WFiTunesProductContentItem: "itunesproduct",
	WFLocationContentItem: "location",
	WFDCMapsLinkContentItem: "mapslink",
	WFAVAssetContentItem: "media",
	WFNumberContentItem: "number",
	WFPDFContentItem: "pdf",
	WFPhoneNumberContentItem: "phonenumber",
	WFPhotoMediaContentItem: "photomedia",
	WFMKMapItemContentItem: "place",
	WFRichTextContentItem: "richtext",
	WFSafariWebPageContentItem: "safariwebpage",
	WFStringContentItem: "text",
	WFURLContentItem: "url",
	WFVCardContentItem: "vcard"
};

import getTypes from "./Data/GetTypes"; // resdata = {};console.dir( actionData.filter(action => action.WFWorkflowActionIdentifier === "is.workflow.actions.gettext").map(action => Object.values(action.WFWorkflowActionParameters.WFTextActionText.Value.attachmentsByRange).filter(d=>d.Type !== "Clipboard" && d.Aggrandizements && d.Aggrandizements[1]).map(d=>({coerce:d.Aggrandizements[0].CoercionItemClass,property:d.Aggrandizements[1]}))).forEach(a=>a.forEach(({coerce, property})=>{if(!resdata[coerce]){resdata[coerce]={};};resdata[coerce][property.PropertyName.toLowerCase().replace(/[^A-Za-z]/g,"")]=({name:property.PropertyName,data:property.PropertyUserInfo});})) ,{depth:null});console.log(JSON.stringify(resdata,null,"\t"));

type WFAggrandizements = (
	| {
			Type: "WFCoercionVariableAggrandizement";
			CoercionItemClass: CoercionTypeClass;
	  }
	| {
			Type: "WFPropertyVariableAggrandizement";
			PropertyName: string;
			PropertyUserInfo?: string | number;
	  }
	| {
			Type: "WFDictionaryValueVariableAggrandizement";
			DictionaryKey: string;
	  })[];

export class Aggrandizements {
	coercionType?: CoercionTypeClass;
	getProperty?: { name: string; data?: string | number };
	getForKey?: string;
	constructor() {
		this.coercionType = undefined;
		this.getProperty = undefined;
		this.getForKey = undefined;
	}
	static inverse(data: WFAggrandizements): Aggrandizements {
		const res = new Aggrandizements();
		data.forEach(aggrandizement => {
			if (aggrandizement.Type === "WFCoercionVariableAggrandizement") {
				res.coercionType = aggrandizement.CoercionItemClass;
				return;
			}
			if (aggrandizement.Type === "WFPropertyVariableAggrandizement") {
				res.getProperty = {
					name: aggrandizement.PropertyName,
					data: aggrandizement.PropertyUserInfo
				};
				return;
			}
			if (
				aggrandizement.Type ===
				"WFDictionaryValueVariableAggrandizement"
			) {
				res.getForKey = aggrandizement.DictionaryKey;
				return;
			}
		});
		return res;
	}
	build(): WFAggrandizements {
		const aggrandizements: WFAggrandizements = [];
		if (this.coercionType) {
			aggrandizements.push({
				CoercionItemClass: this.coercionType,
				Type: "WFCoercionVariableAggrandizement"
			});
		}
		if (this.getProperty) {
			aggrandizements.push({
				PropertyName: this.getProperty.name,
				...(this.getProperty.data
					? { PropertyUserInfo: this.getProperty.data }
					: {}),
				Type: "WFPropertyVariableAggrandizement"
			});
		}
		if (this.getForKey) {
			aggrandizements.push({
				DictionaryKey: this.getForKey,
				Type: "WFDictionaryValueVariableAggrandizement"
			});
		}
		return aggrandizements;
	}

	setProperty(getType: string): string | void {
		// if !this.coercionType throw error(to get a property must have coercion type. fix this by adding as:)
		getType = getType.toLowerCase().replace(/[^A-Za-z]/g, "");
		if (!this.coercionType) {
			return "To get a property of a variable, you must have a coercion type set. Fix this by adding `as:` to your aggrandizements dictionary.";
		}
		if (!isAggrandizementPropertyName(getType)) {
			return `${getType} is not a valid aggrandizement get type. Valid are: ${Object.keys(
				getTypes[this.coercionType]
			)}.`;
		}
		const typeValue = getTypes[this.coercionType][getType];
		if (!typeValue) {
			return `${getType} is not a valid aggrandizement get type for this as. Valid are: ${Object.keys(
				getTypes[this.coercionType]
			)}.`;
		}
		this.getProperty = typeValue;
	}
	setCoercionType(type: string): string | void {
		// if gettype, error
		// if !coercion type exists throw error(coercion type does not exist)
		type = type
			.toLowerCase()
			.split(" ")
			.join("");
		const coercionClass = coercionTypes[type];
		if (!coercionClass) {
			return `\`${type}\` is not a valid as type. Valid are: ${Object.keys(
				coercionTypes
			).join(", ")}`;
		}
		if (this.getProperty || this.getForKey) {
			return `Cannot change as type when get property/get for key is already set.`;
		}
		this.coercionType = coercionClass;
	}
	setForKey(key: string): string | void {
		// if !coercion type === dictionary throw error(coercion type must be dictionary)
		if (this.coercionType !== "WFDictionaryContentItem") {
			return `As type must be dictionary to use key. Fix this by adding as:Dictionary.`;
		}
		this.getForKey = key;
	}
}

// // // // // //
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //

export class Parameter {
	constructor() {}
	build(): WFParameter {
		throw new Error("Blank parameter cannot be built");
	}
}

type DictionaryFieldValueItem =
	| {
			WFItemType: 1;
			WFKey: WFTextParameter;
			WFValue: {
				Value: WFDictionaryParameter;
				WFSerializationType: "WFDictionaryFieldValue";
			};
	  }
	| {
			WFItemType: 2;
			WFKey: WFTextParameter;
			WFValue: {
				Value: WFListParameter;
				WFSerializationType: "WFArrayParameterState";
			};
	  }
	| {
			WFItemType: 0;
			WFKey: WFTextParameter;
			WFValue: WFTextParameter;
	  }
	| { WFItemType: -1; WFKey: WFTextParameter };
type WFDictionaryParameter = {
	Value: {
		WFDictionaryFieldValueItems: DictionaryFieldValueItem[];
	};
	WFSerializationType: "WFDictionaryFieldValue";
};

export class Dictionary extends Parameter {
	items: Array<{
		key: Text;
		value: Dictionary | Text | List | ErrorParameter;
	}>;
	constructor() {
		super();
		this.items = [];
	}
	add(key: Text, value: Dictionary | Text | List | ErrorParameter) {
		this.items.push({ key, value });
	}
	static inverse(data: WFDictionaryParameter): Dictionary {
		const res = new Dictionary();
		data.Value.WFDictionaryFieldValueItems.forEach(item => {
			if (item.WFItemType === 1) {
				return res.add(
					Text.inverse(item.WFKey),
					Dictionary.inverse(item.WFValue.Value)
				);
			}
			if (item.WFItemType === 2) {
				return res.add(
					Text.inverse(item.WFKey),
					List.inverse(item.WFValue.Value)
				);
			}
			if (item.WFItemType === 0) {
				return res.add(
					Text.inverse(item.WFKey),
					Text.inverse(item.WFValue)
				);
			}
			return res.add(Text.inverse(item.WFKey), new ErrorParameter());
		});
		return res;
	}
	build(): WFDictionaryParameter {
		return {
			Value: {
				WFDictionaryFieldValueItems: this.items.map(
					({ key, value }): DictionaryFieldValueItem => {
						if (value instanceof Dictionary) {
							// For unknown reasons, an extra serializationtype is needed on dictionaries
							return {
								WFItemType: 1,
								WFKey: key.build(),
								WFValue: {
									Value: value.build(),
									WFSerializationType:
										"WFDictionaryFieldValue"
								}
							};
						}
						if (value instanceof List) {
							// For unknown reasons, an extra serializationtype is needed on lists
							return {
								WFItemType: 2,
								WFKey: key.build(),
								WFValue: {
									Value: value.build(),
									WFSerializationType: "WFArrayParameterState"
								}
							};
						}
						// For unknown reasons, an extra serializationtype is not needed on text
						if (value instanceof Text) {
							return {
								WFItemType: 0,
								WFKey: key.build(),
								WFValue: value.build()
							};
						}
						throw new Error("Invalid value type");
					}
				)
			},
			WFSerializationType: "WFDictionaryFieldValue"
		};
	}
}
type WFVariableAttachmentData = {
	Type: "Variable";
	Aggrandizements?: WFAggrandizements;
	VariableName: string;
};
type WFMagicVariableAttachmentData = {
	Type: "ActionOutput";
	Aggrandizements?: WFAggrandizements;
	OutputName: string;
	OutputUUID: string;
};

type WFAttachmentData =
	| {
			Type: AttachmentType;
			Aggrandizements?: WFAggrandizements;
	  }
	| WFVariableAttachmentData
	| WFMagicVariableAttachmentData;

type WFAttachmentParameter = {
	Value: WFAttachmentData;
	WFSerializationType: "WFTextTokenAttachment";
};
type WFVariableAttachmentParameter = {
	Value: WFVariableAttachmentData;
	WFSerializationType: "WFTextTokenAttachment";
};
type WFMagicVariableAttachmentParameter = {
	Value: WFMagicVariableAttachmentData;
	WFSerializationType: "WFTextTokenAttachment";
};

export type AttachmentType =
	| "Clipboard"
	| "Ask"
	| "CurrentDate"
	| "ExtensionInput"
	| "Input"
	| "Variable"
	| "ActionOutput";
export class Attachment extends Parameter {
	type: AttachmentType;
	aggrandizements: Aggrandizements;
	constructor(type: AttachmentType) {
		super();
		this.type = type;
		this.aggrandizements = new Aggrandizements();
	}
	static inverse(value: WFAttachmentParameter): Attachment {
		let result: Attachment;
		if (value.Value.Type === "Variable") {
			result = NamedVariable.inverse(<WFVariableAttachmentParameter>(
				value
			));
		} else if (value.Value.Type === "ActionOutput") {
			result = MagicVariable.inverse(<WFMagicVariableAttachmentParameter>(
				value
			));
		} else {
			result = new Attachment(value.Value.Type);
		}
		if (value.Value.Aggrandizements) {
			result.aggrandizements = Aggrandizements.inverse(
				value.Value.Aggrandizements
			);
		}
		return result;
	}
	build(): WFAttachmentParameter {
		return {
			Value: {
				Type: this.type,
				Aggrandizements: this.aggrandizements.build()
			},
			WFSerializationType: "WFTextTokenAttachment"
		};
	}
}

type VariableType = "Variable" | "ActionOutput";
export class Variable extends Attachment {
	constructor(type: VariableType) {
		super(type);
	}
	build(): WFAttachmentParameter {
		const sb = super.build();
		return sb;
	}
}

export class NamedVariable extends Variable {
	varname: string;
	constructor(varname: string) {
		super("Variable");
		this.varname = varname;
	}
	static inverse(data: WFVariableAttachmentParameter): NamedVariable {
		return new NamedVariable(data.Value.VariableName);
	}
	build(): WFAttachmentParameter {
		return {
			Value: {
				Type: "Variable",
				Aggrandizements: this.aggrandizements.build(),
				VariableName: this.varname
			},
			WFSerializationType: "WFTextTokenAttachment"
		};
	}
}

export class MagicVariable extends Variable {
	varname: string;
	uuid: string;
	constructor(...args: [Action] | [string, string]) {
		super("ActionOutput");
		if (args[0] instanceof Action) {
			this.varname =
				args[0].magicvarname || args[0].name || "??unnamed??";
			this.uuid = args[0].uuid;
		} else if (typeof args[1] === "string") {
			this.varname = args[0];
			this.uuid = args[1];
		} else {
			throw new Error("This is not possible.");
		}
	}
	static inverse(data: WFMagicVariableAttachmentParameter): MagicVariable {
		return new MagicVariable(data.Value.OutputName, data.Value.OutputUUID);
	}
	build(): WFAttachmentParameter {
		return {
			Value: {
				Type: "ActionOutput",
				Aggrandizements: this.aggrandizements.build(),
				OutputName: this.varname,
				OutputUUID: this.uuid
			},
			WFSerializationType: "WFTextTokenAttachment"
		};
	}
}

type WFListParameter = Array<
	string | { WFItemType: number; WFValue: WFTextWithAttachments }
>;

export class List extends Parameter {
	_list: Array<Text | string | ErrorParameter>;
	constructor(list: Array<Text>) {
		super();
		this._list = list;
	}
	add(item: string | Text | ErrorParameter) {
		this._list.push(item);
	}
	static inverse(data: WFListParameter): List {
		const reslist = new List([]);
		data.forEach(item => {
			if (typeof item === "string") {
				return reslist.add(item);
			}
			if (item.WFItemType === 0) {
				return reslist.add(Text.inverse(item.WFValue));
			}
			return reslist.add(new ErrorParameter());
		});
		return reslist;
	}
	getItems(): (Text | string | ErrorParameter)[] {
		return this._list;
	}
	build(): WFListParameter {
		return this._list.map(i => {
			if (i instanceof ErrorParameter) {
				throw new Error("Cannot build errorparameter");
			}
			if (typeof i === "string") {
				return i;
			}
			const text = i.build();
			if (typeof text === "string") {
				return text;
			}
			return { WFItemType: 0, WFValue: text };
		});
	}
}

type WFTextValue = {
	attachmentsByRange: { [key: string]: WFAttachmentData };
	string: string;
};
type WFTextWithAttachments = {
	Value: WFTextValue;
	WFSerializationType: "WFTextTokenString";
};
type WFTextParameter = string | WFTextWithAttachments;

export class Text extends Parameter {
	_components: Array<Attachment | string>;
	constructor() {
		super();
		this._components = [];
	}
	static inverse(data: WFTextParameter): Text {
		const res = new Text();
		if (typeof data === "string") {
			res.add(data);
		} else {
			let strPosition = 0;
			data.Value.string.split("\uFFFC").forEach(textPart => {
				res.add(textPart);
				strPosition += textPart.length;
				// get variable part
				const attachment =
					data.Value.attachmentsByRange[`{${strPosition}, 1}`];
				strPosition++;
				if (!attachment) {
					return;
				}
				res.add(
					Attachment.inverse({
						WFSerializationType: "WFTextTokenAttachment",
						Value: attachment
					})
				);
				// res.add variable part
			});
		}
		return res;
	}
	components(): Array<Attachment | string> {
		return this._components;
	}
	get _last() {
		return this._components[this._components.length - 1];
	}
	add(...objs: Array<Attachment | Text | string>) {
		objs.forEach(obj => {
			if (obj instanceof Attachment) {
				this._components.push(obj);
				return;
			}
			if (obj instanceof Text) {
				this.add(...obj._components);
				return;
			}
			if (!(typeof obj === "string")) {
				throw new Error("Add type must be string, Text, or Attachment");
			}

			if (obj.length === 0) {
				return;
			} // nothing to add
			const str = obj;
			this._components.push(str);
		});

		return this;
	}
	build(): WFTextParameter {
		// if(this.components.length === 0) {return "";}
		// if(this.components.length === 1 &&  typeof this._last === "string") {
		// 	return this._last;
		// }
		const result: WFTextValue = {
			attachmentsByRange: {},
			string: ""
		};
		let hasAttachments = false;
		this._components.forEach(component => {
			if (component instanceof Attachment) {
				hasAttachments = true;
				result.attachmentsByRange[
					`{${result.string.length}, 1}`
				] = component.build().Value;
				result.string += "\uFFFC"; // special character to distinguish variables
				return;
			}
			if (typeof component === "string") {
				result.string += component;
				return;
			}
			throw new Error(
				"Invalid component type. This should never happen."
			);
		});
		if (result.string === "\uFFFC" && !hasAttachments) {
			console.log(
				"!!!!!result.string is ",
				result,
				" but somehow hasattachments is false"
			);
		}
		if (!hasAttachments) {
			return result.string;
		}
		return {
			Value: result,
			WFSerializationType: "WFTextTokenString"
		};
	}
}

export class ErrorParameter extends Parameter {}

type WFErrorParameter = { WFSerializationType: "WFErrorParameter" };

export function toParam(value: WFParameter): ParameterType {
	if (typeof value === "string") {
		return value;
	}
	if (typeof value === "number") {
		return value;
	}
	if (typeof value === "boolean") {
		return value;
	}
	if (Array.isArray(value)) {
		return List.inverse(value);
	}
	if (value.WFSerializationType === "WFTextTokenString") {
		return Text.inverse(value);
	}
	if (value.WFSerializationType === "WFTextTokenAttachment") {
		return Attachment.inverse(value);
	}
	if (value.WFSerializationType === "WFDictionaryFieldValue") {
		return Dictionary.inverse(value);
	}
	if (value.WFSerializationType === "WFErrorParameter") {
		return new ErrorParameter();
	}
	return new ErrorParameter();
}

export type ParameterType =
	| Parameter
	| string
	| number
	| Array<string>
	| boolean;

type WFParameters = { [key: string]: WFParameter };

export type WFParameter =
	| WFDictionaryParameter
	| WFAttachmentParameter
	| WFListParameter
	| WFTextParameter
	| WFErrorParameter
	| string
	| boolean
	| number;

export class Parameters {
	values: { [internalName: string]: ParameterType };
	builtValues: { [internalName: string]: WFParameter };
	constructor() {
		this.values = {};
		this.builtValues = {};
	}
	static inverse(data: WFParameters): Parameters {
		const parameters = new Parameters();
		Object.keys(data).forEach(paramkey => {
			parameters.set(paramkey, toParam(data[paramkey])); // why is it being converted just to be unconverted again
		});
		return parameters;
	}
	set(internalName: string, value: ParameterType) {
		this.values[internalName] = value;
	}
	has(internalName: string) {
		return !!this.values[internalName];
	}
	get(internalName: string): WFParameter {
		return this.buildValue(internalName);
	}
	buildValue(key: string): WFParameter {
		if (this.builtValues[key]) {
			return this.builtValues[key];
		}
		const value = this.values[key];
		if (value instanceof Parameter) {
			return value.build();
		}
		return value;
	}
	build(): WFParameters {
		const result: { [key: string]: WFParameter } = {};
		Object.keys(this.values).map(key => {
			result[key] = this.buildValue(key);
		});
		return result;
	}
}

type WFAction = {
	WFWorkflowActionIdentifier: string;
	WFWorkflowActionParameters?: WFParameters;
	SCPLData?: { Position: { start: [number, number]; end: [number, number] } };
};

export class Action {
	name?: string;
	id: string;
	parameters: Parameters;
	magicvarname?: string;

	start?: [number, number];
	end?: [number, number];

	constructor(
		start: [number, number] | undefined,
		end: [number, number] | undefined,
		name: string | undefined,
		id: string
	) {
		this.name = name;
		this.id = id;
		this.parameters = new Parameters();
		this.magicvarname = undefined;

		this.start = start;
		this.end = end;
	}
	static inverse(data: WFAction): Action {
		const action = new Action(
			undefined,
			undefined,
			undefined,
			data.WFWorkflowActionIdentifier
		);
		action.parameters = Parameters.inverse(
			data.WFWorkflowActionParameters || {}
		);
		const customOutputName = <string | undefined>(
			action.parameters.get("CustomOutputName")
		);
		if (customOutputName) {
			action.magicvarname = customOutputName;
		}

		return action;
	}
	get uuid(): string {
		if (this.parameters.has("UUID")) {
			return <string>this.parameters.get("UUID");
		}
		this.parameters.set("UUID", uuidv4());
		return <string>this.parameters.get("UUID");
	}
	build(): WFAction {
		if (this.magicvarname) {
			this.parameters.set("CustomOutputName", this.magicvarname);
		}
		const res: WFAction = {
			WFWorkflowActionIdentifier: this.id,
			WFWorkflowActionParameters: this.parameters.build()
		};
		if (this.start && this.end) {
			res.SCPLData = { Position: { start: this.start, end: this.end } };
		}
		return res;
	}
}

type ExtensionInputContentItemClass =
	| "WFAppStoreAppContentItem"
	| "WFArticleContentItem"
	| "WFContactContentItem"
	| "WFDateContentItem"
	| "WFEmailAddressContentItem"
	| "WFGenericFileContentItem"
	| "WFImageContentItem"
	| "WFiTunesProductContentItem"
	| "WFLocationContentItem"
	| "WFDCMapsLinkContentItem"
	| "WFAVAssetContentItem"
	| "WFPDFContentItem"
	| "WFPhoneNumberContentItem"
	| "WFRichTextContentItem"
	| "WFSafariWebPageContentItem"
	| "WFStringContentItem"
	| "WFURLContentItem";
type WorkflowTypes = "NCWidget" | "WatchKit";
export type WFShortcut = [
	{
		WFWorkflowClientVersion: string;
		WFWorkflowClientRelese: string;
		WFWorkflowMinimumClientVersion: number;
		WFWorkflowIcon: {
			WFWorkflowIconStartColor: number;
			WFWorkflowIconImageData: Buffer | { type: "Buffer"; data: [] };
			WFWorkflowIconGlyphNumber: number;
		};
		WFWorkflowTypes: WorkflowTypes[];
		WFWorkflowInputContentItemClasses: ExtensionInputContentItemClass[];
		WFWorkflowActions: WFAction[];
	}
];

export class Shortcut {
	name: string;
	actions: Array<Action>;
	constructor(name: string) {
		this.name = name;
		this.actions = [];
	}
	add(action: Action) {
		this.actions.push(action);
	}
	static inverse(data: WFShortcut): Shortcut {
		const shortcut = new Shortcut("inverse");
		data[0].WFWorkflowActions.forEach(action => {
			shortcut.add(Action.inverse(action));
		});
		return shortcut;
	}
	build(): WFShortcut {
		return [
			{
				WFWorkflowClientVersion: "754",
				WFWorkflowClientRelese: "2.1.2",
				WFWorkflowMinimumClientVersion: 411,
				WFWorkflowIcon: {
					WFWorkflowIconStartColor: 2071128575,
					WFWorkflowIconImageData: Buffer.from(""),
					WFWorkflowIconGlyphNumber: 59511
				},
				WFWorkflowTypes: ["NCWidget", "WatchKit"],
				WFWorkflowInputContentItemClasses: [
					"WFAppStoreAppContentItem",
					"WFArticleContentItem",
					"WFContactContentItem",
					"WFDateContentItem",
					"WFEmailAddressContentItem",
					"WFGenericFileContentItem",
					"WFImageContentItem",
					"WFiTunesProductContentItem",
					"WFLocationContentItem",
					"WFDCMapsLinkContentItem",
					"WFAVAssetContentItem",
					"WFPDFContentItem",
					"WFPhoneNumberContentItem",
					"WFRichTextContentItem",
					"WFSafariWebPageContentItem",
					"WFStringContentItem",
					"WFURLContentItem"
				],
				WFWorkflowActions: this.actions.map(action => action.build())
			}
		];
	}
}
