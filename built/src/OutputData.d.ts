/// <reference types="node" />
export declare class Aggrandizements {
    aggrandizements: Array<{
        Type: string;
        PropertyName?: string;
        CoercionItemClass?: string;
        DictionaryKey?: string;
        PropertyUserInfo?: string | number;
    }>;
    constructor();
    build(): {
        Type: string;
        PropertyName?: string;
        CoercionItemClass?: string;
        DictionaryKey?: string;
        PropertyUserInfo?: string | number;
    }[];
    property(getType: string): void;
    coerce(type: string): void;
    forKey(key: string): void;
}
export declare class Parameter {
    constructor();
    build(): void;
}
export declare class Dictionary extends Parameter {
    items: Array<{
        key: Parameter;
        value: Parameter;
        type: number;
    }>;
    constructor();
    add(key: Parameter, value: Parameter, type: number): void;
    build(): any;
}
export declare class Attachment extends Parameter {
    type: string;
    aggrandizements: Aggrandizements;
    constructor(type: string);
    build(): {
        Type: string;
        Aggrandizements: {
            Type: string;
            PropertyName?: string;
            CoercionItemClass?: string;
            DictionaryKey?: string;
            PropertyUserInfo?: string | number;
        }[];
    };
}
export declare class Variable extends Attachment {
    constructor(type: string);
    build(): {
        Type: string;
        Aggrandizements: {
            Type: string;
            PropertyName?: string;
            CoercionItemClass?: string;
            DictionaryKey?: string;
            PropertyUserInfo?: string | number;
        }[];
    };
}
export declare class NamedVariable extends Variable {
    varname: string;
    constructor(varname: string);
    build(): {
        Type: string;
        Aggrandizements: {
            Type: string;
            PropertyName?: string;
            CoercionItemClass?: string;
            DictionaryKey?: string;
            PropertyUserInfo?: string | number;
        }[];
    } & {
        VariableName: string;
    };
}
export declare class MagicVariable extends Variable {
    varname: string;
    uuid: string;
    constructor(action: Action);
    build(): {
        Type: string;
        Aggrandizements: {
            Type: string;
            PropertyName?: string;
            CoercionItemClass?: string;
            DictionaryKey?: string;
            PropertyUserInfo?: string | number;
        }[];
    } & {
        OutputName: string;
        OutputUUID: string;
    };
}
export declare class List extends Parameter {
    _list: Array<Parameter>;
    constructor(list: Array<Parameter>);
    build(): (void | {
        WFItemType: number;
        WFValue: void;
    })[];
}
export declare class Text extends Parameter {
    _components: Array<Attachment | Text | string>;
    constructor();
    readonly _last: string | Attachment | Text;
    add(...objs: Array<Attachment | Text | string>): this;
    build(): any;
}
export declare type ParameterType = Parameter | string | number | Array<string> | boolean;
export declare class Parameters {
    values: {
        [internalName: string]: any;
    };
    constructor();
    set(internalName: string, value: ParameterType): this;
    has(internalName: string): boolean;
    get(internalName: string): any;
    build(): {
        [internalName: string]: any;
    };
}
export declare class Action {
    name: string;
    id: string;
    uuid: string;
    parameters: Parameters;
    magicvarname: string;
    constructor(name: string, id: string);
    build(): {
        WFWorkflowActionIdentifier: string;
        WFWorkflowActionParameters: {
            [internalName: string]: any;
        };
    };
}
export declare class Shortcut {
    name: string;
    actions: Array<Action>;
    constructor(name: string);
    add(action: Action): void;
    build(): {
        WFWorkflowClientVersion: string;
        WFWorkflowClientRelese: string;
        WFWorkflowMinimumClientVersion: number;
        WFWorkflowIcon: {
            WFWorkflowIconStartColor: number;
            WFWorkflowIconImageData: Buffer;
            WFWorkflowIconGlyphNumber: number;
        };
        WFWorkflowTypes: string[];
        WFWorkflowInputContentItemClasses: string[];
        WFWorkflowActions: {
            WFWorkflowActionIdentifier: string;
            WFWorkflowActionParameters: {
                [internalName: string]: any;
            };
        }[];
    }[];
}
