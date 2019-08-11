import {
	Action,
	Dictionary,
	Text,
	MagicVariable,
	NamedVariable,
	Variable,
	Attachment,
	List,
	AttachmentType,
	ContentItemFilter,
	AdjustOffset,
	WFTimeOffsetValueEnum,
	WFTimeOffsetValueEnumList,
	WFTimeOffsetValueUnitList,
	WFTimeOffsetValueUnit,
	ParameterType,
	PrebuiltParameter
} from "./OutputData";
import { getActionFromName, genShortName } from "./ActionData";
import { ConvertingContext } from "./Converter";
import { setVariable, getVariable } from "./HelpfulActions";
import { Position } from "./Production";
import { endIf } from "./HelpfulActions";
import {
	CoercionTypeClass,
	isAggrandizementPropertyName,
	AggrandizementPropertyName
} from "./WFTypes/Types";

import { nearestString } from "./nearestString";

import { ComparisonName, isComparisonMethod } from "./Data/GetTypes";

import { PositionedError } from "./PositionedError";
export { PositionedError } from "./PositionedError";

import * as uuidv4 from "uuid/v4";

export class Parse {
	special: "InputArg" | "ControlFlowMode" | "Arglist" | undefined;
	start: Position;
	end: Position;
	constructor(start: Position, end: Position) {
		this.start = start;
		this.end = end;
	}

	error(_cc: ConvertingContext, message: string) {
		return new PositionedError(message, this.start, this.end);
	}
	warn(cc: ConvertingContext, message: string) {
		return cc.warn(new PositionedError(message, this.start, this.end));
	}
	canBeString(_cc: ConvertingContext): this is AsString {
		return false;
	}
	canBeBoolean(_cc: ConvertingContext): this is AsBoolean {
		return false;
	}
	canBeText(_cc: ConvertingContext): this is AsText {
		return false;
	}
	canBeList(_cc: ConvertingContext): this is AsList {
		return false;
	}
	canBeArray(_cc: ConvertingContext): this is AsArray {
		return false;
	}
	canBeAbleArray(_cc: ConvertingContext): this is AsAbleArray {
		return false;
	}
	canBeVariable(_cc: ConvertingContext): this is AsVariable {
		return false;
	}
	canBeAction(_cc: ConvertingContext): this is AsAction {
		return false;
	}
	canBeDictionary(_cc: ConvertingContext): this is AsDictionary {
		return false;
	}
	canBeRawDictionary(_cc: ConvertingContext): this is AsRawDictionary {
		return false;
	}
	canBeRawKeyedDictionary(
		_cc: ConvertingContext
	): this is AsRawKeyedDictionary {
		return false;
	}
	canBeNameType(_cc: ConvertingContext): this is AsNameType {
		return false;
	}
	canBeStringVariable(_cc: ConvertingContext): this is AsStringVariable {
		return false;
	}
	canBeNumber(_cc: ConvertingContext): this is AsNumber {
		return false;
	}
	canBeFilter(_cc: ConvertingContext): this is AsFilter {
		return false;
	}
	canBeFilterItem(_cc: ConvertingContext): this is AsFilterItem {
		return false;
	}
	canBePreprocessorVariableName(
		_cc: ConvertingContext
	): this is AsPreprocessorVariableName {
		return false;
	}
	canBeTimeOffsetParameter(
		_cc: ConvertingContext
	): this is AsTimeOffsetParameter {
		return false;
	}
	canBeRaw(_cc: ConvertingContext): this is AsRaw {
		return false;
	}
}

interface AsString extends Parse {
	canBeString(cc: ConvertingContext): true;
	asString(cc: ConvertingContext): string;
}

interface AsBoolean extends Parse {
	canBeBoolean(cc: ConvertingContext): true;
	asBoolean(cc: ConvertingContext): boolean;
}

interface AsText extends Parse {
	canBeText(cc: ConvertingContext): true;
	asText(cc: ConvertingContext): Text;
}

interface AsList extends Parse {
	canBeList(cc: ConvertingContext): true;
	asList(cc: ConvertingContext): List;
}

interface AsArray extends Parse {
	canBeArray(cc: ConvertingContext): true;
	asArray(cc: ConvertingContext): Array<string>;
}

