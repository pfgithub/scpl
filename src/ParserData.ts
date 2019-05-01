import {
	Action,
	Dictionary,
	Text,
	MagicVariable,
	NamedVariable,
	Variable,
	Attachment,
	List,
	AttachmentType,
	ContentItemFilter
} from "./OutputData";
import { getActionFromName } from "./ActionData";
import { ConvertingContext } from "./Converter.js";
import { setVariable, getVariable } from "./HelpfulActions";
import { Position } from "./Production";

export class PositionedError extends Error {
	// an error at a position
	start: Position;
	end: Position;
	constructor(message: string, start: Position, end: Position) {
		super(
			`Error from ${start.toString()} to ${end.toString()}: ${message}`
		);
		this.start = start;
		this.end = end;
	}
}

export class Parse {
	special: "InputArg" | "ControlFlowMode" | "Arglist" | undefined;
	start: Position;
	end: Position;
	constructor(start: Position, end: Position) {
		this.start = start;
		this.end = end;
	}

	error(_cc: ConvertingContext, message: string) {
		return new PositionedError(message, this.start, this.end);
	}
	canBeString(_cc: ConvertingContext): this is AsString {
		return false;
	}
	canBeBoolean(_cc: ConvertingContext): this is AsBoolean {
		return false;
	}
	canBeText(_cc: ConvertingContext): this is AsText {
		return false;
	}
	canBeList(_cc: ConvertingContext): this is AsList {
		return false;
	}
	canBeArray(_cc: ConvertingContext): this is AsArray {
		return false;
	}
	canBeAbleArray(_cc: ConvertingContext): this is AsAbleArray {
		return false;
	}
	canBeVariable(_cc: ConvertingContext): this is AsVariable {
		return false;
	}
	canBeAction(_cc: ConvertingContext): this is AsAction {
		return false;
	}
	canBeDictionary(_cc: ConvertingContext): this is AsDictionary {
		return false;
	}
	canBeRawDictionary(_cc: ConvertingContext): this is AsRawDictionary {
		return false;
	}
	canBeRawKeyedDictionary(
		_cc: ConvertingContext
	): this is AsRawKeyedDictionary {
		return false;
	}
	canBeNameType(_cc: ConvertingContext): this is AsNameType {
		return false;
	}
	canBeStringVariable(_cc: ConvertingContext): this is AsStringVariable {
		return false;
	}
	canBeNumber(_cc: ConvertingContext): this is AsNumber {
		return false;
	}
	canBeFilter(_cc: ConvertingContext): this is AsFilter {
		return false;
	}
}

interface AsString extends Parse {
	asString(cc: ConvertingContext): string;
}

interface AsBoolean extends Parse {
	asBoolean(cc: ConvertingContext): boolean;
}

interface AsText extends Parse {
	asText(cc: ConvertingContext): Text;
}

interface AsList extends Parse {
	asList(cc: ConvertingContext): List;
}

interface AsArray extends Parse {
	asArray(cc: ConvertingContext): Array<string>;
}

interface AsAbleArray extends Parse {
	asAbleArray(cc: ConvertingContext): Array<AsAble>;
}

interface AsVariable extends Parse {
	asVariable(cc: ConvertingContext): Variable;
}

interface AsAction extends Parse {
	asAction(cc: ConvertingContext): Action | undefined;
}

interface AsDictionary extends Parse {
	asDictionary(cc: ConvertingContext): Dictionary;
}

interface AsRawDictionary extends Parse {
	asRawDictionary(cc: ConvertingContext): { [key: string]: string };
}

interface AsRawKeyedDictionary extends Parse {
	asRawKeyedDictionary(cc: ConvertingContext): { [key: string]: AsAble };
}

interface AsNameType extends Parse {
	asNameType(cc: ConvertingContext): { name: string; type: string };
}

interface AsStringVariable extends Parse {
	asStringVariable(cc: ConvertingContext): string;
}

interface AsNumber extends Parse {
	asNumber(cc: ConvertingContext): number;
}

interface AsFilter extends Parse {
	asFilter(cc: ConvertingContext): ContentItemFilter;
}

export type AsAble = Parse;

