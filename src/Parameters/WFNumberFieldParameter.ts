import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

import { ShortcutsNumberFieldParameterSpec } from "../Data/ActionDataTypes/ShortcutsParameterSpec";
import { Action } from "../OutputData";

export class WFNumberFieldParameter extends WFParameter {
	_data: ShortcutsNumberFieldParameterSpec;
	constructor(
		data: ShortcutsNumberFieldParameterSpec,
		name: string = "Number",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#number-field"
	) {
		super(data, name, docs);
		this._data = data;
	}
	genDocsArgName(): string {
		return this.allowsVariables ? `number` : `(number | variable)`;
	}
	genDocs() {
		return `${super.genDocs()}

		Accepts a number ${
			this.allowsVariables
				? `
		or variable`
				: ""
		}
		with a number.`;
	}
	genDocsDefaultValue(value: string) {
		return `\`${value}\``;
	}
	build(cc: ConvertingContext, parse: AsAble, action: Action) {
		if (parse.canBeImportQuestion(cc)) {
			return parse.asImportQuestion(cc, this._data.Key, action.uuid);
		}
		if (parse.canBeVariable(cc)) {
			const res = parse.asVariable(cc);
			if (!this.allowsVariables) {
				throw parse.error(
					cc,
					"This number field does not acccept variables."
				);
			}
			return res;
		} else if (parse.canBeNumber(cc)) {
			const num = parse.asNumber(cc);
			return num;
		}
		parse.warn(cc, "Number fields only accept numbers and variables.");
		return 0;
	}
}
