import {
	Action,
	Dictionary,
	Text,
	MagicVariable,
	Variable,
	List,
	ContentItemFilter,
	AdjustOffset,
	RawParameter
} from "./OutputData";
import { ConvertingContext } from "./Converter";
import { Position } from "./Production";
import { CoercionTypeClass } from "./WFTypes/Types";

import { PositionedError } from "./PositionedError";
export { PositionedError } from "./PositionedError";

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
	canBeRawKeyedDictionary(
		_cc: ConvertingContext
	): this is AsRawKeyedDictionary {
		return false;
	}
	canBeRawDeepDictionary(
		_cc: ConvertingContext
	): this is AsRawDeepDictionary {
		return false;
	}
	canBeRawDeepArray(_cc: ConvertingContext): this is AsRawDeepArray {
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
	canBeImportQuestion(_cc: ConvertingContext): this is AsImportQuestion {
		return false;
	}
	getDeepestRealValue(_cc: ConvertingContext): Parse {
		return this;
	}
	// [Symbol.hasInstance]() {
	// 	throw new Error("Instanceof is not supported on Parse. This should never happen.");
	// }
}

export interface AsString extends Parse {
	canBeString(cc: ConvertingContext): true;
	asString(cc: ConvertingContext): string;
}

export interface AsBoolean extends Parse {
	canBeBoolean(cc: ConvertingContext): true;
	asBoolean(cc: ConvertingContext): boolean;
}

export interface AsText extends Parse {
	canBeText(cc: ConvertingContext): true;
	asText(cc: ConvertingContext): Text;
}

export interface AsList extends Parse {
	canBeList(cc: ConvertingContext): true;
	asList(cc: ConvertingContext): List;
}

export interface AsArray extends Parse {
	canBeArray(cc: ConvertingContext): true;
	asArray(cc: ConvertingContext): Array<string>;
}

export interface AsAbleArray extends Parse {
	canBeAbleArray(cc: ConvertingContext): true;
	asAbleArray(cc: ConvertingContext): Array<AsAble>;
}

export interface AsVariable extends Parse {
	canBeVariable(cc: ConvertingContext): true;
	asVariable(cc: ConvertingContext): Variable;
}

export interface AsAction extends Parse {
	canBeAction(cc: ConvertingContext): true;
	asAction(cc: ConvertingContext): Action | undefined;
}

export interface AsDictionary extends Parse {
	canBeDictionary(cc: ConvertingContext): true;
	asDictionary(cc: ConvertingContext): Dictionary;
}

export interface AsRawKeyedDictionary extends Parse {
	canBeRawKeyedDictionary(cc: ConvertingContext): true;
	asRawKeyedDictionary(cc: ConvertingContext): { [key: string]: AsAble };
}

export interface AsRawDeepDictionary extends Parse {
	canBeRawDeepDictionary(cc: ConvertingContext): true;
	asRawDeepDictionary(cc: ConvertingContext): NestedStringDictionary;
}

export interface AsRawDeepArray extends Parse {
	canBeRawDeepArray(cc: ConvertingContext): true;
	asRawDeepArray(cc: ConvertingContext): NestedStringDictionaryItemArray;
}

export interface AsNameType extends Parse {
	canBeNameType(cc: ConvertingContext): true;
	asNameType(cc: ConvertingContext): { name: string; type: string };
}

export interface AsStringVariable extends Parse {
	canBeStringVariable(cc: ConvertingContext): true;
	asStringVariable(cc: ConvertingContext): string;
}

export interface AsNumber extends Parse {
	canBeNumber(cc: ConvertingContext): true;
	asNumber(cc: ConvertingContext): number;
}

export interface AsFilter extends Parse {
	canBeFilter(cc: ConvertingContext): true;
	asFilter(cc: ConvertingContext, type: CoercionTypeClass): ContentItemFilter;
}

export interface AsFilterItem extends Parse {
	canBeFilterItem(cc: ConvertingContext): true;
	asFilterItem(cc: ConvertingContext, filter: ContentItemFilter): void;
}
export interface AsPreprocessorVariableName extends Parse {
	canBePreprocessorVariableName(cc: ConvertingContext): true;
	asPreprocessorVariableName(cc: ConvertingContext): string;
}

export interface AsTimeOffsetParameter extends Parse {
	canBeTimeOffsetParameter(cc: ConvertingContext): true;
	asTimeOffsetParameter(cc: ConvertingContext): AdjustOffset;
}

export interface AsRaw extends Parse {
	canBeRaw(cc: ConvertingContext): true;
	asRaw(cc: ConvertingContext): RawParameter;
}

export interface AsImportQuestion extends Parse {
	canBeImportQuestion(cc: ConvertingContext): true;
	asImportQuestion(
		cc: ConvertingContext,
		parameterKey: string,
		actionUUID: string
	): string;
}

export const parseTypeList = [
	"String",
	"Boolean",
	"Text",
	"List",
	"Array",
	"AbleArray",
	"Variable",
	"Action",
	"Dictionary",
	"RawKeyedDictionary",
	"RawDeepDictionary",
	"NameType",
	"StringVariable",
	"Number",
	"Filter",
	"FilterItem",
	"TimeOffsetParameter",
	"Raw",
	"ImportQuestion"
	// not PreprocessorVariableName
];

export type AsAble = Parse;

export type NestedStringDictionaryItem =
	| string
	| number
	| boolean
	| undefined
	| NestedStringDictionaryItemArray
	| NestedStringDictionary;
export type NestedStringDictionary = {
	[key: string]: NestedStringDictionaryItem;
};
export interface NestedStringDictionaryItemArray
	extends Array<NestedStringDictionaryItem> {}

export function createRawDeepItem(
	cc: ConvertingContext,
	value: Parse
): NestedStringDictionaryItem {
	if (value.canBeString(cc)) {
		return value.asString(cc);
	} else if (value.canBeRawDeepDictionary(cc)) {
		return value.asRawDeepDictionary(cc);
	} else if (value.canBeRawDeepArray(cc)) {
		return value.asRawDeepArray(cc);
	}
	throw value.error(cc, "Must be string or raw deep dictionary");
}

export { ConvertVariableParse } from "./ParserData/ConvertVariableParse";
export { ErrorParse } from "./ParserData/ErrorParse";
export { FilterParse } from "./ParserData/FilterParse";
export { FilterItemParse } from "./ParserData/FilterItemParse";
export { ArglistParse } from "./ParserData/ArglistParse";
export { RawParse } from "./ParserData/RawParse";
export { DictionaryParse } from "./ParserData/DictionaryParse";
export { ListParse } from "./ParserData/ListParse";
export { BarlistParse } from "./ParserData/BarlistParse";
export { CharsParse } from "./ParserData/CharsParse";
export { IdentifierParse } from "./ParserData/IdentifierParse";
export { NumberParse } from "./ParserData/NumberParse";
export { VariableFlagParse } from "./ParserData/VariableFlagParse";
export { VariableParse } from "./ParserData/VariableParse";
export { ActionParse } from "./ParserData/ActionParse";

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
				action.warn(cc, "This value must be an action.");
				return;
			}
			try {
				lastAction = action.asAction(cc);
			} catch (e) {
				cc.warn(e);
				return undefined;
			}
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
			this.warn(
				cc,
				`There are ${cc.controlFlowStack.length} unended block actions. Check to make sure that every block (if/repeat/choose from menu) has an end.`
			);
		}
		return cc.shortcut;
	}
}
// Text::asString
// Text::build
