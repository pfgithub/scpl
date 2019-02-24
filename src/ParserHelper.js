const {ManyProduction, StringProduction, OrderedProduction, RegexProduction, OrProduction, NotProduction, Performance} = require("./Production.js");

const items = {};
const p = (...args) => new OrderedProduction(...args);
const regex = (...args) => new RegexProduction(...args);

const star = (thing) => new ManyProduction(thing, 0, undefined);
const plus = (thing) => new ManyProduction(thing, 1, undefined);
const optional = (thing) => new ManyProduction(thing, 0, 1);
const or = (...args) => new OrProduction(...args);
const not = (...args) => new NotProduction(...args);
const c = (str) => new StringProduction(`${str}`);

const _realo = {}; // todon't make this a proxy such that accessing o.a returns a {getProd:} might be interesting maybe


const t = str => ({getProd: _ => _realo[`${str}`]}); // ...

const o = new Proxy(_realo, {
	get: (target, prop, reciever) => {
		if(_realo[prop] === undefined) {
			return t(prop);
		}
		return _realo[prop];
	}
});

module.exports = {p, regex, star, plus, optional, or, not, c, o};
