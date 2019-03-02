"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Production_1 = require("./Production");
exports.p = (...args) => new Production_1.OrderedProduction(...args);
exports.regex = (regex) => new Production_1.RegexProduction(regex);
exports.star = (thing) => new Production_1.ManyProduction(thing, 0, undefined);
exports.plus = (thing) => new Production_1.ManyProduction(thing, 1, undefined);
exports.optional = (thing) => new Production_1.ManyProduction(thing, 0, 1);
exports.or = (...args) => new Production_1.OrProduction(...args);
exports.not = (...args) => new Production_1.NotProduction(...args);
exports.c = (str) => new Production_1.StringProduction(`${str}`);
const _realo = {}; // todon't make this a proxy such that accessing o.a returns a {getProd:} might be interesting maybe
const t = (str) => ({ getProd: () => _realo[`${str}`] }); // ...
exports.o = new Proxy(_realo, {
    get: (_target, prop, _reciever) => {
        // @ts-ignore
        if (_realo[prop] === undefined) {
            // @ts-ignore
            return t(prop);
        }
        // @ts-ignore
        return _realo[prop];
    },
    set: (obj, prop, value) => {
        if (value instanceof Production_1.Production && typeof prop === "string") {
            value.name = `o.${prop}`;
        }
        return Reflect.set(obj, prop, value);
    }
});
