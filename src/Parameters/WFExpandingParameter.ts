import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

export class WFExpandingParameter extends WFParameter {
	constructor(
		data: any,
		name = "Expand Arrow",
		docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields"
	) {
		super(data, name, docs);
		this.allowsVariables = false;
	}
	genDocsArgName() {
		return `(true | false)`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a boolean for if this
parameter is expanded or not.
Often expanding fields will
enable or disable other
arguments. If you are using
labels, these can be ignored.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if (parse.canBeBoolean(cc)) {
			return parse.asBoolean(cc);
		}
		throw parse.error(
			cc,
			"Expanding fields only accept booleans (true/false)."
		);
	}
}