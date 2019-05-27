import test from "ava";
import { Action, Shortcut } from "../src/OutputData";
import { parse, inverse } from "../index";
import * as fs from "fs";
import { ConvertingContext } from "../src/Converter";
import { InverseConvertingContext } from "../src/InverseConvertingContext";
import { PositionedError } from "../src/ParserData";
// import * as path from "path";

import * as sampleshortcutdata from "./sampleshortcut.json";

function scplToShortcut(scpl: string) {
	const output = parse(scpl, {
		make: ["shortcutjson"]
	});
	const actions = output.shortcutjson[0].WFWorkflowActions;
	return noUUID(actions, { noSCPLData: true });
}

function noUUID(
	obj: any,
	options: { noSCPLData?: boolean; ignoreOutputName?: boolean } = {}
) {
	const uuids: string[] = [];
	return JSON.parse(
		JSON.stringify(obj, (key, value: unknown) => {
			if (options.noSCPLData && key === "SCPLData") {
				return undefined;
			}
			if (typeof value === "string") {
				if (
					value.match(
						/[a-z0-9]{6}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/
					)
				) {
					let index = uuids.indexOf(value);
					if (index === -1) {
						index = uuids.push(value) - 1; // push returns array length
					}
					return `<uuid${index + 1}>`;
				}
				if (
					options.ignoreOutputName &&
					(key === "CustomOutputName" || key === "OutputName")
				) {
					return undefined;
				}
				return value.split("\uFFFC").join("[attachment]");
			}
			return value;
		})
	);
}

// test("noUUID functions properly", t => {
// });

test("invert and build a basic action", t => {
	t.deepEqual(
		Action.inverse({
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "Icon List V2"
			}
		}).build(),
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "Icon List V2"
			}
		}
	);
});
test("invert and create text", t => {
	const icc = new InverseConvertingContext();
	t.deepEqual(
		icc.createActionAble(
			Action.inverse({
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "My Text"
				}
			})
		),
		'Text "My Text"'
	);
});
test("invert block actions", t => {
	const icc = new InverseConvertingContext();
	t.deepEqual(
		icc.createActionsAble(
			Shortcut.inverse(
				parse(
					`
Text "test"
If Equals "hmmm"
	text "huh interesting"
Otherwise
	text "huh uninteresting"
End
`,
					{ make: ["shortcutjson"] }
				).shortcutjson
			)
		),
		`Text test
If input=Equals value=hmmm
	Text "huh interesting"
Otherwise
	Text "huh uninteresting"
End`
	);
});
test("invert variable aggrandizements", t => {
	const icc = new InverseConvertingContext();
	t.deepEqual(
		icc.createActionsAble(
			Shortcut.inverse(
				parse(
					`
setvariable v:thisismyvariable
text v:thisismyvariable{as:dictionary,get:Name}
text v:thisismyvariable{as:dictionary,key:mykey}
text v:thisismyvariable{as:dictionary,key:mykey,get:name}
`,
					{ make: ["shortcutjson"] }
				).shortcutjson
			)
		),
		`SetVariable thisismyvariable
Text v:thisismyvariable{as: dictionary, get: name}
Text v:thisismyvariable.mykey
Text v:thisismyvariable.mykey{get: name}`
	);
});
test("invert dictionaries", t => {
	const icc = new InverseConvertingContext();
	t.deepEqual(
		icc.createActionsAble(
			Shortcut.inverse(
				parse(
					`
Dictionary{a:b}
Dictionary{key:"my string","\\(s:actioninput)": "var key",normalkey: "\\(s:actioninput)"}
`,
					{ make: ["shortcutjson"] }
				).shortcutjson
			)
		),
		`Dictionary {a: b}
Dictionary {key: "my string", "\\(s:actioninput)": "var key", normalkey: s:actioninput}`
	);
});
test("inverse with icons and colors", t => {
	const icc = new InverseConvertingContext();
	t.deepEqual(
		icc.createActionsAble(
			Shortcut.inverse(
				parse(
					`
					@icon car
					@color red
					dictionary{a:b}
					dictionary{key:"my string","\\(s:actioninput)": "var key",normalkey: "\\(s:actioninput)"}
					`,
					{ make: ["shortcutjson"] }
				).shortcutjson
			)
		),
		`@Icon car
@Color red
Dictionary {a: b}
Dictionary {key: "my string", "\\(s:actioninput)": "var key", normalkey: s:actioninput}`
	);
});

