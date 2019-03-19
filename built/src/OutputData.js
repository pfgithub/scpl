"use strict";
// ========≠==========
// This file is a mess
// Enter at your own risk
// ========≠==========
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4 = require("uuid/v4");
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
exports.inverseCoercionTypes = {
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
const GetTypes_1 = require("./Data/GetTypes"); // resdata = {};console.dir( actionData.filter(action => action.WFWorkflowActionIdentifier === "is.workflow.actions.gettext").map(action => Object.values(action.WFWorkflowActionParameters.WFTextActionText.Value.attachmentsByRange).filter(d=>d.Type !== "Clipboard" && d.Aggrandizements && d.Aggrandizements[1]).map(d=>({coerce:d.Aggrandizements[0].CoercionItemClass,property:d.Aggrandizements[1]}))).forEach(a=>a.forEach(({coerce, property})=>{if(!resdata[coerce]){resdata[coerce]={};};resdata[coerce][property.PropertyName.toLowerCase().replace(/[^A-Za-z]/g,"")]=({name:property.PropertyName,data:property.PropertyUserInfo});})) ,{depth:null});console.log(JSON.stringify(resdata,null,"\t"));
class Aggrandizements {
    constructor() {
        this.coercionType = undefined;
        this.getProperty = undefined;
        this.getForKey = undefined;
    }
    static inverse(data) {
        const res = new Aggrandizements;
        data.forEach(aggrandizement => {
            if (aggrandizement.Type === "WFCoercionVariableAggrandizement") {
                res.coercionType = aggrandizement.CoercionItemClass;
                return;
            }
            if (aggrandizement.Type === "WFPropertyVariableAggrandizement") {
                res.getProperty = { name: aggrandizement.PropertyName, data: aggrandizement.PropertyUserInfo };
                return;
            }
            if (aggrandizement.Type === "WFDictionaryValueVariableAggrandizement") {
                res.getForKey = aggrandizement.DictionaryKey;
                return;
            }
        });
        return res;
    }
    build() {
        const aggrandizements = [];
        if (this.coercionType) {
            aggrandizements.push({ CoercionItemClass: this.coercionType, Type: "WFCoercionVariableAggrandizement" });
        }
        if (this.getProperty) {
            aggrandizements.push(Object.assign({ PropertyName: this.getProperty.name }, (this.getProperty.data ? { PropertyUserInfo: this.getProperty.data } : {}), { Type: "WFPropertyVariableAggrandizement" }));
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
    add(key, value) {
        this.items.push({ key, value });
    }
    build() {
        return {
            Value: {
                WFDictionaryFieldValueItems: this.items.map(({ key, value }) => {
                    if (value instanceof Dictionary) {
                        // For unknown reasons, an extra serializationtype is needed on dictionaries
                        return {
                            WFItemType: 1,
                            WFKey: key.build(),
                            WFValue: { Value: value.build(), WFSerializationType: "WFDictionaryFieldValue" }
                        };
                    }
                    if (value instanceof List) {
                        // For unknown reasons, an extra serializationtype is needed on lists
                        return {
                            WFItemType: 2,
                            WFKey: key.build(),
                            WFValue: { Value: value.build(), WFSerializationType: "WFArrayParameterState" }
                        };
                    }
                    // For unknown reasons, an extra serializationtype is not needed on text and other parameters
                    return {
                        WFItemType: 0,
                        WFKey: key.build(),
                        WFValue: value.build()
                    };
                })
            },
            WFSerializationType: "WFDictionaryFieldValue"
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
    static inverse(value) {
        let result;
        if (value.Value.Type === "Variable") {
            result = NamedVariable.inverse(value);
        }
        else if (value.Value.Type === "ActionOutput") {
            result = MagicVariable.inverse(value);
        }
        else {
            result = new Attachment(value.Value.Type);
        }
        if (value.Value.Aggrandizements) {
            result.aggrandizements = Aggrandizements.inverse(value.Value.Aggrandizements);
        }
        return result;
    }
    build() {
        return {
            Value: {
                Type: this.type,
                Aggrandizements: this.aggrandizements.build()
            },
            WFSerializationType: "WFTextTokenAttachment"
        };
    }
}
exports.Attachment = Attachment;
class Variable extends Attachment {
    constructor(type) {
        super(type);
    }
    build() {
        const sb = super.build();
        return sb;
    }
}
exports.Variable = Variable;
class NamedVariable extends Variable {
    constructor(varname) {
        super("Variable");
        this.varname = varname;
    }
    static inverse(data) {
        return new NamedVariable(data.Value.VariableName);
    }
    build() {
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
exports.NamedVariable = NamedVariable;
class MagicVariable extends Variable {
    constructor(...args) {
        super("ActionOutput");
        if (args[0] instanceof Action) {
            this.varname = args[0].magicvarname || args[0].name;
            this.uuid = args[0].uuid;
        }
        else if (typeof args[1] === "string") {
            this.varname = args[0];
            this.uuid = args[1];
        }
        else {
            throw new Error("This is not possible.");
        }
    }
    static inverse(data) {
        return new MagicVariable(data.Value.OutputName, data.Value.OutputUUID);
    }
    build() {
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
exports.MagicVariable = MagicVariable;
class List extends Parameter {
    constructor(list) {
        super();
        this._list = list;
    }
    getItems() { return this._list; }
    build() {
        return this._list.map(i => {
            const text = i.build();
            if (typeof text === "string") {
                return text;
            }
            return { WFItemType: 0, WFValue: text };
        });
    }
}
exports.List = List;
class Text extends Parameter {
    constructor() {
        super();
        this._components = [];
    }
    static inverse(data) {
        const res = new Text;
        if (typeof data === "string") {
        }
        else {
            let strPosition = 0;
            data.Value.string.split("\uFFFC").forEach(textPart => {
                res.add(textPart);
                strPosition += textPart.length;
                // get variable part
                const attachment = data.Value.attachmentsByRange[`{${strPosition}, 1}`];
                strPosition++;
                if (!attachment) {
                    return;
                }
                res.add(toParam({
                    WFSerializationType: "WFTextTokenAttachment",
                    Value: attachment
                }));
                // res.add variable part
            });
        }
        return res;
    }
    components() {
        return this._components;
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
            if (obj.length === 0) {
                return;
            } // nothing to add
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
                result.attachmentsByRange[`{${result.string.length}, 1}`] = component.build().Value;
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
            WFSerializationType: "WFTextTokenString"
        };
    }
}
exports.Text = Text;
class ErrorParameter extends Parameter {
}
exports.ErrorParameter = ErrorParameter;
function toParam(value) {
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
        return new ErrorParameter;
    }
    if (value.WFSerializationType === "WFTextTokenString") {
        return Text.inverse(value);
    }
    if (value.WFSerializationType === "WFTextTokenAttachment") {
        return Attachment.inverse(value);
    }
    return new ErrorParameter;
}
exports.toParam = toParam;
class Parameters {
    constructor() {
        this.values = {};
    }
    static inverse(data) {
        const parameters = new Parameters();
        Object.keys(data).forEach((paramkey) => {
            parameters.set(paramkey, toParam(data[paramkey]));
        });
        return parameters;
    }
    set(internalName, value) {
        if (!(value instanceof Parameter)) {
            this.values[internalName] = value;
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
exports.Parameters = Parameters;
class Action {
    constructor(start, end, name, id) {
        this.name = name;
        this.id = id;
        this.parameters = new Parameters();
        this.magicvarname = undefined;
        this.start = start;
        this.end = end;
    }
    static inverse(data) {
        const action = new Action(undefined, undefined, "??unnamed??", data.WFWorkflowActionIdentifier);
        action.parameters = Parameters.inverse(data.WFWorkflowActionParameters || {});
        return action;
    }
    get uuid() {
        if (this.parameters.has("UUID")) {
            return this.parameters.get("UUID");
        }
        this.parameters.set("UUID", uuidv4());
        return this.parameters.get("UUID");
    }
    build() {
        if (this.magicvarname) {
            this.parameters.set("CustomOutputName", this.magicvarname);
        }
        const res = {
            WFWorkflowActionIdentifier: this.id,
            WFWorkflowActionParameters: this.parameters.build()
        };
        if (this.start && this.end) {
            res.SCPLData = { Position: { start: this.start, end: this.end } };
        }
        return res;
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
    static inverse(data) {
        const shortcut = new Shortcut("inverse");
        data[0].WFWorkflowActions.forEach(action => { shortcut.add(Action.inverse(action)); });
        return shortcut;
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
