import { Action } from "./OutputData";
export declare class WFResource {
    _data: any;
    constructor(data: any);
    shouldEnable(_action: Action): boolean;
    genDocs(): string;
}
declare const resourceTypes: {
    [key: string]: any;
};
export declare class WFWorkflowHiddenResource extends WFResource {
    shouldEnable(_action: Action): boolean;
    genDocs(): string;
}
export { resourceTypes };
