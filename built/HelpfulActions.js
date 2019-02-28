const { Action } = require("./OutputData");
const setVariable = (varname) => {
    const setVariableAction = new Action("get variable", "is.workflow.actions.setvariable", {});
    setVariableAction.parameters.set("WFVariableName", varname);
    return setVariableAction;
};
const getVariable = (variable) => {
    const getVariableAction = new Action("get variable", "is.workflow.actions.getvariable", {});
    getVariableAction.parameters.set("WFVariable", variable);
    return getVariableAction;
};
module.exports = { getVariable, setVariable };
