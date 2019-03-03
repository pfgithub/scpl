import { AsAble } from "./ParserData";
import { ConvertingContext } from "./Converter";
declare const preprocessorActions: {
    [key: string]: (cc: ConvertingContext, ...args: AsAble[]) => void;
};
export default preprocessorActions;
