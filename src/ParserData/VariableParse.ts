import { ConvertingContext } from "../Converter";
import {
	Parse,
	AsStringVariable,
	AsNameType,
	AsText,
	AsVariable,
	AsAction,
	AsAble
} from "../ParserData";
import {
	Text,
	MagicVariable,
	NamedVariable,
	Attachment,
	Action,
	AttachmentType
} from "../OutputData";
import { Position } from "../Production";
import { getVariable } from "../HelpfulActions";

import * as uuidv4 from "uuid/v4";

export class VariableParse extends Parse
	implements AsStringVariable, AsNameType, AsText, AsVariable, AsAction {
	type: AsAble;
	name: AsAble;
	forkey?: AsAble;
	options?: AsAble;

	constructor(
		start: Position,
		end: Position,
		type: AsAble,
		name: AsAble,
		forkey?: AsAble,
		options?: AsAble
	) {
		super(start, end);
		this.type = type;
		this.name = name;
		this.forkey = forkey;
		this.options = options;
	}
	canBeStringVariable(_cc: ConvertingContext): true {
		return true;
	}
	asStringVariable(cc: ConvertingContext) {
		const { name, type } = this.asNameType(cc);

		if (type !== "v") {
			throw this.type.error(
				cc,
				`This variable must be a v:named variable.`
			);
		}

		return name;
	}
	canBeNameType(_cc: ConvertingContext): true {
		return true;
	}
	asNameType(cc: ConvertingContext) {
		if (this.forkey) {
			cc.warn(
				this.forkey.error(
					cc,
					"This variable cannot have aggrandizements"
				)
			);
		}

		if (this.options) {
			cc.warn(
				this.options.error(
					cc,
					"This variable cannot have aggrandizements"
				)
			);
		}

		if (!this.name.canBeString(cc)) {
			throw this.name.error(
				cc,
				"This variable must have a string name with no variables."
			);
		}
		if (!this.type.canBeString(cc)) {
			throw this.type.error(
				cc,
				"This variable must have a string type with no variables."
			);
		}
		const name = this.name.asString(cc);
		const type = this.type.asString(cc);

		if (type !== "v" && type !== "mv") {
			throw this.type.error(
				cc,
				`This variable must be either a v: named variable or a mv: magic variable.`
			);
		}
		return { name, type };
	}
	canBeText(_cc: ConvertingContext): true {
		return true;
	}
	asText(cc: ConvertingContext) {
		const text = new Text();
		text.add(this.asVariable(cc));
		return text;
	}
	canBeVariable(_cc: ConvertingContext): true {
		return true;
	}
	asVariable(cc: ConvertingContext) {
		//Converts this v:variable to a variable
		let variable: Attachment;

		if (!this.name.canBeString(cc)) {
			throw this.name.error(
				cc,
				"This variable must have a string name with no variables."
			);
		}
		if (!this.type.canBeString(cc)) {
			throw this.type.error(
				cc,
				"This variable must have a string type with no variables."
			);
		}
		const name = this.name.asString(cc);
		const type = this.type.asString(cc);
		let aggrandizements: { [key: string]: AsAble };
		if (this.options) {
			if (!this.options.canBeRawKeyedDictionary(cc)) {
				throw this.options.error(
					cc,
					"The aggrandizements for this variable must be a dictionary with no variables in keys."
				);
			}
			aggrandizements = this.options.asRawKeyedDictionary(cc); // should be asRawKeyedDictionary and then use asstirng inside
		} else {
			aggrandizements = {};
		}

		if (type === "v") {
			// named variable
			let vardata = cc.getNamedVariable(name);
			if (
				name.startsWith("Repeat Index") ||
				name.startsWith("Repeat Item")
			) {
				vardata = true;
			}
			if (!vardata) {
				this.warn(
					cc,
					`The variable \`${type}:${name}\` has not been defined yet. Define it with a \`setVariable\` action.`
				);
			}
			variable = new NamedVariable(name);
		} else if (type === "mv") {
			// magic variable
			const vardata = cc.getMagicVariable(name);
			if (!vardata) {
				this.warn(
					cc,
					`The magic variable \`${type}:${name}\` has not been defined yet. Define it by putting an arrow on an action, for example \`myaction -> ${type}:${name}\``
				);
			}
			const mvact: [Action] | [string, string] = vardata
				? [vardata.action]
				: [name, uuidv4()];
			variable = new MagicVariable(...mvact);
		} else if (type === "s") {
			// special variable
			const attachtype: { [key: string]: AttachmentType | undefined } = {
				clipboard: "Clipboard",
				askwhenrun: "Ask",
				currentdate: "CurrentDate",
				shortcutinput: "ExtensionInput",
				actioninput: "Input"
			};
			const attachvalue = attachtype[name.toLowerCase()];
			if (!attachvalue) {
				throw this.name.error(
					cc,
					`This special variable does not exist. Valid special variables are ${Object.keys(
						attachtype
					)}`
				);
			}
			variable = new Attachment(attachvalue);
		} else {
			throw this.type.error(
				cc,
				`Variables must be either v: named variables, mv: magic variables, or s: special variables.`
			);
		}
		if (this.forkey) {
			variable.aggrandizements.setCoercionType("dictionary");
			if (!this.forkey.canBeString(cc)) {
				throw this.forkey.error(
					cc,
					"The forkey section of this variable must be a string with no variables."
				);
			}
			variable.aggrandizements.setForKey(this.forkey.asString(cc));
		}
		["as", "coerce", "key", "forkey", "get", "property"].forEach(key => {
			const valueA = aggrandizements[key];
			if (!valueA) {
				return;
			} // skip
			if (!valueA.canBeString(cc)) {
				throw valueA.error(
					cc,
					"Aggrandizements dictionary values must be strings"
				);
			}
			const value = valueA.asString(cc);
			const shortKey = key.toLowerCase().replace(/[^a-z]/g, "");
			if (shortKey === "key" || shortKey === "forkey") {
				const result = variable.aggrandizements.setForKey(value);
				if (typeof result === "string") {
					throw valueA.error(cc, result);
				}
			} else if (shortKey === "as" || shortKey === "coerce") {
				const result = variable.aggrandizements.setCoercionType(value);
				if (typeof result === "string") {
					throw valueA.error(cc, result);
				}
			} else if (shortKey === "get" || shortKey === "property") {
				const result = variable.aggrandizements.setProperty(value);
				if (typeof result === "string") {
					throw valueA.error(cc, result);
				}
			} else {
				// it would be better to throw at the key but asRawKyeedDictionary doesn't allow that
				// throwing at the value has strange problems with @; parser variables where it throws in the wrong place
				throw valueA.error(
					cc,
					`The aggrandizement ${key.toLowerCase()} has not been implemented yet or is invalid. Valid are \`key\`, \`as\`, or \`get\`]`
				);
			}
		});
		return variable;
	}
	canBeAction(_cc: ConvertingContext): true {
		return true;
	}
	asAction(cc: ConvertingContext) {
		const action = getVariable(this, this.asVariable(cc));
		cc.add(action);
		return action;
	}
}
