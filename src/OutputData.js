// ========≠==========
// This file is a mess
// Enter at your own risk
// ========≠==========

const uuidv4 = require("uuid/v4");
const bplistc = require("bplist-creator");

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

const inputType = {
	appStoreApp: "WFAppStoreAppContentItem",
	article: "WFArticleContentItem",
	contact: "WFContactContentItem",
	date: "WFDateContentItem",
	emailAddress: "WFEmailAddressContentItem",
	file: "WFGenericFileContentItem",
	image: "WFImageContentItem",
	iTunesProduct: "WFiTunesProductContentItem",
	location: "WFLocationContentItem",
	mapsLink: "WFDCMapsLinkContentItem",
	media: "WFAVAssetContentItem",
	pdf: "WFPDFContentItem",
	phoneNumber: "WFPhoneNumberContentItem",
	richText: "WFRichTextContentItem",
	safariWebpage: "WFSafariWebPageContentItem", // only available in inputType
	text: "WFStringContentItem",
	url: "WFURLContentItem"
};

const typesall = { // future, for now type will be used and inputtypes will not be supported
	safariWebpage: {
		coercion: false,
		inputType: true
	},
	contact: {
		get: ["name", "a", "b", "c", "d", "e", "f"] // ...
	}
};

// DisplayType would be a better name maybe
const SERIALIZATIONTYPE = { // how a value will be rendered in shortcuts, forex variables are texttokenattachments
	variable: "WFTextTokenAttachment",
	string: "WFTextTokenString",
	dictionaryFieldValue: "WFDictionaryFieldValue"
};

/*

SERIALIZATION TYPES
...................
/*rialization typ*/
//rialization typ//
/*rialization typ*/

class Aggrandizement {}
class CoercionAggrandizement extends Aggrandizement {}
class DictionaryKeyAggrandizement extends Aggrandizement {}
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

