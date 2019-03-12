import { Action, Attachment } from "./OutputData";
export declare const setVariable: (position: {
    start: [number, number];
    end: [number, number];
}, varname: string) => Action;
export declare const getVariable: (position: {
    start: [number, number];
    end: [number, number];
}, variable: Attachment) => Action;
