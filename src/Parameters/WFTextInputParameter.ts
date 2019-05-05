import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

export class WFTextInputParameter extends WFParameter {
	constructor(
		data: any,
		name = "Text",
		docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#text-field"
	) {
		super(data, name, docs);
	}
	genDocsArgName() {
		return `"string"`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string ${
			this.allowsVariables
				? `
or text`
				: ""
		}
with the text.`;
	}
	genDocsDefaultValue(value: string) {
		return `\`"${value}"\``;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if (!this.allowsVariables) {
			if (!parse.canBeString(cc)) {
				throw parse.error(
					cc,
					"This text field only accepts text with no variables."
				);
			}
			return parse.asString(cc);
		}
		if (!parse.canBeText(cc)) {
			throw parse.error(cc, "Text fields only accept text.");
		}
		return parse.asText(cc);
	}
}
