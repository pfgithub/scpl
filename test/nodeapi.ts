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
