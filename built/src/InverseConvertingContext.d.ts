import { Attachment, Text, Shortcut, Action, ParameterType, List, Dictionary, Aggrandizements } from "./OutputData";
export declare class InverseConvertingContext {
    magicVariablesByUUID: {
        [key: string]: string;
    };
    magicVariablesByName: {
        [key: string]: string;
    };
    quotes: '"' | "'";
    indent: string;
    _indentLevel: number;
    constructor(options?: {
        quotes?: '"' | "'";
        indent?: string | number;
    });
    createActionsAble(value: Shortcut): string;
    createActionAble(value: Action): string;
    handleArgument(thing: ParameterType): string;
    createStringAble(value: string): string;
    createNumberAble(data: number): string;
    createListAble(value: List): string;
    createDictionaryAble(value: Dictionary): string;
    createAggrandizementsAble(value: Aggrandizements | undefined): string;
    createVariableAble(value: Attachment): string;
    createTextAble(value: Text, options?: {
        dontAllowOnlyVariable?: boolean;
    }): string;
    quoteAndEscape(val: string): string;
}
