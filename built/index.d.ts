import { PositionedError, AsAble } from "./src/ParserData";
import { ConvertingContext } from "./src/Converter";
export { PositionedError, ConvertingContext, AsAble };
export declare function parse(string: string, options: {
    makePlist?: boolean;
    makeShortcut?: boolean;
    extraParseActions?: {
        [key: string]: (cc: ConvertingContext, ...args: AsAble[]) => void;
    };
}): any;
