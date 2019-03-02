import { Action, Dictionary, Text, MagicVariable, Variable, Attachment, List } from "./OutputData";
import { ConvertingContext } from "./Converter.js";
import { Position } from "./Production";
export declare class PositionedError extends Error {
    start: Position;
    end: Position;
    constructor(message: string, start: Position, end: Position);
}
declare class Parse {
    special: ("InputArg" | "ControlFlowMode" | "Arglist" | undefined);
    start: Position;
    end: Position;
    constructor(start: Position, end: Position);
    error(message: string): PositionedError;
}
interface AsString extends Parse {
    asString(): string;
}
export declare function canBeString(parse: Parse): parse is AsString;
interface AsBoolean extends Parse {
    asBoolean(): boolean;
}
export declare function canBeBoolean(parse: Parse): parse is AsBoolean;
interface AsText extends Parse {
    asText(cc: ConvertingContext): Text;
}
export declare function canBeText(parse: Parse): parse is AsText;
interface AsList extends Parse {
    asList(cc: ConvertingContext): List;
}
export declare function canBeList(parse: Parse): parse is AsList;
interface AsArray extends Parse {
    asArray(): Array<string>;
}
export declare function canBeArray(parse: Parse): parse is AsArray;
interface AsVariable extends Parse {
    asVariable(cc: ConvertingContext): Variable;
}
export declare function canBeVariable(parse: Parse): parse is AsVariable;
interface AsAction extends Parse {
    asAction(cc: ConvertingContext): Action;
}
export declare function canBeAction(parse: Parse): parse is AsAction;
interface AsDictionary extends Parse {
    asDictionary(cc: ConvertingContext): Dictionary;
}
export declare function canBeDictionary(parse: Parse): parse is AsDictionary;
interface AsRawDictionary extends Parse {
    asRawDictionary(): {
        [key: string]: string;
    };
}
export declare function canBeRawDictionary(parse: Parse): parse is AsRawDictionary;
interface AsRawKeyedDictionary extends Parse {
    asRawKeyedDictionary(): {
        [key: string]: AsAble;
    };
}
export declare function canBeRawKeyedDictionary(parse: Parse): parse is AsRawKeyedDictionary;
interface AsNameType extends Parse {
    asNameType(): {
        name: string;
        type: string;
    };
}
export declare function canBeNameType(parse: Parse): parse is AsNameType;
interface AsStringVariable extends Parse {
    asStringVariable(): string;
}
export declare function canBeStringVariable(parse: Parse): parse is AsStringVariable;
export declare type AsAble = AsString | AsText | AsList | AsArray | AsVariable | AsAction | AsDictionary | AsRawDictionary | AsRawKeyedDictionary | AsNameType | AsBoolean | AsStringVariable;
export declare class DictionaryParse extends Parse implements AsRawDictionary, AsRawKeyedDictionary, AsDictionary {
    keyvaluepairs: Array<{
        key: AsAble;
        value: AsAble;
    }>;
    constructor(start: Position, end: Position, keyvaluepairs: Array<{
        key: AsAble;
        value: AsAble;
    }>);
    asRawDictionary(): {
        [key: string]: string;
    };
    asRawKeyedDictionary(): {
        [key: string]: AsAble;
    };
    asDictionary(cc: ConvertingContext): Dictionary;
}
export declare class ListParse extends Parse implements AsArray, AsList {
    items: Array<AsAble>;
    constructor(start: Position, end: Position, items: Array<AsAble>);
    asArray(): string[];
    asList(cc: ConvertingContext): List;
}
export declare class BarlistParse extends ListParse implements AsText, AsString {
    asString(): string;
    asText(cc: ConvertingContext): Text;
}
export declare class CharsParse extends Parse implements AsString, AsText {
    items: [string | AsAble];
    constructor(start: Position, end: Position, items: [string | AsAble]);
    asString(): string;
    asText(cc: ConvertingContext): Text;
}
export declare class IdentifierParse extends Parse implements AsString, AsBoolean, AsText {
    value: string;
    constructor(start: Position, end: Position, str: string);
    asString(): string;
    asBoolean(): boolean;
    asText(_cc: ConvertingContext): Text;
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
    variable: AsAble;
    constructor(start: Position, end: Position, name: AsAble, args: Array<AsAble>, variable: AsAble);
    asText(cc: ConvertingContext): Text;
    asVariable(cc: ConvertingContext): MagicVariable;
    asAction(cc: ConvertingContext): any;
}
export declare class VariableParse extends Parse implements AsStringVariable, AsNameType, AsText, AsVariable, AsAction {
    type: AsAble;
    name: AsAble;
    forkey: AsAble;
    options: AsAble;
    constructor(start: Position, end: Position, type: AsAble, name: AsAble, forkey: AsAble, options: AsAble);
    asStringVariable(): string;
    asNameType(): {
        name: string;
        type: string;
    };
    asText(cc: ConvertingContext): Text;
    asVariable(cc: ConvertingContext): Attachment;
    asAction(cc: ConvertingContext): Action;
}
export declare class ActionsParse {
    actions: Array<AsAble>;
    constructor(actions: Array<AsAble>);
    asShortcut(): import("./OutputData").Shortcut;
}
export {};
