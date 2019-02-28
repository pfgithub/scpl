import * as uuidv4 from "uuid/v4";
import {Shortcut, Action} from "./OutputData";

export class ConvertingContext {
	vardata: {[key: string]: boolean}
	magicvardata: {[key: string]: {action: Action}}
	shortcut: Shortcut
	lastVariableAction: Action
	controlFlowStack: Array<{uuid: string, number: number, wfaction: any}>

	constructor() {
		this.vardata = {};
		this.magicvardata = {};
		this.shortcut = new Shortcut("My Great Shortcut");
		this.lastVariableAction = undefined;
		///
		this.controlFlowStack = [];
	}
	pushControlFlow(wfaction: any) {
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
	add(action: Action) {
		// Adds an action to a shortcut
		this.shortcut.add(action);
		this.lastVariableAction = action;
	}
}
