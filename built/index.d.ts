/// <reference types="node" />
import { PositionedError, AsAble } from "./src/ParserData";
import { ConvertingContext } from "./src/Converter";
import { WFShortcut } from "./src/OutputData";
export { PositionedError, ConvertingContext, AsAble, WFShortcut };
export { allActions, getActionFromID, getActionFromName } from "./src/ActionData";
export declare function parse(string: string, options: {
    make?: ["shortcutjson"?, "shortcutplist"?, "outputdata"?];
    makePlist?: boolean;
    makeShortcut?: boolean;
    generateSCPLData?: boolean;
    extraParseActions?: {
        [key: string]: (cc: ConvertingContext, ...args: AsAble[]) => void;
    };
}): any;
export declare function inverse(data: WFShortcut | Buffer): string;
