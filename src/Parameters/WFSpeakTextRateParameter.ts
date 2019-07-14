import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFNumberFieldParameter } from "./WFNumberFieldParameter";

import { ShortcutsSpeakTextRatePickerParameterSpec } from "../Data/ActionDataTypes/ShortcutsParameterSpec";

export class WFSpeakTextRateParameter extends WFNumberFieldParameter {
	_data: ShortcutsSpeakTextRatePickerParameterSpec;
	constructor(
		data: ShortcutsSpeakTextRatePickerParameterSpec,
		name: string = "Speak Text Rate",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#slider-number-fields"
	) {
		super(data, name, docs);
		this._data = data;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		const val = super.build(cc, parse);
		if (typeof val === "number") {
			if (val < 0 || val > 2) {
				throw parse.error(
					cc,
					"Speak text rate fields only accept numbers from 0 to 2"
				);
			}
		}
		return val;
	}
}
