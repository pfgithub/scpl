import * as uuidv4 from "uuid/v4";
import { Shortcut, Action } from "./OutputData";
import { WFAction } from "./ActionData";
import { AsAble } from "./ParserData";
import defaultPreprocessorActions, {
	PreprocessorAction
} from "./PreprocessorActions";
import { PositionedError } from "./PositionedError";

export class ConvertingContext {
	namedVariables: { [key: string]: boolean };
	magicVariables: { [key: string]: { action: Action } };
	importQuestions: {
		[key: string]: {
			question: string;
			defaultValue: string | undefined;
			used: boolean;
		};
	};
	shortcut: Shortcut;
	lastVariableAction?: Action;
	controlFlowStack: { uuid: string; number: number; wfaction: WFAction }[][];
	parserVariables: { [key: string]: AsAble };
	parserActions: {
		[key: string]: PreprocessorAction;
	};
	above?: ConvertingContext;
	useWarnings: boolean;
	warnings: PositionedError[];

	constructor(above?: ConvertingContext) {
		this.namedVariables = {};
		this.magicVariables = {};
		this.parserVariables = {};
		this.parserActions = {};
		this.importQuestions = {};

		this.shortcut = new Shortcut("My Great Shortcut");
		this.lastVariableAction = undefined;
		///
		this.controlFlowStack = [];
		this.useWarnings = false;
		this.warnings = [];

		this.above = above;
	}

	addImportQuestion(
		name: string,
		question: string,
		defaultValue: string | undefined
	): boolean {
		if (this.above) {
			return this.above.addImportQuestion(name, question, defaultValue);
		}
		if (this.importQuestions[name] && !this.importQuestions[name].used) {
			return false;
		}
		this.importQuestions[name] = { question, defaultValue, used: false };
		return true;
	}
	useImportQuestion(
		name: string,
		parameterKey: string,
		actionUUID: string
	): true | "already used" | "not defined" {
		if (this.above) {
			return this.above.useImportQuestion(name, parameterKey, actionUUID);
		}
		// use an import question and return true
		if (!this.importQuestions[name]) {
			return "not defined";
		}
		if (this.importQuestions[name].used) {
			return "already used";
		}
		this.shortcut.importquestions.push({
			ActionUUID: actionUUID,
			Category: "Parameter",
			DefaultValue: this.importQuestions[name].defaultValue,
			ParameterKey: parameterKey,
			Text: this.importQuestions[name].question
		});
		return true;
	}
	getNamedVariable(name: string): boolean | undefined {
		// if this doesn't have it try this.above
		if (this.namedVariables[name]) {
			return this.namedVariables[name];
		}
		if (this.above) {
			return this.above.getNamedVariable(name);
		}
		return undefined;
	}
	setNamedVariable(name: string): void {
		// go to the highest this.above and set it there, named variables are global
		if (this.above) {
			return this.above.setNamedVariable(name);
		}
		this.namedVariables[name] = true;
	}

	getMagicVariable(name: string): { action: Action } | undefined {
		// if this doesn't have it try this.above
		if (this.magicVariables[name]) {
			return this.magicVariables[name];
		}
		if (this.above) {
			return this.above.getMagicVariable(name);
		}
		return undefined;
	}
	setMagicVariable(name: string, action: Action) {
		// set this's magicVariable[name] to {action:action}
		this.magicVariables[name] = { action };
	}

	getParserVariable(name: string): AsAble | undefined {
		if (this.parserVariables[name]) {
			return this.parserVariables[name];
		}
		if (this.above) {
			return this.above.getParserVariable(name);
		}
		return undefined;
	}
	setParserVariable(name: string, value: AsAble) {
		this.parserVariables[name] = value;
	}

	getParserAction(name: string): PreprocessorAction | undefined {
		if (defaultPreprocessorActions[name]) {
			return defaultPreprocessorActions[name];
		}
		if (this.parserActions[name]) {
			return this.parserActions[name];
		}
		if (this.above) {
			return this.above.getParserAction(name);
		}
		return undefined;
	}
	setParserAction(name: string, value: PreprocessorAction) {
		this.parserActions[name] = value;
	}

	in(): ConvertingContext {
		return new ConvertingContext(this);
	}
	peekControlFlow() {
		return this.controlFlowStack[this.controlFlowStack.length - 1];
	}
	pushControlFlow(...actions: WFAction[]) {
		const res = actions.map(wfaction => ({
			uuid: uuidv4(),
			number: 0,
			wfaction
		}));
		this.controlFlowStack.push(res);
		return res;
	}
	nextControlFlow() {
		// if this doesn't have it, too bad.
		// controlflow does not go up.
		const last = this.peekControlFlow();
		if (!last) {
			return undefined;
		}
		last[last.length - 1].number = 1;
		return last;
	}
	endControlFlow() {
		const last = this.controlFlowStack.pop();
		if (!last) {
			return undefined;
		}
		last.forEach(item => (item.number = 2));
		return last;
	}
	add(action: Action): void {
		// add an action to the highest cc
		if (this.above) {
			return this.above.add(action);
		}
		this.shortcut.add(action);
		this.lastVariableAction = action;
	}
	warn(positionedError: PositionedError) {
		if (this.useWarnings) {
			this.warnings.push(positionedError);
		} else {
			positionedError.message = positionedError.message.replace(
				"Error from",
				"Warning from"
			);
			throw positionedError;
		}
	}
}