export class ConvertVariableParse extends Parse {
	name: AsAble;
	options?: AsAble;
	constructor(
		start: Position,
		end: Position,
		name: AsAble,
		options?: AsAble
	) {
		super(start, end);
		this.name = name;
		this.options = options;
	}
	getValue(cc: ConvertingContext): AsAble {
		if (!this.name.canBeString(cc)) {
			throw this.name.error(
				cc,
				"Name must be a string with no variables."
			);
		}
		const name = this.name.asString(cc);
		const me = cc.getParserVariable(name);
		if (!me) {
			throw super.error(cc, `Parser Variable @:${name} is not defined.`);
		}
		return me;
	}
	error(cc: ConvertingContext, message: string) {
		const me = this.getValue(cc);
		return me.error(cc, `${this.start} ${this.end} ${message}`);
	}
}
// there has to be a better way
[
	"String",
	"Boolean",
	"Text",
	"List",
	"Array",
	"AbleArray",
	"Variable",
	"Action",
	"Dictionary",
	"RawDictionary",
	"RawKeyedDictionary",
	"NameType",
	"StringVariable",
	"Number",
	"Filter"
].forEach(val => {
	//eslint-disable-next-line func-names
	(<any>ConvertVariableParse).prototype[`canBe${val}`] = function(
		this: ConvertVariableParse,
		cc: ConvertingContext
	) {
		const me = this.getValue(cc);
		return (<any>me)[`canBe${val}`](cc);
	};
	//eslint-disable-next-line func-names
	(<any>ConvertVariableParse).prototype[`as${val}`] = function(
		this: ConvertVariableParse,
		cc: ConvertingContext
	) {
		const me = this.getValue(cc);
		const options = this.options;
		let rawKeyedOptions: { [key: string]: AsAble };
		if (!options) {
			rawKeyedOptions = {};
		} else if (options.canBeRawKeyedDictionary(cc)) {
			rawKeyedOptions = options.asRawKeyedDictionary(cc);
		} else {
			throw options.error(cc, "Options must be a dictionary.");
		}
		// here we want to make a new cc on top of the old one
		const newCC = cc.in();
		Object.keys(rawKeyedOptions).forEach(key => {
			const value = rawKeyedOptions[key];
			newCC.setParserVariable(key, value);
		});
		return (<any>me)[`as${val}`](newCC);
	};
});

export class ErrorParse extends Parse {
	constructor(start: Position, end: Position, _message: string) {
		super(start, end);
	}
}
export class FilterParse extends Parse implements AsFilter {
	filterItems: undefined[];
	constructor(start: Position, end: Position, filterItems: undefined[]) {
		super(start, end);

		this.filterItems = filterItems;
	}
	canBeFilter(_cc: ConvertingContext): boolean {
		return true;
	}
	asFilter(cc: ConvertingContext): ContentItemFilter {
		throw this.error(cc, "no");
	}
}
export class DictionaryParse extends Parse
	implements AsRawDictionary, AsRawKeyedDictionary, AsDictionary {
	keyvaluepairs: Array<{ key: AsAble; value: AsAble }>;
	constructor(
		start: Position,
		end: Position,
		keyvaluepairs: Array<{ key: AsAble; value: AsAble }>
	) {
		super(start, end);
		this.keyvaluepairs = keyvaluepairs;
	}
	canBeRawDictionary(_cc: ConvertingContext): boolean {
		return true;
	}
	asRawDictionary(cc: ConvertingContext) {
		// for static things that cannot have interpolated keys or values
		const dictionary: { [key: string]: string } = {};
		this.keyvaluepairs.forEach(({ key, value }) => {
			if (!key.canBeString(cc)) {
				throw key.error(
					cc,
					"This key name must be a string with no variables."
				);
			}
			if (!value.canBeString(cc)) {
				throw value.error(
					cc,
					"This value must be a string with no variables."
				);
			}
			const stringKey = key.asString(cc);
			if (dictionary[stringKey]) {
				throw key.error(
					cc,
					`This key was already defined in this dictionary.`
				);
			}
			dictionary[stringKey] = value.asString(cc);
		});
		return dictionary;
	}
	canBeRawKeyedDictionary(_cc: ConvertingContext): boolean {
		return true;
	}
	asRawKeyedDictionary(cc: ConvertingContext) {
		// returns a raw dictionary (keys are raw, not values) for this DictionaryParse
		const dictionary: { [key: string]: AsAble } = {};
		this.keyvaluepairs.forEach(({ key, value }) => {
			if (!key.canBeString(cc)) {
				throw key.error(
					cc,
					"This key name must be a string with no variables."
				);
			}
			const stringKey = key.asString(cc);
			if (dictionary[stringKey]) {
				throw key.error(
					cc,
					`This key name was already defined in this dictionary.`
				);
			}
			dictionary[stringKey] = value;
		});
		return dictionary;
	}
	canBeDictionary(_cc: ConvertingContext): boolean {
		return true;
	}
	asDictionary(cc: ConvertingContext) {
		// returns an Output Dictionary for this DictionaryParse
		const dictionary = new Dictionary();
		this.keyvaluepairs.forEach(({ key, value }) => {
			let outputValue;
			if (!key.canBeText(cc)) {
				throw key.error(cc, "Dictionary keys must be texts");
			}
			if (value.canBeList(cc)) {
				outputValue = value.asList(cc);
			} else if (value.canBeDictionary(cc)) {
				outputValue = value.asDictionary(cc);
			} else if (value.canBeText(cc)) {
				outputValue = value.asText(cc);
			} else {
				throw value.error(
					cc,
					"This value must be a list, string, or dictionary."
				);
			}
			dictionary.add(key.asText(cc), outputValue);
		});
		return dictionary;
	}
}
export class ListParse extends Parse implements AsArray, AsList, AsAbleArray {
	items: Array<AsAble>;

