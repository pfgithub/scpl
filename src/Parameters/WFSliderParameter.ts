import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFNumberFieldParameter } from "./WFNumberFieldParameter";

import { ShortcutsSliderParameterSpec } from "../Data/ActionDataTypes/ShortcutsParameterSpec";
import { Action } from "../OutputData";

export class WFSliderParameter extends WFNumberFieldParameter {
	_data: ShortcutsSliderParameterSpec;
	constructor(
		data: ShortcutsSliderParameterSpec,
		name: string = "Slider Number",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#slider-number-fields"
	) {
		super(data, name, docs);
		this._data = data;
	}
	build(cc: ConvertingContext, parse: AsAble, action: Action) {
		const val = super.build(cc, parse, action);
		if (typeof val === "number") {
			if (val < 0 || val > 1) {
				cc.warn(
					parse.error(
						cc,
						"Slider fields only accept numbers from 0 to 1"
					)
				);
				return 0;
			}
		}
		return val;
	}
}
