import { ConvertingContext } from "../Converter";
import {
	Parse,
	AsText,
	AsString,
	AsNumber,
	AsAble,
	ConvertVariableParse
} from "../ParserData";
import { Text } from "../OutputData";
import { Position } from "../Production";

export class CharsParse extends Parse implements AsString, AsText, AsNumber {
	// [...string|Parse(has asVariable)]
	items: [string | AsAble];
	constructor(start: Position, end: Position, items: [string | AsAble]) {
		super(start, end);
		this.items = items;
	}
	canBeString(_cc: ConvertingContext): true {
		return true;
	}
	asString(cc: ConvertingContext) {
		// returns a raw string
		let string = "";
		this.items.forEach(item => {
			if (typeof item === "string") {
				string += item;
				return;
			}
			if (item instanceof ConvertVariableParse) {
				// !don't do this
				if (item.canBeString(cc)) {
					string += item.asString(cc);
					return;
				}
			}
			item.warn(cc, `This string is not allowed to have variables.`);
			string += "[Variable]";
		});
		return string;
	}
	canBeNumber(_cc: ConvertingContext): true {
		return true;
	}
	asNumber(cc: ConvertingContext) {
		const num = +this.asString(cc);
		if (isNaN(num)) {
			throw this.error(
				cc,
				"This number could not be converted to a number."
			);
		}
		return num;
	}
	canBeText(_cc: ConvertingContext): true {
		return true;
	}
	asText(cc: ConvertingContext) {
		const text = new Text();
		this.items.forEach(item => {
			if (typeof item === "string") {
				return text.add(item);
			}
			if (item instanceof ConvertVariableParse) {
				if (item.canBeText(cc)) {
					text.add(item.asText(cc));
					return;
				}
			}
			if (!item.canBeVariable(cc)) {
				throw item.error(
					cc,
					"String interpolations can only contain variables."
				);
			}
			return text.add(item.asVariable(cc));
		});
		return text;
	}
}