	constructor(start: Position, end: Position, items: Array<AsAble>) {
		super(start, end);
		this.items = items;
	}
	canBeArray(_cc: ConvertingContext): boolean {
		return true;
	}
	asArray(cc: ConvertingContext) {
		// -> ""[]
		return this.items.map(item => {
			if (!item.canBeString(cc)) {
				throw item.error(
					cc,
					"This list can only contain strings with no variables."
				);
			}
			return item.asString(cc);
		});
	}
	canBeAbleArray(_cc: ConvertingContext): boolean {
		return true;
	}
	asAbleArray(_cc: ConvertingContext) {
		return this.items;
	}
	canBeList(_cc: ConvertingContext): boolean {
		return true;
	}
	asList(cc: ConvertingContext) {
		// -> Text[]
		return new List(
			this.items.map(item => {
				if (!item.canBeText(cc)) {
					throw item.error(cc, "This list can only contain strings.");
				}
				return item.asText(cc);
			})
		);
	}
}
export class BarlistParse extends ListParse implements AsText, AsString {
	canBeString(_cc: ConvertingContext): boolean {
		return true;
	}
	asString(cc: ConvertingContext) {
		return this.items
			.map(item => {
				if (!item.canBeString(cc)) {
					throw item.error(
						cc,
						"This barlist can only contain strings with no variables."
					);
				}
				return item.asString(cc);
			})
			.join("\n");
	}
	canBeText(_cc: ConvertingContext): boolean {
		return true;
	}
	asText(cc: ConvertingContext) {
		// -> Text
		const finalText = new Text();
		this.items.forEach((item, i) => {
			if (!item.canBeText(cc)) {
				throw item.error(cc, "This barlist can only contain strings.");
			}
			finalText.add(item.asText(cc));
			if (this.items.length - 1 !== i) {
				finalText.add("\n");
			}
		});
		// this.data.join`\n` but for non-strings
		// finalText.add(...this.data.items.map(i=>i.asText()));
		return finalText;
	}
}

export class CharsParse extends Parse implements AsString, AsText, AsNumber {
	// [...string|Parse(has asVariable)]
	items: [string | AsAble];
	constructor(start: Position, end: Position, items: [string | AsAble]) {
		super(start, end);
		this.items = items;
	}
	canBeString(_cc: ConvertingContext): boolean {
		return true;
	}
	asString(cc: ConvertingContext) {
		// returns a raw string
		let string = "";
		this.items.forEach(item => {
			if (typeof item === "string") {
				string += item;
				return;
			}
			if (item instanceof ConvertVariableParse) {
				if (item.canBeString(cc)) {
					string += item.asString(cc);
					return;
				}
			}
			throw item.error(
				cc,
				`This string is not allowed to have variables.`
			);
		});
		return string;
	}
	canBeNumber(_cc: ConvertingContext): boolean {
		return true;
	}
	asNumber(cc: ConvertingContext) {
		const num = +this.asString(cc);
		if (isNaN(num)) {
			throw this.error(
				cc,
				"This number could not be converted to a number."
			);
		}
		return num;
	}
	canBeText(_cc: ConvertingContext): boolean {
		return true;
	}
	asText(cc: ConvertingContext) {
		const text = new Text();
		this.items.forEach(item => {
			if (typeof item === "string") {
				return text.add(item);
			}
			if (item instanceof ConvertVariableParse) {
				if (item.canBeText(cc)) {
					text.add(item.asText(cc));
					return;
				}
			}
			if (!item.canBeVariable(cc)) {
				throw item.error(
					cc,
					"String interpolations can only contain variables."
				);
			}
			return text.add(item.asVariable(cc));
		});
		return text;
	}
}

