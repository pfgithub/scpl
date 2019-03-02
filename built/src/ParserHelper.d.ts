import { Production, ProductionResolveable } from "./Production";
export declare const p: (...args: ProductionResolveable[]) => Production;
export declare const regex: (regex: RegExp) => Production;
export declare const star: (thing: ProductionResolveable) => Production;
export declare const plus: (thing: ProductionResolveable) => Production;
export declare const optional: (thing: ProductionResolveable) => Production;
export declare const or: (...args: ProductionResolveable[]) => Production;
export declare const not: (...args: ProductionResolveable[]) => Production;
export declare const c: (str: string | TemplateStringsArray) => Production;
export declare const o: {
    [name: string]: ProductionResolveable;
};