test("invert newlines", t => {
	const icc = new InverseConvertingContext();
	t.deepEqual(
		icc.createActionAble(
			Action.inverse({
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "Text with\r\nNewlines."
				}
			})
		),
		'Text "Text with\\nNewlines."'
	);
});
test("invert complete valid shortcut and ensure output is exact when compiled", t => {
	// generate sample data
	const output = parse(
		fs.readFileSync(`./test/sampleshortcut.scpl`, "utf8"),
		{ makePlist: false }
	);
	const scdata = output.build();
	// invert
	const inverted = inverse(scdata);
	fs.writeFileSync("./test/sampleshortcut-converted.scpl", inverted, "utf8");
	const parsed = parse(inverted, { make: ["shortcutjson"] }).shortcutjson;
	// compare
	t.deepEqual(
		noUUID(sampleshortcutdata[0].WFWorkflowActions, {
			noSCPLData: true,
			ignoreOutputName: true
		}),
		noUUID(parsed[0].WFWorkflowActions, {
			noSCPLData: true,
			ignoreOutputName: true
		})
	);
});

test("invert an invalid action", t => {
	const icc = new InverseConvertingContext();
	t.deepEqual(
		icc.createActionAble(
			Action.inverse({
				WFWorkflowActionIdentifier: "dev.scpl.actions.invalid",
				WFWorkflowActionParameters: {
					WFTextActionText: "Icon List V2"
				}
			})
		),
		`??unknown action with id dev.scpl.actions.invalid??`
	);
});
test("invert an incomplete action", t => {
	const icc = new InverseConvertingContext();
	t.deepEqual(
		icc.createActionAble(
			Action.inverse({
				WFWorkflowActionIdentifier: "is.workflow.actions.filter.files",
				WFWorkflowActionParameters: {
					WFContentItemFilter: {
						Value: {
							WFActionParameterFilterPrefix: 1,
							WFContentPredicateBoundedDate: false,
							WFActionParameterFilterTemplates: [
								{
									Property: "Name",
									Operator: 4,
									VariableOverrides: {},
									Unit: 4,
									String: "My File Name",
									Removable: true
								}
							]
						},
						WFSerializationType: "WFContentPredicateTableTemplate"
					}
				}
			})
		),
		`FilterFiles filter=??error: This parameter is an error: Inversion for filters is not implemented yet??`
	);
});
test("dictionary number values", t => {
	const icc = new InverseConvertingContext();
	t.deepEqual(
		icc.createActionAble(
			Action.inverse({
				WFWorkflowActionIdentifier: "is.workflow.actions.dictionary",
				WFWorkflowActionParameters: {
					WFItems: {
						Value: {
							WFDictionaryFieldValueItems: [
								{
									WFItemType: 3,
									WFKey: "name",
									WFValue: "23"
								}
							]
						},
						WFSerializationType: "WFDictionaryFieldValue"
					}
				}
			})
		),
		`Dictionary {name: "23"}`
	);
});

test("inversions for stringable", t => {
	const icc = new InverseConvertingContext();
	t.is(
		icc.createStringAble("myStringCanBeAn@Identifier_Neat23"),
		"myStringCanBeAn@Identifier_Neat23"
	);
	t.is(
		icc.createStringAble("2myStringCannotBeAn@Identifier"),
		'"2myStringCannotBeAn@Identifier"'
	);
	t.is(icc.createStringAble("251.62"), "251.62");
	t.is(icc.createStringAble("this is my string"), '"this is my string"');
	t.is(
		icc.createStringAble('my\\string\nneeds "escapes"'),
		'"my\\\\string\\nneeds \\"escapes\\""'
	);
});

test("inversions for numberable", t => {
	const icc = new InverseConvertingContext();
	t.is(icc.createNumberAble(25.6), "25.6");
	t.is(icc.createNumberAble(-98.3), "-98.3");
	t.is(icc.createNumberAble(8), "8");
});

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
	const output = parse(`text "test"`, { makePlist: false });
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions, { noSCPLData: true }), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "test"
			}
		}
	]);
});

test("lists cannot be used as strings", t => {
	t.throws(() => parse(`text [list]`, { makePlist: false }));
});

