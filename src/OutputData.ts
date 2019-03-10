// ========≠==========
// This file is a mess
// Enter at your own risk
// ========≠==========

import * as uuidv4 from "uuid/v4";


// DisplayType would be a better name maybe
const SERIALIZATIONTYPE = { // how a value will be rendered in shortcuts, forex variables are texttokenattachments
	variable: "WFTextTokenAttachment",
	string: "WFTextTokenString",
	dictionaryFieldValue: "WFDictionaryFieldValue"
};

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
 
import {CoercionTypeClass, isAggrandizementPropertyName} from "./WFTypes/Types";
 
const coercionTypes: {[name: string]: CoercionTypeClass} = { // remove name:string and make it typed too
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




import getTypes from "./Data/GetTypes"; // resdata = {};console.dir( actionData.filter(action => action.WFWorkflowActionIdentifier === "is.workflow.actions.gettext").map(action => Object.values(action.WFWorkflowActionParameters.WFTextActionText.Value.attachmentsByRange).filter(d=>d.Type !== "Clipboard" && d.Aggrandizements && d.Aggrandizements[1]).map(d=>({coerce:d.Aggrandizements[0].CoercionItemClass,property:d.Aggrandizements[1]}))).forEach(a=>a.forEach(({coerce, property})=>{if(!resdata[coerce]){resdata[coerce]={};};resdata[coerce][property.PropertyName.toLowerCase().replace(/[^A-Za-z]/g,"")]=({name:property.PropertyName,data:property.PropertyUserInfo});})) ,{depth:null});console.log(JSON.stringify(resdata,null,"\t"));


export class Aggrandizements {
	coercionType?: CoercionTypeClass;
	getProperty?: {name: string, data?: string|number};
	getForKey?: string
	constructor() {
		this.coercionType = undefined;
		this.getProperty = undefined;
		this.getForKey = undefined;
	}
	build() {
		const aggrandizements = [];
		if(this.coercionType) {
			aggrandizements.push({CoercionItemClass: this.coercionType, Type: "WFCoercionVariableAggrandizement"});
		}
		if(this.getProperty) {
			aggrandizements.push({PropertyName: this.getProperty.name, ...(this.getProperty.data ? {PropertyUserInfo: this.getProperty.data} : {}), Type: "WFCoercionVariableAggrandizement"});
		}
		if(this.getForKey) {
			aggrandizements.push({DictionaryKey: this.getForKey, Type: "WFDictionaryValueVariableAggrandizement"});
		}
		return aggrandizements;
	}
	
	setProperty(getType: string): string | void {
		// if !this.coercionType throw error(to get a property must have coercion type. fix this by adding as:)
		getType = getType.toLowerCase().replace(/[^A-Za-z]/g, "");
		if(!this.coercionType) {return "To get a property of a variable, you must have a coercion type set. Fix this by adding `as:` to your aggrandizements dictionary.";}
		if(!isAggrandizementPropertyName(getType)) {return `${getType} is not a valid aggrandizement get type. Valid are: ${Object.keys(getTypes[this.coercionType])}.`;}
		const typeValue = getTypes[this.coercionType][getType];
		if(!typeValue) {return `${getType} is not a valid aggrandizement get type for this as. Valid are: ${Object.keys(getTypes[this.coercionType])}.`;}
		this.getProperty = typeValue;
	}
	setCoercionType(type: string): string | void {// if gettype, error
		// if !coercion type exists throw error(coercion type does not exist)
		type = type.toLowerCase().split(" ").join("");
		const coercionClass = coercionTypes[type];
		if(!coercionClass) {return (`\`${type}\` is not a valid as type. Valid are: ${Object.keys(coercionTypes).join(", ")}`);}
		if(this.getProperty || this.getForKey) {return `Cannot change as type when get property/get for key is already set.`;}
		this.coercionType = coercionClass;
	}
	setForKey(key: string): string | void {
		// if !coercion type === dictionary throw error(coercion type must be dictionary)
		if(this.coercionType !== "WFDictionaryContentItem") {return `As type must be dictionary to use key. Fix this by adding as:Dictionary.`;}
		this.getForKey = key;
	}
}

// // // // // //
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //

export class Parameter {
	constructor() {
	}
	build() {
		throw new Error("Blank parameter cannot be built");
	}
}

export class Dictionary extends Parameter {
	items: Array<{key: Parameter, value: Parameter, type: number}>
	constructor() {
		super();
		this.items = [];
	}
	add(key: Parameter, value: Parameter, type: number) { // todo why does the caller have to specify the type
		this.items.push({key, value, type});
	}
	build(): any {
		return {
			Value: {
				WFDictionaryFieldValueItems: this.items.map(({key, value, type}) => {
					return {
						WFItemType: type,
						WFKey: key.build(),
						WFValue: value instanceof Dictionary
							? {Value: value.build(), WFSerializationType: "WFDictionaryFieldValue"}
							: (value instanceof List ? {
								Value: value.build(),
								WFSerializationType: "WFArrayParameterState"
							} : value.build())
					};
				})
			},
			WFSerializationType: SERIALIZATIONTYPE.dictionaryFieldValue
		};
	}
}

export class Attachment extends Parameter {
	type: string
	aggrandizements: Aggrandizements
	constructor(type: string) {
		super();
		this.type = type;
		this.aggrandizements = new Aggrandizements();
	}
	build() {
		return {
			Type: this.type,
			Aggrandizements: this.aggrandizements.build()
		};
	}
}

export class Variable extends Attachment {
	constructor(type: string) {
		super(type);
	}
	build() {
		return Object.assign(super.build(), {});
	}
	// the function that used to be in this place was used nowhere, ignore its lies
}

export class NamedVariable extends Variable {
	varname: string
	constructor(varname: string) {
		super("Variable");
		this.varname = varname;
	}
	build() {
		return Object.assign(super.build(), {
			VariableName: this.varname
		});
	}
}

export class MagicVariable extends Variable {
	varname: string
	uuid: string
	constructor(action: Action) {
		super("ActionOutput");
		this.varname = action.magicvarname || action.name;
		this.uuid = action.uuid;
	}
	build() {
		return Object.assign(super.build(), {
			OutputName: this.varname,
			OutputUUID: this.uuid
		});
	}
}

export class List extends Parameter {
	_list: Array<Parameter>
	constructor(list: Array<Parameter>) {
		super();
		this._list = list;
	}
	build() {
		return [...this._list.map(i=>{
			if(typeof i === "string") {return i;}
			const text = i.build();
			if(typeof text === "string") {return text;}
			return {WFItemType: 0, WFValue: text};
		})];
	}
}

export class Text extends Parameter {
	_components: Array<Attachment | Text | string>
	constructor() {
		super();
		this._components = [];
	}
	get _last() {
		return this._components[this._components.length - 1];
	}
	add(...objs: Array<Attachment | Text | string>) {
		objs.forEach(obj => {
			if(obj instanceof Attachment) {
				this._components.push(obj);
				return;
			}
			if(obj instanceof Text) {
				this.add(...obj._components);
				return;
			}
			if(!(typeof obj === "string")) {throw new Error("Add type must be string, Text, or Attachment");}

			const str = obj;
			this._components.push(str);
		});

		return this;
	}
	build() {
		// if(this.components.length === 0) {return "";}
		// if(this.components.length === 1 &&  typeof this._last === "string") {
		// 	return this._last;
		// }
		const result: any = {
			attachmentsByRange: {},
			string: ""
		};
		let hasAttachments = false;
		this._components.forEach(component => {
			if(component instanceof Attachment) {
				hasAttachments = true;
				result.attachmentsByRange[`{${result.string.length}, 1}`] = component.build();
				result.string += "\uFFFC"; // special character to distinguish variables
				return;
			}
			if(typeof component === "string") {
				result.string += component;
				return;
			}
			throw new Error("Invalid component type. This should never happen.");
		});
		if(!hasAttachments) {return result.string;}
		return {
			Value: result,
			WFSerializationType: SERIALIZATIONTYPE.string
		};
	}
}

export type ParameterType = Parameter | string | number | Array<string> | boolean

export class Parameters {
	values: {[internalName: string]: any} // no one knows what values really means, it's just an any
	constructor() {
		this.values = {};
	}
	set(internalName: string, value: ParameterType) { // chainable
		if(!(value instanceof Parameter)) {
			this.values[internalName] = value;
			return this;
		}
		if(value instanceof Attachment) {
			// VALUE IS AN INSTANCEOF ATTACHMENT HOW CAN IT NOT BE BUILT
			this.values[internalName] = {
				Value: value.build(),
				WFSerializationType: SERIALIZATIONTYPE.variable
			};
			return this;
		}
		this.values[internalName] = value.build(); // how does this get called if value doesn't have a build method, all parameters have a build
		return this;
	}
	has(internalName: string) {
		return !!this.values[internalName];
	}
	get(internalName: string) {
		return this.values[internalName];
	}
	build() {
		return this.values;
	}
}

export class Action {
	name: string
	id: string
	_uuid: string | undefined
	parameters: Parameters
	magicvarname?: string
	
	start: [number, number]
	end: [number, number]
	
	constructor(start: [number, number], end: [number, number], name: string, id: string) {
		this.name = name;
		this.id = id;
		this.parameters = new Parameters();
		this.magicvarname = undefined;
		
		this.start = start;
		this.end = end;
	}
	get uuid(): string {
		if(this._uuid) {return this._uuid;}
		this._uuid = uuidv4();
		this.parameters.set("UUID", this._uuid);
		return this._uuid;
	}
	build() {
		if(this.magicvarname) {this.parameters.set("CustomOutputName", this.magicvarname);}
		return {
			WFWorkflowActionIdentifier: this.id,
			WFWorkflowActionParameters: this.parameters.build(),
			SCPLData: {Position: {start: this.start, end: this.end}}
		};
	}
}

export class Shortcut {
	name: string
	actions: Array<Action>
	constructor(name: string) {
		this.name = name;
		this.actions = [];
	}
	add(action: Action) {
		this.actions.push(action);
	}
	build() {
		return [{
			WFWorkflowClientVersion: "754",
			WFWorkflowClientRelese: "2.1.2",
			WFWorkflowMinimumClientVersion: 411,
			WFWorkflowIcon: {
				WFWorkflowIconStartColor: 2071128575,
				WFWorkflowIconImageData: Buffer.from(""),
				WFWorkflowIconGlyphNumber: 59511
			},
			WFWorkflowTypes: [
				"NCWidget",
				"WatchKit"
			],
			WFWorkflowInputContentItemClasses: ["WFAppStoreAppContentItem", "WFArticleContentItem", "WFContactContentItem", "WFDateContentItem", "WFEmailAddressContentItem", "WFGenericFileContentItem", "WFImageContentItem", "WFiTunesProductContentItem", "WFLocationContentItem", "WFDCMapsLinkContentItem", "WFAVAssetContentItem", "WFPDFContentItem", "WFPhoneNumberContentItem", "WFRichTextContentItem", "WFSafariWebPageContentItem", "WFStringContentItem", "WFURLContentItem"],
			WFWorkflowActions: this.actions.map(action => action.build())
		}];
	}
}
