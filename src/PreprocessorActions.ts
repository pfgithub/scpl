import { AsAble } from "./ParserData";
import { ConvertingContext } from "./Converter";
import { otherwise } from "./HelpfulActions";
import { getActionFromID } from "./ActionData";

import { glyphs, colors } from "./Data/ShortcutMeta";

function glyphAction(this: AsAble, cc: ConvertingContext, iconName?: AsAble) {
	if (!iconName) {
		throw this.error(cc, "Please provide a glyph name.");
	}
	if (!iconName.canBeString(cc)) {
		throw this.error(cc, "Glyph name must be able to be a string");
	}
	const glyph =
		glyphs[
			iconName
				.asString(cc)
				.toLowerCase()
				.replace(/[^a-z]/g, "")
		];
	if (!glyph) {
		throw this.error(
			cc,
			`Invalid glyph name. Must be one of: ${Object.keys(glyphs)}`
		);
	}
	cc.shortcut.glyph = glyph;
}

const preprocessorActions: {
	[key: string]: (
		this: AsAble,
		cc: ConvertingContext,
		...args: AsAble[]
	) => void;
} = {
	"@set": function(this, cc, name?: AsAble, value?: AsAble) {
		if (!name || !value) {
			throw this.error(cc, "@set must have 2 arguments.");
		}
		// sets a variable with name name to value value
		if (!name.canBeString(cc)) {
			throw name.error(
				cc,
				"Name to set must be a string with no variables."
			);
		}
		cc.setParserVariable(name.asString(cc), value);
	},
	"@foreach": function(this, cc, list?: AsAble, method?: AsAble) {
		if (!list || !method) {
			throw this.error(cc, "@foreach must have 2 arguments.");
		}
		if (!list.canBeAbleArray(cc)) {
			throw list.error(cc, "List must be a list.");
		}
		if (!method.canBeAction(cc)) {
			throw method.error(
				cc,
				'Method must be action, for example `@{Text "\\(@:repeatitem)"}`'
			);
		}
		list.asAbleArray(cc).forEach(item => {
			const newCC = cc.in();
			newCC.setParserVariable("repeatitem", item);
			method.asAction(newCC);
		});
	},
	"@icon": glyphAction,
	"@glyph": glyphAction,
	"@color": function(this, cc, colorName?: AsAble) {
		if (!colorName) {
			throw this.error(cc, "Please provide a color name.");
		}
		if (!colorName.canBeString(cc)) {
			throw this.error(cc, "Color name must be able to be a string");
		}
		const color =
			colors[
				colorName
					.asString(cc)
					.toLowerCase()
					.replace(/[^a-z]/g, "")
			];
		if (!color) {
			throw this.error(
				cc,
				`Invalid color name. Must be one of: ${Object.keys(colors)}`
			);
		}
		cc.shortcut.color = color;
	},
	"@showinwidget": function(this, cc, setTo?: AsAble) {
		if (!setTo) {
			throw this.error(cc, "Please provide a true or false.");
		}
		if (!setTo.canBeBoolean(cc)) {
			throw this.error(cc, "Value must be able to be a boolean");
		}
		cc.shortcut.showInWidget = setTo.asBoolean(cc);
	},
	"@elseif": function(this, cc, ...args) {
		const ifAction = cc.peekControlFlow();
		if (!ifAction) {
			throw this.error(cc, "The @elseif macro requires an if.");
		}
		if (!ifAction[ifAction.length - 1]) {
			throw this.error(
				cc,
				"The top item of the control flow stack has no items. This should never happen."
			);
		}
		if (
			ifAction[ifAction.length - 1].wfaction.id !==
			"is.workflow.actions.conditional"
		) {
			throw this.error(cc, "ElseIf can only be used on an If action.");
			// todo also error on the if action.
		}
		// create otherwise action
		const otherwiseAction = otherwise(
			{ start: this.start, end: this.end },
			ifAction[ifAction.length - 1].uuid
		);
		cc.add(otherwiseAction);
		// create if action
		const newIfAction = getActionFromID("is.workflow.actions.conditional");
		if (!newIfAction) {
			throw this.error(
				cc,
				"The conditional action does not exist. This should never happen."
			);
		}
		newIfAction.build(cc, this, undefined, ...args);
		const added = cc.endControlFlow();
		if (!added) {
			throw this.error(
				cc,
				"Adding an if action did not add any control flow. This should never happen."
			);
		}
		ifAction.push({
			uuid: added[0].uuid,
			number: 0,
			wfaction: added[0].wfaction
		});
	}
};
export default preprocessorActions;
/*

current issue:
if value can be any AsAble, that can't become a class unless you changed all the values everywhere or something
canBeX checks if it has a property and the only way to fake that is have variables be proxies but that stops working
when you use .asString on them

possible "solution": if(instanceof PreprocessorVariable) {preprocessorvariable.getValue()}

*/
