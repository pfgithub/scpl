import { genShortName } from "./ActionData";

// finds the nearest string to an enum, or undefined if none is close enough
// nearest is defined as lowercase equiv

export function nearestString<T extends string>(
	value: string,
	list: Array<[T, ...string[]] | T>
): T | undefined {
	// hope that list does not contain any duplicates
	const shortName = genShortName(value);
	const res: Array<[T, ...string[]] | T> = list.filter(
		(i: T | [T, ...string[]]) =>
			Array.isArray(i)
				? i.some(i => genShortName(i) === shortName)
				: genShortName(i) === shortName
	);
	if (res.length > 1) {
		const res2 = list.filter(i =>
			Array.isArray(i)
				? i.some(i => i === value)
				: genShortName(i) === shortName
		);
		if (res2.length > 1) {
			// eslint-disable-next-line no-console
			console.log(
				"!!!WARN: Same exact value is used multiple times in enum:",
				JSON.stringify(list),
				". Value that is used multiple times is:",
				value
			);
			return undefined;
		}
		return Array.isArray(res2[0]) ? <T>res2[0][0] : <T>res2[0];
	}
	return Array.isArray(res[0]) ? <T>res[0][0] : <T>res[0];
}
