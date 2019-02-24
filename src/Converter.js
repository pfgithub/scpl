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
	}
	add(action) {
		// Adds an action to a shortcut
		this.shortcut.add(action);
		if(action.info.hasVariable) {this.lastVariableAction = action.variable;}
	}
}

module.exports = {ConvertingContext};
