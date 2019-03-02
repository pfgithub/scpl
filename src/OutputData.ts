// ========≠==========
// This file is a mess
// Enter at your own risk
// ========≠==========

import * as uuidv4 from "uuid/v4";

const type = {
	appStoreApp: "WFAppStoreAppContentItem",
	article: "WFArticleContentItem",
	boolean: "",
	contact: "WFContactContentItem",
	date: "WFDateContentItem",
	dictionary: "",
	emailAddress: "WFEmailAddressContentItem",
	file: "WFGenericFileContentItem",
	image: "WFImageContentItem",
	iTunesMedia: "",
	iTunesProduct: "WFiTunesProductContentItem",
	location: "WFLocationContentItem",
	mapsLink: "WFDCMapsLinkContentItem",
	media: "WFAVAssetContentItem",
	number: "",
	pdf: "WFPDFContentItem",
	phoneNumber: "WFPhoneNumberContentItem",
	place: "",
	richText: "WFRichTextContentItem",
	text: "WFStringContentItem",
	url: "WFURLContentItem",
	vCard: ""
};


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

const coercionTypes: {[name: string]: string} = {
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

const getTypes: {[name: string]: {name: string, value?: string | number}} = { // Copied from shrotcuts-js https://github.com/joshfarrant/shortcuts-js/blob/master/src/interfaces/Variable.ts
	// TODO getTypes should be per type rather than one big mess (to support filter files and get details of <Type> for example
	albumartist: {
		name: "Album Artist",
		value: "albumArtist"
	},
	albumartwork: {
		name: "Album Artwork",
		value: "artwork"
	},
	albumtrack: {
		name: "Album Track #",
		value: "albumTrackNumber"
	},
	album: {
		name: "Album",
		value: "albumTitle"
	},
	artist: {
		name: "Artist",
		value: "artist"
	},
	birthday: {
		name: "Birthday",
		value: 17
	},
	city: {
		name: "City",
		value: "city"
	},
	comments: {
		name: "Comments",
		value: "comments"
	},
	company: {
		name: "Company",
		value: 10
	},
	composer: {
		name: "Composer",
		value: "composer"
	},
	contactphoto: {
		name: "Contact Photo",
		value: "18446744073709550616"
	},
	country: {
		name: "Country",
		value: "country"
	},
	creationdate: {
		name: "Creation Date",
		value: "WFFileCreationDate"
	},
	dateadded: {
		name: "Date Added",
		value: "dateAdded"
	},
	department: {
		name: "Department",
		value: 11
	},
	disc: {
		name: "Disc #",
		value: "discNumber"
	},
	duration: {
		name: "Duration",
		value: "playbackDuration"
	},
	emailaddress: {
		name: "Email Address",
		value: 4
	},
	fileextension: {
		name: "File Extension",
		value: "WFFileExtensionProperty"
	},
	filesize: {
		name: "File Size",
		value: "WFFileSizeProperty"
	},
	firstname: {
		name: "First Name",
		value: 0
	},
	genre: {
		name: "Genre",
		value: "genre"
	},
	group: {
		name: "Group",
		value: "WFContactItemGroupProperty"
	},
	hasphoto: {
		name: "Has Photo",
		value: "18446744073709550615"
	},
	height: {
		name: "Height"
	},
	isclouditem: {
		name: "Is Cloud Item",
		value: "isCloudItem"
	},
	isexplicit: {
		name: "Is Explicit",
		value: "isExplicit"
	},
	jobtitle: {
		name: "Job Title",
		value: 18
	},
	lastmodifieddate: {
		name: "Last Modified Date",
		value: "WFFileModificationDate"
	},
	lastname: {
		name: "Last Name",
		value: 1
	},
	lastplayeddate: {
		name: "Last Played Date",
		value: "lastPlayedDate"
	},
	lyrics: {
		name: "Lyrics",
		value: "lyrics"
	},
	mediakind: {
		name: "Media Kind",
		value: "mediaType"
	},
	middlename: {
		name: "Middle Name",
		value: 6
	},
	name: {
		name: "Name",
		value: "WFItemName"
	},
	nickname: {
		name: "Nickname",
		value: 19
	},
	notes: {
		name: "Notes",
		value: 14
	},
	phonenumber: {
		name: "Phone Number",
		value: 3
	},
	phoneticfirstname: {
		name: "Phonetic First Name",
		value: 7
	},
	phoneticlastname: {
		name: "Phonetic Last Name",
		value: 9
	},
	phoneticmiddlename: {
		name: "Phonetic Middle Name",
		value: 8
	},
	playcount: {
		name: "Play Count",
		value: "playCount"
	},
	prefix: {
		name: "Prefix",
		value: 20
	},
	rating: {
		name: "Rating",
		value: "rating"
	},
	releasedate: {
		name: "Release Date",
		value: "releaseDate"
	},
	skipcount: {
		name: "Skip Count",
		value: "skipCount"
	},
	state: {
		name: "State",
		value: "state"
	},
	streetaddress: {
		name: "Street Address",
		value: 5
	},
	street: {
		name: "Street",
		value: "street"
	},
	suffix: {
		name: "Suffix",
		value: 21
	},
	title: {
		name: "Title",
		value: "title"
	},
	url: {
		name: "URL",
		value: 22
	},
	width: {
		name: "Width"
	},
	zipcode: {
		name: "ZIP Code",
		value: "postalCode"
	}
};

export class Aggrandizements {
	aggrandizements: Array<{Type: string, PropertyName?: string, CoercionItemClass?: string, DictionaryKey?: string, PropertyUserInfo?: string | number}> // TODO class Aggrandizement, or maybe make aggrandizement just an object with three keys
	constructor() {
		this.aggrandizements = [];
	}
	build() {
		return this.aggrandizements;
	}
	property(getType: string) {
		getType = getType.toLowerCase().split(" ").join("");
		const typeValue = getTypes[getType];
		if(!typeValue) {throw new Error(`\`${type}\` is not a valid coercion class. Valid are: ${Object.keys(getTypes).join(", ")}`);}
		this.aggrandizements.push({
			PropertyName: typeValue.name,
			...(typeValue.value ? {PropertyUserInfo: typeValue.value} : {}),
			Type: "WFPropertyVariableAggrandizement"
		});
	}
	coerce(type: string) {
		type = type.toLowerCase().split(" ").join("");
		const coercionClass = coercionTypes[type];
		if(!coercionClass) {throw new Error(`\`${type}\` is not a valid coercion class. Valid are: ${Object.keys(coercionTypes).join(", ")}`);}
		this.aggrandizements.push({
			CoercionItemClass: coercionClass,
			Type: "WFCoercionVariableAggrandizement",
		});
	}
	forKey(key: string) {
		this.aggrandizements.push({
			DictionaryKey: key,
			Type: "WFDictionaryValueVariableAggrandizement",
		});
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
	uuid: string
	parameters: Parameters
	magicvarname: string
	constructor(name: string, id: string) {
		this.name = name;
		this.id = id;
		this.uuid = uuidv4();//}
		this.parameters = new Parameters();
		this.magicvarname = undefined;
		if(this.uuid) {this.parameters.set("UUID", this.uuid);}
	}
	build() {
		if(this.magicvarname) {this.parameters.set("CustomOutputName", this.magicvarname);}
		return {
			WFWorkflowActionIdentifier: this.id,
			WFWorkflowActionParameters: this.parameters.build()
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
