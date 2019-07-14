import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

import { ShortcutsVariableFieldParameterSpec } from "../Data/ActionDataTypes/ShortcutsParameterSpec";

export class WFVariableFieldParameter extends WFParameter {
	_data: ShortcutsVariableFieldParameterSpec;
	constructor(
		data: ShortcutsVariableFieldParameterSpec,
		name = "Variable Input",
		docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#variable-field"
	) {
		super(data, name, docs);
		this._data = data;
	}
	genDocsArgName() {
		return `(v:variableName | variableName)`;
	}
	genDocs() {
		const docs = `${super.genDocs()}

Accepts a string with the name of the named variable (v:) you want to set,
or a named variable (v:) that you want to set.
`;
		return docs;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		const varname = parse.canBeString(cc)
			? parse.asString(cc)
			: parse.canBeStringVariable(cc)
			? parse.asStringVariable(cc)
			: (() => {
					throw parse.error(
						cc,
						"Variable fields only accept strings and named variables with no aggrandizements."
					);
			  })();
		cc.setNamedVariable(varname);
		return varname;
	}
}
