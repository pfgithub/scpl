import test from "ava";
import {Action} from "../src/OutputData";
import { parse } from "../index";
import * as fs from "fs";
import {InverseConvertingContext} from "../src/InverseConvertingContext";
// import * as path from "path";

import * as sampleshortcutdata from "./sampleshortcut.json";


test("invert a basic action", t => {
	t.deepEqual(Action.inverse({
		WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
		WFWorkflowActionParameters: {
			WFTextActionText: "Icon List V2"
		}
	}).build(), {
		WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
		WFWorkflowActionParameters: {
			WFTextActionText: "Icon List V2"
		}
	});
});

test("inversions for stringable", t => {
	const icc = new InverseConvertingContext;
	t.is(icc.createStringAble("myStringCanBeAn@Identifier_Neat23"), "myStringCanBeAn@Identifier_Neat23");
	t.is(icc.createStringAble("2myStringCannotBeAn@Identifier"), "\"2myStringCannotBeAn@Identifier\"");
	t.is(icc.createStringAble("251.62"), "251.62");
	t.is(icc.createStringAble("this is my string"), '"this is my string"');
	t.is(icc.createStringAble("my\\string\nneeds \"escapes\""), '"my\\\\string\\nneeds \\"escapes\\""');
});

test("inversions for numberable", t => {
	const icc = new InverseConvertingContext;
	t.is(icc.createNumberAble(25.6), "25.6");
	t.is(icc.createNumberAble(-98.3), "-98.3");
	t.is(icc.createNumberAble(8), "8");
});



function noUUID(obj: any, options: {noSCPLData?: boolean} = {}) {
	const uuids: string[] = [];
	return JSON.parse(JSON.stringify(obj, (key, value: unknown) => {
		if(options.noSCPLData && key === "SCPLData") {return undefined;}
		if(typeof value === "string") {
			if(value.match(/[a-z0-9]{6}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/)) {
				let index = uuids.indexOf(value);
				if(index === -1) {
					index = uuids.push(value) - 1; // push returns array length
				}
				return `<uuid${index+1}>`;
			}
			return value.split("\uFFFC").join("[attachment]");
		}
		return value;
	}));
}

// test("text field", t => {
// 	const cc = new ConvertingContext();
// 	// let text = new WFTypes.WFTextInputParameter();
// 	const textAction = getActionFromName("Text");
// 	t.truthy(textAction); // test
// 	if(!textAction) {return;} // typescript
// 	textAction.build(cc, undefined, undefined, new IdentifierParse([0, 0], [0, 0], "Data"));
// 	const [output] = cc.shortcut.build();
// 	const actions = output.WFWorkflowActions;
// 	t.deepEqual(noUUID(actions), [
// 		{
// 			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
// 			WFWorkflowActionParameters: {
// 				WFTextActionText: "Data"
// 			}
// 		}
// 	]);
// });

test("parsing things", t => {
	const output = parse(`text "test"`, {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions, {noSCPLData: true}), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "test"
			}
		}
	]);
});

test("lists cannot be used as strings", t => {
	t.throws(() => parse(`text [list]`, {makePlist: false}));
});

test("variables", t => {
	const output = parse(`setvariable v:myvar; text v:myvar`, {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions, {noSCPLData: true}), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.setvariable",
			WFWorkflowActionParameters: {
				WFVariableName: "myvar"
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: {
					WFSerializationType: "WFTextTokenString",
					Value: {
						string: "[attachment]",
						attachmentsByRange: {
							"{0, 1}": {
								Aggrandizements: [],
								Type: "Variable",
								VariableName: "myvar"
							}
						}
					}
				}
			}
		}
	]);
});

test("magic variables", t => {
	const output = parse(`text "hello" -> mv:myvar; text mv:myvar`, {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions, {noSCPLData: true}), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				UUID: "<uuid1>",
				WFTextActionText: "hello",
				CustomOutputName: "myvar"
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: {
					WFSerializationType: "WFTextTokenString",
					Value: {
						string: "[attachment]",
						attachmentsByRange: {
							"{0, 1}": {
								Aggrandizements: [],
								Type: "ActionOutput",
								OutputName: "myvar",
								OutputUUID: "<uuid1>"
							}
						}
					}
				}
			}
		}
	]);
});

test("undefined variables throw errors", t => {
	t.throws(() => parse(`text v:undefindenamedvariable`, {makePlist: false}));
	t.throws(() => parse(`text mv:undefinedmagicvariable`, {makePlist: false}));
	t.throws(() => parse(`text s:invalidspecialvariable`, {makePlist: false}));
});

