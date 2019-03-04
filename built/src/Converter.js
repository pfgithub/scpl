"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4 = require("uuid/v4");
const OutputData_1 = require("./OutputData");
const PreprocessorActions_1 = require("./PreprocessorActions");
class ConvertingContext {
    constructor(above) {
        this.namedVariables = {};
        this.magicVariables = {};
        this.parserVariables = {};
        this.parserActions = {};
        this.shortcut = new OutputData_1.Shortcut("My Great Shortcut");
        this.lastVariableAction = undefined;
        ///
        this.controlFlowStack = [];
        this.above = above;
    }
    getNamedVariable(name) {
        // if this doesn't have it try this.above
        if (this.namedVariables[name]) {
            return this.namedVariables[name];
        }
        if (this.above) {
            return this.above.getNamedVariable(name);
        }
        return undefined;
    }
    setNamedVariable(name) {
        // go to the highest this.above and set it there, named variables are global
        if (this.above) {
            return this.above.setNamedVariable(name);
        }
        this.namedVariables[name] = true;
    }
    getMagicVariable(name) {
        // if this doesn't have it try this.above
        if (this.magicVariables[name]) {
            return this.magicVariables[name];
        }
        if (this.above) {
            return this.above.getMagicVariable(name);
        }
        return undefined;
    }
    setMagicVariable(name, action) {
        // set this's magicVariable[name] to {action:action}
        this.magicVariables[name] = { action };
    }
    getParserVariable(name) {
        if (this.parserVariables[name]) {
            return this.parserVariables[name];
        }
        if (this.above) {
            return this.above.getParserVariable(name);
        }
        return undefined;
    }
    setParserVariable(name, value) {
        this.parserVariables[name] = value;
    }
    getParserAction(name) {
        if (PreprocessorActions_1.default[name]) {
            return PreprocessorActions_1.default[name];
        }
        if (this.parserActions[name]) {
            return this.parserActions[name];
        }
        if (this.above) {
            return this.above.getParserAction(name);
        }
        return undefined;
    }
    setParserAction(name, value) {
        this.parserActions[name] = value;
    }
    in() {
        return new ConvertingContext(this);
    }
    pushControlFlow(wfaction) {
        const res = { uuid: uuidv4(), number: 0, wfaction };
        this.controlFlowStack.push(res);
        return res;
    }
    nextControlFlow() {
        // if this doesn't have it, too bad.
        // controlflow does not go up.
        const last = this.controlFlowStack[this.controlFlowStack.length - 1];
        if (!last) {
            return undefined;
        }
        last.number = 1;
        return last;
    }
    endControlFlow() {
        const last = this.controlFlowStack.pop();
        if (!last) {
            return undefined;
        }
        last.number = 2;
        return last;
    }
    add(action) {
        // add an action to the highest cc
        if (this.above) {
            return this.above.add(action);
        }
        this.shortcut.add(action);
        this.lastVariableAction = action;
    }
}
exports.ConvertingContext = ConvertingContext;
