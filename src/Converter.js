const uuidv4 = require("uuid/v4");
const {Shortcut, Action, Parameters, DictionaryItem, Text, MagicVariable, NamedVariable, Variable, Attachment, DictionaryFieldValue, Parameter, Aggrandizements, DictionaryKeyAggrandizement, CoercionAggrandizement, Aggrandizement} = require("./OutputData");

class ConvertingContext {
	// this contains information about what actions are in the shortcut,
	// what default type variables are, what magic variables are which
	// actions, what compiletime variables have been set, ............
	constructor() {
		this.vardata = {};
		this.magicvardata = {};
		this.shortcut = new Shortcut("My Great Shortcut");
		this.lastVariableAction = undefined;
		///
		this.controlFlowStack = [];
	}
	pushControlFlow(wfaction) {
		const res = {uuid: uuidv4(), number: 0, wfaction};
		this.controlFlowStack.push(res);
		return res;
	}
	nextControlFlow() {
		if(this.controlFlowStack.length === 0) {
			throw new Error(`There are no control flow groups active.`);
		}
		const last = this.controlFlowStack[this.controlFlowStack.length - 1];
		last.number = 1;
		return last;
	}
	endControlFlow() {
		if(this.controlFlowStack.length === 0) {
			throw new Error(`There are no control flow groups active.`);
		}
		const last = this.controlFlowStack.pop();
		last.number = 2;
		return last;
	}
	add(action) {
		// Adds an action to a shortcut
		this.shortcut.add(action);
		if(action.info.hasVariable) {this.lastVariableAction = action;}
	}
}

module.exports = {ConvertingContext};