interface AsAbleArray extends Parse {
	canBeAbleArray(cc: ConvertingContext): true;
	asAbleArray(cc: ConvertingContext): Array<AsAble>;
}

interface AsVariable extends Parse {
	canBeVariable(cc: ConvertingContext): true;
	asVariable(cc: ConvertingContext): Variable;
}

interface AsAction extends Parse {
	canBeAction(cc: ConvertingContext): true;
	asAction(cc: ConvertingContext): Action | undefined;
}

interface AsDictionary extends Parse {
	canBeDictionary(cc: ConvertingContext): true;
	asDictionary(cc: ConvertingContext): Dictionary;
}

interface AsRawDictionary extends Parse {
	canBeRawDictionary(cc: ConvertingContext): true;
	asRawDictionary(cc: ConvertingContext): { [key: string]: string };
}

interface AsRawKeyedDictionary extends Parse {
	canBeRawKeyedDictionary(cc: ConvertingContext): true;
	asRawKeyedDictionary(cc: ConvertingContext): { [key: string]: AsAble };
}

interface AsNameType extends Parse {
	canBeNameType(cc: ConvertingContext): true;
	asNameType(cc: ConvertingContext): { name: string; type: string };
}

interface AsStringVariable extends Parse {
	canBeStringVariable(cc: ConvertingContext): true;
	asStringVariable(cc: ConvertingContext): string;
}

interface AsNumber extends Parse {
	canBeNumber(cc: ConvertingContext): true;
	asNumber(cc: ConvertingContext): number;
}

interface AsFilter extends Parse {
	canBeFilter(cc: ConvertingContext): true;
	asFilter(cc: ConvertingContext, type: CoercionTypeClass): ContentItemFilter;
}

interface AsFilterItem extends Parse {
	canBeFilterItem(cc: ConvertingContext): true;
	asFilterItem(cc: ConvertingContext, filter: ContentItemFilter): void;
}
interface AsPreprocessorVariableName extends Parse {
	canBePreprocessorVariableName(cc: ConvertingContext): true;
	asPreprocessorVariableName(cc: ConvertingContext): string;
}

interface AsTimeOffsetParameter extends Parse {
	canBeTimeOffsetParameter(cc: ConvertingContext): true;
	asTimeOffsetParameter(cc: ConvertingContext): AdjustOffset;
}

interface AsRaw extends Parse {
	canBeRaw(cc: ConvertingContext): true;
	asRaw(cc: ConvertingContext): PrebuiltParameter;
}

const ilist = [
	"String",
	"Boolean",
	"Text",
	"List",
	"Array",
	"AbleArray",
	"Variable",
	"Action",
	"Dictionary",
	"RawDictionary",
	"RawKeyedDictionary",
	"NameType",
	"StringVariable",
	"Number",
	"Filter",
	"FilterItem",
	"TimeOffsetParameter",
	"Raw"
	// not PreprocessorVariableName
];

export type AsAble = Parse;

