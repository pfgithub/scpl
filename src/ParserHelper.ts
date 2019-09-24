import {
	Production,
	ManyProduction,
	StringProduction,
	OrderedProduction,
	RegexProduction,
	OrProduction,
	ProductionResolveable,
	PositionedError,
	ProductionResolveableIn,
	RequiredProduction
} from "./Production";

export const p = (...args: Array<ProductionResolveableIn>): Production =>
	new OrderedProduction(...args);
export const regex = (regex: RegExp): Production => new RegexProduction(regex);

export const star = (thing: ProductionResolveableIn): Production =>
	new ManyProduction(thing, 0, undefined);
export const plus = (thing: ProductionResolveableIn): Production =>
	new ManyProduction(thing, 1, undefined);
export const optional = (thing: ProductionResolveable): Production =>
	new ManyProduction(thing, 0, 1);
export const or = (...args: Array<ProductionResolveableIn>): Production =>
	new OrProduction(...args);
export const c = (str: string | TemplateStringsArray): Production =>
	new StringProduction(`${str}`);
export const error = (
	a: ProductionResolveableIn,
	message: (value: any) => string
): Production =>
	p(a).scb((aval, start, end) => {
		throw new PositionedError(message(aval), start, end);
	});
export const required = (a: ProductionResolveableIn, message?: string) =>
	new RequiredProduction(a, message);

const _realo: { [name: string]: Production } = {}; // todon't make this a proxy such that accessing o.a returns a {getProd:} might be interesting maybe

const t = (str: string): ProductionResolveable => ({
	getProd: () => _realo[`${str}`],
	name: str
}); // ...

export const o: { [name: string]: ProductionResolveable } = new Proxy(_realo, {
	get: (_target, prop, _reciever): ProductionResolveable => {
		if (typeof prop === "string") {
			if (_realo[prop] === undefined) {
				return t(prop);
			}
			return _realo[prop];
		}
		return Reflect.get(_target, prop, _reciever);
	},
	set: (obj, prop, value) => {
		if (value instanceof Production && typeof prop === "string") {
			value.name = prop;
		}
		return Reflect.set(obj, prop, value);
	}
});
