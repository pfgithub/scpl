import { Attachment, Text } from "./OutputData";
export declare class InverseConvertingContext {
    magicVariables: {
        [key: string]: string | undefined;
    };
    quotes: '"' | "'";
    indent: "\t" | number;
    constructor(options?: {
        quotes?: '"' | "'";
        indent?: "\t" | number;
    });
    handleThing(thing: unknown): string;
    createStringAble(value: string): string;
    createNumberAble(data: number): string;
    createVariableAble(value: Attachment): string;
    createTextAble(value: Text): string;
}
