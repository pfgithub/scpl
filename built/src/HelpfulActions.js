"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OutputData_1 = require("./OutputData");
exports.setVariable = (varname) => {
    const setVariableAction = new OutputData_1.Action("get variable", "is.workflow.actions.setvariable");
    setVariableAction.parameters.set("WFVariableName", varname);
    return setVariableAction;
};
exports.getVariable = (variable) => {
    const getVariableAction = new OutputData_1.Action("get variable", "is.workflow.actions.getvariable");
    getVariableAction.parameters.set("WFVariable", variable);
    return getVariableAction;
};