test("variables", t => {
	t.deepEqual(scplToShortcut(`setvariable v:myvar; text v:myvar`), [
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
	t.deepEqual(scplToShortcut(`text "hello" -> mv:myvar; text mv:myvar`), [
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
	t.throws(() =>
		parse(`text v:undefindenamedvariable`, { makePlist: false })
	);
	t.throws(() =>
		parse(`text mv:undefinedmagicvariable`, { makePlist: false })
	);
	t.throws(() =>
		parse(`text s:invalidspecialvariable`, { makePlist: false })
	);
});

test("inputarg with actions and other action args", t => {
	t.deepEqual(scplToShortcut(`calculate ^(number 1) "+" ( number 5 )`), [
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
	const output = parse(`calculate "+" (number 5) ^(number 1)`, {
		makePlist: false
	});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(scplToShortcut(`calculate "+" (number 5) ^(number 1)`), [
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
	t.deepEqual(
		scplToShortcut(
			`number 1 -> mv:mynum; calculate ^mv:mynum "+" (number 5)`
		),
		[
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
		]
	);
});

test("long shortcut", t => {
	const output = parse(
		fs.readFileSync(`./test/sampleshortcut.scpl`, "utf8"),
		{ makePlist: false }
	);
	const [scdata] = output.build();
	// fs.writeFileSync("./test/sampleshortcut.json", JSON.stringify(noUUID([scdata]), null, "\t"), "utf8");
	t.deepEqual(noUUID([scdata]), sampleshortcutdata);
});

test("foreach macro", t => {
	t.deepEqual(
		scplToShortcut(
			`@foreach [item1, item2, item3] @{text @:repeatitem}; text "item 4"`
		),
		[
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
		]
	);
});

test("open app action", t => {
	t.deepEqual(
		scplToShortcut(
			`openapp Safari; openapp Shortcuts; openapp "is.workflow.my.app"`
		),
		[
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
		]
	);
});

test("open app fails with invalid app name", t => {
	t.throws(() => parse(`openapp myfavoriteapp`, { makePlist: false }));
});

test("multiple arrows throws a PositionedError", t => {
	t.throws(
		() => parse(`v:a = text "hello" -> v:a`, { makePlist: false }),
		PositionedError
	);
	t.throws(
		() => parse(`text "hello" -> v:a -> v:b`, { makePlist: false }),
		PositionedError
	);
	t.throws(
		() => parse(`v:a = v:b = text "hello"`, { makePlist: false }),
		PositionedError
	);
});

test("get details of * actions", t => {
	t.deepEqual(scplToShortcut(`getdetailsofcontacts "Email Address"`), [
		{
			WFWorkflowActionIdentifier:
				"is.workflow.actions.properties.contacts",
			WFWorkflowActionParameters: {
				WFContentItemPropertyName: "Email Address"
			}
		}
	]);
});

test("an action cannot have multiple = flags", t => {
	t.throws(() => parse(`v:a = v:b = text "myaction"`, { makePlist: false }));
	t.throws(() => parse(`v:a = v:b"`, { makePlist: false }));
});

test("actions that ignore parameters should still support ->", t => {
	t.deepEqual(scplToShortcut(`If;End If -> mv:If;GetVariable mv:If`), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.conditional",
			WFWorkflowActionParameters: {
				GroupingIdentifier: "<uuid1>",
				WFControlFlowMode: 0
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.conditional",
			WFWorkflowActionParameters: {
				CustomOutputName: "If",
				GroupingIdentifier: "<uuid1>",
				UUID: "<uuid2>",
				WFControlFlowMode: 2
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.getvariable",
			WFWorkflowActionParameters: {
				WFVariable: {
					Value: {
						Aggrandizements: [],
						OutputName: "If",
						OutputUUID: "<uuid2>",
						Type: "ActionOutput"
					},
					WFSerializationType: "WFTextTokenAttachment"
				}
			}
		}
	]);
});

test("filter action by name", t => {
	t.deepEqual(
		scplToShortcut(`FilterFiles :filter{Name Is "\\(s:AskWhenRun)hmm"}`),
		[
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.filter.files",
				WFWorkflowActionParameters: {
					WFContentItemFilter: {
						Value: {
							WFActionParameterFilterPrefix: 1,
							WFContentPredicateBoundedDate: false,
							WFActionParameterFilterTemplates: [
								{
									Operator: 4,
									VariableOverrides: {
										stringValue: {
											Value: {
												string: "[attachment]hmm",
												attachmentsByRange: {
													"{0, 1}": {
														Aggrandizements: [],
														Type: "Ask"
													}
												}
											},
											WFSerializationType:
												"WFTextTokenString"
										}
									},
									Unit: 4,
									Removable: true,
									Property: "Name"
								}
							]
						},
						WFSerializationType: "WFContentPredicateTableTemplate"
					}
				}
			}
		]
	);
});

test("filter boolean", t => {
	t.deepEqual(
		scplToShortcut(
			`FindPhotos :filter{IsAScreenshot Is true :and: Name contains "testname" :and: IsFavorite Is false}`
		),
		[
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.filter.photos",
				WFWorkflowActionParameters: {
					WFContentItemFilter: {
						Value: {
							WFActionParameterFilterPrefix: 1,
							WFContentPredicateBoundedDate: false,
							WFActionParameterFilterTemplates: [
								{
									Operator: 4,
									Bool: true,
									Unit: 4,
									Removable: true,
									Property: "Is a Screenshot",
									VariableOverrides: {}
								},
								{
									Operator: 99,
									String: "testname",
									Unit: 4,
									Removable: true,
									Property: "Name",
									VariableOverrides: {}
								},
								{
									Operator: 4,
									Bool: false,
									Unit: 4,
									Removable: true,
									Property: "Is Favorite",
									VariableOverrides: {}
								}
							]
						},
						WFSerializationType: "WFContentPredicateTableTemplate"
					}
				}
			}
		]
	);
});

test("filter or", t => {
	t.deepEqual(
		scplToShortcut(
			`FindPhotos :filter{IsAScreenshot Is true :or: Name contains "testname"}`
		),
		[
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.filter.photos",
				WFWorkflowActionParameters: {
					WFContentItemFilter: {
						Value: {
							WFActionParameterFilterPrefix: 0,
							WFContentPredicateBoundedDate: false,
							WFActionParameterFilterTemplates: [
								{
									Operator: 4,
									Bool: true,
									Unit: 4,
									Removable: true,
									Property: "Is a Screenshot",
									VariableOverrides: {}
								},
								{
									Operator: 99,
									String: "testname",
									Unit: 4,
									Removable: true,
									Property: "Name",
									VariableOverrides: {}
								}
							]
						},
						WFSerializationType: "WFContentPredicateTableTemplate"
					}
				}
			}
		]
	);
});

test("filter enum", t => {
	t.deepEqual(scplToShortcut(`FindPhotos :filter{Orientation is Up}`), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.filter.photos",
			WFWorkflowActionParameters: {
				WFContentItemFilter: {
					Value: {
						WFActionParameterFilterPrefix: 1,
						WFContentPredicateBoundedDate: false,
						WFActionParameterFilterTemplates: [
							{
								Operator: 4,
								Enumeration: "Up",
								Unit: 4,
								Removable: true,
								Property: "Orientation",
								VariableOverrides: {}
							}
						]
					},
					WFSerializationType: "WFContentPredicateTableTemplate"
				}
			}
		}
	]);
	t.throws(() =>
		scplToShortcut(`FindPhotos :filter{Orientation is NorthEast}`)
	);
});

test("argument labels and arglists and extendedargs", t => {
	t.deepEqual(
		scplToShortcut(`
			getfile errorifnotfound=false showdocumentpicker=false filepath="label"
			getfile (errorifnotfound=false showdocumentpicker:false filepath="parenthesis arglist")
			getfile a{errorifnotfound=false showdocumentpicker:false filepath="a{ arglist"}
			getfile
			> errorifnotfound=false
			> showdocumentpicker=false
			> filepath="extendedarg"
		`),
		[
			{
				WFWorkflowActionIdentifier:
					"is.workflow.actions.documentpicker.open",
				WFWorkflowActionParameters: {
					WFFileErrorIfNotFound: false,
					WFGetFilePath: "label",
					WFShowFilePicker: false
				}
			},
			{
				WFWorkflowActionIdentifier:
					"is.workflow.actions.documentpicker.open",
				WFWorkflowActionParameters: {
					WFFileErrorIfNotFound: false,
					WFGetFilePath: "parenthesis arglist",
					WFShowFilePicker: false
				}
			},
			{
				WFWorkflowActionIdentifier:
					"is.workflow.actions.documentpicker.open",
				WFWorkflowActionParameters: {
					WFFileErrorIfNotFound: false,
					WFGetFilePath: "a{ arglist",
					WFShowFilePicker: false
				}
			},
			{
				WFWorkflowActionIdentifier:
					"is.workflow.actions.documentpicker.open",
				WFWorkflowActionParameters: {
					WFFileErrorIfNotFound: false,
					WFGetFilePath: "extendedarg",
					WFShowFilePicker: false
				}
			}
		]
	);
});

// console.log(JSON.stringify(noUUID(actions), null, "\t"));

test("different quotes things", t => {
	const output = parse(
		`text "double' \\"quotes"; text 'single ""\\'quotes'; text “smart “"'quotes '"\\””`,
		{ makePlist: false }
	);
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	t.deepEqual(noUUID(actions, { noSCPLData: true }), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "double' \"quotes"
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: 'single ""\'quotes'
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "smart “\"'quotes '\"”"
			}
		}
	]);
});

