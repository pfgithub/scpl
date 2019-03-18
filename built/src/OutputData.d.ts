/// <reference types="node" />
import { CoercionTypeClass } from "./WFTypes/Types";
declare type WFAggrandizements = [{
    Type: "WFCoercionVariableAggrandizement";
    CoercionItemClass: CoercionTypeClass;
}?, {
    Type: "WFPropertyVariableAggrandizement";
    PropertyName: string;
    PropertyUserInfo?: string | number;
}?, {
    Type: "WFDictionaryValueVariableAggrandizement";
    DictionaryKey: string;
}?];
export declare class Aggrandizements {
    coercionType?: CoercionTypeClass;
    getProperty?: {
        name: string;
        data?: string | number;
    };
    getForKey?: string;
    constructor();
    build(): WFAggrandizements;
    setProperty(getType: string): string | void;
    setCoercionType(type: string): string | void;
    setForKey(key: string): string | void;
}
declare type WFParameter = WFDictionaryParameter | WFAttachmentParameter | WFListParameter | WFTextParameter | string | boolean | number | string[];
export declare class Parameter {
    constructor();
    build(): WFParameter;
}
declare type DictionaryFieldValueItem = {
    WFItemType: 1;
    WFKey: WFTextParameter;
    WFValue: {
        Value: WFDictionaryParameter;
        WFSerializationType: "WFDictionaryFieldValue";
    };
} | {
    WFItemType: 2;
    WFKey: WFTextParameter;
    WFValue: {
        Value: WFListParameter;
        WFSerializationType: "WFArrayParameterState";
    };
} | {
    WFItemType: 0;
    WFKey: WFTextParameter;
    WFValue: WFParameter;
};
declare type WFDictionaryParameter = {
    Value: {
        WFDictionaryFieldValueItems: DictionaryFieldValueItem[];
    };
    WFSerializationType: "WFDictionaryFieldValue";
};
export declare class Dictionary extends Parameter {
    items: Array<{
        key: Text;
        value: Parameter;
    }>;
    constructor();
    add(key: Text, value: Parameter): void;
    build(): WFDictionaryParameter;
}
declare type WFAttachmentData = {
    Type: string;
    Aggrandizements: WFAggrandizements;
} | {
    Type: string;
    Aggrandizements: WFAggrandizements;
    VariableName: string;
} | {
    Type: string;
    Aggrandizements: WFAggrandizements;
    OutputName: string;
    OutputUUID: string;
};
declare type WFAttachmentParameter = {
    Value: WFAttachmentData;
    WFSerializationType: "WFTextTokenAttachment";
};
export declare type AttachmentType = "Clipboard" | "Ask" | "CurrentDate" | "ExtensionInput" | "Input" | "Variable" | "ActionOutput";
export declare class Attachment extends Parameter {
    type: AttachmentType;
    aggrandizements: Aggrandizements;
    constructor(type: AttachmentType);
    build(): WFAttachmentParameter;
}
declare type VariableType = "Variable" | "ActionOutput";
export declare class Variable extends Attachment {
    constructor(type: VariableType);
    build(): WFAttachmentParameter;
}
export declare class NamedVariable extends Variable {
    varname: string;
    constructor(varname: string);
    build(): WFAttachmentParameter;
}
export declare class MagicVariable extends Variable {
    varname: string;
    uuid: string;
    constructor(action: Action);
    build(): WFAttachmentParameter;
}
declare type WFListParameter = Array<string | {
    WFItemType: number;
    WFValue: WFTextWithAttachments;
}>;
export declare class List extends Parameter {
    _list: Array<Text>;
    constructor(list: Array<Text>);
    build(): WFListParameter;
}
declare type WFTextValue = {
    attachmentsByRange: {
        [key: string]: WFAttachmentData;
    };
    string: string;
};
declare type WFTextWithAttachments = {
    Value: WFTextValue;
    WFSerializationType: "WFTextTokenString";
};
declare type WFTextParameter = string | WFTextWithAttachments;
export declare class Text extends Parameter {
    _components: Array<Attachment | string>;
    constructor();
    components(): Array<Attachment | string>;
    readonly _last: string | Attachment;
    add(...objs: Array<Attachment | Text | string>): this;
    build(): WFTextParameter;
}
export declare type ParameterType = Parameter | string | number | Array<string> | boolean;
declare type WFParameters = {
    [key: string]: WFParameter;
};
export declare class Parameters {
    values: {
        [internalName: string]: WFParameter;
    };
    constructor();
    static inverse(data: WFParameters): Parameters;
    set(internalName: string, value: ParameterType): this;
    has(internalName: string): boolean;
    get(internalName: string): WFParameter;
    build(): WFParameters;
}
declare type WFAction = {
    WFWorkflowActionIdentifier: string;
    WFWorkflowActionParameters?: WFParameters;
    SCPLData?: {
        Position: {
            start: [number, number];
            end: [number, number];
        };
    };
};
export declare class Action {
    name: string;
    id: string;
    parameters: Parameters;
    magicvarname?: string;
    start?: [number, number];
    end?: [number, number];
    constructor(start: [number, number] | undefined, end: [number, number] | undefined, name: string, id: string);
    static inverse(data: WFAction): Action;
    readonly uuid: string;
    build(): WFAction;
}
declare type ExtensionInputContentItemClass = "WFAppStoreAppContentItem" | "WFArticleContentItem" | "WFContactContentItem" | "WFDateContentItem" | "WFEmailAddressContentItem" | "WFGenericFileContentItem" | "WFImageContentItem" | "WFiTunesProductContentItem" | "WFLocationContentItem" | "WFDCMapsLinkContentItem" | "WFAVAssetContentItem" | "WFPDFContentItem" | "WFPhoneNumberContentItem" | "WFRichTextContentItem" | "WFSafariWebPageContentItem" | "WFStringContentItem" | "WFURLContentItem";
declare type WorkflowTypes = "NCWidget" | "WatchKit";
declare type WFShortcut = [{
    WFWorkflowClientVersion: string;
    WFWorkflowClientRelese: string;
    WFWorkflowMinimumClientVersion: number;
    WFWorkflowIcon: {
        WFWorkflowIconStartColor: number;
        WFWorkflowIconImageData: Buffer;
        WFWorkflowIconGlyphNumber: number;
    };
    WFWorkflowTypes: WorkflowTypes[];
    WFWorkflowInputContentItemClasses: ExtensionInputContentItemClass[];
    WFWorkflowActions: WFAction[];
}];
export declare class Shortcut {
    name: string;
    actions: Array<Action>;
    constructor(name: string);
    add(action: Action): void;
    build(): WFShortcut;
}
export {};
