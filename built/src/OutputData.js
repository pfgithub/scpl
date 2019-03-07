"use strict";
// ========≠==========
// This file is a mess
// Enter at your own risk
// ========≠==========
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4 = require("uuid/v4");
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
const SERIALIZATIONTYPE = {
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
const Types_1 = require("./WFTypes/Types");
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
const GetTypes_1 = require("./Data/GetTypes"); // resdata = {};console.dir( actionData.filter(action => action.WFWorkflowActionIdentifier === "is.workflow.actions.gettext").map(action => Object.values(action.WFWorkflowActionParameters.WFTextActionText.Value.attachmentsByRange).filter(d=>d.Type !== "Clipboard" && d.Aggrandizements && d.Aggrandizements[1]).map(d=>({coerce:d.Aggrandizements[0].CoercionItemClass,property:d.Aggrandizements[1]}))).forEach(a=>a.forEach(({coerce, property})=>{if(!resdata[coerce]){resdata[coerce]={};};resdata[coerce][property.PropertyName.toLowerCase().replace(/[^A-Za-z]/g,"")]=({name:property.PropertyName,data:property.PropertyUserInfo});})) ,{depth:null});console.log(JSON.stringify(resdata,null,"\t"));
class Aggrandizements {
    constructor() {
        this.coercionType = undefined;
        this.getProperty = undefined;
        this.getForKey = undefined;
    }
    build() {
        const aggrandizements = [];
        if (this.coercionType) {
            aggrandizements.push({ CoercionItemClass: this.coercionType, Type: "WFCoercionVariableAggrandizement" });
        }
        if (this.getProperty) {
            aggrandizements.push(Object.assign({ PropertyName: this.getProperty.name }, (this.getProperty.data ? { PropertyUserInfo: this.getProperty.data } : {}), { Type: "WFCoercionVariableAggrandizement" }));
        }
        if (this.getForKey) {
            aggrandizements.push({ DictionaryKey: this.getForKey, Type: "WFDictionaryValueVariableAggrandizement" });
        }
        return aggrandizements;
    }
    setProperty(getType) {
        // if !this.coercionType throw error(to get a property must have coercion type. fix this by adding as:)
        getType = getType.toLowerCase().replace(/[^A-Za-z]/g, "");
        if (!this.coercionType) {
            return "To get a property of a variable, you must have a coercion type set. Fix this by adding `as:` to your aggrandizements dictionary.";
        }
        if (!Types_1.isAggrandizementPropertyName(getType)) {
            return `${getType} is not a valid aggrandizement get type. Valid are: ${Object.keys(GetTypes_1.default[this.coercionType])}.`;
        }
        const typeValue = GetTypes_1.default[this.coercionType][getType];
        if (!typeValue) {
            return `${getType} is not a valid aggrandizement get type for this as. Valid are: ${Object.keys(GetTypes_1.default[this.coercionType])}.`;
        }
        this.getProperty = typeValue;
    }
    setCoercionType(type) {
        // if !coercion type exists throw error(coercion type does not exist)
        type = type.toLowerCase().split(" ").join("");
        const coercionClass = coercionTypes[type];
        if (!coercionClass) {
            return (`\`${type}\` is not a valid as type. Valid are: ${Object.keys(coercionTypes).join(", ")}`);
        }
        if (this.getProperty || this.getForKey) {
            return `Cannot change as type when get property/get for key is already set.`;
        }
        this.coercionType = coercionClass;
    }
    setForKey(key) {
        // if !coercion type === dictionary throw error(coercion type must be dictionary)
        if (this.coercionType !== "WFDictionaryContentItem") {
            return `As type must be dictionary to use key. Fix this by adding as:Dictionary.`;
        }
        this.getForKey = key;
    }
}
exports.Aggrandizements = Aggrandizements;
// // // // // //
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
class Parameter {
    constructor() {
    }
    build() {
        throw new Error("Blank parameter cannot be built");
    }
}
exports.Parameter = Parameter;
class Dictionary extends Parameter {
    constructor() {
        super();
        this.items = [];
    }
    add(key, value, type) {
        this.items.push({ key, value, type });
    }
    build() {
        return {
            Value: {
                WFDictionaryFieldValueItems: this.items.map(({ key, value, type }) => {
                    return {
                        WFItemType: type,
                        WFKey: key.build(),
                        WFValue: value instanceof Dictionary
                            ? { Value: value.build(), WFSerializationType: "WFDictionaryFieldValue" }
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
exports.Dictionary = Dictionary;
class Attachment extends Parameter {
    constructor(type) {
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
exports.Attachment = Attachment;
class Variable extends Attachment {
    constructor(type) {
        super(type);
    }
    build() {
        return Object.assign(super.build(), {});
    }
}
exports.Variable = Variable;
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
exports.NamedVariable = NamedVariable;
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
exports.MagicVariable = MagicVariable;
class List extends Parameter {
    constructor(list) {
        super();
        this._list = list;
    }
    build() {
        return [...this._list.map(i => {
                if (typeof i === "string") {
                    return i;
                }
                const text = i.build();
                if (typeof text === "string") {
                    return text;
                }
                return { WFItemType: 0, WFValue: text };
            })];
    }
}
exports.List = List;
class Text extends Parameter {
    constructor() {
        super();
        this._components = [];
    }
    get _last() {
        return this._components[this._components.length - 1];
    }
    add(...objs) {
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
            if (component instanceof Attachment) {
                hasAttachments = true;
                result.attachmentsByRange[`{${result.string.length}, 1}`] = component.build();
                result.string += "\uFFFC"; // special character to distinguish variables
                return;
            }
            if (typeof component === "string") {
                result.string += component;
                return;
            }
            throw new Error("Invalid component type. This should never happen.");
        });
        if (!hasAttachments) {
            return result.string;
        }
        return {
            Value: result,
            WFSerializationType: SERIALIZATIONTYPE.string
        };
    }
}
exports.Text = Text;
class Parameters {
    constructor() {
        this.values = {};
    }
    set(internalName, value) {
        if (!(value instanceof Parameter)) {
            this.values[internalName] = value;
            return this;
        }
        if (value instanceof Attachment) {
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
exports.Parameters = Parameters;
class Action {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.uuid = uuidv4(); //}
        this.parameters = new Parameters();
        this.magicvarname = undefined;
        if (this.uuid) {
            this.parameters.set("UUID", this.uuid);
        }
    }
    build() {
        if (this.magicvarname) {
            this.parameters.set("CustomOutputName", this.magicvarname);
        }
        return {
            WFWorkflowActionIdentifier: this.id,
            WFWorkflowActionParameters: this.parameters.build()
        };
    }
}
exports.Action = Action;
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
exports.Shortcut = Shortcut;
