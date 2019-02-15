/*global describe it*/
const assert = require("assert");

const shortcutsParser = require("../src/ShortcutsParser");

const parse = (parser, string) => shortcutsParser[parser].getProd().parse(string).data;

describe("actions", () => {
	it("should parse an action", () => {
		assert.deepStrictEqual(
			parse("action", "Text"),
			{
				action: "text",
				args: []
			}
		);
	});
	it("should support flagged actions", () => {
		assert.deepStrictEqual(
			parse("action", "v:myvar = Text"),
			{
				action: "text",
				args: [],
				variable: {
					type: "variable",
					name: "myvar",
					vartype: "v",
					options: []
				}
			}
		);
		assert.deepStrictEqual(
			parse("action", "Text -> mv:myvar"),
			{
				action: "text",
				args: [],
				variable: {
					type: "variable",
					name: "myvar",
					vartype: "mv",
					options: []
				}
			}
		);
	});
	it("should not parse multiple flags", () => {
		assert.throws(_ => parse("action", "v:myvar = Text -> mv:myvar")
		);
	});
});
