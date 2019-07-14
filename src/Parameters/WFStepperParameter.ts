import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFNumberFieldParameter } from "./WFNumberFieldParameter";

import { ShortcutsStepperParameterSpec } from "../Data/ActionDataTypes/ShortcutsParameterSpec";

export class WFStepperParameter extends WFNumberFieldParameter {
	_data: ShortcutsStepperParameterSpec;
	constructor(
		data: ShortcutsStepperParameterSpec,
		name: string = "Stepper Number",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields"
	) {
		super(data, name, docs);
		this._data = data;
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
