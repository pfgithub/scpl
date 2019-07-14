import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";

import { WFParameter } from "./WFParameter";

import { ShortcutsTimeOffsetParameterSpec } from "../Data/ActionDataTypes/ShortcutsParameterSpec";

export class WFTimeOffsetParameter extends WFParameter {
	_data: ShortcutsTimeOffsetParameterSpec;
	constructor(
		data: ShortcutsTimeOffsetParameterSpec,
		name = "Time Offset",
		docs = "https://pfgithub.github.io/shortcutslang/gettingstarted#time-offset"
	) {
		super(data, name, docs);
		this._data = data;
	}
	genDocsArgName() {
		return `([Add|Subtract, number|v:variable, Seconds|Minutes|Hours|Days|Weeks|Months|Years] | [Get, Start, Of, Minute|Hour|Day|Week|Month|Year])`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a list containing either:  
[Add|Subtract, number|variable, unit]  
or  
[].`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if (parse.canBeTimeOffsetParameter(cc)) {
			return parse.asTimeOffsetParameter(cc);
		}
		throw parse.error(
			cc,
			"Must be time offset parameter such as: [add 5 seconds] or [get start of minute]"
		);
	}
}
