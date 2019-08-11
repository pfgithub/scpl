import * as fs from "fs";
import * as path from "path";
import * as prettyFormat from "pretty-format";

import { parse, inverse } from "..";

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

export function runTest(dirname: string) {
	const infiles = fs.readdirSync(dirname);
	infiles.forEach(infile => {
		if (!infile.endsWith(".scpl")) {
			return;
		}
		test(infile, () => {
			const infilepath = path.join(dirname, infile);
			const contents = fs.readFileSync(infilepath, "utf-8");
			const [shortcut, expected] = contents.split(
				"\n\n@!ShouldEqual --------------------------------\n\n"
			);

			const got = [];

			let parseoutput: any;
			try {
				parseoutput = parse(shortcut, {
					make: ["shortcutjson"],
					useWarnings: true
				});
			} catch (e) {
				got.push(`Output Error:\n${prettyFormat(e)}`);
			}
			if (parseoutput) {
				const output = parseoutput.shortcutjson;
				const warnings = parseoutput.warnings;

				got.push(`Output Warnings:\n${prettyFormat(warnings)}`);

				// invert
				const inverted = inverse(output);

				got.push(`Shortcut Full Inverted:\n${inverted}`);

				const reparsedoutput = parse(inverted, {
					make: ["shortcutjson"],
					useWarnings: true
				});
				const parsed = reparsedoutput.shortcutjson;

				got.push(
					`Shortcut Full JSON:\n${prettyFormat(noUUID(output))}`
				);

				expect(
					noUUID(parsed, { noScPLData: true, ignoreOutputName: true })
				).toStrictEqual(
					noUUID(output, { noScPLData: true, ignoreOutputName: true })
				); // should be same as first
			}
			const gotString = got.join("\n\n");

			if (!expected || !expected.trim()) {
				fs.writeFileSync(
					infilepath,
					`${contents}\n\n@!ShouldEqual --------------------------------\n\n${gotString}`,
					"utf-8"
				);
			}

			expect(expected).toEqual(gotString);
		});
	});
}
