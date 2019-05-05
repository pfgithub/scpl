import { CoercionTypeClass, AggrandizementPropertyName, AggrandizementPropertyRawName } from "../WFTypes/Types";
export declare type ComparisonWFValue = 4 | 5 | 8 | 9 | 99 | 999;
export declare type ComparisonName = "is" | "isnot" | "contains" | "doesnotcontain" | "beginswith" | "endswith";
export declare const comparisonMethodsMap: Map<ComparisonName, ComparisonWFValue>;
export declare function isComparisonMethod(method: string): method is ComparisonName;
declare type GetTypeInfoProperty = {
    name: AggrandizementPropertyRawName;
    data?: string | number;
    type?: CoercionTypeClass;
    filter?: boolean;
    filterFakeType?: string;
    filterEnumValues?: string[];
};
declare type GetTypeInfo = {
    comparisonMethods?: {
        [name in ComparisonName]?: ComparisonWFValue;
    };
    units?: {
        [name: string]: number;
    };
    properties: {
        [Name in AggrandizementPropertyName]?: GetTypeInfoProperty;
    };
};
declare type GetTypesData = {
    [Type in CoercionTypeClass]: GetTypeInfo;
};
declare const data: GetTypesData;
export default data;
