import {Action, Attachment} from "./OutputData";

export const setVariable = (varname: string) => {
	const setVariableAction = new Action("get variable", "is.workflow.actions.setvariable");
	setVariableAction.parameters.set("WFVariableName", varname);
	return setVariableAction;
};
export const getVariable = (variable: Attachment) => {
	const getVariableAction = new Action("get variable", "is.workflow.actions.getvariable");
	getVariableAction.parameters.set("WFVariable", variable);
	return getVariableAction;
};