export class ConvertVariableParse extends Parse
	implements AsPreprocessorVariableName {
	name: AsAble;
	options?: AsAble;
	constructor(
		start: Position,
		end: Position,
		name: AsAble,
		options?: AsAble
	) {
		super(start, end);
		this.name = name;
		this.options = options;
	}
	canBePreprocessorVariableName(_cc: ConvertingContext): true {
		return true;
	}
	asPreprocessorVariableName(cc: ConvertingContext) {
		if (!this.name.canBeString(cc)) {
			throw this.name.error(
				cc,
				"Name must be a string with no variables."
			);
		}
		const name = this.name.asString(cc);
		return name;
	}
	getValue(cc: ConvertingContext): AsAble {
		const name = this.asPreprocessorVariableName(cc);
		const me = cc.getParserVariable(name);
		if (!me) {
			throw super.error(cc, `Parser Variable @:${name} is not defined.`);
		}
		return me;
	}
	error(cc: ConvertingContext, message: string) {
		const me = this.getValue(cc);
		return me.error(cc, `${this.start} ${this.end} ${message}`);
	}
	warn(cc: ConvertingContext, message: string) {
		const me = this.getValue(cc);
		return me.warn(cc, `${this.start} ${this.end} ${message}`);
	}
}
// there has to be a better way
ilist.forEach(val => {
	//eslint-disable-next-line func-names, @typescript-eslint/no-explicit-any
	(<any>ConvertVariableParse).prototype[`canBe${val}`] = function(
		this: ConvertVariableParse,
		cc: ConvertingContext
	) {
		const me = this.getValue(cc);
		//eslint-disable-next-line @typescript-eslint/no-explicit-any
		return (<any>me)[`canBe${val}`](cc);
	};
	//eslint-disable-next-line func-names, @typescript-eslint/no-explicit-any
	(<any>ConvertVariableParse).prototype[`as${val}`] = function(
		this: ConvertVariableParse,
		cc: ConvertingContext,
		...extraData: []
	) {
		const me = this.getValue(cc);
		const options = this.options;
		let rawKeyedOptions: { [key: string]: AsAble };
		if (!options) {
			rawKeyedOptions = {};
		} else if (options.canBeRawKeyedDictionary(cc)) {
			rawKeyedOptions = options.asRawKeyedDictionary(cc);
		} else {
			throw options.error(cc, "Options must be a dictionary.");
		}
		// here we want to make a new cc on top of the old one
		const newCC = cc.in();
		Object.keys(rawKeyedOptions).forEach(key => {
			const value = rawKeyedOptions[key];
			newCC.setParserVariable(key, value);
		});
		//eslint-disable-next-line @typescript-eslint/no-explicit-any
		return (<any>me)[`as${val}`](newCC, ...extraData);
	};
});

