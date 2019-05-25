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
with the text. ${
			this._data.Multiline
				? "Allows newlines."
				: "Does not allow newlines."
		}`;
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
			const strData = parse.asString(cc);
			if (!this._data.Multiline && strData.indexOf("\n") > -1) {
				throw parse.error(
					cc,
					"Newlines are not allowed in this text field."
				);
			}
			return strData;
		}
		if (!parse.canBeText(cc)) {
			throw parse.error(cc, "Text fields only accept text.");
		}
		const textData = parse.asText(cc);
		if (
			!this._data.Multiline &&
			textData._components.find(component =>
				typeof component === "string"
					? component.indexOf("\n") > -1
					: false
			)
		) {
			throw parse.error(
				cc,
				"Newlines are not allowed in this text field. Use a variable with a newline instead."
			);
		}
		return textData;
	}
}
