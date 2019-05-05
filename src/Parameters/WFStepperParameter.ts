import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFNumberFieldParameter } from "./WFNumberFieldParameter";

export class WFStepperParameter extends WFNumberFieldParameter {
	constructor(
		data: any,
		name: string = "Stepper Number",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields"
	) {
		super(data, name, docs);
	}
	build(cc: ConvertingContext, parse: AsAble) {
		const val = super.build(cc, parse);
		if (typeof val === "number") {
			if (!Number.isInteger(val) || val < 0) {
				throw parse.error(
					cc,
					"Stepper fields only accept positive integer numbers."
				);
			}
		}
		return val;
	}
}