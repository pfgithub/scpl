import { ConvertingContext } from "../Converter";
import {
	Parse,
	parseTypeList
} from "../ParserData";
import { Position } from "../Production";

export class ErrorParse extends Parse {
	message: string;
	constructor(start: Position, end: Position, _message: string) {
		super(start, end);
		this.message = _message;
	}
}
parseTypeList.forEach(val => {
	//eslint-disable-next-line func-names, @typescript-eslint/no-explicit-any
	(<any>ErrorParse).prototype[`canBe${val}`] = function(
		this: ErrorParse,
		_cc: ConvertingContext
	) {
		return true; // accept all
	};
	//eslint-disable-next-line func-names, @typescript-eslint/no-explicit-any
	(<any>ErrorParse).prototype[`as${val}`] = function(
		this: ErrorParse,
		cc: ConvertingContext,
		..._extraData: []
	) {
		throw this.error(cc, this.message);
	};
});