import * as fs from "fs";
import * as path from "path";

import { parse, inverse, PositionedError } from "..";

export function noUUID(
	obj: {},
	options: { noScPLData?: boolean; ignoreOutputName?: boolean } = {}
) {
	const uuids: string[] = [];
	return JSON.parse(
		JSON.stringify(obj, (key, value: unknown) => {
			if (options.noScPLData && key === "SCPLData") {
				return undefined;
			}
			if (typeof value === "string") {
				if (
					value.match(
						/[a-z0-9]{6}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/
					)
				) {
					let index = uuids.indexOf(value);
					if (index === -1) {
						index = uuids.push(value) - 1; // push returns array length
					}
					return `<uuid${index + 1}>`;
				}
				if (
					options.ignoreOutputName &&
					(key === "CustomOutputName" || key === "OutputName")
				) {
					return undefined;
				}
				return value.split("\uFFFC").join("[attachment]");
			}
			return value;
		})
	);
}

export function runTest(filename: string) {
	test(path.basename(filename), () => {
		const inshortcutfull = fs.readFileSync(
			path.normalize(filename),
			"utf-8"
		);

		inshortcutfull.split("@!TestSplit").forEach((inshortcut, i) => {
			let parseoutput;
			try {
				parseoutput = parse(inshortcut, {
					make: ["shortcutjson"],
					useWarnings: true
				});
			} catch (e) {
				expect(e).toMatchSnapshot(`error (test ${i})`);
				return;
			}
			const output = parseoutput.shortcutjson;
			const warnings = parseoutput.warnings;

			expect(noUUID(output)).toMatchSnapshot(`shortcut data (test ${i})`);

			expect(warnings).toMatchSnapshot(`warnings (test ${i})`);

			// invert
			const inverted = inverse(output);

			expect(inverted).toMatchSnapshot(`inverted shortcut (test ${i})`);

			const reparsedoutput = parse(inverted, {
				make: ["shortcutjson"],
				useWarnings: true
			});
			const parsed = reparsedoutput.shortcutjson;

			expect(
				noUUID(parsed, { noScPLData: true, ignoreOutputName: true })
			).toStrictEqual(
				noUUID(output, { noScPLData: true, ignoreOutputName: true })
			); // should be same as first
			expect(warnings).toStrictEqual(reparsedoutput.warnings);
		});
	});
}
