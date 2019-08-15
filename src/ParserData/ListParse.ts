import { ConvertingContext } from "../Converter";
import {
	Parse,
	AsArray,
	AsList,
	AsAbleArray,
	AsTimeOffsetParameter,
	AsAble,
	createRawDeepItem
} from "../ParserData";
import {
	List,
	AdjustOffset,
	WFTimeOffsetValueEnum,
	WFTimeOffsetValueEnumList,
	WFTimeOffsetValueUnitList,
	WFTimeOffsetValueUnit,
	Attachment
} from "../OutputData";
import { Position } from "../Production";
import { nearestString } from "../nearestString";

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
	canBeRawDeepArray(_cc: ConvertingContext) {
		return true;
	}
	asRawDeepArray(cc: ConvertingContext) {
		return this.items.map(item => createRawDeepItem(cc, item));
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
