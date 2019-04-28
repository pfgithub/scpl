import { CoercionTypeClass, AggrandizementPropertyName } from "../WFTypes/Types";
declare type GetTypesData = {
    [Type in CoercionTypeClass]: {
        properties: {
            [Name in AggrandizementPropertyName]: {
                name: string;
                data?: string | number;
                type?: CoercionTypeClass;
                filter?: boolean;
                filterFakeType?: string;
                filterEnumValues?: string[];
            };
        };
    };
};
declare const data: GetTypesData;
export default data;
