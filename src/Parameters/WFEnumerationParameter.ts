import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

export class WFEnumerationParameter extends WFParameter {
	options: Array<string>;
	constructor(
		data: any,
		name: string = "Enumeration",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field"
	) {
		super(data, name, docs);
		this.options = this._data.Items;
	}
	genDocsAutocompletePlaceholder() {
		return `|${this.options.map(o => `"${o}"`).join(",")}${
			this.allowsVariables ? `,variable` : ``
		}|`;
	}
	genDocsArgName() {
		const strInfo = this.options.join('" | "');
		return this.allowsVariables
			? `("${strInfo}")`
			: `("${strInfo}" | variable)`;
	}
	genDocsDefaultValue(value: string) {
		return `\`"${value}"\``;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string ${
			this.allowsVariables
				? `
or variable`
				: ""
		}
containing one of the options:

- \`${this.options.join(`\`\n- \``)}\``;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		// asVariable may require additional actions to be inserted above this one.
		// for example, if ^("hello") (v:comparison) "hi"
		if (parse.canBeVariable(cc)) {
			const res = parse.asVariable(cc);
			if (!this.allowsVariables) {
				throw parse.error(
					cc,
					"This enum field does not accept variables."
				);
			}
			return res;
		} else if (parse.canBeString(cc)) {
			const res = parse.asString(cc); // asString returns a string like ""
			if (this.options.indexOf(res) > -1) {
				return res;
			}
			throw parse.error(
				cc,
				`This enumeration field must be one of the following: \`${this.options.join(
					"`, `"
				)}\``
			);
		} else {
			throw parse.error(
				cc,
				"Enumeration fields only accept strings and variables."
			);
		}
	}
}