export class IdentifierParse extends Parse
	implements AsNumber, AsString, AsBoolean, AsText {
	value: string;
	constructor(start: Position, end: Position, str: string) {
		super(start, end);
		this.value = str;
	}
	canBeString(_cc: ConvertingContext): boolean {
		return true;
	}
	asString(_cc: ConvertingContext) {
		return this.value;
	}
	canBeNumber(_cc: ConvertingContext): boolean {
		return true;
	}
	asNumber(cc: ConvertingContext) {
		const num = +this.value;
		if (isNaN(num)) {
			throw this.error(
				cc,
				"This number could not be converted to a number."
			);
		}
		return num;
	}
	canBeBoolean(_cc: ConvertingContext): boolean {
		return true;
	}
	asBoolean(cc: ConvertingContext) {
		const string = this.asString(cc);
		if (string === "true") {
			return true;
		}
		if (string === "false") {
			return false;
		}
		throw this.error(cc, "This boolean must be either true or false.");
	}
	canBeText(_cc: ConvertingContext): boolean {
		return true;
	}
	asText(_cc: ConvertingContext) {
		const text = new Text();
		text.add(this.value);
		return text;
	}
}
export class NumberParse extends IdentifierParse {}
export class ArglistParse extends DictionaryParse {
	constructor(
		start: Position,
		end: Position,
		keyValuePairs: { key: AsAble; value: AsAble }[]
	) {
		super(start, end, keyValuePairs);
		this.special = "Arglist";
	}
}
export class VariableFlagParse extends Parse {
	variable: AsAble;
	constructor(start: Position, end: Position, variable: AsAble) {
		super(start, end);
		this.variable = variable;
	}
}
export class ActionParse extends Parse implements AsText, AsVariable, AsAction {
	name: AsAble;
	args: Array<AsAble>;
	variable?: AsAble;
	constructor(
		start: Position,
		end: Position,
		name: AsAble,
		args: Array<AsAble>,
		variable?: AsAble
	) {
		super(start, end);
		this.name = name;
		this.args = args;
		this.variable = variable;
	}
	// Action[Argument,Argument...]
	canBeText(_cc: ConvertingContext): boolean {
		return true;
	}
	asText(cc: ConvertingContext) {
		// Gets a text containing this action as a variable
		const variable = this.asVariable(cc);
		const text = new Text();
		text.add(variable);
		return text;
	}
	canBeVariable(_cc: ConvertingContext): boolean {
		return true;
	}
	asVariable(cc: ConvertingContext) {
		// returns the Variable for this ActionParse
		const action = this.asAction(cc); // adds the action
		if (!action) {
			throw this.error(cc, "This action does not have an action.");
		}
		return new MagicVariable(action);
		// otherwise: add a Set Variable action
		// throw new Error(`Actions of type ${action.info.id} cannot be converted to a variable.`);
	}
	canBeAction(_cc: ConvertingContext): boolean {
		return true;
	}
	asAction(cc: ConvertingContext): Action | undefined {
		// returns an Action for this ActionParse
		if (!this.name.canBeString(cc)) {
			throw this.name.error(
				cc,
				"This action must contain a string name with no variables."
			);
		}
		const actionName = this.name.asString(cc).toLowerCase();
		let wfAction;
		let controlFlowData;
		if (
			actionName === "flow" ||
			actionName === "otherwise" ||
			actionName === "else" ||
			actionName === "case"
		) {
			// flow/case/otherwise action
			controlFlowData = cc.nextControlFlow();
			if (!controlFlowData) {
				throw this.name.error(
					cc,
					"There are no open block actions. Make you have a block action such as `if` or `chooseFromMenu` and that you don't have any extra ends."
				);
			}
			wfAction = controlFlowData.wfaction;
		} else if (actionName === "end") {
			controlFlowData = cc.endControlFlow();
			if (!controlFlowData) {
				throw this.name.error(
					cc,
					"There are no open block actions. Make you have a block action such as `if` or `chooseFromMenu` and that you don't have any extra ends."
				);
			}
			wfAction = controlFlowData.wfaction;
		} else if (actionName.startsWith("@")) {
			const preprocessorAction = cc.getParserAction(
				actionName.toLowerCase()
			);
			if (preprocessorAction) {
				preprocessorAction(cc, ...this.args);
			} else {
				throw this.name.error(
					cc,
					`There is no converter action with the name ${actionName}.`
				);
			}
			return;
		} else {
			wfAction = getActionFromName(actionName);
			if (!wfAction) {
				throw this.name.error(
					cc,
					`This action could not be found. Check the documentation for a list of actions.`
				);
			}
		}
		if (!wfAction) {
			throw this.name.error(
				cc,
				`The action named ${actionName.toLowerCase()} could not be found.`
			);
		}
		const action = wfAction.build(cc, this, controlFlowData, ...this.args);
		// WFAction adds it to cc for us, no need to do it ourselves.
		// now add any required set variable actions
		if (this.variable) {
			if (!this.variable.canBeNameType(cc)) {
				throw this.variable.error(
					cc,
					"To set an output variable, the output variable must be a variable."
				);
			}
			const { name, type } = this.variable.asNameType(cc); // TODO not this
			if (type === "v") {
				cc.add(setVariable(this.variable, name));
				cc.setNamedVariable(name);
			} else if (type === "mv") {
				action.magicvarname = name;
				cc.setMagicVariable(name, action);
			}
		}
		return action;
	}
}
export class VariableParse extends Parse
	implements AsStringVariable, AsNameType, AsText, AsVariable, AsAction {
	type: AsAble;
	name: AsAble;
	forkey: AsAble;
	options: AsAble;

	constructor(
		start: Position,
		end: Position,
		type: AsAble,
		name: AsAble,
		forkey: AsAble,
		options: AsAble
	) {
		super(start, end);
		this.type = type;
		this.name = name;
		this.forkey = forkey;
		this.options = options;
	}
	canBeStringVariable(_cc: ConvertingContext): boolean {
		return true;
	}
	asStringVariable(cc: ConvertingContext) {
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

		if (type !== "v") {
			throw this.type.error(
				cc,
				`This variable must be a v:named variable.`
			);
		}
		return name;
	}
	canBeNameType(_cc: ConvertingContext): boolean {
		return true;
	}
	asNameType(cc: ConvertingContext) {
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
	canBeText(_cc: ConvertingContext): boolean {
		return true;
	}
	asText(cc: ConvertingContext) {
		const text = new Text();
		text.add(this.asVariable(cc));
		return text;
	}
	canBeVariable(_cc: ConvertingContext): boolean {
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
				throw this.error(
					cc,
					`The variable \`${type}:${name}\` has not been defined yet. Define it with a \`setVariable\` action.`
				);
			}
			variable = new NamedVariable(name);
		} else if (type === "mv") {
			// magic variable
			const vardata = cc.getMagicVariable(name);
			if (!vardata) {
				throw this.error(
					cc,
					`The magic variable \`${type}:${name}\` has not been defined yet. Define it by putting an arrow on an action, for example \`myaction -> ${type}:${name}\``
				);
			}
			const mvact = vardata.action;
			variable = new MagicVariable(mvact);
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
	canBeAction(_cc: ConvertingContext): boolean {
		return true;
	}
	asAction(cc: ConvertingContext) {
		const action = getVariable(this, this.asVariable(cc));
		cc.add(action);
		return action;
	}
}

export class ActionsParse extends Parse
	implements AsAction, AsVariable, AsText {
	actions: Array<AsAble>;
	constructor(start: Position, end: Position, actions: Array<AsAble>) {
		super(start, end);
		this.actions = actions;
	}
	canBeText(_cc: ConvertingContext): boolean {
		return true;
	}
	asText(cc: ConvertingContext) {
		const variable = this.asVariable(cc);
		const text = new Text();
		text.add(variable);
		return text;
	}
	canBeVariable(_cc: ConvertingContext): boolean {
		return true;
	}
	asVariable(cc: ConvertingContext) {
		const action = this.asAction(cc);
		return new MagicVariable(action);
	}
	canBeAction(_cc: ConvertingContext): boolean {
		return true;
	}
	asAction(cc: ConvertingContext) {
		let lastAction: Action | undefined;
		this.actions.forEach(action => {
			if (!action.canBeAction(cc)) {
				throw action.error(cc, "This value must be an action.");
			}
			lastAction = action.asAction(cc);
		});
		if (!lastAction) {
			throw this.error(cc, "There must be at least one action");
		}
		return lastAction;
	}
	asShortcut(converterActions?: {
		[key: string]: (cc: ConvertingContext, ...args: AsAble[]) => void;
	}) {
		const cc = new ConvertingContext();
		if (converterActions) {
			Object.keys(converterActions).forEach(key => {
				cc.setParserAction(key, converterActions[key]);
			});
		}
		this.asAction(cc);
		if (cc.controlFlowStack.length !== 0) {
			throw this.error(
				cc,
				`There are ${
					cc.controlFlowStack.length
				} unended block actions. Check to make sure that every block has an end.`
			);
		}
		return cc.shortcut;
	}
}
// Text::asString
// Text::build
