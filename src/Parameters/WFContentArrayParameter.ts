import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

import { ShortcutsContentArrayParameterSpec } from "../Data/ActionDataTypes/ShortcutsParameterSpec";

export class WFContentArrayParameter extends WFParameter {
	_data: ShortcutsContentArrayParameterSpec;
	constructor(
		data: ShortcutsContentArrayParameterSpec,
		name: "List",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#list-field"
	) {
		super(data, name, docs);
		this._data = data;
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
