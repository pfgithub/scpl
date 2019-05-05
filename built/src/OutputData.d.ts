/// <reference types="node" />
import { CoercionTypeClass, AggrandizementPropertyRawName, AggrandizementPropertyName } from "./WFTypes/Types";
import { ComparisonName, ComparisonWFValue } from "./Data/GetTypes";
export declare const inverseCoercionTypes: {
    [name in CoercionTypeClass]: string;
};
declare type WFAggrandizements = ({
    Type: "WFCoercionVariableAggrandizement";
    CoercionItemClass: CoercionTypeClass;
} | {
    Type: "WFPropertyVariableAggrandizement";
    PropertyName: string;
    PropertyUserInfo?: string | number;
} | {
    Type: "WFDictionaryValueVariableAggrandizement";
    DictionaryKey: string;
})[];
export declare class Aggrandizements {
    coercionType?: CoercionTypeClass;
    getProperty?: {
        name: string;
        data?: string | number;
    };
    getForKey?: string;
    constructor();
    static inverse(data: WFAggrandizements): Aggrandizements;
    build(): WFAggrandizements;
    setProperty(getType: string): string | void;
    setCoercionType(type: string): string | void;
    setForKey(key: string): string | void;
}
declare class Parameter {
    constructor();
    build(): WFParameter;
    static inverse(_data: WFParameter): Parameter;
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
    WFValue: WFTextParameter;
} | {
    WFItemType: -1;
    WFKey: WFTextParameter;
} | {
    WFItemType: 3;
    WFKey: WFTextParameter;
    WFValue: number;
};
declare type WFDictionaryParameter = {
    Value: {
        WFDictionaryFieldValueItems: DictionaryFieldValueItem[];
    };
    WFSerializationType: "WFDictionaryFieldValue";
};
declare type WFContentItemFilter = {
    Value: {
        WFActionParameterFilterPrefix: 1;
        WFActionParameterFilterTemplates: WFContentItemFilterItem[];
    };
    WFSerializationType: "WFContentPredicateTableTemplate";
};
declare type WFContentItemFilterItemBase = {
    Operator: ComparisonWFValue;
    Property: AggrandizementPropertyRawName;
    Removable: true;
    Unit: number;
    VariableOverrides: {};
};
interface WFContentItemFilterItemBaseString extends WFContentItemFilterItemBase {
    String: string;
}
interface WFContentItemFilterItemBaseText extends WFContentItemFilterItemBase {
    stringValue: WFTextParameter;
}
interface WFContentItemFilterItemNumber extends WFContentItemFilterItemBase {
    Number: number;
}
interface WFContentItemFilterItemBool extends WFContentItemFilterItemBase {
    Bool: boolean;
}
interface WFContentItemFilterItemEnum extends WFContentItemFilterItemBase {
    Enumeration: string;
}
declare type WFContentItemFilterItem = WFContentItemFilterItemBaseString | WFContentItemFilterItemBaseText | WFContentItemFilterItemNumber | WFContentItemFilterItemBool | WFContentItemFilterItemEnum;
export declare type ContentItemFilterItem = {
    property: AggrandizementPropertyName;
    operator: ComparisonName;
    value: string | number | boolean | Text;
    units?: undefined;
};
export declare class ContentItemFilter extends Parameter {
    data: Array<WFContentItemFilterItem>;
    coercionType: CoercionTypeClass;
    constructor(coercionType: CoercionTypeClass);
    add(item: ContentItemFilterItem): string | undefined;
    build(): WFContentItemFilter;
}
export declare class Dictionary extends Parameter {
    items: Array<{
        key: Text;
        value: Dictionary | Text | List | ErrorParameter | number;
    }>;
    constructor();
    add(key: Text, value: Dictionary | Text | List | ErrorParameter | number): void;
    static inverse(data: WFDictionaryParameter): Dictionary;
    build(): WFDictionaryParameter;
}
declare type WFVariableAttachmentData = {
    Type: "Variable";
    Aggrandizements?: WFAggrandizements;
    VariableName: string;
};
declare type WFMagicVariableAttachmentData = {
    Type: "ActionOutput";
    Aggrandizements?: WFAggrandizements;
    OutputName: string;
    OutputUUID: string;
};
declare type WFAttachmentData = {
    Type: AttachmentType;
    Aggrandizements?: WFAggrandizements;
} | WFVariableAttachmentData | WFMagicVariableAttachmentData;
declare type WFAttachmentParameter = {
    Value: WFAttachmentData;
    WFSerializationType: "WFTextTokenAttachment";
};
declare type WFVariableAttachmentParameter = {
    Value: WFVariableAttachmentData;
    WFSerializationType: "WFTextTokenAttachment";
};
declare type WFMagicVariableAttachmentParameter = {
    Value: WFMagicVariableAttachmentData;
    WFSerializationType: "WFTextTokenAttachment";
};
export declare type AttachmentType = "Clipboard" | "Ask" | "CurrentDate" | "ExtensionInput" | "Input" | "Variable" | "ActionOutput";
export declare class Attachment extends Parameter {
    type: AttachmentType;
    aggrandizements: Aggrandizements;
    constructor(type: AttachmentType);
    static inverse(value: WFAttachmentParameter): Attachment;
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
    static inverse(data: WFVariableAttachmentParameter): NamedVariable;
    build(): WFAttachmentParameter;
}
export declare class MagicVariable extends Variable {
    varname: string;
    uuid: string;
    constructor(...args: [Action] | [string, string]);
    static inverse(data: WFMagicVariableAttachmentParameter): MagicVariable;
    build(): WFAttachmentParameter;
}
declare type WFListParameter = Array<string | {
    WFItemType: number;
    WFValue: WFTextWithAttachments;
}>;
export declare class List extends Parameter {
    _list: Array<Text | string | ErrorParameter>;
    constructor(list: Array<Text>);
    add(item: string | Text | ErrorParameter): void;
    static inverse(data: WFListParameter): List;
    getItems(): (Text | string | ErrorParameter)[];
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
    static inverse(data: WFTextParameter): Text;
    components(): Array<Attachment | string>;
    readonly _last: string | Attachment;
    add(...objs: Array<Attachment | Text | string>): this;
    build(): WFTextParameter;
}
export declare class ErrorParameter extends Parameter {
    text: string;
    constructor(text?: string);
    build(): WFErrorParameter;
}
declare type WFErrorParameter = {
    WFSerializationType: "WFErrorParameter";
    Value: {
        Text: string;
    };
};
export declare function toParam(value: WFParameter): ParameterType;
export declare type ParameterType = Parameter | string | number | Array<string> | boolean;
declare type WFParameters = {
    [key: string]: WFParameter;
};
export declare type WFParameter = WFDictionaryParameter | WFAttachmentParameter | WFListParameter | WFTextParameter | WFErrorParameter | WFContentItemFilter | string | boolean | number;
export declare class Parameters {
    values: {
        [internalName: string]: ParameterType;
    };
    builtValues: {
        [internalName: string]: WFParameter;
    };
    constructor();
    static inverse(data: WFParameters): Parameters;
    set(internalName: string, value: ParameterType): void;
    has(internalName: string): boolean;
    get(internalName: string): WFParameter;
    buildValue(key: string): WFParameter;
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
    name?: string;
    id: string;
    parameters: Parameters;
    magicvarname?: string;
    start?: [number, number];
    end?: [number, number];
    constructor(start: [number, number] | undefined, end: [number, number] | undefined, name: string | undefined, id: string);
    static inverse(data: WFAction): Action;
    readonly uuid: string;
    build(): WFAction;
}
declare type ExtensionInputContentItemClass = "WFAppStoreAppContentItem" | "WFArticleContentItem" | "WFContactContentItem" | "WFDateContentItem" | "WFEmailAddressContentItem" | "WFGenericFileContentItem" | "WFImageContentItem" | "WFiTunesProductContentItem" | "WFLocationContentItem" | "WFDCMapsLinkContentItem" | "WFAVAssetContentItem" | "WFPDFContentItem" | "WFPhoneNumberContentItem" | "WFRichTextContentItem" | "WFSafariWebPageContentItem" | "WFStringContentItem" | "WFURLContentItem";
declare type WorkflowTypes = "NCWidget" | "WatchKit";
export declare type WFShortcut = [{
    WFWorkflowClientVersion: string;
    WFWorkflowClientRelese: string;
    WFWorkflowMinimumClientVersion: number;
    WFWorkflowIcon: {
        WFWorkflowIconStartColor: number;
        WFWorkflowIconImageData: Buffer | {
            type: "Buffer";
            data: [];
        };
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
    static inverse(data: WFShortcut): Shortcut;
    build(): WFShortcut;
}
export {};