const coercionTypes = {
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

const getTypes = { // Copied from shrotcuts-js https://github.com/joshfarrant/shortcuts-js/blob/master/src/interfaces/Variable.ts
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

class Aggrandizements {
	constructor() {
		this.aggrandizements = [];
		this.coersionClass = undefined;
	}
	build() {
		const aggrandizements = [];
		return this.aggrandizements;
	}
	property(getType) {
		getType = getType.toLowerCase().split` `.join``;
		const typeValue = getTypes[getType];
		if(!typeValue) {throw new Error(`\`${type}\` is not a valid coercion class. Valid are: ${Object.keys(getTypes).join`, `}`);}
		this.aggrandizements.push({
			PropertyName: typeValue.name,
			...(typeValue.value ? {PropertyUserInfo: typeValue.value} : {}),
			Type: "WFPropertyVariableAggrandizement"
		});
	}
	coerce(type) {
		type = type.toLowerCase().split` `.join``;
		const coercionClass = coercionTypes[type];
		if(!coercionClass) {throw new Error(`\`${type}\` is not a valid coercion class. Valid are: ${Object.keys(coercionTypes).join`, `}`);}
		this.aggrandizements.push({
			CoercionItemClass: coercionClass,
			Type: "WFCoercionVariableAggrandizement",
		});
	}
	forKey(key) {
		this.aggrandizements.push({
			DictionaryKey: key,
			Type: "WFDictionaryValueVariableAggrandizement",
		});
	}
}

// // // // // //
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //

class Parameter {
	constructor(serializationType) {
		this.serializationType = serializationType;
	}
}

class Dictionary extends Parameter {
	constructor() {
		super(SERIALIZATIONTYPE.dictionaryFieldValue);
		this.items = [];
	}
	add(key, value, type) {
		if(!(key instanceof Parameter)) {throw new Error("Key must be a Parameter");}
		if(!(value instanceof Parameter)) {throw new Error("Value must be a Parameter");}

		this.items.push({key, value, type});
	}
	build() {
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

class Attachment extends Parameter { // THINGS TO NOTE; ASK WHEN RUN IS THE ONLY ATTACHMENT THAT DOES NOT HAVE AGGRANDIZEMENTS
	constructor(type) {
		super(SERIALIZATIONTYPE.variable);
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
//Attachment Types
//
//Clipboard (s:clipboard)
//Ask (s:askwhenrun)
//CurrentDate (s:currentdate)
//ExtensionInput (s:shortcutinput)

// Variables are officially called "Attachments" in shortcuts
// Additionally, inside of "attachmentsByRange" a serializationtype is not necessary, it is known to be an attachment because it's in an attachments section.
class Variable extends Attachment { // TODO variables don't serialize by default, support getvar actions
	constructor(type) {
		super(type);
	}
	build() {
		return Object.assign(super.build(), {});
	}
	// @override
	buildForParameter() { // Used in Get Variable
		return {
			Value: this.build(),
			WFSerializationType: "WFTextTokenAttachment"
		};
	}
}

class NamedVariable extends Variable {
	constructor(varname) {
		super("Variable");
		this.varname = varname;
	}
	build() {
		return Object.assign(super.build(), {
			VariableName: this.varname
		});
	}
}

class MagicVariable extends Variable {
	constructor(action) {
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

class List extends Parameter {
	constructor(list) { // list is parameter[]
		super(SERIALIZATIONTYPE.string);
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

class Text extends Parameter {
	constructor(options = {}) {
		super(SERIALIZATIONTYPE.string);
		this._components = [];
		this.options = {};
	}
	get _last() {
		return this._components[this._components.length - 1];
	}
	add(...objs) {
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
		const result = {
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
/*
Text:
Either it becomes a Value,SerializationType or it becomes a ""
but....
I think that's it


 */


class Parameters {
	constructor() {
		this.values = {};
	}
	set(internalName, value) { // chainable
		if(!(value instanceof Parameter)) {
			this.values[internalName] = value;
			return this;
		}
		if(value instanceof Attachment) {
			this.values[internalName] = {
				Value: value.build(),
				WFSerializationType: SERIALIZATIONTYPE.variable
			};
			return this;
		}
		this.values[internalName] = value.build();
		return this;
	}
	has(internalName) {
		return !!this.values[internalName];
	}
	get(internalName) {
		return this.values[internalName];
	}
	build() {
		return this.values;
	}
}

class Action {
	constructor(name, id, info) { //
		this.name = name; // used in magic vars
		this.id = id;
		this.info = info;
		// Disabling the options.hasuuid thing for now, we're pretending every
		// action has a uuid.
		//if(options.hasUUID === undefined || options.hasUUID) {
		this.uuid = uuidv4();//}
		this.parameters = new Parameters();
		this.actionsAbove = []; // TODO !!!
		this.actionsBelow = []; // TODO !!!
		this.magicvarname = undefined;
		if(this.uuid) {this.parameters.set("UUID", this.uuid);}
	}
	get variable() {
		if(this.inputIsOutput) {
			// this probably doesn't matter
			// shortcuts will just have to deal
			// with it
		}
		if(this.isVariable) {
			// if it's like a Set Variable acition
			// those have no magic var
		}
		return new MagicVariable(this);
	}
	build() {
		if(this.magicvarname) {this.parameters.set("CustomOutputName", this.magicvarname);}
		return {
			WFWorkflowActionIdentifier: this.id,
			WFWorkflowActionParameters: this.parameters.build()
		};
	}
}

class Shortcut {
	constructor(name) {
		this.name = name;
		this.actions = [];
	}
	add(action) {
		this.actions.push(action);
	}
	build() {
		return [{
			WFWorkflowClientVersion: "754",
			WFWorkflowClientRelese: "2.1.2",
			WFWorkflowMinimumClientVersion: 411,
			WFWorkflowIcon: { // TODO shortcut.seticon and icon classes and @icon{}
				WFWorkflowIconStartColor: 2071128575,
				WFWorkflowIconImageData: Buffer.from(""),
				WFWorkflowIconGlyphNumber: 59511
			},
			WFWorkflowImportQuestions: [],
			// TODO action.setImportQuestion
			// this.actions.filter(action=>action.importQuestion)
			// .shortcuts: Text @importquestion{question: "how are you"}
			// (more investigation needed, import questions are usually on)
			// (specific fields                                           )
			WFWorkflowTypes: [
				"NCWidget",
				"WatchKit"
			],
			WFWorkflowInputContentItemClasses: ["WFAppStoreAppContentItem", "WFArticleContentItem", "WFContactContentItem", "WFDateContentItem", "WFEmailAddressContentItem", "WFGenericFileContentItem", "WFImageContentItem", "WFiTunesProductContentItem", "WFLocationContentItem", "WFDCMapsLinkContentItem", "WFAVAssetContentItem", "WFPDFContentItem", "WFPhoneNumberContentItem", "WFRichTextContentItem", "WFSafariWebPageContentItem", "WFStringContentItem", "WFURLContentItem"],
			// TODO
			// shortcut.settings.acceptsTypes
			// @accepts{types:[appstoreapp, article, url]}
			WFWorkflowActions: this.actions.map(action => action.build())
		}];
	}
}

module.exports = {Shortcut, Action, Parameters, Text, MagicVariable, NamedVariable, Variable, Attachment, Dictionary, Parameter, Aggrandizements, DictionaryKeyAggrandizement, CoercionAggrandizement, Aggrandizement, List};

/*

let varnames = {

};

// Comment


// TODO
// ACTINFO WILL BE REMOVED
// INSTEAD ACTIONS WILL BE DEFINED WITH @macros

let actinfo = {
	text: {
		name: "Text",
		id: "is.workflow.actions.gettext",
		args: [
			{
				parseas: "text",
				id: "WFTextActionText"
			}
		]
	},
	comment: {
		name: "Comment",
		id: "is.workflow.actions.comment",
		args: [
			{
				parseas: "text",
				id: "WFCommentActionText"
			}
		]
	},
	choosefromlist: {
		name: "Choose From List",
		id: "is.workflow.actions.choosefromlist",
		args: [
			{
				parseas: "input"
			},
			{
				parseas: "text",
				id: "WFChooseFromListActionPrompt"
			}
		]
	}
};
let parseasinfo = {
	text: (shortcut, arg) => {
		let result = new Text();
		if(typeof arg === "string") {return result.add(arg);}
		if(arg.type !== "string") {throw new Error("Cannot convert argument to text");}
		arg.value.forEach(val => {
			if(val.type === "str") {
				result.add(val.value);
			}else if(val.type === "interpolation") {
				if(val.value.type === "variable") {
					result.add(varparse(val.value));
				}else{
					let action = tatoact(shortcut, val.value);
					result.add(action.variable);
				}
			}else{ // TIME FOR THIS
				throw new Error(`Invalid type ${val.type}`);
			}
		});
		return result;
	}
};

function varparse(actdata) {
	let variable;
	if(actdata.vartype === "v") {
		variable = new NamedVariable(actdata.name);
	}else if(actdata.vartype === "mv") {
		let mvact = varnames[actdata.name];
		if(!mvact) {throw new Error(`mv:${actdata.name} is not defined`);}
		variable = new MagicVariable(mvact);
	}else if(actdata.vartype === "s") {
		let attachtype = {clipboard: "Clipboard", askwhenrun: "Ask", currentDate: "CurrentDate", extensionInput: "ExtensionInput"};
		variable = new Attachment(attachtype[actdata.name] || (_=>{throw new Error(`Invalid special variable type ${actdata.name} valid are ${Object.keys(attachtype)}`);})());
		//Clipboard (s:clipboard)
		//Ask (s:askwhenrun)
		//CurrentDate (s:currentdate)
		//ExtensionInput (s:shortcutinput)
	}else{
		throw new Error(`Invalid dalnjdncavartype ${actdata.vartype}`);
	}
	return variable;
}

function tatoact(shortcut, actdata) {
	if(actdata.type === "variable") {
		let variable = varparse(actdata);
		let getVariableAction = new Action("Get Variable", "is.workflow.actions.getvariable");
		getVariableAction.parameters.set("WFVariable", variable);
		shortcut.add(getVariableAction);
		return getVariableAction;
	}

	let {action: actionType, args: actionArgs} = actdata;
	let convdata = actinfo[actionType];
	if(!convdata) {
		// actinfo.defaultAction;
		throw new Error("Unknown action type");
	}
	// if(!convdata) {throw new Error(`Invalid action type ${actionType}. Valid are ${Object.keys(actinfo).join`, `}`);}

	let action = new Action(convdata.name, convdata.id);
	let inputAction;
	convdata.args.forEach((arginfo, i) => {
		let arg = actionArgs[i];
		if(arginfo.parseas === "input") {
			inputAction = arg;
		}else{
			action.parameters.set(arginfo.id, parseasinfo[arginfo.parseas](shortcut, arg));
		}
	});
	if(inputAction) {
		tatoact(shortcut, inputAction);
	}
	shortcut.add(action);
	if(actdata.variable) {
		// special
		let variable = actdata.variable;
		if(variable.vartype === "v") {
			let setVariableAction = new Action("Set Variable", "is.workflow.actions.setvariable");
			setVariableAction.parameters.set("WFVariableName", variable.name);
			shortcut.add(setVariableAction);
		}else if(variable.vartype === "mv") {
			if(varnames[variable.name]) {
				throw new Error("Magic variables can only be set once");
			}
			varnames[variable.name] = action;
		}else{
			throw new Error("Actions can only be set to named or magic variables");
		}
	}
	return action;
}

const [inputfile, outputfile] = process.argv.slice(2);

let inputdata = fs.readFileSync(inputfile, "UTF8");

let myShortcut = new Shortcut("My Shortcut");

function throws parseString(shortcut, string, {interpolationsAllowed = true}) {
	if(!interpolationsAllowed) {
		if(typeof string === "string") {
			return string;
		}
		if(string.type === "string") {
			let builtString = "";
			string.value.forEach(elem => {
				if(elem.type === "str") {
					return builtString += elem.value;
				}
				throw new Error("Interpolations are not allowed in this string.");
			});
		}
		throw new Error("Not a string");
	}
	if(typeof string === "string") {
		return (new Text()).add(string);
	}
	let restext = new Text;
	if(string.type === "string") {
		string.value.forEach(elem => {
			if(elem.type === "str") {
				return restext.add(elem.value);
			}
			throw new Error("Interpolations are not yet implemented.");
		});
	}
	throw new Error("Not a string");
}

function toAction(shortcut, data) {
	let actionName = data.action;
	if(actionName.indexOf("is.workflow") === -1) {
		throw new Error("TBD. Action names are not supported yet.");
	}
	let action = new Action("Unknown Action", actionName);
	let dictArg = action.args[0];
	if(dictArg.type !== "dictionary") {throw new Error("First argument to a raw action must be a dictionary.");}


	dictArg.data.forEach(({key, value}) => {
		action.parameters.set(parseString(key, {interpolationsAllowed: false}), parseString(value));
	});
}

let actions = JSON.parse(inputdata); // <is an array of actions>
actions.forEach(action => {
	tatoact(myShortcut, action);
});

fs.writeFileSync(outputfile, bplistc(myShortcut.build()));

*/

/*
let myShortcut = new Shortcut("My Shortcut");

let myCommentAction = new Action("Comment", "is.workflow.actions.comment");
myCommentAction.parameters.set("WFCommentActionText", (new Text).add("This is a demo to diff. Also it copied."));
myShortcut.add(myCommentAction);

let myAskAction = new Action("Ask for Input", "is.workflow.actions.ask");
myAskAction.parameters.set("WFAskActionPrompt", "q");
myAskAction.parameters.set("WFAskActionDefaultAnswer", "");
myShortcut.add(myAskAction);
//

// throw new Error("end");

// let lastVar = myShortcut.lastVariable;

let myTextAction = new Action("Text", "is.workflow.actions.gettext");
let myText = (new Text);
myText.add("hola como estas\n");
myText.add(myAskAction.variable);
myText.add(";");
myText.add(new Attachment("Ask"));
myText.add(new Attachment("Clipboard"));
myText.add(new Attachment("CurrentDate"));
myText.add(new Attachment("ExtensionInput"));
myTextAction.parameters.set("WFTextActionText", myText);
myShortcut.add(myTextAction);

console.log(myShortcut.build()); //eslint-disable-line no-console

// Shortcuts may have buffers and other special bplist values, so they will be converted right here rather than >json>bplist
fs.writeFileSync(`${__dirname}/democut.shortcut`, bplistc(myShortcut.build()));

// Things that are still todo
// Aggrandizements
// More
*/
