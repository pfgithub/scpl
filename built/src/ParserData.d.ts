import { Action, Dictionary, Text, MagicVariable, Variable, Attachment, List } from "./OutputData";
import { ConvertingContext } from "./Converter.js";
import { Position } from "./Production";
export declare class PositionedError extends Error {
    start: Position;
    end: Position;
    constructor(message: string, start: Position, end: Position);
}
export declare class Parse {
    special: "InputArg" | "ControlFlowMode" | "Arglist" | undefined;
    start: Position;
    end: Position;
    constructor(start: Position, end: Position);
    error(_cc: ConvertingContext, message: string): PositionedError;
    canBeString(_cc: ConvertingContext): this is AsString;
    canBeBoolean(_cc: ConvertingContext): this is AsBoolean;
    canBeText(_cc: ConvertingContext): this is AsText;
    canBeList(_cc: ConvertingContext): this is AsList;
    canBeArray(_cc: ConvertingContext): this is AsArray;
    canBeAbleArray(_cc: ConvertingContext): this is AsAbleArray;
    canBeVariable(_cc: ConvertingContext): this is AsVariable;
    canBeAction(_cc: ConvertingContext): this is AsAction;
    canBeDictionary(_cc: ConvertingContext): this is AsDictionary;
    canBeRawDictionary(_cc: ConvertingContext): this is AsRawDictionary;
    canBeRawKeyedDictionary(_cc: ConvertingContext): this is AsRawKeyedDictionary;
    canBeNameType(_cc: ConvertingContext): this is AsNameType;
    canBeStringVariable(_cc: ConvertingContext): this is AsStringVariable;
    canBeNumber(_cc: ConvertingContext): this is AsNumber;
}
interface AsString extends Parse {
    asString(cc: ConvertingContext): string;
}
interface AsBoolean extends Parse {
    asBoolean(cc: ConvertingContext): boolean;
}
interface AsText extends Parse {
    asText(cc: ConvertingContext): Text;
}
interface AsList extends Parse {
    asList(cc: ConvertingContext): List;
}
interface AsArray extends Parse {
    asArray(cc: ConvertingContext): Array<string>;
}
interface AsAbleArray extends Parse {
    asAbleArray(cc: ConvertingContext): Array<AsAble>;
}
interface AsVariable extends Parse {
    asVariable(cc: ConvertingContext): Variable;
}
interface AsAction extends Parse {
    asAction(cc: ConvertingContext): Action | undefined;
}
interface AsDictionary extends Parse {
    asDictionary(cc: ConvertingContext): Dictionary;
}
interface AsRawDictionary extends Parse {
    asRawDictionary(cc: ConvertingContext): {
        [key: string]: string;
    };
}
interface AsRawKeyedDictionary extends Parse {
    asRawKeyedDictionary(cc: ConvertingContext): {
        [key: string]: AsAble;
    };
}
interface AsNameType extends Parse {
    asNameType(cc: ConvertingContext): {
        name: string;
        type: string;
    };
}
interface AsStringVariable extends Parse {
    asStringVariable(cc: ConvertingContext): string;
}
interface AsNumber extends Parse {
    asNumber(cc: ConvertingContext): number;
}
export declare type AsAble = Parse;
export declare class ConvertVariableParse extends Parse {
    name: AsAble;
    options?: AsAble;
    constructor(start: Position, end: Position, name: AsAble, options?: AsAble);
    getValue(cc: ConvertingContext): AsAble;
    error(cc: ConvertingContext, message: string): PositionedError;
}
export declare class ErrorParse extends Parse {
    constructor(start: Position, end: Position, _message: string);
}
export declare class DictionaryParse extends Parse implements AsRawDictionary, AsRawKeyedDictionary, AsDictionary {
    keyvaluepairs: Array<{
        key: AsAble;
        value: AsAble;
    }>;
    constructor(start: Position, end: Position, keyvaluepairs: Array<{
        key: AsAble;
        value: AsAble;
    }>);
    canBeRawDictionary(_cc: ConvertingContext): boolean;
    asRawDictionary(cc: ConvertingContext): {
        [key: string]: string;
    };
    canBeRawKeyedDictionary(_cc: ConvertingContext): boolean;
    asRawKeyedDictionary(cc: ConvertingContext): {
        [key: string]: Parse;
    };
    canBeDictionary(_cc: ConvertingContext): boolean;
    asDictionary(cc: ConvertingContext): Dictionary;
}
export declare class ListParse extends Parse implements AsArray, AsList, AsAbleArray {
    items: Array<AsAble>;
    constructor(start: Position, end: Position, items: Array<AsAble>);
    canBeArray(_cc: ConvertingContext): boolean;
    asArray(cc: ConvertingContext): string[];
    canBeAbleArray(_cc: ConvertingContext): boolean;
    asAbleArray(_cc: ConvertingContext): Parse[];
    canBeList(_cc: ConvertingContext): boolean;
    asList(cc: ConvertingContext): List;
}
export declare class BarlistParse extends ListParse implements AsText, AsString {
    canBeString(_cc: ConvertingContext): boolean;
    asString(cc: ConvertingContext): string;
    canBeText(_cc: ConvertingContext): boolean;
    asText(cc: ConvertingContext): Text;
}
export declare class CharsParse extends Parse implements AsString, AsText, AsNumber {
    items: [string | AsAble];
    constructor(start: Position, end: Position, items: [string | AsAble]);
    canBeString(_cc: ConvertingContext): boolean;
    asString(cc: ConvertingContext): string;
    canBeNumber(_cc: ConvertingContext): boolean;
    asNumber(cc: ConvertingContext): number;
    canBeText(_cc: ConvertingContext): boolean;
    asText(cc: ConvertingContext): Text;
}
export declare class IdentifierParse extends Parse implements AsNumber, AsString, AsBoolean, AsText {
    value: string;
    constructor(start: Position, end: Position, str: string);
    canBeString(_cc: ConvertingContext): boolean;
    asString(_cc: ConvertingContext): string;
    canBeNumber(_cc: ConvertingContext): boolean;
    asNumber(cc: ConvertingContext): number;
    canBeBoolean(_cc: ConvertingContext): boolean;
    asBoolean(cc: ConvertingContext): boolean;
    canBeText(_cc: ConvertingContext): boolean;
    asText(_cc: ConvertingContext): Text;
}
export declare class NumberParse extends IdentifierParse {
}
export declare class ArglistParse extends DictionaryParse {
    constructor(start: Position, end: Position, keyValuePairs: {
        key: AsAble;
        value: AsAble;
    }[]);
}
export declare class VariableFlagParse extends Parse {
    variable: AsAble;
    constructor(start: Position, end: Position, variable: AsAble);
}
export declare class ActionParse extends Parse implements AsText, AsVariable, AsAction {
    name: AsAble;
    args: Array<AsAble>;
    variable?: AsAble;
    constructor(start: Position, end: Position, name: AsAble, args: Array<AsAble>, variable?: AsAble);
    canBeText(_cc: ConvertingContext): boolean;
    asText(cc: ConvertingContext): Text;
    canBeVariable(_cc: ConvertingContext): boolean;
    asVariable(cc: ConvertingContext): MagicVariable;
    canBeAction(_cc: ConvertingContext): boolean;
    asAction(cc: ConvertingContext): Action | undefined;
}
export declare class VariableParse extends Parse implements AsStringVariable, AsNameType, AsText, AsVariable, AsAction {
    type: AsAble;
    name: AsAble;
    forkey: AsAble;
    options: AsAble;
    constructor(start: Position, end: Position, type: AsAble, name: AsAble, forkey: AsAble, options: AsAble);
    canBeStringVariable(_cc: ConvertingContext): boolean;
    asStringVariable(cc: ConvertingContext): string;
    canBeNameType(_cc: ConvertingContext): boolean;
    asNameType(cc: ConvertingContext): {
        name: string;
        type: string;
    };
    canBeText(_cc: ConvertingContext): boolean;
    asText(cc: ConvertingContext): Text;
    canBeVariable(_cc: ConvertingContext): boolean;
    asVariable(cc: ConvertingContext): Attachment;
    canBeAction(_cc: ConvertingContext): boolean;
    asAction(cc: ConvertingContext): Action;
}
export declare class ActionsParse extends Parse implements AsAction, AsVariable, AsText {
    actions: Array<AsAble>;
    constructor(start: Position, end: Position, actions: Array<AsAble>);
    canBeText(_cc: ConvertingContext): boolean;
    asText(cc: ConvertingContext): Text;
    canBeVariable(_cc: ConvertingContext): boolean;
    asVariable(cc: ConvertingContext): MagicVariable;
    canBeAction(_cc: ConvertingContext): boolean;
    asAction(cc: ConvertingContext): Action;
    asShortcut(converterActions?: {
        [key: string]: (cc: ConvertingContext, ...args: AsAble[]) => void;
    }): import("./OutputData").Shortcut;
}
export {};
