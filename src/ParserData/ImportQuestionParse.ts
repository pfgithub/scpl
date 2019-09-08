import { ConvertingContext } from "../Converter";
import {
	Parse,
	AsAble, AsImportQuestion, AsNameType
} from "../ParserData";
import { Position } from "../Production";

export class ImportQuestionParse extends Parse
	implements AsImportQuestion, AsNameType {
	name: AsAble;
	options?: AsAble;
	constructor(
		start: Position,
		end: Position,
		name: AsAble,
		options?: AsAble
	) {
		super(start, end);
		this.name = name;
		this.options = options;
	}
	canBeNameType(cc: ConvertingContext) {
		return true as const;
	}
	asNameType(cc: ConvertingContext) {
		if(!this.name.canBeString(cc)) {
			throw this.name.error(cc, "Must be string");
		}
		return {name: this.name.asString(cc), type: "q"};
	}
	canBeImportQuestion(cc: ConvertingContext) {
		return true as const;
	}
	asImportQuestion(cc: ConvertingContext, parameterKey: string, actionUUID: string) {
		if(!this.name.canBeString(cc)) {
			throw this.name.error(cc, "Must be string");
		}
		const nameStr = this.name.asString(cc);
		const result = cc.useImportQuestion(nameStr, parameterKey, actionUUID);
		if(result === true) {
			return "import question";
		}
		if(result === "already used") {
			throw this.error(cc, "This import question has already been used. Import question values can only be used once.");
		}
		throw this.error(cc, `No import question named q:${nameStr} exists. Define it with @ImportQuestion variable=q:${nameStr} question='your question'`);
	}
}