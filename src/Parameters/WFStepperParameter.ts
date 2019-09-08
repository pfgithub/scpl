import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFNumberFieldParameter } from "./WFNumberFieldParameter";

import { ShortcutsStepperParameterSpec } from "../Data/ActionDataTypes/ShortcutsParameterSpec";
import { Action } from "../OutputData";

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
	build(cc: ConvertingContext, parse: AsAble, action: Action) {
		const val = super.build(cc, parse, action);
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
