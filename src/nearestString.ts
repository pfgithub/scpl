import { genShortName } from "./ActionData";

// finds the nearest string to an enum, or undefined if none is close enough
// nearest is defined as lowercase equiv

export function nearestString<T extends string>(
	value: string,
	list: T[]
): T | undefined {
	// hope that list does not contain any duplicates
	const shortName = genShortName(value);
	const res = list.filter(i => genShortName(i) === shortName);
	if (res.length > 1) {
		const res2 = list.filter(i => i === value);
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
		return res2[0];
	}
	return res[0];
}
