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
function calculateChange(str, position) {
    const change = str;
    if (str.indexOf("\n") > -1) {
        const split = str.split("\n");
        position[0] += split.length - 1;
        position[1] = 0;
    }
    position[1] += change.length;
}
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
    parse(_string, _position) {
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
exports.Production = Production;
class OrderedProduction extends Production {
    constructor(...requirements) {
        super();
        this.requirements = requirements;
    }
    parse(string, position) {
        super.parse(string, position);
        const resdata = [];
        const startpos = position.slice();
        const success = this.requirements.every(requirement => {
            const { data, remainingStr, success, pos } = requirement.getProd().parse(string, position.slice());
            if (!success) {
                return false;
            }
            string = remainingStr;
            position = pos;
            resdata.push(data);
            return true;
        });
        if (!success) {
            return { success: false };
        }
        return { data: this.cb(resdata, startpos, position), remainingStr: string, success: true, pos: position };
    }
    toString() {
        return `${this.requirements.map(option => option.getProd().nameOrTostring()).join(" ")}`;
    }
}
exports.OrderedProduction = OrderedProduction;
class OrProduction extends Production {
    constructor(...options) {
        super();
        this.options = options;
    }
    parse(string, position) {
        super.parse(string, position);
        let resdata;
        const startpos = position.slice();
        const success = this.options.some(option => {
            const { data, remainingStr, success, pos } = option.getProd().parse(string, position.slice());
            if (!success) {
                return false;
            }
            string = remainingStr;
            position = pos;
            resdata = data;
            return true;
        });
        if (!success) {
            return { success: false };
        }
        return { data: this.cb(resdata, startpos, position), remainingStr: string, success: true, pos: position };
    }
    toString() {
        return `( ${this.options.map(option => option.getProd().nameOrTostring()).join(" | ")} )`;
    }
}
exports.OrProduction = OrProduction;
class NotProduction extends Production {
    constructor(...options) {
        super();
        this.options = options;
    }
    parse(string, position) {
        super.parse(string, position);
        let resdata;
        const startpos = position.slice();
        const success = this.options.every(option => {
            const { data, remainingStr, success, pos } = option.getProd().parse(string, position.slice());
            if (success) {
                return false;
            } // if success, fail.
            string = remainingStr;
            position = pos;
            resdata = data;
            return true;
        });
        if (!success) {
            return { success: false };
        }
        return { data: this.cb(resdata, startpos, position), remainingStr: string, success: true, pos: position };
    }
    toString() {
        return `!( ${this.options.map(option => option.getProd().nameOrTostring()).join(" | ")} )`;
    }
}
exports.NotProduction = NotProduction;
class RegexProduction extends Production {
    constructor(regex) {
        super();
        this.regex = regex;
    }
    parse(string, position) {
        super.parse(string, position);
        const match = string.match(this.regex);
        const startpos = position.slice();
        if (match && string.startsWith(match[0])) {
            string = string.replace(match[0], ""); // replace does the first instance on a string. PERFORMANCE: substr could probably be used instead.
            calculateChange(match[0], position);
            return { data: this.cb(match, startpos, position), remainingStr: string, success: true, pos: position };
        }
        if (match) {
            console.warn("WARN: regex ", this.regex, " does not start matching at beginning of line");
        }
        return { success: false };
    }
    toString() {
        return `${this.regex.toString()}`;
    }
}
exports.RegexProduction = RegexProduction;
class StringProduction extends Production {
    constructor(string) {
        super();
        this.string = string;
    }
    parse(string, position) {
        super.parse(string, position);
        const startpos = position.slice();
        if (string.startsWith(this.string)) {
            string = string.replace(this.string, ""); // replace does the first instance on a string
            calculateChange(this.string, position);
            return { data: this.cb(this.string, startpos, position), remainingStr: string, success: true, pos: position };
        }
        return { success: false, error: `Expected \`${this.string}\` but found \`${string.substr(0, this.string.length)}\`` };
    }
    toString() {
        return `${JSON.stringify(this.string)}`;
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
    parse(string, position) {
        super.parse(string, position);
        const results = [];
        let succeeding = true;
        const startpos = position.slice();
        while (succeeding) {
            if (results.length > this.end) {
                succeeding = false;
                continue;
            }
            const { data, remainingStr, success, pos } = this.prod.getProd().parse(string, position.slice());
            if (!success) {
                succeeding = false;
                continue;
            }
            const changed = string.length - remainingStr.length;
            if (changed === 0) {
                succeeding = false;
                continue;
            } // if it succeeds but matches nothing, count it as a failure (to avoid loops)
            position = pos;
            string = remainingStr;
            results.push(data);
        }
        if (results.length < this.start) {
            return { success: false };
        }
        return { data: this.cb(results, startpos, position), remainingStr: string, success: true, pos: position };
    }
    toString() {
        return `{ ${this.start}..${this.end} }( ${this.prod.getProd().nameOrTostring()} )`;
    }
}
exports.ManyProduction = ManyProduction;
