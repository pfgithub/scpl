import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFNumberFieldParameter } from "./WFNumberFieldParameter";

export class WFSliderParameter extends WFNumberFieldParameter {
	constructor(
		data: any,
		name: string = "Slider Number",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#slider-number-fields"
	) {
		super(data, name, docs);
	}
	build(cc: ConvertingContext, parse: AsAble) {
		const val = super.build(cc, parse);
		if (typeof val === "number") {
			if (val < 0 || val > 1) {
				throw parse.error(
					cc,
					"Slider fields only accept numbers from 0 to 1"
				);
			}
		}
		return val;
	}
}