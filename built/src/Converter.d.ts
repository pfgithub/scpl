import { Shortcut, Action } from "./OutputData";
import { AsAble } from "./ParserData";
export declare class ConvertingContext {
    namedVariables: {
        [key: string]: boolean;
    };
    magicVariables: {
        [key: string]: {
            action: Action;
        };
    };
    shortcut: Shortcut;
    lastVariableAction?: Action;
    controlFlowStack: Array<{
        uuid: string;
        number: number;
        wfaction: any;
    }>;
    parserVariables: {
        [key: string]: AsAble;
    };
    parserActions: {
        [key: string]: (cc: ConvertingContext, ...args: AsAble[]) => void;
    };
    above?: ConvertingContext;
    constructor(above?: ConvertingContext);
    getNamedVariable(name: string): boolean | undefined;
    setNamedVariable(name: string): void;
    getMagicVariable(name: string): {
        action: Action;
    } | undefined;
    setMagicVariable(name: string, action: Action): void;
    getParserVariable(name: string): AsAble | undefined;
    setParserVariable(name: string, value: AsAble): void;
    getParserAction(name: string): ((cc: ConvertingContext, ...args: AsAble[]) => void) | undefined;
    setParserAction(name: string, value: (cc: ConvertingContext, ...args: AsAble[]) => void): void;
    in(): ConvertingContext;
    pushControlFlow(wfaction: any): {
        uuid: string;
        number: number;
        wfaction: any;
    };
    nextControlFlow(): {
        uuid: string;
        number: number;
        wfaction: any;
    } | undefined;
    endControlFlow(): {
        uuid: string;
        number: number;
        wfaction: any;
    } | undefined;
    add(action: Action): void;
}
