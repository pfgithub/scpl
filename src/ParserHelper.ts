import {Production, ManyProduction, StringProduction, OrderedProduction, RegexProduction, OrProduction, ProductionResolveable} from "./Production";


export const p = (...args: Array<ProductionResolveable>): Production => new OrderedProduction(...args);
export const regex = (regex: RegExp): Production => new RegexProduction(regex);

export const star = (thing: ProductionResolveable): Production => new ManyProduction(thing, 0, undefined);
export const plus = (thing: ProductionResolveable): Production => new ManyProduction(thing, 1, undefined);
export const optional = (thing: ProductionResolveable): Production => new ManyProduction(thing, 0, 1);
export const or = (...args: Array<ProductionResolveable>): Production => new OrProduction(...args);
export const c = (str: string|TemplateStringsArray): Production => new StringProduction(`${str}`);

const _realo: {[name: string]: ProductionResolveable} = {}; // todon't make this a proxy such that accessing o.a returns a {getProd:} might be interesting maybe


const t = (str: string) => ({getProd: () => _realo[`${str}`]}); // ...

export const o: {[name: string]: ProductionResolveable} = new Proxy(_realo, {
	get: (_target, prop, _reciever) => {
		// @ts-ignore
		if(_realo[prop] === undefined) {
			// @ts-ignore
			return t(prop);
		}
		// @ts-ignore
		return _realo[prop];
	},
	set: (obj, prop, value) => {
		if (value instanceof Production && typeof prop === "string") {
			value.name = `o.${prop}`;
		}
		return Reflect.set(obj, prop, value);
	}
});