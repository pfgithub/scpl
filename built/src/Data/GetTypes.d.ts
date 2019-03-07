import { CoercionTypeClass, AggrandizementPropertyName } from "../WFTypes/Types";
declare type GetTypesData = {
    [Type in CoercionTypeClass]: {
        [Name in AggrandizementPropertyName]: {
            name: string;
            data?: string | number;
        };
    };
};
declare const data: GetTypesData;
export default data;
