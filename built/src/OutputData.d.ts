/// <reference types="node" />
import { CoercionTypeClass } from "./WFTypes/Types";
export declare class Aggrandizements {
    coercionType?: CoercionTypeClass;
    getProperty?: {
        name: string;
        data?: string | number;
    };
    getForKey?: string;
    constructor();
    build(): ({
        CoercionItemClass: CoercionTypeClass;
        Type: string;
        DictionaryKey?: undefined;
    } | {
        Type: string;
        PropertyUserInfo: string | number;
        PropertyName: string;
        CoercionItemClass?: undefined;
        DictionaryKey?: undefined;
    } | {
        Type: string;
        PropertyName: string;
        CoercionItemClass?: undefined;
        DictionaryKey?: undefined;
    } | {
        DictionaryKey: string;
        Type: string;
        CoercionItemClass?: undefined;
    })[];
    setProperty(getType: string): string | void;
    setCoercionType(type: string): string | void;
    setForKey(key: string): string | void;
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
        Aggrandizements: ({
            CoercionItemClass: CoercionTypeClass;
            Type: string;
            DictionaryKey?: undefined;
        } | {
            Type: string;
            PropertyUserInfo: string | number;
            PropertyName: string;
            CoercionItemClass?: undefined;
            DictionaryKey?: undefined;
        } | {
            DictionaryKey: string;
            Type: string;
            CoercionItemClass?: undefined;
        })[];
    };
}
export declare class Variable extends Attachment {
    constructor(type: string);
    build(): {
        Type: string;
        Aggrandizements: ({
            CoercionItemClass: CoercionTypeClass;
            Type: string;
            DictionaryKey?: undefined;
        } | {
            Type: string;
            PropertyUserInfo: string | number;
            PropertyName: string;
            CoercionItemClass?: undefined;
            DictionaryKey?: undefined;
        } | {
            DictionaryKey: string;
            Type: string;
            CoercionItemClass?: undefined;
        })[];
    };
}
export declare class NamedVariable extends Variable {
    varname: string;
    constructor(varname: string);
    build(): {
        Type: string;
        Aggrandizements: ({
            CoercionItemClass: CoercionTypeClass;
            Type: string;
            DictionaryKey?: undefined;
        } | {
            Type: string;
            PropertyUserInfo: string | number;
            PropertyName: string;
            CoercionItemClass?: undefined;
            DictionaryKey?: undefined;
        } | {
            DictionaryKey: string;
            Type: string;
            CoercionItemClass?: undefined;
        })[];
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
        Aggrandizements: ({
            CoercionItemClass: CoercionTypeClass;
            Type: string;
            DictionaryKey?: undefined;
        } | {
            Type: string;
            PropertyUserInfo: string | number;
            PropertyName: string;
            CoercionItemClass?: undefined;
            DictionaryKey?: undefined;
        } | {
            DictionaryKey: string;
            Type: string;
            CoercionItemClass?: undefined;
        })[];
    } & {
        OutputName: string;
        OutputUUID: string;
    };
}
export declare class List extends Parameter {
    _list: Array<Parameter>;
    constructor(list: Array<Parameter>);
    build(): {
        WFItemType: number;
        WFValue: void;
    }[];
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
    _uuid: string | undefined;
    parameters: Parameters;
    magicvarname?: string;
    start: [number, number];
    end: [number, number];
    constructor(start: [number, number], end: [number, number], name: string, id: string);
    readonly uuid: string;
    build(): {
        WFWorkflowActionIdentifier: string;
        WFWorkflowActionParameters: {
            [internalName: string]: any;
        };
        SCPLData: {
            Position: {
                start: [number, number];
                end: [number, number];
            };
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
            SCPLData: {
                Position: {
                    start: [number, number];
                    end: [number, number];
                };
            };
        }[];
    }[];
}
