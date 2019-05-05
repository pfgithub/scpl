import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

export class WFContentArrayParameter extends WFParameter {
	constructor(
		data: any,
		name: "List",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#list-field"
	) {
		super(data, name, docs);
	}
	genDocsArgName() {
		return `[list, items]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a list.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if (!parse.canBeList(cc)) {
			throw parse.error(cc, "List fields only accept lists.");
		}
		const list = parse.asList(cc);
		return list;
	}
}