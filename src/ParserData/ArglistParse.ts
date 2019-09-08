import { DictionaryParse } from "./DictionaryParse";
import { AsAble } from "../ParserData";
import { Position } from "../Production";

// should have canBeArgumentList, asArgumentList
export class ArglistParse extends DictionaryParse {
	constructor(
		start: Position,
		end: Position,
		keyValuePairs: { key: AsAble; value: AsAble }[]
	) {
		super(start, end, keyValuePairs);
		this.special = "Arglist";
	}
}