test("glyph and color", t => {
	const output = parse(`@glyph car; @color red`, { makePlist: false });
	const [scdata] = output.build();
	t.deepEqual(scdata, {
		WFWorkflowClientVersion: "754",
		WFWorkflowClientRelese: "2.1.2",
		WFWorkflowMinimumClientVersion: 411,
		WFWorkflowIcon: {
			WFWorkflowIconStartColor: 0xff4351ff,
			WFWorkflowIconImageData: Buffer.from([]),
			WFWorkflowIconGlyphNumber: 0xe83c
		},
		WFWorkflowTypes: ["NCWidget", "WatchKit"],
		WFWorkflowInputContentItemClasses: [
			"WFAppStoreAppContentItem",
			"WFArticleContentItem",
			"WFContactContentItem",
			"WFDateContentItem",
			"WFEmailAddressContentItem",
			"WFGenericFileContentItem",
			"WFImageContentItem",
			"WFiTunesProductContentItem",
			"WFLocationContentItem",
			"WFDCMapsLinkContentItem",
			"WFAVAssetContentItem",
			"WFPDFContentItem",
			"WFPhoneNumberContentItem",
			"WFRichTextContentItem",
			"WFSafariWebPageContentItem",
			"WFStringContentItem",
			"WFURLContentItem"
		],
		WFWorkflowActions: []
	});
});

