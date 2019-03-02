"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4 = require("uuid/v4");
const OutputData_1 = require("./OutputData");
class ConvertingContext {
    constructor() {
        this.vardata = {};
        this.magicvardata = {};
        this.shortcut = new OutputData_1.Shortcut("My Great Shortcut");
        this.lastVariableAction = undefined;
        ///
        this.controlFlowStack = [];
    }
    pushControlFlow(wfaction) {
        const res = { uuid: uuidv4(), number: 0, wfaction };
        this.controlFlowStack.push(res);
        return res;
    }
    nextControlFlow() {
        if (this.controlFlowStack.length === 0) {
            throw new Error(`There are no control flow groups active.`);
        }
        const last = this.controlFlowStack[this.controlFlowStack.length - 1];
        last.number = 1;
        return last;
    }
    endControlFlow() {
        if (this.controlFlowStack.length === 0) {
            throw new Error(`There are no control flow groups active.`);
        }
        const last = this.controlFlowStack.pop();
        last.number = 2;
        return last;
    }
    add(action) {
        // Adds an action to a shortcut
        this.shortcut.add(action);
        this.lastVariableAction = action;
    }
}
exports.ConvertingContext = ConvertingContext;
