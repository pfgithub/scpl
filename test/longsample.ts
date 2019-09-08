import { parse, inverse } from "../index";
import { noUUID } from ".";
import * as fs from "fs";

test("invert complete valid shortcut and ensure output is exact when compiled", () => {
	// generate sample data
	const output = parse(
		fs.readFileSync(`./test/sampleshortcut.scpl`, "utf8"),
		{ makePlist: false }
	);
	const scdata = output.build();
	// invert
	const inverted = inverse(scdata);
	const parsed = parse(inverted, { make: ["shortcutjson"] }).shortcutjson;
	// compare
	expect(
		noUUID(parsed[0].WFWorkflowActions, {
			noSCPLData: true,
			ignoreOutputName: true
		})
	).toMatchSnapshot();
	expect(inverted).toMatchSnapshot();
});

test("long shortcut", () => {
	const output = parse(
		fs.readFileSync(`./test/sampleshortcut.scpl`, "utf8"),
		{ makePlist: false }
	);
	const [scdata] = output.build();
	expect(noUUID([scdata])).toMatchSnapshot();
});
