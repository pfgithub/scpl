import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

import { ShortcutsDictionaryParameterSpec } from "../Data/ActionDataTypes/ShortcutsParameterSpec";

export class WFDictionaryParameter extends WFParameter {
	_data: ShortcutsDictionaryParameterSpec;
	constructor(
		data: ShortcutsDictionaryParameterSpec,
		name = "Dictionary",
		docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#dictionary-field"
	) {
		super(data, name, docs);
		this._data = data;
	}
	genDocsArgName() {
		return `{dictionary}`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a dictionary.`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if (!parse.canBeDictionary(cc)) {
			throw parse.error(
				cc,
				"Dictionary fields only accept dictionaries."
			);
		}
		return parse.asDictionary(cc);
	}
}
