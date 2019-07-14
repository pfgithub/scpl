import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

import { ShortcutsVariablePickerParameterSpec } from "../Data/ActionDataTypes/ShortcutsParameterSpec";

export class WFVariablePickerParameter extends WFParameter {
	_data: ShortcutsVariablePickerParameterSpec;
	constructor(
		data: ShortcutsVariablePickerParameterSpec,
		name = "Variable Picker",
		docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields"
	) {
		super(data, name, docs);
		this._data = data;
	}
	genDocsArgName() {
		return `(v:myvar | mv:myvar | s:myvar)`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a variable.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if (!parse.canBeVariable(cc)) {
			throw parse.error(
				cc,
				"Variable picker fields only accept variables."
			);
		}
		const variable = parse.asVariable(cc);
		return variable;
	}
}
