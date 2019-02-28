let totalSteps = 0;
let began: Date;

export type ProductionResolveable = Production | {getProd: () => Production}

export class Performance {
	static startMonitoring() {
		totalSteps = 0;
		began = new Date();
		console.log(`Started parsing.`); //eslint-disable-line no-console
	}
	static stopMonitoring() {
		const ended = new Date();
		console.log(`Parsed in ${totalSteps} steps over ${ended.getTime() - began.getTime()}ms.`); //eslint-disable-line no-console
	}
}

export class Production {
	cb: (input: any) => any // todo cb: (input: any) => Parse
	constructor(cb = (a: any) => a) {
		this.cb = cb;
	}
	scb(cb: (input: any) => any) {
		this.cb = cb;
		return this;
	}
	getProd() {
		return this;
	}
	parse(_string: string): {data?: any, remainingStr?: string, error?: string, success: boolean} {
		totalSteps++;
		return {success: false};
	}
}

export class OrderedProduction extends Production {
	requirements: Array<ProductionResolveable>
	constructor(...requirements: Array<ProductionResolveable>) {
		super();
		this.requirements = requirements;
	}
	parse(string: string) {
		super.parse(string);
		const resdata: Array<any> = [];
		const success = this.requirements.every(requirement => {
			const {data, remainingStr, success} = requirement.getProd().parse(string);
			if(!success) {return false;}
			string = remainingStr;
			resdata.push(data);
			return true;
		});
		if(!success) {return {success: false};}
		return {data: this.cb(resdata), remainingStr: string, success: true};
	}
}
export class OrProduction extends Production {
	options: Array<ProductionResolveable>
	constructor(...options: Array<ProductionResolveable>) {
		super();
		this.options = options;
	}
	parse(string: string) {
		super.parse(string);
		let resdata;
		const success = this.options.some(option => { // find the first option that parses... might cause problems if things try to parse too deep only to realise the code is wrong... may want to have some number of depth or something idk
			const {data, remainingStr, success} = option.getProd().parse(string);
			if(!success) {return false;}
			string = remainingStr;
			resdata = data;
			return true;
		});
		if(!success) {
			return {success: false};
		}
		return {data: this.cb(resdata), remainingStr: string, success: true};
	}
}
export class NotProduction extends Production {
	options: Array<ProductionResolveable>
	constructor(...options: Array<ProductionResolveable>) {
		super();
		this.options = options;
	}
	parse(string: string) {
		super.parse(string);
		let resdata;
		const success = this.options.every(option => { // ensure every option fails
			const {data, remainingStr, success} = option.getProd().parse(string);
			if(success) {return false;}  // if success, fail.
			string = remainingStr;
			resdata = data;
			return true;
		});
		if(!success) {
			return {success: false};
		}
		return {data: this.cb(resdata), remainingStr: string, success: true};
	}
}

export class RegexProduction extends Production {
	regex: RegExp
	constructor(regex: RegExp) {
		super();
		this.regex = regex;
	}
	parse(string: string) {
		super.parse(string);
		const match = string.match(this.regex);
		if(match &&  string.startsWith(match[0])) {
			string = string.replace(match[0], ""); // replace does the first instance on a string. PERFORMANCE: substr could probably be used instead.
			// console.log("MATCHED", match[0], "CB IS", this.cb);
			return {data: this.cb(match), remainingStr: string, success: true};
		}
		if(match) {
			console.warn("WARN: regex ", this.regex, " does not start matching at beginning of line");
		}
		return {success: false};
	}
	toString() {
		return `RegexProduction ${this.regex}`;
	}
}

export class StringProduction extends Production {
	string: string
	constructor(string: string) {
		super();
		this.string = string;
	}
	parse(string: string) {
		super.parse(string);
		if(string.startsWith(this.string)) {
			string = string.replace(this.string, ""); // replace does the first instance on a string
			return {data: this.cb(this.string), remainingStr: string, success: true};
		}
		return {success: false, error: `Expected \`${this.string}\` but found \`${string.substr(0, this.string.length)}\``};
	}
	toString() {
		return `StringProduction ${JSON.stringify(this.string)}`;
	}
}

export class ManyProduction extends Production {
	prod: ProductionResolveable
	start: number
	end: number
	constructor(thing: ProductionResolveable, start = -Infinity, end = Infinity) { // range = 0.. 1.. 0..1 ..1 or something
		super();
		this.prod = thing;
		this.start = start;
		this.end = end;
	}

	parse(string: string) {
		super.parse(string);
		const results = [];
		let succeeding = true;
		const errors = [];
		while(succeeding) {
			if(results.length > this.end) {succeeding = false; continue;}
			const {data, remainingStr, success, error} = this.prod.getProd().parse(string);
			if(!success) {succeeding = false; errors.push(error); continue;}
			const changed = string.length - remainingStr.length;
			if(changed === 0) {succeeding = false; continue;} // if it succeeds but matches nothing, count it as a failure (to avoid loops)
			string = remainingStr;
			results.push(data);
		}
		if(results.length < this.start) {return {success: false, error: `Expected from ${this.start} to ${this.end} of something but didn't get that. ${errors}`};}
		return {data: this.cb(results), remainingStr: string, success: true};
	}
	toString() {
		return `ManyProduction ?{${this.start}..${this.end}}`;
	}
}