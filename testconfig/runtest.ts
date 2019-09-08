import * as fs from "fs";
import * as path from "path";
import * as prettyFormat from "pretty-format";
import * as bplistp from "bplist-parser";

import { parse, inverse } from "..";

export function noUUID(
	obj: {},
	options: {
		noScPLData?: boolean;
		ignoreOutputName?: boolean;
		noWorkflowVersion?: boolean;
		noUnusedUUID?: boolean;
		flattenUselessStringSerialization?: boolean;
		ignoreMenuItemTitles?: boolean;
		ignoreEmptyString?: boolean;
		ignoreWorkflowTypesOrder?: boolean;
		defaultValueAlwaysString?: boolean;
		importQuestionMatcher?: boolean;
	} = {}
) {
	const fullString = JSON.stringify(obj, null);
	const uuids: string[] = [];
	return JSON.parse(
		//eslint-disable-next-line complexity
		JSON.stringify(obj, (key, value: unknown) => {
			if (options.noScPLData && key === "SCPLData") {
				return undefined;
			}
			if (options.ignoreMenuItemTitles && key === "WFMenuItemTitle") {
				return undefined;
			}
			if (
				options.defaultValueAlwaysString &&
				key === "DefaultValue" &&
				typeof value === "number"
			) {
				return `${value}`;
			}
			if (options.ignoreEmptyString && value === "") {
				return undefined;
			}
			if (options.ignoreWorkflowTypesOrder && key === "WFWorkflowTypes") {
				const obj: { [key: string]: boolean } = {};
				const valuearr = value as string[];
				valuearr.forEach(item => (obj[item] = true));
				delete obj.WatchKit;
				return obj;
			}
			if (
				options.noWorkflowVersion &&
				(key === "WFWorkflowMinimumClientVersion" ||
					key === "WFWorkflowClientRelease" ||
					key === "WFWorkflowClientVersion")
			) {
				return "Ignored Version";
			}
			if (
				options.flattenUselessStringSerialization &&
				(value as any).WFSerializationType === "WFTextTokenString"
			) {
				const stringserialization = value as any;
				if (
					Object.keys(stringserialization.Value.attachmentsByRange)
						.length === 0
				) {
					return stringserialization.Value.string;
				}
			}
			if (typeof value === "string") {
				if (
					value.match(
						/[a-z0-9]{6}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/i
					)
				) {
					if (
						options.noUnusedUUID &&
						fullString.split(value).length - 1 === 1
					) {
						// uuid only used once
						return undefined;
					}
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
		}),
		(key, value: unknown) => {
			if (options.importQuestionMatcher && value === "import question") {
				return { asymmetricMatch: () => true };
			}
			return value;
		}
	);
}

function runShortcutTest(dirname: string, infile: string) {
	test(infile, () => {
		const infilepath = path.join(dirname, infile);
		const outputfolderpath = path.join(
			dirname,
			infile.replace(/\.shortcut$/, "")
		);
		try {
			fs.mkdirSync(outputfolderpath);
		} catch (e) {}
		const inversionoutputpath = path.join(
			outputfolderpath,
			infile.replace(/\.shortcut$/, ".scpl")
		);
		const jsonvaluepath = path.join(
			outputfolderpath,
			infile.replace(/\.shortcut$/, ".json")
		);
		const shortcut = fs.readFileSync(infilepath);
		const jsonvalue = bplistp.parseBuffer(shortcut);
		fs.writeFileSync(
			jsonvaluepath,
			JSON.stringify(jsonvalue, null, "\t"),
			"utf-8"
		);
		// invert
		const inverted = inverse(shortcut);
		fs.writeFileSync(inversionoutputpath, inverted, "utf-8");
		// re-parse and ensure equal
		const { shortcutjson } = parse(inverted, { make: ["shortcutjson"] });
		expect(
			noUUID(shortcutjson, {
				noScPLData: true,
				noWorkflowVersion: true,
				ignoreOutputName: true,
				flattenUselessStringSerialization: true,
				ignoreMenuItemTitles: true,
				noUnusedUUID: true,
				ignoreWorkflowTypesOrder: true,
				importQuestionMatcher: true
			})
		).toStrictEqual(
			noUUID(jsonvalue, {
				noScPLData: true,
				noWorkflowVersion: true,
				ignoreOutputName: true,
				noUnusedUUID: true,
				flattenUselessStringSerialization: true,
				ignoreMenuItemTitles: true,
				ignoreEmptyString: true,
				ignoreWorkflowTypesOrder: true,
				defaultValueAlwaysString: true
			})
		);
	});
}

export function runTest(dirname: string) {
	const infiles = fs.readdirSync(dirname);
	infiles.forEach(infile => {
		if (infile.endsWith(".shortcut")) {
			runShortcutTest(dirname, infile);
		}
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
			let pass: boolean = true;
			let _check1: any;
			let _equals1: any;
			if (parseoutput) {
				const output = parseoutput.shortcutjson;
				const warnings = parseoutput.warnings;

				got.push(`Output Warnings:\n${prettyFormat(warnings)}`);

				if (warnings.length === 0) {
					// invert
					const inverted = inverse(output);

					got.push(`Shortcut Full Inverted:\n${inverted}`);

					let reparsedoutput;
					let parsed;

					try {
						reparsedoutput = parse(inverted, {
							make: ["shortcutjson"],
							useWarnings: true
						});
						parsed = reparsedoutput.shortcutjson;
					} catch (e) {
						got.push(
							`!!! Error Invert Parsing ${
								(<Error>e).message
							} ${` ${(<Error>e).stack}`}`
						);
						pass = false;
					}

					got.push(
						`Shortcut Full JSON:\n${prettyFormat(noUUID(output))}`
					);

					_check1 = noUUID(parsed, {
						noScPLData: true,
						ignoreOutputName: true
					});
					_equals1 = noUUID(output, {
						noScPLData: true,
						ignoreOutputName: true
					});
				} else {
					got.push(
						"Because there were warnings, no inversion test will be run!!"
					);

					got.push(
						`Shortcut Full JSON:\n${prettyFormat(noUUID(output))}`
					);
				}
			}
			const gotString = got.join("\n\n");

			if (!expected || !expected.trim() || true) {
				const setValue = `${shortcut}\n\n@!ShouldEqual --------------------------------\n\n${gotString}`;
				if (contents === setValue) {
				} else {
					fs.writeFileSync(infilepath, setValue, "utf-8");
				}
			}

			if (_check1 || _equals1) {
				expect(_check1).toStrictEqual(_equals1);
			}
			if (!pass) {
				expect("Error invert parsing").toEqual("No errors");
			}
			expect(expected).toEqual(gotString);
		});
	});
}
