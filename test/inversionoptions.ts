import { parse, inverse } from "..";

test("invert indent width", () => {
	expect(
		inverse(
			parse(
				`if equals "my 'alue"
					text dothis
				otherwise
					text "do t_+SFD)_S(&6^\`\\"hat"
				end`,
				{ make: ["shortcutplist"] }
			).shortcutplist,
			{ indent: "  ", quotes: "'" }
		)
	).toMatchInlineSnapshot(`
		"If input=Equals value='my \\\\'alue'
		  Text dothis
		Otherwise
		  Text 'do t_+SFD)_S(&6^\`\\"hat'
		End"
	`);
	expect(
		inverse(
			parse(
				`if equals "my value"\ntext dothis\notherwise\ntext dothat\nend`,
				{ make: ["shortcutplist"] }
			).shortcutplist,
			{ indent: 3, quotes: "'" }
		)
	).toMatchInlineSnapshot(`
		"If input=Equals value='my value'
		   Text dothis
		Otherwise
		   Text dothat
		End"
	`);
});
