import { Parse, AsAble } from "../ParserData";
import { Position } from "../Production";

export class VariableFlagParse extends Parse {
	variable: AsAble;
	constructor(start: Position, end: Position, variable: AsAble) {
		super(start, end);
		this.variable = variable;
	}
}
