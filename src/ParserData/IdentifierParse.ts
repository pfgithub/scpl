import { ConvertingContext } from "../Converter";
import { Parse, AsText, AsNumber, AsString, AsBoolean } from "../ParserData";
import { Text } from "../OutputData";
import { Position } from "../Production";

export class IdentifierParse extends Parse
	implements AsNumber, AsString, AsBoolean, AsText {
	value: string;
	constructor(start: Position, end: Position, str: string) {
		super(start, end);
		this.value = str;
	}
	canBeString(_cc: ConvertingContext): true {
		return true;
	}
	asString(_cc: ConvertingContext) {
		return this.value;
	}
	canBeNumber(_cc: ConvertingContext): true {
		return true;
	}
	asNumber(cc: ConvertingContext) {
		const num = +this.value;
		if (isNaN(num)) {
			throw this.error(
				cc,
				"This number could not be converted to a number."
			);
		}
		return num;
	}
	canBeBoolean(_cc: ConvertingContext): true {
		return true;
	}
	asBoolean(cc: ConvertingContext) {
		const string = this.asString(cc);
		if (string === "true") {
			return true;
		}
		if (string === "false") {
			return false;
		}
		throw this.error(cc, "This boolean must be either true or false.");
	}
	canBeText(_cc: ConvertingContext): true {
		return true;
	}
	asText(_cc: ConvertingContext) {
		const text = new Text();
		text.add(this.value);
		return text;
	}
}