test("showInWidget", t => {
	const output = parse(`@showInWidget false`, { makePlist: false });
	const [scdata] = output.build();
	t.deepEqual(scdata, {
		WFWorkflowClientVersion: "754",
		WFWorkflowClientRelese: "2.1.2",
		WFWorkflowMinimumClientVersion: 411,
		WFWorkflowIcon: {
			WFWorkflowIconStartColor: 2071128575,
			WFWorkflowIconImageData: Buffer.from([]),
			WFWorkflowIconGlyphNumber: 59511
		},
		WFWorkflowTypes: ["WatchKit"],
		WFWorkflowInputContentItemClasses: [
			"WFAppStoreAppContentItem",
			"WFArticleContentItem",
			"WFContactContentItem",
			"WFDateContentItem",
			"WFEmailAddressContentItem",
			"WFGenericFileContentItem",
			"WFImageContentItem",
			"WFiTunesProductContentItem",
			"WFLocationContentItem",
			"WFDCMapsLinkContentItem",
			"WFAVAssetContentItem",
			"WFPDFContentItem",
			"WFPhoneNumberContentItem",
			"WFRichTextContentItem",
			"WFSafariWebPageContentItem",
			"WFStringContentItem",
			"WFURLContentItem"
		],
		WFWorkflowActions: []
	});
});

test("invalid glyph throws error", t => {
	t.throws(() => scplToShortcut(`@glyph hospitalbank`));
});

test("invalid color throws error", t => {
	t.throws(() => scplToShortcut(`@color lightcyangreen`));
});

