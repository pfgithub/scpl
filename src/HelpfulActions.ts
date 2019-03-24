import { Action, Attachment } from "./OutputData";

export const setVariable = (
	position: { start: [number, number]; end: [number, number] },
	varname: string
) => {
	const setVariableAction = new Action(
		position.start,
		position.end,
		"get variable",
		"is.workflow.actions.setvariable"
	);
	setVariableAction.parameters.set("WFVariableName", varname);
	return setVariableAction;
};
export const getVariable = (
	position: { start: [number, number]; end: [number, number] },
	variable: Attachment
) => {
	const getVariableAction = new Action(
		position.start,
		position.end,
		"get variable",
		"is.workflow.actions.getvariable"
	);
	getVariableAction.parameters.set("WFVariable", variable);
	return getVariableAction;
};
