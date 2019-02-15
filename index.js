


/*

array of parameters

if:

parenthesis (->Input)
specialCharacters
string


 */

let type = {
	text: "text",
	input: "input",
	oneOf: "oneOf"
};

let groupingIdentifierStack = [];

let act2 = {
	alert: {
		id: "is.workflow.actions.alert",
		arguments: [
			{
				name: "WFAlertActionMessage",
				type: type.text
			}
		]
	},
	showresult: {
		id: "is.workflow.actions.showresult",
		arguments: [
			{
				name: "Text",
				type: type.text
			}
		]
	},
	comment: {
		id: "is.workflow.actions.comment",
		arguments: [
			{
				name: "WFCommentActionText",
				type: type.text
			}
		]
	},
	if: {
		id: "is.workflow.actions.conditional",
		arguments: [
			{
				type: type.input
			},
			{
				type: type.oneOf,
				oneOf: {equals: "Equals"},
				name: "WFCondition"
			},
			{
				type: type.text,
				name: "WFConditionalActionString"
			}
		],
		preset: [
			{
				name: "GroupingIdentifier",
				value: () =>
					({
						gid: groupingIdentifierStack.push(uuidv4()),
						actionid: "is.workflow.actions.conditional"
					})
			},
			{
				name: "WFControlFlowMode",
				value: 0
			}
		]
	},
	else: {
		id: "is.workflow.actions.conditional",
		arguments: [
			{
				type: type.input
			},
			{
				type: type.oneOf,
				oneOf: {equals: "Equals"},
				name: "WFCondition"
			},
			{
				type: type.text,
				name: "WFConditionalActionString"
			}
		],
		preset: [
			{
				name: "GroupingIdentifier",
				value: () => groupingIdentifierStack[groupingIdentifierStack.length - 1]
			},
			{
				name: "WFControlFlowMode",
				value: 1
			}
		]
	},
	endif: {
		id: "is.workflow.actions.conditional",
		arguments: [
			{
				type: type.input
			},
			{
				type: type.oneOf,
				oneOf: {equals: "Equals"},
				name: "WFCondition"
			},
			{
				type: type.text,
				name: "WFConditionalActionString"
			}
		],
		preset: [
			{
				name: "GroupingIdentifier",
				value: () => groupingIdentifierStack.pop()
			},
			{
				name: "WFControlFlowMode",
				value: 2
			}
		]
	}
};


let actions = {
	alert: {
		id: "is.workflow.actions.alert",
		parameters: {
			message: {name: "WFAlertActionMessage", type: "Text"}
		}
	}, if: {
		id: "is.workflow.actions.conditional",
		parameters: {
			condition: {name: "WFCondition", type: "oneof", oneof: {
				options: {"=": "Equals", "<": "Is Less Than", ">": "Is Greater Than", has: "Contains"},
				allowVariables: false
			}},
			value: {name: "WFConditionalActionString", type: "Text"}
		},
		values: [{name: "WFControlFlowMode", value: 0}],
		groupable: true
	}, else: {
		id: "is.workflow.actions.conditional",
		values: [{name: "WFControlFlowMode", value: 1}],
		groupable: true
	}, endIf: {
		id: "is.workflow.actions.conditional",
		values: [{name: "WFControlFlowMode", value: 2}],
		groupable: true
	}
};

/*



 */

let alertAction = () => {}; // WFActionAlertMessage: Text // is.workflow.actions.alert

class AlertAction extends Action {
	constructor() {
		super();
	}
}




// let's try


// example usage
