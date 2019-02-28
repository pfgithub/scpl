import {Action} from "./OutputData";

export const setVariable = (varname) => {
	const setVariableAction = new Action("get variable", "is.workflow.actions.setvariable", {});
	setVariableAction.parameters.set("WFVariableName", varname);
	return setVariableAction;
};
export const getVariable = (variable) => {
	const getVariableAction = new Action("get variable", "is.workflow.actions.getvariable", {});
	getVariableAction.parameters.set("WFVariable", variable);
	return getVariableAction;
};