import { ConvertingContext } from "../Converter";
import {
	Parse,
	AsRaw,
	AsAble,
} from "../ParserData";
import { RawParameter } from "../OutputData";
import { Position } from "../Production";

export class RawParse extends Parse implements AsRaw {
	dictOrString: AsAble;
	constructor(start: Position, end: Position, dictOrString: AsAble) {
		super(start, end);
		this.dictOrString = dictOrString;
	}
	canBeRaw(_cc: ConvertingContext): true {
		return true;
	}
	asRaw(cc: ConvertingContext) {
		if (this.dictOrString.canBeRawDeepDictionary(cc)) {
			return new RawParameter(
				this.dictOrString.asRawDeepDictionary(cc)
			);
		}
		if (this.dictOrString.canBeString(cc)) {
			return new RawParameter(this.dictOrString.asString(cc));
		}
		throw this.dictOrString.error(cc, "Must be raw dictionary");
	}
}