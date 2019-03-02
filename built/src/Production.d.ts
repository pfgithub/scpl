export declare type ProductionResolveable = Production | {
    getProd: () => Production;
};
export declare type Position = [number, number];
export declare class Performance {
    static startMonitoring(): void;
    static stopMonitoring(): void;
}
declare type ProductionCallback = (a: any, fromPos: Position, toPos: Position) => any;
export declare class Production {
    cb: ProductionCallback;
    name: string;
    constructor(cb?: (a: any) => any);
    scb(cb: ProductionCallback): this;
    getProd(): this;
    parse(_string: string, _position: Position): {
        data?: any;
        remainingStr?: string;
        error?: string;
        success: boolean;
        pos?: Position;
    };
    toString(): string;
    nameOrTostring(): string;
}
export declare class OrderedProduction extends Production {
    requirements: Array<ProductionResolveable>;
    constructor(...requirements: Array<ProductionResolveable>);
    parse(string: string, position: Position): {
        success: boolean;
        data?: undefined;
        remainingStr?: undefined;
        pos?: undefined;
    } | {
        data: any;
        remainingStr: string;
        success: boolean;
        pos: [number, number];
    };
    toString(): string;
}
export declare class OrProduction extends Production {
    options: Array<ProductionResolveable>;
    constructor(...options: Array<ProductionResolveable>);
    parse(string: string, position: Position): {
        success: boolean;
        data?: undefined;
        remainingStr?: undefined;
        pos?: undefined;
    } | {
        data: any;
        remainingStr: string;
        success: boolean;
        pos: [number, number];
    };
    toString(): string;
}
export declare class NotProduction extends Production {
    options: Array<ProductionResolveable>;
    constructor(...options: Array<ProductionResolveable>);
    parse(string: string, position: Position): {
        success: boolean;
        data?: undefined;
        remainingStr?: undefined;
        pos?: undefined;
    } | {
        data: any;
        remainingStr: string;
        success: boolean;
        pos: [number, number];
    };
    toString(): string;
}
export declare class RegexProduction extends Production {
    regex: RegExp;
    constructor(regex: RegExp);
    parse(string: string, position: Position): {
        data: any;
        remainingStr: string;
        success: boolean;
        pos: [number, number];
    } | {
        success: boolean;
        data?: undefined;
        remainingStr?: undefined;
        pos?: undefined;
    };
    toString(): string;
}
export declare class StringProduction extends Production {
    string: string;
    constructor(string: string);
    parse(string: string, position: Position): {
        data: any;
        remainingStr: string;
        success: boolean;
        pos: [number, number];
        error?: undefined;
    } | {
        success: boolean;
        error: string;
        data?: undefined;
        remainingStr?: undefined;
        pos?: undefined;
    };
    toString(): string;
}
export declare class ManyProduction extends Production {
    prod: ProductionResolveable;
    start: number;
    end: number;
    constructor(thing: ProductionResolveable, start?: number, end?: number);
    parse(string: string, position: Position): {
        success: boolean;
        data?: undefined;
        remainingStr?: undefined;
        pos?: undefined;
    } | {
        data: any;
        remainingStr: string;
        success: boolean;
        pos: [number, number];
    };
    toString(): string;
}
export {};
