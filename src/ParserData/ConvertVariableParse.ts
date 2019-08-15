import { ConvertingContext } from "../Converter";
import {
	Parse,
	AsPreprocessorVariableName,
	AsAble,
	parseTypeList
} from "../ParserData";
import { Position } from "../Production";

export class ConvertVariableParse extends Parse
	implements AsPreprocessorVariableName {
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
	canBePreprocessorVariableName(_cc: ConvertingContext): true {
		return true;
	}
	asPreprocessorVariableName(cc: ConvertingContext) {
		if (!this.name.canBeString(cc)) {
			throw this.name.error(
				cc,
				"Name must be a string with no variables."
			);
		}
		const name = this.name.asString(cc);
		return name;
	}
	getValue(cc: ConvertingContext): AsAble {
		const name = this.asPreprocessorVariableName(cc);
		const me = cc.getParserVariable(name);
		if (!me) {
			throw super.error(cc, `Parser Variable @:${name} is not defined.`);
		}
		return me;
	}
	error(cc: ConvertingContext, message: string) {
		const me = this.getValue(cc);
		return me.error(cc, `${this.start} ${this.end} ${message}`);
	}
	warn(cc: ConvertingContext, message: string) {
		const me = this.getValue(cc);
		return me.warn(cc, `${this.start} ${this.end} ${message}`);
	}
	getDeepestRealValue(cc: ConvertingContext): Parse {
		return this.getValue(cc);
	}
}
// there has to be a better way
parseTypeList.forEach(val => {
	//eslint-disable-next-line func-names, @typescript-eslint/no-explicit-any
	(<any>ConvertVariableParse).prototype[`canBe${val}`] = function(
		this: ConvertVariableParse,
		cc: ConvertingContext
	) {
		const me = this.getValue(cc);
		//eslint-disable-next-line @typescript-eslint/no-explicit-any
		return (<any>me)[`canBe${val}`](cc);
	};
	//eslint-disable-next-line func-names, @typescript-eslint/no-explicit-any
	(<any>ConvertVariableParse).prototype[`as${val}`] = function(
		this: ConvertVariableParse,
		cc: ConvertingContext,
		...extraData: []
	) {
		const me = this.getValue(cc);
		const options = this.options;
		let rawKeyedOptions: { [key: string]: AsAble };
		if (!options) {
			rawKeyedOptions = {};
		} else if (options.canBeRawKeyedDictionary(cc)) {
			rawKeyedOptions = options.asRawKeyedDictionary(cc);
		} else {
			throw options.error(cc, "Options must be a dictionary.");
		}
		// here we want to make a new cc on top of the old one
		const newCC = cc.in();
		Object.keys(rawKeyedOptions).forEach(key => {
			const value = rawKeyedOptions[key];
			newCC.setParserVariable(key, value);
		});
		//eslint-disable-next-line @typescript-eslint/no-explicit-any
		return (<any>me)[`as${val}`](newCC, ...extraData);
	};
});
