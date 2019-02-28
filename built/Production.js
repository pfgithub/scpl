"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let totalSteps = 0;
let began;
class Performance {
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
exports.Performance = Performance;
class Production {
    constructor(cb = (a) => a) {
        this.cb = cb;
    }
    scb(cb) {
        this.cb = cb;
        return this;
    }
    getProd() {
        return this;
    }
    parse(_string) {
        totalSteps++;
        return { success: false };
    }
}
exports.Production = Production;
class OrderedProduction extends Production {
    constructor(...requirements) {
        super();
        this.requirements = requirements;
    }
    parse(string) {
        super.parse(string);
        const resdata = [];
        const success = this.requirements.every(requirement => {
            const { data, remainingStr, success } = requirement.getProd().parse(string);
            if (!success) {
                return false;
            }
            string = remainingStr;
            resdata.push(data);
            return true;
        });
        if (!success) {
            return { success: false };
        }
        return { data: this.cb(resdata), remainingStr: string, success: true };
    }
}
exports.OrderedProduction = OrderedProduction;
class OrProduction extends Production {
    constructor(...options) {
        super();
        this.options = options;
    }
    parse(string) {
        super.parse(string);
        let resdata;
        const success = this.options.some(option => {
            const { data, remainingStr, success } = option.getProd().parse(string);
            if (!success) {
                return false;
            }
            string = remainingStr;
            resdata = data;
            return true;
        });
        if (!success) {
            return { success: false };
        }
        return { data: this.cb(resdata), remainingStr: string, success: true };
    }
}
exports.OrProduction = OrProduction;
class NotProduction extends Production {
    constructor(...options) {
        super();
        this.options = options;
    }
    parse(string) {
        super.parse(string);
        let resdata;
        const success = this.options.every(option => {
            const { data, remainingStr, success } = option.getProd().parse(string);
            if (success) {
                return false;
            } // if success, fail.
            string = remainingStr;
            resdata = data;
            return true;
        });
        if (!success) {
            return { success: false };
        }
        return { data: this.cb(resdata), remainingStr: string, success: true };
    }
}
exports.NotProduction = NotProduction;
class RegexProduction extends Production {
    constructor(regex) {
        super();
        this.regex = regex;
    }
    parse(string) {
        super.parse(string);
        const match = string.match(this.regex);
        if (match && string.startsWith(match[0])) {
            string = string.replace(match[0], ""); // replace does the first instance on a string. PERFORMANCE: substr could probably be used instead.
            // console.log("MATCHED", match[0], "CB IS", this.cb);
            return { data: this.cb(match), remainingStr: string, success: true };
        }
        if (match) {
            console.warn("WARN: regex ", this.regex, " does not start matching at beginning of line");
        }
        return { success: false };
    }
    toString() {
        return `RegexProduction ${this.regex}`;
    }
}
exports.RegexProduction = RegexProduction;
class StringProduction extends Production {
    constructor(string) {
        super();
        this.string = string;
    }
    parse(string) {
        super.parse(string);
        if (string.startsWith(this.string)) {
            string = string.replace(this.string, ""); // replace does the first instance on a string
            return { data: this.cb(this.string), remainingStr: string, success: true };
        }
        return { success: false, error: `Expected \`${this.string}\` but found \`${string.substr(0, this.string.length)}\`` };
    }
    toString() {
        return `StringProduction ${JSON.stringify(this.string)}`;
    }
}
exports.StringProduction = StringProduction;
class ManyProduction extends Production {
    constructor(thing, start = -Infinity, end = Infinity) {
        super();
        this.prod = thing;
        this.start = start;
        this.end = end;
    }
    parse(string) {
        super.parse(string);
        const results = [];
        let succeeding = true;
        const errors = [];
        while (succeeding) {
            if (results.length > this.end) {
                succeeding = false;
                continue;
            }
            const { data, remainingStr, success, error } = this.prod.getProd().parse(string);
            if (!success) {
                succeeding = false;
                errors.push(error);
                continue;
            }
            const changed = string.length - remainingStr.length;
            if (changed === 0) {
                succeeding = false;
                continue;
            } // if it succeeds but matches nothing, count it as a failure (to avoid loops)
            string = remainingStr;
            results.push(data);
        }
        if (results.length < this.start) {
            return { success: false, error: `Expected from ${this.start} to ${this.end} of something but didn't get that. ${errors}` };
        }
        return { data: this.cb(results), remainingStr: string, success: true };
    }
    toString() {
        return `ManyProduction ?{${this.start}..${this.end}}`;
    }
}
exports.ManyProduction = ManyProduction;
