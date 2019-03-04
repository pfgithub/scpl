import { Action, ParameterType } from "./OutputData";
import { ConvertingContext } from "./Converter";
import { AsAble } from "./ParserData";
declare class WFResource {
    _data: any;
    constructor(data: any);
    shouldEnable(_action: Action): boolean;
    genDocs(): string;
}
declare class WFParameter {
    _data: any;
    defaultValue: string;
    requiredResources: Array<WFResource>;
    allowsVariables: boolean;
    name: string;
    internalName: string;
    shortName: string;
    typeName: string;
    docs: string;
    constructor(data: any, typeName: string, docs: string);
    shouldEnable(action: Action): boolean;
    genDocsArgName(): string;
    genDocsDefaultValue(value: string): string;
    genDocsAutocompletePlaceholder(): string;
    genDocs(): string;
    build(_cc: ConvertingContext, parse: AsAble): ParameterType;
}
export declare class WFAction {
    _data: any;
    id: string;
    isComplete: boolean;
    _parameters: Array<WFParameter | string>;
    internalName: string;
    shortName: string;
    name: string;
    constructor(data: any, id: string);
    readonly actionOutputType: any;
    readonly inputPassthrough: any;
    readonly hasVariable: boolean;
    readonly requiresInput: boolean;
    genDocsParams(): ({
        argType: string;
        argName?: undefined;
        argAutocompletePlaceholder?: undefined;
    } | {
        argName: string;
        argType: string;
        argAutocompletePlaceholder: string;
    })[];
    genDocsAutocompleteUsage(): string;
    genDocsUsage(): string;
    genDocs(): string;
    build(cc: ConvertingContext, controlFlowData?: {
        uuid: string;
        number: number;
        wfaction: any;
    }, ...params: Array<AsAble>): Action;
}
export declare function genReadme(): string;
export declare function getActionFromID(id: string): WFAction;
export declare function getActionFromName(name: string): WFAction | undefined;
export declare const allActions: WFAction[];
export {};
