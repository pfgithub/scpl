let totalSteps = 0;
let began;

class Performance {
	static startMonitoring() {
		totalSteps = 0;
		began = new Date();
		console.log(`Started parsing.`); //eslint-disable-line no-console
	}
	static stopMonitoring() {
		let ended = new Date();
		console.log(`Parsed in ${totalSteps} steps over ${ended.getTime() - began.getTime()}ms.`); //eslint-disable-line no-console
	}
}

class Production {
	constructor(cb = a => a) {
		this.cb = cb;
	}
	scb(cb) {
		this.cb = cb;
		return this;
	}
	getProd() {
		return this;
	}
	parse(string) {
		totalSteps++;
		// console.log("STEPS ARE:",  ++totalSteps);
		// if(!lastStep) {console.log("Started at ", lastStep = new Date());}
		// console.log(`STRING IS OF LENGTH ${string.length}\n\n\`\`\`\n${string}\n\`\`\`\nPARSER IS:`, this); //this.toString());
	}
}

class OrderedProduction extends Production {
	constructor(...requirements) {
		super();
		this.requirements = requirements;
	}
	parse(string) {
		super.parse(string);
		let resdata = [];
		let success = this.requirements.every(requirement => {
			let {data, remainingStr, success} = requirement.getProd().parse(string);
			// console.log("DRS", data, "R", remainingStr, "S", success);
			if(!success) {return false;}
			string = remainingStr;
			resdata.push(data);
			return true;
		});
		if(!success) {return {success: false};}
		return {data: this.cb(resdata), remainingStr: string, success: true};
	}
}
class OrProduction extends Production {
	constructor(...options) {
		super();
		this.options = options;
	}
	parse(string) {
		super.parse(string);
		let resdata;
		let success = this.options.some(option => { // find the first option that parses... might cause problems if things try to parse too deep only to realise the code is wrong... may want to have some number of depth or something idk
			let {data, remainingStr, success} = option.getProd().parse(string);
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
class NotProduction extends Production {
	constructor(...options) {
		super();
		this.options = options;
	}
	parse(string) {
		super.parse(string);
		let resdata;
		let success = this.options.every(option => { // ensure every option fails
			let {data, remainingStr, success} = option.getProd().parse(string);
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

class RegexProduction extends Production {
	constructor(regex) {
		super();
		this.regex = regex;
	}
	parse(string) {
		super.parse(string);
		let match = string.match(this.regex);
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

class StringProduction extends Production {
	constructor(string) {
		super();
		this.string = string;
	}
	parse(string) {
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

class ManyProduction extends Production {
	constructor(thing, start = -Infinity, end = Infinity) { // range = 0.. 1.. 0..1 ..1 or something
		super();
		this.prod = thing;
		this.start = start;
		this.end = end;
	}

	parse(string) {
		super.parse(string);
		let results = [];
		let succeeding = true;
		let errors = [];
		while(succeeding) {
			if(results.length > this.end) {succeeding = false; continue;}
			let {data, remainingStr, success, error} = this.prod.getProd().parse(string);
			if(!success) {succeeding = false; errors.push(error); continue;}
			let changed = string.length - remainingStr.length;
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

module.exports = {
	ManyProduction,
	StringProduction,
	RegexProduction,
	NotProduction,
	OrProduction,
	OrderedProduction,
	Production,
	Performance
};
