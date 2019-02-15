const {Shortcut, Action, Parameters, DictionaryItem, Text, MagicVariable, NamedVariable, Variable, Attachment, DictionaryFieldValue, Parameter, Aggrandizements, DictionaryKeyAggrandizement, CoercionAggrandizement, Aggrandizement} = require("./OutputData");

class ConvertingContext {
	// this contains information about what actions are in the shortcut,
	// what default type variables are, what magic variables are which
	// actions, what compiletime variables have been set, ............
	constructor() {
		this.vardata = {};
		this.shortcut = new Shortcut("my shortcut");
		///
	}
}

module.exports = {ConvertingContext};
