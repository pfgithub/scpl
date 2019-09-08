import { ConvertingContext } from "../Converter";
import {
	Parse,
	AsRawKeyedDictionary,
	AsDictionary,
	AsAble,
	NestedStringDictionary,
	NestedStringDictionaryItem,
	createRawDeepItem
} from "../ParserData";
import { Text, Dictionary, List, Attachment } from "../OutputData";
import { Position } from "../Production";

export class DictionaryParse extends Parse
	implements AsRawKeyedDictionary, AsDictionary {
	keyvaluepairs: Array<{ key: AsAble; value: AsAble; type?: AsAble }>;
	constructor(
		start: Position,
		end: Position,
		keyvaluepairs: Array<{ key: AsAble; value: AsAble; type?: AsAble }>
	) {
		super(start, end);
		this.keyvaluepairs = keyvaluepairs;
	}
	canBeRawDeepDictionary(_cc: ConvertingContext): true {
		return true;
	}
	asRawDeepDictionary(cc: ConvertingContext) {
		// for static things that cannot have interpolated keys or values
		const dictionary: NestedStringDictionary = {};
		this.keyvaluepairs.forEach(({ key, value, type }) => {
			if (type) {
				throw type.error(cc, "This dictionary can not have a type.");
			}
			if (!key.canBeString(cc)) {
				throw key.error(
					cc,
					"This key name must be a string with no variables."
				);
			}

			const keyValue: NestedStringDictionaryItem = createRawDeepItem(
				cc,
				value
			);

			const stringKey = key.asString(cc);
			if (dictionary[stringKey]) {
				throw key.error(
					cc,
					`This key was already defined in this dictionary.`
				);
			}
			dictionary[stringKey] = keyValue;
		});
		return dictionary;
	}
	canBeRawKeyedDictionary(_cc: ConvertingContext): true {
		return true;
	}
	asRawKeyedDictionary(cc: ConvertingContext) {
		// returns a raw dictionary (keys are raw, not values) for this DictionaryParse
		const dictionary: { [key: string]: AsAble } = {};
		this.keyvaluepairs.forEach(({ key, value }) => {
			if (!key.canBeString(cc)) {
				throw key.error(
					cc,
					"This key name must be a string with no variables."
				);
			}
			const stringKey = key.asString(cc);
			if (dictionary[stringKey]) {
				throw key.error(
					cc,
					`This key name was already defined in this dictionary.`
				);
			}
			dictionary[stringKey] = value;
		});
		return dictionary;
	}
	canBeDictionary(_cc: ConvertingContext): true {
		return true;
	}
	asDictionary(cc: ConvertingContext) {
		// returns an Output Dictionary for this DictionaryParse
		const dictionary = new Dictionary();
		//eslint-disable-next-line complexity
		this.keyvaluepairs.forEach(({ key, value, type }) => {
			let typeStr:
				| "text"
				| "number"
				| "boolean"
				| "list"
				| "dictionary"
				| "file"
				| "auto" = "auto";
			if (type) {
				if (!type.canBeString(cc)) {
					throw key.error(cc, "Type must be string.");
				}
				let validTypeStr = type.asString(cc);
				if (validTypeStr === "bool") {
					validTypeStr = "boolean";
				}
				if (validTypeStr === "array") {
					validTypeStr = "list";
				}
				if (
					validTypeStr !== "text" &&
					validTypeStr !== "number" &&
					validTypeStr !== "boolean" &&
					validTypeStr !== "list" &&
					validTypeStr !== "dictionary" &&
					validTypeStr !== "file"
				) {
					throw type.error(
						cc,
						"Must be text|number|boolean|array|dictionary|file"
					);
				}
				typeStr = validTypeStr;
			}
			let outputValue:
				| Text
				| number
				| boolean
				| List
				| Dictionary
				| Attachment
				| undefined;
			if (!key.canBeText(cc)) {
				throw key.error(cc, "Dictionary keys must be texts");
			}
			const keyText = key.asText(cc);
			if (typeStr === "auto") {
				if (value.canBeList(cc)) {
					outputValue = value.asList(cc);
				} else if (value.canBeDictionary(cc)) {
					outputValue = value.asDictionary(cc);
				} else if (value.canBeText(cc)) {
					outputValue = value.asText(cc);
				} else {
					throw value.error(
						cc,
						"This value must be a list, string, or dictionary."
					);
				}
			} else if (typeStr === "text") {
				if (value.canBeText(cc)) {
					outputValue = value.asText(cc);
				} else {
					throw value.error(cc, "This value must be a text.");
				}
			} else if (typeStr === "number") {
				if (value.canBeNumber(cc)) {
					outputValue = value.asNumber(cc);
				} else {
					throw value.error(cc, "This value must be a number.");
				}
			} else if (typeStr === "boolean") {
				if (value.canBeBoolean(cc)) {
					outputValue = value.asBoolean(cc);
				} else {
					throw value.error(cc, "This value must be a boolean.");
				}
			} else if (typeStr === "list") {
				if (value.canBeList(cc)) {
					outputValue = value.asList(cc);
				} else {
					throw value.error(cc, "This value must be a list.");
				}
			} else if (typeStr === "dictionary") {
				if (value.canBeDictionary(cc)) {
					outputValue = value.asDictionary(cc);
				} else {
					throw value.error(cc, "This value must be a dictionary.");
				}
			} else if (typeStr === "file") {
				if (value.canBeVariable(cc)) {
					outputValue = value.asVariable(cc);
				} else {
					throw value.error(cc, "This value must be a variable.");
				}
			}
			if (outputValue === undefined) {
				throw value.error(
					cc,
					"Output value does not exist. This should never happen."
				);
			}
			dictionary.add(keyText, outputValue);
		});
		return dictionary;
	}
}
