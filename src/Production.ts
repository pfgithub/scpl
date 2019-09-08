let totalSteps = 0;
let began: Date;

export class PositionedError extends Error {
	// an error at a position
	start: Position;
	end: Position;
	constructor(message: string, start: Position, end: Position) {
		super(
			`Error from ${start.toString()} to ${end.toString()}: ${message}`
		);
		this.start = start;
		this.end = end;
	}
}

export type ProductionResolveable =
	| Production
	| { getProd: () => Production; name: string };
export type ProductionResolveableIn =
	| Production
	| { getProd: () => Production; name: string }
	| RegExp
	| string;
export type Position = [number, number];
export type ParseResult =
	| { success: false }
	| { data: any; remainingStr: string; success: true; pos: Position };

export function resolveIn(production: ProductionResolveableIn) {
	if (production instanceof RegExp) {
		return new RegexProduction(production);
	}
	if (typeof production === "string") {
		return new StringProduction(production);
	}
	return production;
}
export function resolve(production: ProductionResolveable) {
	return production.getProd();
}

export class Performance {
	static startMonitoring() {
		totalSteps = 0;
		began = new Date();
		console.log(`Started parsing.`); //eslint-disable-line no-console
	}
	static stopMonitoring() {
		const ended = new Date();
		//eslint-disable-next-line no-console
		console.log(
			`Parsed in ${totalSteps} steps over ${ended.getTime() -
				began.getTime()}ms.`
		);
	}
}

function calculateChange(str: string, position: Position) {
	const change = str;
	if (str.indexOf("\n") > -1) {
		const split = str.split("\n");
		position[0] += split.length - 1;
		position[1] = 0;
	}
	position[1] += change.length;
}

type ProductionCallback<T> = (a: T, fromPos: Position, toPos: Position) => any;

export class Production<T = any> {
	cb: ProductionCallback<T>; // todo cb: (input: any) => Parse
	name?: string;
	constructor(cb = (a: T) => a) {
		this.cb = cb;
	}
	scb(cb: ProductionCallback<T>) {
		this.cb = cb;
		return this;
	}
	getProd() {
		return this;
	}
	parse(_string: string, _position: Position): ParseResult {
		totalSteps++;
		return { success: false };
	}
	toString() {
		return "UndefinedProduction";
	}
	nameOrTostring() {
		return this.name || this.toString();
	}
}

export class OrderedProduction extends Production {
	requirements: Array<ProductionResolveable>;
	constructor(...requirements: Array<ProductionResolveableIn>) {
		super();
		this.requirements = requirements.map(resolveIn);
	}
	parse(string: string, position: Position): ParseResult {
		super.parse(string, position);
		const resdata: Array<any> = [];
		const startpos = <Position>position.slice();
		const success = this.requirements.every(requirement => {
			const result = resolve(requirement).parse(string, <Position>(
				position.slice()
			));
			if (!result.success) {
				return false;
			}
			string = result.remainingStr;
			position = result.pos;
			resdata.push(result.data);
			return true;
		});
		if (!success) {
			return { success: false };
		}
		return {
			data: this.cb(resdata, startpos, position),
			remainingStr: string,
			success: true,
			pos: position
		};
	}
	toString() {
		return `${this.requirements
			.map(option => resolve(option).nameOrTostring())
			.join(" ")}`;
	}
}
export class OrProduction extends Production {
	options: Array<ProductionResolveable>;
	constructor(...options: Array<ProductionResolveableIn>) {
		super();
		this.options = options.map(resolveIn);
	}
	parse(string: string, position: Position): ParseResult {
		super.parse(string, position);
		let resdata: any;
		const startpos = <Position>position.slice();
		const success = this.options.some(option => {
			// find the first option that parses... might cause problems if things try to parse too deep only to realise the code is wrong... may want to have some number of depth or something idk
			const result = resolve(option).parse(string, <Position>(
				position.slice()
			));
			if (!result.success) {
				return false;
			}
			string = result.remainingStr;
			position = result.pos;
			resdata = result.data;
			return true;
		});
		if (!success) {
			return { success: false };
		}
		return {
			data: this.cb(resdata, startpos, position),
			remainingStr: string,
			success: true,
			pos: position
		};
	}
	toString() {
		return `( ${this.options
			.map(option => resolve(option).nameOrTostring())
			.join(" | ")} )`;
	}
}
// remove notproduction for now

export class RegexProduction extends Production<RegExpMatchArray> {
	regex: RegExp;
	constructor(regex: RegExp) {
		super();
		this.regex = regex;
	}
	parse(string: string, position: Position): ParseResult {
		super.parse(string, position);
		const match = string.match(this.regex);
		const startpos = <Position>position.slice();
		if (match && string.startsWith(match[0])) {
			string = string.replace(match[0], ""); // replace does the first instance on a string. PERFORMANCE: substr could probably be used instead.
			calculateChange(match[0], position);
			return {
				data: this.cb(match, startpos, position),
				remainingStr: string,
				success: true,
				pos: position
			};
		}
		if (match) {
			//eslint-disable-next-line no-console
			console.warn(
				"WARN: regex ",
				this.regex,
				" does not start matching at beginning of line"
			);
		}
		return { success: false };
	}
	toString() {
		return `${this.regex.toString()}`;
	}
}

export class StringProduction extends Production<string> {
	string: string;
	constructor(string: string) {
		super();
		this.string = string;
	}
	parse(string: string, position: Position): ParseResult {
		super.parse(string, position);
		const startpos = <Position>position.slice();
		if (string.startsWith(this.string)) {
			string = string.replace(this.string, ""); // replace does the first instance on a string
			calculateChange(this.string, position);
			return {
				data: this.cb(this.string, startpos, position),
				remainingStr: string,
				success: true,
				pos: position
			};
		}
		return { success: false };
	}
	toString() {
		return `${JSON.stringify(this.string)}`;
	}
}

export class ManyProduction extends Production {
	prod: ProductionResolveable;
	start: number;
	end: number;
	constructor(
		thing: ProductionResolveableIn,
		start = -Infinity,
		end = Infinity
	) {
		// range = 0.. 1.. 0..1 ..1 or something
		super();
		this.prod = resolveIn(thing);
		this.start = start;
		this.end = end;
	}

	parse(string: string, position: Position): ParseResult {
		super.parse(string, position);
		const results = [];
		let succeeding = true;
		const startpos = <Position>position.slice();
		while (succeeding) {
			if (results.length > this.end) {
				succeeding = false;
				continue;
			}
			const result = resolve(this.prod).parse(string, <Position>(
				position.slice()
			));
			if (!result.success) {
				succeeding = false;
				continue;
			}
			const changed = string.length - result.remainingStr.length;
			if (changed === 0) {
				succeeding = false;
				continue;
			} // if it succeeds but matches nothing, count it as a failure (to avoid loops)
			position = result.pos;
			string = result.remainingStr;
			results.push(result.data);
		}
		if (results.length < this.start) {
			return { success: false };
		}
		return {
			data: this.cb(results, startpos, position),
			remainingStr: string,
			success: true,
			pos: position
		};
	}
	toString() {
		const item = `( ${resolve(this.prod).nameOrTostring()} )`;
		if (this.end === Infinity) {
			if (this.start === 0) {
				return `${item}*`;
			}
			if (this.start === 1) {
				return `${item}+`;
			}
			return `${item}{${this.start}..}`;
		}
		return `${item}{${this.start}..${this.end}}`;
	}
}
