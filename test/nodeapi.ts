import * as main from "..";

test("additional converter actions", () => {
	expect(
		main.parse('@hmm @{text "hi"}', {
			extraParseActions: {
				"@hmm": (cc, qw) => {
					if (!qw) {
						return;
					}
					if (qw.canBeAction(cc)) {
						qw.asAction(cc);
					}
				}
			}
		})
	).toMatchSnapshot();
});

test("make shortcut plist", () => {
	expect(
		main.parse("", {
			make: ["shortcutplist"]
		})
	).toMatchSnapshot();
	expect(
		main.parse("", {
			makePlist: true
		})
	).toMatchSnapshot();
});

test("make output data", () => {
	expect(
		main.parse("", {
			make: ["outputdata"]
		})
	).toMatchSnapshot();
});

test("invert shortcut plist", () => {
	expect(
		main.inverse(
			main.parse("text 'hmm'", { make: ["shortcutplist"] }).shortcutplist
		)
	).toMatchSnapshot();
});

test("override cc value", () => {
	const cc = new main.ConvertingContext();
	cc.setNamedVariable("myvar");
	main.parse(`text v:myvar`, { ccOverride: cc });
	expect(() => main.parse(`text v:myvar2`, { ccOverride: cc })).toThrow(
		"Warning from 1,6 to 1,14: The variable `v:myvar2` has not been defined yet. Define it with a `setVariable` action."
	);
});
