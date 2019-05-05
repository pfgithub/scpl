import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

export class WFVariablePickerParameter extends WFParameter {
	constructor(
		data: any,
		name = "Variable Picker",
		docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields"
	) {
		super(data, name, docs);
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
