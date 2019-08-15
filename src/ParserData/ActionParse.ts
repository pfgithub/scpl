import { ConvertingContext } from "../Converter";
import { Parse, AsText, AsVariable, AsAction, AsAble } from "../ParserData";
import { Text, MagicVariable, Action } from "../OutputData";
import { Position } from "../Production";
import { setVariable, endIf } from "../HelpfulActions";
import { getActionFromName } from "../ActionData";

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
	canBeText(_cc: ConvertingContext): true {
		return true;
	}
	asText(cc: ConvertingContext) {
		// Gets a text containing this action as a variable
		const variable = this.asVariable(cc);
		const text = new Text();
		text.add(variable);
		return text;
	}
	canBeVariable(_cc: ConvertingContext): true {
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
	canBeAction(_cc: ConvertingContext): true {
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
		const actionNameFull = this.name.asString(cc);
		const actionName = actionNameFull.toLowerCase();
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
			wfAction = controlFlowData[controlFlowData.length - 1].wfaction;
		} else if (actionName === "end") {
			controlFlowData = cc.endControlFlow();
			if (!controlFlowData) {
				throw this.name.error(
					cc,
					"There are no open block actions. Make you have a block action such as `if` or `chooseFromMenu` and that you don't have any extra ends."
				);
			}
			for (let i = controlFlowData.length - 1; i > 0; i--) {
				const d = controlFlowData[i];
				cc.add(endIf({ start: this.start, end: this.end }, d.uuid));
			}
			controlFlowData = [controlFlowData[0]];
			wfAction = controlFlowData[0].wfaction;
		} else if (actionName.startsWith("@")) {
			const preprocessorAction = cc.getParserAction(
				actionName.toLowerCase()
			);
			if (preprocessorAction) {
				preprocessorAction.call(this, cc, ...this.args);
			} else {
				throw this.name.error(
					cc,
					`There is no converter action with the name ${actionName}.`
				);
			}
			return;
		} else {
			wfAction = getActionFromName(actionNameFull);
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
		const action = wfAction.build(
			cc,
			this,
			controlFlowData
				? controlFlowData[controlFlowData.length - 1]
				: undefined,
			...this.args
		);
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
