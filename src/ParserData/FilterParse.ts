import { ConvertingContext } from "../Converter";
import {
	Parse,
	AsAble,
	AsFilter
} from "../ParserData";
import {
	CoercionTypeClass,
} from "../WFTypes/Types";
import { ContentItemFilter } from "../OutputData";
import { Position } from "../Production";

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