test("else if macro", t => {
	t.deepEqual(
		scplToShortcut(`if Equals "test"
				text "Equal!"
			@elseif Equals "Something Else"
				text "Something Else!"
			@elseif Equals "Third"
				text "Third"
			else
				text "Else"
			end`),
		[
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.conditional",
				WFWorkflowActionParameters: {
					GroupingIdentifier: "<uuid1>",
					WFControlFlowMode: 0,
					WFCondition: "Equals",
					WFConditionalActionString: "test"
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "Equal!"
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.conditional",
				WFWorkflowActionParameters: {
					GroupingIdentifier: "<uuid1>",
					WFControlFlowMode: 1
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.conditional",
				WFWorkflowActionParameters: {
					GroupingIdentifier: "<uuid2>",
					WFControlFlowMode: 0,
					WFCondition: "Equals",
					WFConditionalActionString: "Something Else"
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "Something Else!"
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.conditional",
				WFWorkflowActionParameters: {
					GroupingIdentifier: "<uuid2>",
					WFControlFlowMode: 1
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.conditional",
				WFWorkflowActionParameters: {
					GroupingIdentifier: "<uuid3>",
					WFControlFlowMode: 0,
					WFCondition: "Equals",
					WFConditionalActionString: "Third"
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "Third"
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.conditional",
				WFWorkflowActionParameters: {
					GroupingIdentifier: "<uuid3>",
					WFControlFlowMode: 1
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "Else"
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.conditional",
				WFWorkflowActionParameters: {
					GroupingIdentifier: "<uuid3>",
					WFControlFlowMode: 2
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.conditional",
				WFWorkflowActionParameters: {
					GroupingIdentifier: "<uuid2>",
					WFControlFlowMode: 2
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.conditional",
				WFWorkflowActionParameters: {
					GroupingIdentifier: "<uuid1>",
					WFControlFlowMode: 2
				}
			}
		]
	);
});

test("if macro", t => {
	t.deepEqual(
		scplToShortcut(`
			@set mytest true
			@if @:mytest @{
				text "is true"
			} @{
				text "is false"
			}
			@set mytest false
			@if @:mytest @{
				text "is now true"
			} @{
				text "is now false"
			}
			@if @:mytest @{
				text "still is true"
			} // no else
			`),
		[
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "is true"
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "is now false"
				}
			}
		]
	);
});

test("ccOverride", t => {
	const cc = new ConvertingContext();
	cc.setNamedVariable("myvar");
	parse(`text v:myvar`, { ccOverride: cc });
	t.throws(() => parse(`text v:myvar2`, { ccOverride: cc }));
});

test("Dictionaries", t => {
	t.deepEqual(
		scplToShortcut(`
		Dictionary{}
		Dictionary { }
		Dictionary {
			key: value,
			subdict: {
				anotherkey: anothervalue,
				variable: s:clipboard,
				list: ["item 1", "item 2"]
			}
		}
		`),
		[
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.dictionary",
				WFWorkflowActionParameters: {
					WFItems: {
						Value: {
							WFDictionaryFieldValueItems: []
						},
						WFSerializationType: "WFDictionaryFieldValue"
					}
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.dictionary",
				WFWorkflowActionParameters: {
					WFItems: {
						Value: {
							WFDictionaryFieldValueItems: []
						},
						WFSerializationType: "WFDictionaryFieldValue"
					}
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.dictionary",
				WFWorkflowActionParameters: {
					WFItems: {
						Value: {
							WFDictionaryFieldValueItems: [
								{
									WFItemType: 0,
									WFKey: "key",
									WFValue: "value"
								},
								{
									WFItemType: 1,
									WFKey: "subdict",
									WFValue: {
										Value: {
											Value: {
												WFDictionaryFieldValueItems: [
													{
														WFItemType: 0,
														WFKey: "anotherkey",
														WFValue: "anothervalue"
													},
													{
														WFItemType: 0,
														WFKey: "variable",
														WFValue: {
															Value: {
																attachmentsByRange: {
																	"{0, 1}": {
																		Type:
																			"Clipboard",
																		Aggrandizements: []
																	}
																},
																string:
																	"[attachment]"
															},
															WFSerializationType:
																"WFTextTokenString"
														}
													},
													{
														WFItemType: 2,
														WFKey: "list",
														WFValue: {
															Value: [
																"item 1",
																"item 2"
															],
															WFSerializationType:
																"WFArrayParameterState"
														}
													}
												]
											},
											WFSerializationType:
												"WFDictionaryFieldValue"
										},
										WFSerializationType:
											"WFDictionaryFieldValue"
									}
								}
							]
						},
						WFSerializationType: "WFDictionaryFieldValue"
					}
				}
			}
		]
	);
});

test("Newlines are not allowed", t => {
	t.throws(() => scplToShortcut(`URL "Test \\n"`));
});

test("Newlines in comments parse", t => {
	t.deepEqual(scplToShortcut(`// Comment with no newline`), []);
});

test("define custom macro", t => {
	t.deepEqual(
		scplToShortcut(`
			@def @testmacro ["name", "value"] @{
				text "Name is: \\(@:name) and value is: \\(@:value)"
			}
			@testmacro "jakob" "tall"
			@testmacro name="jakob" value="tall"
			@testmacro (value=tall, name=jakob)
			`),
		[
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "Name is: jakob and value is: tall"
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "Name is: jakob and value is: tall"
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "Name is: jakob and value is: tall"
				}
			}
		]
	);
});

test("@error macro", t => {
	t.throws(() => scplToShortcut(`@error "Error! A bad happened."`));
});

test("@set with macro", t => {
	t.deepEqual(scplToShortcut(`@set @:test val; text @:test`), [
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "val"
			}
		}
	]);
});
