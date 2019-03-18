import { Attachment, Text } from "./OutputData";
export declare class InverseConvertingContext {
    magicVariables: {
        [key: string]: string | undefined;
    };
    constructor();
    handleThing(thing: unknown): string;
    createStringAble(value: string): string;
    createNumberAble(data: number): string;
    createVariableAble(value: Attachment): string;
    createTextAble(value: Text): string;
}
