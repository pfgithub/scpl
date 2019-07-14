import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

import { ShortcutsDynamicEnumerationParameterSpec } from "../Data/ActionDataTypes/ShortcutsParameterSpec";

export class WFDynamicEnumerationParameter extends WFParameter {
	_data: ShortcutsDynamicEnumerationParameterSpec;
	constructor(
		data: ShortcutsDynamicEnumerationParameterSpec,
		name = "Picker",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields"
	) {
		super(data, name, docs);
		this._data = data;
	}
	genDocsArgName() {
		return `("string" | variable)]`;
	}
	genDocs() {
		return `${super.genDocs()}

		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. `;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if (parse.canBeVariable(cc)) {
			const res = parse.asVariable(cc);
			return res;
		} else if (parse.canBeString(cc)) {
			const res = parse.asString(cc);
			return res;
		}
		throw parse.error(
			cc,
			`${this.name} fields can only contain strings and variables.`
		);
	}
}
