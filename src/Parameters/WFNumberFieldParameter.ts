import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

export class WFNumberFieldParameter extends WFParameter {
	constructor(
		data: any,
		name: string = "Number",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#number-field"
	) {
		super(data, name, docs);
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
	build(cc: ConvertingContext, parse: AsAble) {
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
			const num = parse.asNumber(cc); // asString returns a string like "" <-- that's a string
			return num;
		}
		throw parse.error(
			cc,
			"Number fields only accept numbers and variables."
		);
	}
}