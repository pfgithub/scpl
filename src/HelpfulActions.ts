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
export const otherwise = (
	position: {
		start: [number, number];
		end: [number, number];
	},
	gid: string
) => {
	const otherwiseAction = new Action(
		position.start,
		position.end,
		"otherwise",
		"is.workflow.actions.conditional"
	);
	otherwiseAction.parameters.set("WFControlFlowMode", 1);
	otherwiseAction.parameters.set("GroupingIdentifier", gid);
	return otherwiseAction;
};
export const endIf = (
	position: {
		start: [number, number];
		end: [number, number];
	},
	gid: string
) => {
	const endifAction = new Action(
		position.start,
		position.end,
		"end if",
		"is.workflow.actions.conditional"
	);
	endifAction.parameters.set("WFControlFlowMode", 2);
	endifAction.parameters.set("GroupingIdentifier", gid);
	return endifAction;
};