export class ErrorParse extends Parse {
	constructor(start: Position, end: Position, _message: string) {
		super(start, end);
	}
}
export class FilterParse extends Parse implements AsFilter {
	filterItems: AsAble[];
	mode: "and" | "or";
	constructor(
		start: Position,
		end: Position,
		mode: "and" | "or",
		filterItems: AsAble[]
	) {
		super(start, end);

		this.filterItems = filterItems;
		this.mode = mode;
	}
	canBeFilter(_cc: ConvertingContext): true {
		return true;
	}
	asFilter(
		cc: ConvertingContext,
		type: CoercionTypeClass
	): ContentItemFilter {
		const filter = new ContentItemFilter(type, this.mode);
		this.filterItems.forEach(filterItem => {
			if (!filterItem.canBeFilterItem(cc)) {
				throw filterItem.error(cc, "This item is not a filter item.");
			}
			filterItem.asFilterItem(cc, filter);
		});
		return filter;
	}
}
export class FilterItemParse extends Parse implements AsFilterItem {
	property: AsAble;
	operator: AsAble;
	value: AsAble;
	units?: AsAble;
	constructor(
		start: Position,
		end: Position,
		property: AsAble,
		operator: AsAble,
		value: AsAble,
		units?: AsAble
	) {
		// property: string, oiperatornl/ ;''
		super(start, end);
		this.property = property;
		this.operator = operator;
		this.value = value;
		this.units = units;
	}
	canBeFilterItem(_cc: ConvertingContext): true {
		return true;
	}
	asFilterItem(cc: ConvertingContext, filter: ContentItemFilter): void {
		if (!this.property.canBeString(cc)) {
			throw this.property.error(cc, "Property must be a string");
		}
		const property = genShortName(this.property.asString(cc));
		if (!isAggrandizementPropertyName(property)) {
			throw this.property.error(cc, "Property must be a property name.");
		}
		const propertyName: AggrandizementPropertyName = property;

		if (!this.operator.canBeString(cc)) {
			throw this.property.error(cc, "Operator must be a string");
		}
		const operator = genShortName(this.operator.asString(cc));
		if (!isComparisonMethod(operator)) {
			throw this.property.error(
				cc,
				"Property must be a comparison method."
			);
		}
		const operatorName: ComparisonName = operator;

		const typeInfo = filter.getTypeInfo({
			property: propertyName,
			operator: operatorName
		});
		if (typeInfo.error) {
			throw this.error(cc, typeInfo.message);
		}
		let value: Text | string | number | boolean | undefined;
		if (typeInfo.expectedType === "stringOrText") {
			if (!this.value.canBeText(cc)) {
				throw this.property.error(cc, "Value must be a string");
			}
			value = this.value.asText(cc);
		} else if (typeInfo.expectedType === "string") {
			if (!this.value.canBeString(cc)) {
				throw this.property.error(cc, "Value must be a string");
			}
			value = this.value.asString(cc);
		} else if (typeInfo.expectedType === "number") {
			if (!this.value.canBeNumber(cc)) {
				throw this.property.error(cc, "Value must be a number");
			}
			value = this.value.asNumber(cc);
		} else if (typeInfo.expectedType === "boolean") {
			if (!this.value.canBeBoolean(cc)) {
				throw this.property.error(cc, "Value must be a boolean");
			}
			value = this.value.asBoolean(cc);
		}

		if (value === undefined) {
			throw this.error(cc, "Value is unknown. This should never happen.");
		}

		if (this.units) {
			throw this.units.error(cc, "Units are not implemented yet");
		}

		const addResult = filter.add(value, typeInfo.typeData);
		if (typeof addResult === "string") {
			throw this.error(cc, addResult);
		}
	}
}
export class RawParse extends Parse implements AsRaw {
	dictionary: AsAble;
	constructor(start: Position, end: Position, dictionary: AsAble) {
		super(start, end);
		this.dictionary = dictionary;
	}
	canBeRaw(_cc: ConvertingContext): true {
		return true;
	}
	asRaw(cc: ConvertingContext) {
		if (!this.dictionary.canBeRawDictionary(cc)) {
			throw this.dictionary.error(cc, "Must be raw dictionary");
		}
		return new PrebuiltParameter(this.dictionary.asRawDictionary(cc));
	}
}
export class DictionaryParse extends Parse
	implements AsRawDictionary, AsRawKeyedDictionary, AsDictionary {
	keyvaluepairs: Array<{ key: AsAble; value: AsAble; type?: AsAble }>;
	constructor(
		start: Position,
		end: Position,
		keyvaluepairs: Array<{ key: AsAble; value: AsAble; type?: AsAble }>
	) {
		super(start, end);
		this.keyvaluepairs = keyvaluepairs;
	}
	canBeRawDictionary(_cc: ConvertingContext): true {
		return true;
	}
	asRawDictionary(cc: ConvertingContext) {
		// for static things that cannot have interpolated keys or values
		const dictionary: { [key: string]: string } = {};
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
			if (!value.canBeString(cc)) {
				throw value.error(
					cc,
					"This value must be a string with no variables."
				);
			}
			const stringKey = key.asString(cc);
			if (dictionary[stringKey]) {
				throw key.error(
					cc,
					`This key was already defined in this dictionary.`
				);
			}
			dictionary[stringKey] = value.asString(cc);
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
export class ListParse extends Parse
	implements AsArray, AsList, AsAbleArray, AsTimeOffsetParameter {
	items: Array<AsAble>;

	constructor(start: Position, end: Position, items: Array<AsAble>) {
		super(start, end);
		this.items = items;
	}
	canBeArray(_cc: ConvertingContext): true {
		return true;
	}
	asArray(cc: ConvertingContext) {
		// -> ""[]
		return this.items.map(item => {
			if (!item.canBeString(cc)) {
				throw item.error(
					cc,
					"This list can only contain strings with no variables."
				);
			}
			return item.asString(cc);
		});
	}
	canBeAbleArray(_cc: ConvertingContext): true {
		return true;
	}
	asAbleArray(_cc: ConvertingContext) {
		return this.items;
	}
	canBeList(_cc: ConvertingContext): true {
		return true;
	}
	asList(cc: ConvertingContext) {
		// -> Text[]
		return new List(
			this.items.map(item => {
				if (!item.canBeText(cc)) {
					throw item.error(cc, "This list can only contain strings.");
				}
				return item.asText(cc);
			})
		);
	}
	canBeTimeOffsetParameter(_cc: ConvertingContext): true {
		return true;
	}
	asTimeOffsetParameter(cc: ConvertingContext): AdjustOffset {
		const i0 = this.items[0];
		if (!i0) {
			throw this.error(cc, "List must contain at least one item.");
		}
		if (!i0.canBeString(cc)) {
			throw i0.error(cc, "Must be string");
		}
		const i0str = i0.asString(cc);
		if (i0str.toLowerCase() === "get" || this.items.length === 0) {
			// 1
			const fullStr = this.items
				.map(i => {
					if (!i.canBeString(cc)) {
						throw i.error(cc, "Must be string with no variables");
					}
					return i.asString(cc);
				})
				.join(" ");
			const timeoffsetvalueenum = nearestString<WFTimeOffsetValueEnum>(
				fullStr,
				WFTimeOffsetValueEnumList
			);
			if (!timeoffsetvalueenum) {
				throw this.error(
					cc,
					`Expected one of: \`${WFTimeOffsetValueEnumList.join()}\``
				);
			}
			const adjustOffset = new AdjustOffset({
				v: "onearg",
				mode: timeoffsetvalueenum
			});
			return adjustOffset;
		}
		if (this.items.length !== 3) {
			throw this.error(
				cc,
				"List must contain exactly three items, [Mode Count Unit]"
			);
		}
		const timeoffsetvalueaddsub = nearestString<"Add" | "Subtract">(i0str, [
			"Add",
			"Subtract"
		]);
		if (!timeoffsetvalueaddsub) {
			throw i0.error(cc, `Must be Add | Subtract`);
		}
		const i2 = this.items[2];
		if (!i2) {
			throw this.error(cc, "List must contain at least one item.");
		}
		if (!i2.canBeString(cc)) {
			throw i2.error(cc, "Must be string");
		}
		const i2str = i2.asString(cc);
		const timeoffsetvalueunit = nearestString<WFTimeOffsetValueUnit>(
			i2str,
			WFTimeOffsetValueUnitList
		);
		if (!timeoffsetvalueunit) {
			throw i2.error(
				cc,
				`Expected one of: \`${WFTimeOffsetValueUnitList.join()}\``
			);
		}
		let value: number | Attachment;
		const i1 = this.items[1];
		if (i1.canBeNumber(cc)) {
			value = i1.asNumber(cc);
		} else if (i1.canBeVariable(cc)) {
			value = i1.asVariable(cc);
		} else {
			throw i1.error(cc, "Must be number or variable");
		}
		return new AdjustOffset({
			v: "threearg",
			mode: timeoffsetvalueaddsub,
			unit: timeoffsetvalueunit,
			value
		});
	}
}
export class BarlistParse extends ListParse implements AsText, AsString {
	canBeString(_cc: ConvertingContext): true {
		return true;
	}
	asString(cc: ConvertingContext) {
		return this.items
			.map(item => {
				if (!item.canBeString(cc)) {
					throw item.error(
						cc,
						"This barlist can only contain strings with no variables."
					);
				}
				return item.asString(cc);
			})
			.join("\n");
	}
	canBeText(_cc: ConvertingContext): true {
		return true;
	}
	asText(cc: ConvertingContext) {
		// -> Text
		const finalText = new Text();
		this.items.forEach((item, i) => {
			if (!item.canBeText(cc)) {
				throw item.error(cc, "This barlist can only contain strings.");
			}
			finalText.add(item.asText(cc));
			if (this.items.length - 1 !== i) {
				finalText.add("\n");
			}
		});
		// this.data.join`\n` but for non-strings
		// finalText.add(...this.data.items.map(i=>i.asText()));
		return finalText;
	}
	canBeTimeOffsetParameter(_cc: ConvertingContext): true {
		return <true>false; // hmm...
	}
}

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
				if (item.canBeString(cc)) {
					string += item.asString(cc);
					return;
				}
			}
			cc.warn(
				item.error(cc, `This string is not allowed to have variables.`)
			);
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
export class NumberParse extends IdentifierParse {}
export class ArglistParse extends DictionaryParse {
	constructor(
		start: Position,
		end: Position,
		keyValuePairs: { key: AsAble; value: AsAble }[]
	) {
		super(start, end, keyValuePairs);
		this.special = "Arglist";
	}
}
export class VariableFlagParse extends Parse {
	variable: AsAble;
	constructor(start: Position, end: Position, variable: AsAble) {
		super(start, end);
		this.variable = variable;
	}
}
export class ActionParse extends Parse implements AsText, AsVariable, AsAction {
	name: AsAble;
	args: Array<AsAble>;
	variable?: AsAble;
	constructor(
		start: Position,
		end: Position,
		name: AsAble,
		args: Array<AsAble>,
		variable?: AsAble
	) {
		super(start, end);
		this.name = name;
		this.args = args;
		this.variable = variable;
	}
	// Action[Argument,Argument...]
	canBeText(_cc: ConvertingContext): true {
		return true;
	}
	asText(cc: ConvertingContext) {
		// Gets a text containing this action as a variable
		const variable = this.asVariable(cc);
		const text = new Text();
		text.add(variable);
		return text;
	}
	canBeVariable(_cc: ConvertingContext): true {
		return true;
	}
	asVariable(cc: ConvertingContext) {
		// returns the Variable for this ActionParse
		const action = this.asAction(cc); // adds the action
		if (!action) {
			throw this.error(cc, "This action does not have an action.");
		}
		return new MagicVariable(action);
		// otherwise: add a Set Variable action
		// throw new Error(`Actions of type ${action.info.id} cannot be converted to a variable.`);
	}
	canBeAction(_cc: ConvertingContext): true {
		return true;
	}
	asAction(cc: ConvertingContext): Action | undefined {
		// returns an Action for this ActionParse
		if (!this.name.canBeString(cc)) {
			throw this.name.error(
				cc,
				"This action must contain a string name with no variables."
			);
		}
		const actionNameFull = this.name.asString(cc);
		const actionName = actionNameFull.toLowerCase();
		let wfAction;
		let controlFlowData;
		if (
			actionName === "flow" ||
			actionName === "otherwise" ||
			actionName === "else" ||
			actionName === "case"
		) {
			// flow/case/otherwise action
			controlFlowData = cc.nextControlFlow();
			if (!controlFlowData) {
				throw this.name.error(
					cc,
					"There are no open block actions. Make you have a block action such as `if` or `chooseFromMenu` and that you don't have any extra ends."
				);
			}
			wfAction = controlFlowData[controlFlowData.length - 1].wfaction;
		} else if (actionName === "end") {
			controlFlowData = cc.endControlFlow();
			if (!controlFlowData) {
				throw this.name.error(
					cc,
					"There are no open block actions. Make you have a block action such as `if` or `chooseFromMenu` and that you don't have any extra ends."
				);
			}
			for (let i = controlFlowData.length - 1; i > 0; i--) {
				const d = controlFlowData[i];
				cc.add(endIf({ start: this.start, end: this.end }, d.uuid));
			}
			controlFlowData = [controlFlowData[0]];
			wfAction = controlFlowData[0].wfaction;
		} else if (actionName.startsWith("@")) {
			const preprocessorAction = cc.getParserAction(
				actionName.toLowerCase()
			);
			if (preprocessorAction) {
				preprocessorAction.call(this, cc, ...this.args);
			} else {
				throw this.name.error(
					cc,
					`There is no converter action with the name ${actionName}.`
				);
			}
			return;
		} else {
			wfAction = getActionFromName(actionNameFull);
			if (!wfAction) {
				throw this.name.error(
					cc,
					`This action could not be found. Check the documentation for a list of actions.`
				);
			}
		}
		if (!wfAction) {
			throw this.name.error(
				cc,
				`The action named ${actionName.toLowerCase()} could not be found.`
			);
		}
		const action = wfAction.build(
			cc,
			this,
			controlFlowData
				? controlFlowData[controlFlowData.length - 1]
				: undefined,
			...this.args
		);
		// WFAction adds it to cc for us, no need to do it ourselves.
		// now add any required set variable actions
		if (this.variable) {
			if (!this.variable.canBeNameType(cc)) {
				throw this.variable.error(
					cc,
					"To set an output variable, the output variable must be a variable."
				);
			}
			const { name, type } = this.variable.asNameType(cc); // TODO not this
			if (type === "v") {
				cc.add(setVariable(this.variable, name));
				cc.setNamedVariable(name);
			} else if (type === "mv") {
				action.magicvarname = name;
				cc.setMagicVariable(name, action);
			}
		}
		return action;
	}
}
export class VariableParse extends Parse
	implements AsStringVariable, AsNameType, AsText, AsVariable, AsAction {
	type: AsAble;
	name: AsAble;
	forkey: AsAble;
	options: AsAble;

	constructor(
		start: Position,
		end: Position,
		type: AsAble,
		name: AsAble,
		forkey: AsAble,
		options: AsAble
	) {
		super(start, end);
		this.type = type;
		this.name = name;
		this.forkey = forkey;
		this.options = options;
	}
	canBeStringVariable(_cc: ConvertingContext): true {
		return true;
	}
	asStringVariable(cc: ConvertingContext) {
		if (!this.name.canBeString(cc)) {
			throw this.name.error(
				cc,
				"This variable must have a string name with no variables."
			);
		}
		if (!this.type.canBeString(cc)) {
			throw this.type.error(
				cc,
				"This variable must have a string type with no variables."
			);
		}
		const name = this.name.asString(cc);
		const type = this.type.asString(cc);

		if (type !== "v") {
			throw this.type.error(
				cc,
				`This variable must be a v:named variable.`
			);
		}
		return name;
	}
	canBeNameType(_cc: ConvertingContext): true {
		return true;
	}
	asNameType(cc: ConvertingContext) {
		if (!this.name.canBeString(cc)) {
			throw this.name.error(
				cc,
				"This variable must have a string name with no variables."
			);
		}
		if (!this.type.canBeString(cc)) {
			throw this.type.error(
				cc,
				"This variable must have a string type with no variables."
			);
		}
		const name = this.name.asString(cc);
		const type = this.type.asString(cc);

		if (type !== "v" && type !== "mv") {
			throw this.type.error(
				cc,
				`This variable must be either a v: named variable or a mv: magic variable.`
			);
		}
		return { name, type };
	}
	canBeText(_cc: ConvertingContext): true {
		return true;
	}
	asText(cc: ConvertingContext) {
		const text = new Text();
		text.add(this.asVariable(cc));
		return text;
	}
	canBeVariable(_cc: ConvertingContext): true {
		return true;
	}
	asVariable(cc: ConvertingContext) {
		//Converts this v:variable to a variable
		let variable: Attachment;

		if (!this.name.canBeString(cc)) {
			throw this.name.error(
				cc,
				"This variable must have a string name with no variables."
			);
		}
		if (!this.type.canBeString(cc)) {
			throw this.type.error(
				cc,
				"This variable must have a string type with no variables."
			);
		}
		const name = this.name.asString(cc);
		const type = this.type.asString(cc);
		let aggrandizements: { [key: string]: AsAble };
		if (this.options) {
			if (!this.options.canBeRawKeyedDictionary(cc)) {
				throw this.options.error(
					cc,
					"The aggrandizements for this variable must be a dictionary with no variables in keys."
				);
			}
			aggrandizements = this.options.asRawKeyedDictionary(cc); // should be asRawKeyedDictionary and then use asstirng inside
		} else {
			aggrandizements = {};
		}

		if (type === "v") {
			// named variable
			let vardata = cc.getNamedVariable(name);
			if (
				name.startsWith("Repeat Index") ||
				name.startsWith("Repeat Item")
			) {
				vardata = true;
			}
			if (!vardata) {
				this.warn(
					cc,
					`The variable \`${type}:${name}\` has not been defined yet. Define it with a \`setVariable\` action.`
				);
			}
			variable = new NamedVariable(name);
		} else if (type === "mv") {
			// magic variable
			const vardata = cc.getMagicVariable(name);
			if (!vardata) {
				this.warn(
					cc,
					`The magic variable \`${type}:${name}\` has not been defined yet. Define it by putting an arrow on an action, for example \`myaction -> ${type}:${name}\``
				);
			}
			const mvact: [Action] | [string, string] = vardata
				? [vardata.action]
				: [name, uuidv4()];
			variable = new MagicVariable(...mvact);
		} else if (type === "s") {
			// special variable
			const attachtype: { [key: string]: AttachmentType | undefined } = {
				clipboard: "Clipboard",
				askwhenrun: "Ask",
				currentdate: "CurrentDate",
				shortcutinput: "ExtensionInput",
				actioninput: "Input"
			};
			const attachvalue = attachtype[name.toLowerCase()];
			if (!attachvalue) {
				throw this.name.error(
					cc,
					`This special variable does not exist. Valid special variables are ${Object.keys(
						attachtype
					)}`
				);
			}
			variable = new Attachment(attachvalue);
		} else {
			throw this.type.error(
				cc,
				`Variables must be either v: named variables, mv: magic variables, or s: special variables.`
			);
		}
		if (this.forkey) {
			variable.aggrandizements.setCoercionType("dictionary");
			if (!this.forkey.canBeString(cc)) {
				throw this.forkey.error(
					cc,
					"The forkey section of this variable must be a string with no variables."
				);
			}
			variable.aggrandizements.setForKey(this.forkey.asString(cc));
		}
		["as", "coerce", "key", "forkey", "get", "property"].forEach(key => {
			const valueA = aggrandizements[key];
			if (!valueA) {
				return;
			} // skip
			if (!valueA.canBeString(cc)) {
				throw valueA.error(
					cc,
					"Aggrandizements dictionary values must be strings"
				);
			}
			const value = valueA.asString(cc);
			const shortKey = key.toLowerCase().replace(/[^a-z]/g, "");
			if (shortKey === "key" || shortKey === "forkey") {
				const result = variable.aggrandizements.setForKey(value);
				if (typeof result === "string") {
					throw valueA.error(cc, result);
				}
			} else if (shortKey === "as" || shortKey === "coerce") {
				const result = variable.aggrandizements.setCoercionType(value);
				if (typeof result === "string") {
					throw valueA.error(cc, result);
				}
			} else if (shortKey === "get" || shortKey === "property") {
				const result = variable.aggrandizements.setProperty(value);
				if (typeof result === "string") {
					throw valueA.error(cc, result);
				}
			} else {
				// it would be better to throw at the key but asRawKyeedDictionary doesn't allow that
				// throwing at the value has strange problems with @; parser variables where it throws in the wrong place
				throw valueA.error(
					cc,
					`The aggrandizement ${key.toLowerCase()} has not been implemented yet or is invalid. Valid are \`key\`, \`as\`, or \`get\`]`
				);
			}
		});
		return variable;
	}
	canBeAction(_cc: ConvertingContext): true {
		return true;
	}
	asAction(cc: ConvertingContext) {
		const action = getVariable(this, this.asVariable(cc));
		cc.add(action);
		return action;
	}
}

export class ActionsParse extends Parse
	implements AsAction, AsVariable, AsText {
	actions: Array<AsAble>;
	constructor(start: Position, end: Position, actions: Array<AsAble>) {
		super(start, end);
		this.actions = actions;
	}
	canBeText(_cc: ConvertingContext): true {
		return true;
	}
	asText(cc: ConvertingContext) {
		const variable = this.asVariable(cc);
		const text = new Text();
		text.add(variable);
		return text;
	}
	canBeVariable(_cc: ConvertingContext): true {
		return true;
	}
	asVariable(cc: ConvertingContext) {
		const action = this.asAction(cc);
		if (!action) {
			throw this.error(
				cc,
				"There are no actions to make a variable from."
			);
		}
		return new MagicVariable(action);
	}
	canBeAction(_cc: ConvertingContext): true {
		return true;
	}
	asAction(cc: ConvertingContext) {
		let lastAction: Action | undefined;
		this.actions.forEach(action => {
			if (!action.canBeAction(cc)) {
				throw action.error(cc, "This value must be an action.");
			}
			lastAction = action.asAction(cc);
		});
		return lastAction;
	}
	asShortcut(
		arg0:
			| {
					[key: string]: (
						cc: ConvertingContext,
						...args: AsAble[]
					) => void;
			  }
			| ConvertingContext
			| undefined,
		options: { useWarnings: boolean }
	) {
		let cc: ConvertingContext;
		if (arg0 instanceof ConvertingContext) {
			cc = arg0;
		} else {
			cc = new ConvertingContext();
			const converterActions = arg0;
			if (converterActions) {
				Object.keys(converterActions).forEach(key => {
					cc.setParserAction(key, converterActions[key]);
				});
			}
		}
		cc.useWarnings = options.useWarnings;
		this.asAction(cc);
		if (cc.controlFlowStack.length !== 0) {
			throw this.error(
				cc,
				`There are ${
					cc.controlFlowStack.length
				} unended block actions. Check to make sure that every block (if/repeat/choose from menu) has an end.`
			);
		}
		return cc.shortcut;
	}
}
// Text::asString
// Text::build
