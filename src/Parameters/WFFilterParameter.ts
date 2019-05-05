import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

export class WFFilterParameter extends WFParameter {
	constructor(
		data: any,
		name = "Filter",
		docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#filter-field"
	) {
		super(data, name, docs);
		this.allowsVariables = false;
	}
	genDocsArgName() {
		return `:filter{...}`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a :filter{} of filters.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if (parse.canBeFilter(cc)) {
			return parse.asFilter(cc, this._data.ContentItemClass);
		}
		throw parse.error(cc, "Filter fields only accept filters (:filter {})");
	}
}