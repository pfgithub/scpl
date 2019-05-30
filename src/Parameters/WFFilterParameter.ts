import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";
import {
	CoercionTypeClass,
	isCoercionTypeClass,
	AggrandizementPropertyName
} from "../WFTypes/Types";

import getTypes from "../Data/GetTypes";
import { WFParameter } from "./WFParameter";

export class WFFilterParameter extends WFParameter {
	coercionType: CoercionTypeClass;
	constructor(
		data: any,
		name = "Filter",
		docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#filter-field"
	) {
		super(data, name, docs);
		this.allowsVariables = false;
		if (!isCoercionTypeClass(this._data.ContentItemClass)) {
			//eslint-disable-next-line
			console.warn(
				"WARNING! A filter uses a coercion type class that is not supported!",
				this._data.ContentItemClass
			);
		}
		this.coercionType = this._data.ContentItemClass;
	}
	genDocsArgName() {
		return `:filter{...}`;
	}
	genDocs() {
		getTypes[this.coercionType];
		return `${super.genDocs()}

Accepts a :filter{} of filters. This filter supports:

- ${Object.keys(getTypes[this.coercionType].properties)
			.map(key => {
				const val =
					getTypes[this.coercionType].properties[
						<AggrandizementPropertyName>key
					];
				if (!val) {
					return;
				}
				if (val.filter === false) {
					return;
				}
				if (!val.filter) {
					return `~~${key}~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=${encodeURIComponent(
						`Add support for :filter{${key}} (in ${
							this.coercionType
						})`
					)
						.split("(")
						.join("%28")
						.split(")")
						.join("%29")}))`;
				}
				if (!val.type) {
					return `~~${key}~~ (Not yet supported, type is undefined but filter is defined. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=${encodeURIComponent(
						`Type is undefined but filter is defined in :filter{${key}} (in ${
							this.coercionType
						})`
					)
						.split("(")
						.join("%28")
						.split(")")
						.join("%29")}))`;
				}
				const itemType = getTypes[val.type];
				if (!itemType.comparisonMethods) {
					return `~~${key}~~ (Not yet supported, no comparison methods defined. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=${encodeURIComponent(
						`Add :filter support for ${val.type}`
					)
						.split("(")
						.join("%28")
						.split(")")
						.join("%29")}))`;
				}
				if (val.filterEnumValues) {
					return `${key} (Supported for ${Object.keys(
						itemType.comparisonMethods
					).join(
						", "
					)}) (Must be one of: \`${val.filterEnumValues.join(
						"`, `"
					)})\``;
				}
				return `${key} (Supported for ${Object.keys(
					itemType.comparisonMethods
				).join(", ")})`;
			})
			.join("\n- ")}.
			
Example: \`:filter{name is testname}\``;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if (parse.canBeFilter(cc)) {
			return parse.asFilter(cc, this._data.ContentItemClass);
		}
		throw parse.error(cc, "Filter fields only accept filters (:filter {})");
	}
}