test("inputarg with actions and other action args", t => {
	const output = parse(`calculate ^(number 1) "+" (number 5)`, {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions, {noSCPLData: true}), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.number",
			WFWorkflowActionParameters: {
				UUID: "<uuid1>",
				WFNumberActionNumber: 1
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.number",
			WFWorkflowActionParameters: {
				UUID: "<uuid2>",
				WFNumberActionNumber: 5
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.getvariable",
			WFWorkflowActionParameters: {
				WFVariable: {
					Value: {
						Type: "ActionOutput",
						Aggrandizements: [],
						OutputName: "Number",
						OutputUUID: "<uuid1>"
					},
					WFSerializationType: "WFTextTokenAttachment"
				}
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.math",
			WFWorkflowActionParameters: {
				WFMathOperation: "+",
				WFMathOperand: {
					Value: {
						Type: "ActionOutput",
						Aggrandizements: [],
						OutputName: "Number",
						OutputUUID: "<uuid2>"
					},
					WFSerializationType: "WFTextTokenAttachment"
				}
			}
		}
	]);
});

test("inputarg with no get variable needed", t => {
	const output = parse(`calculate "+" (number 5) ^(number 1)`, {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions, {noSCPLData: true}), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.number",
			WFWorkflowActionParameters: {
				UUID: "<uuid1>",
				WFNumberActionNumber: 5
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.number",
			WFWorkflowActionParameters: {
				WFNumberActionNumber: 1
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.math",
			WFWorkflowActionParameters: {
				WFMathOperation: "+",
				WFMathOperand: {
					Value: {
						Type: "ActionOutput",
						Aggrandizements: [],
						OutputName: "Number",
						OutputUUID: "<uuid1>"
					},
					WFSerializationType: "WFTextTokenAttachment"
				}
			}
		}
	]);
});

test("inputarg with variables without parenthesis", t => {
	const output = parse(`number 1 -> mv:mynum; calculate ^mv:mynum "+" (number 5)`, {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions, {noSCPLData: true}), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.number",
			WFWorkflowActionParameters: {
				UUID: "<uuid1>",
				WFNumberActionNumber: 1,
				CustomOutputName: "mynum"
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.getvariable",
			WFWorkflowActionParameters: {
				UUID: "<uuid2>",
				WFVariable: {
					Value: {
						Type: "ActionOutput",
						Aggrandizements: [],
						OutputName: "mynum",
						OutputUUID: "<uuid1>"
					},
					WFSerializationType: "WFTextTokenAttachment"
				}
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.number",
			WFWorkflowActionParameters: {
				UUID: "<uuid3>",
				WFNumberActionNumber: 5
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.getvariable",
			WFWorkflowActionParameters: {
				WFVariable: {
					Value: {
						Type: "ActionOutput",
						Aggrandizements: [],
						OutputName: "get variable",
						OutputUUID: "<uuid2>"
					},
					WFSerializationType: "WFTextTokenAttachment"
				}
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.math",
			WFWorkflowActionParameters: {
				WFMathOperation: "+",
				WFMathOperand: {
					Value: {
						Type: "ActionOutput",
						Aggrandizements: [],
						OutputName: "Number",
						OutputUUID: "<uuid3>"
					},
					WFSerializationType: "WFTextTokenAttachment"
				}
			}
		}
	]);
});

test("long shortcut", t => {
	const output = parse(fs.readFileSync(`./test/sampleshortcut.scpl`, "utf8"), {makePlist: false});
	const [scdata] = output.build();
	// fs.writeFileSync("./test/sampleshortcut.json", JSON.stringify(noUUID([scdata]), null, "\t"), "utf8");
	t.deepEqual(noUUID([scdata]), sampleshortcutdata);
});

test("foreach macro", t => {
	const output = parse(`@foreach [item1, item2, item3] @{text @:repeatitem}; text "item 4"`, {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions, {noSCPLData: true}), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "item1"
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "item2"
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "item3"
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "item 4"
			}
		}
	]);
});

test("open app action", t => {
	const output = parse(`openapp Safari; openapp Shortcuts; openapp "is.workflow.my.app"`, {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions, {noSCPLData: true}), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.openapp",
			WFWorkflowActionParameters: {
				WFAppIdentifier: "com.apple.mobilesafari"
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.openapp",
			WFWorkflowActionParameters: {
				WFAppIdentifier: "is.workflow.my.app"
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.openapp",
			WFWorkflowActionParameters: {
				WFAppIdentifier: "is.workflow.my.app"
			}
		}
	]);
});

test("open app fails with invalid app name", t => {
	t.throws(() => parse(`openapp myfavoriteapp`, {makePlist: false}));
});

test("get details of * actions", t => {
	const output = parse(`getdetailsofcontacts "Email Address"`, {makePlist: false});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions, {noSCPLData: true}), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.properties.contacts",
			WFWorkflowActionParameters: {
				WFContentItemPropertyName: "Email Address"
			}
		}
	]);
});

// console.log(JSON.stringify(noUUID(actions), null, "\t"));
