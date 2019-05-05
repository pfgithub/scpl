import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

export class WFEmailAddressFieldParameter extends WFParameter {
	constructor(
		data: any,
		name = "Email",
		docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields"
	) {
		super(data, name, docs);
	}
	genDocsArgName() {
		return `("string" | [list, of, strings] | variable)`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string or string array or variable of email addresses.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if (parse.canBeVariable(cc)) {
			return parse.asVariable(cc);
		}
		if (parse.canBeArray(cc)) {
			return parse.asArray(cc);
		}
		if (parse.canBeString(cc)) {
			return [parse.asString(cc)];
		}
		throw parse.error(
			cc,
			"Email adress fields only accept variables, lists without variables, and strings without variables."
		);
	}
}