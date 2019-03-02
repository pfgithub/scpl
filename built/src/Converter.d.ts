import { Shortcut, Action } from "./OutputData";
export declare class ConvertingContext {
    vardata: {
        [key: string]: boolean;
    };
    magicvardata: {
        [key: string]: {
            action: Action;
        };
    };
    shortcut: Shortcut;
    lastVariableAction: Action;
    controlFlowStack: Array<{
        uuid: string;
        number: number;
        wfaction: any;
    }>;
    constructor();
    pushControlFlow(wfaction: any): {
        uuid: string;
        number: number;
        wfaction: any;
    };
    nextControlFlow(): {
        uuid: string;
        number: number;
        wfaction: any;
    };
    endControlFlow(): {
        uuid: string;
        number: number;
        wfaction: any;
    };
    add(action: Action): void;
}
