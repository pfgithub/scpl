import { Action, Shortcut } from "../src/OutputData";
import { parse, inverse } from "../index";
import * as fs from "fs";
import { ConvertingContext } from "../src/Converter";
import { InverseConvertingContext } from "../src/InverseConvertingContext";
// import * as path from "path";
import { PositionedError } from "../src/PositionedError";

import * as sampleshortcutdata from "./sampleshortcut.json";

function err(cb: () => void) {
	let msg = "No error thrown.";
	try {
		cb();
	} catch (e) {
		msg = e.toString();
	}
	return msg;
}

function scplToShortcut(scpl: string, useWarnings?: boolean) {
	const output = parse(scpl, {
		make: ["shortcutjson"],
		useWarnings: useWarnings
	});
	const actions = output.shortcutjson[0].WFWorkflowActions;
	if (useWarnings) {
		actions.push({
			warnings: output.warnings.map((i: PositionedError) => i.message)
		});
	}
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

test("invert and build a basic action", () => {
	expect(
		Action.inverse({
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "Icon List V2"
			}
		}).build()
	).toEqual({
		WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
		WFWorkflowActionParameters: {
			WFTextActionText: "Icon List V2"
		}
	});
});
test("invert and create text", () => {
	const icc = new InverseConvertingContext();
	expect(
		icc.createActionAble(
			Action.inverse({
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "My Text"
				}
			})
		)
	).toEqual('Text "My Text"');
});
test("invert block actions", () => {
	const icc = new InverseConvertingContext();
	expect(
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
		)
	).toEqual(`Text test
If input=Equals value=hmmm
	Text "huh interesting"
Otherwise
	Text "huh uninteresting"
End`);
});
test("invert variable aggrandizements", () => {
	const icc = new InverseConvertingContext();
	expect(
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
		)
	).toEqual(`SetVariable thisismyvariable
Text v:thisismyvariable{as: dictionary, get: name}
Text v:thisismyvariable.mykey
Text v:thisismyvariable.mykey{get: name}`);
});
test("invert dictionaries", () => {
	const icc = new InverseConvertingContext();
	expect(
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
		)
	).toEqual(`Dictionary {a: b}
Dictionary {key: "my string", "\\(s:actioninput)": "var key", normalkey: s:actioninput}`);
});
test("inverse with icons and colors", () => {
	const icc = new InverseConvertingContext();
	expect(
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
		)
	).toEqual(`@Icon car
@Color red
Dictionary {a: b}
Dictionary {key: "my string", "\\(s:actioninput)": "var key", normalkey: s:actioninput}`);
});
test("invert a boolean", () => {
	const icc = new InverseConvertingContext();
	expect(
		icc.createActionsAble(
			Shortcut.inverse(
				parse(
					`
                dictionary{<bool> a: false, <bool> b: true, <bool> c: false, <file> d: s:shortcutinput}
                `,
					{ make: ["shortcutjson"] }
				).shortcutjson
			)
		)
	).toEqual(
		`Dictionary {<boolean> a: false, <boolean> b: true, <boolean> c: false, <file> d: s:shortcutinput}`
	);
});
test("invert headers2", () => {
	const icc = new InverseConvertingContext();
	expect(
		icc.createActionsAble(
			Shortcut.inverse(
				parse(
					`
                getcontentsofurl headers=false headers2={<file> t: v:"Repeat Item"}
                `,
					{ make: ["shortcutjson"] }
				).shortcutjson
			)
		)
	).toEqual(
		`GetContentsofURL headers=false headers2={<file> t: v:"Repeat Item"}`
	);
});

test("invert newlines", () => {
	const icc = new InverseConvertingContext();
	expect(
		icc.createActionAble(
			Action.inverse({
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "Text with\r\nNewlines."
				}
			})
		)
	).toEqual('Text "Text with\\nNewlines."');
});
test("invert unsupported fields", () => {
	const icc = new InverseConvertingContext();
	expect(
		icc.createActionAble(
			Action.inverse({
				WFWorkflowActionIdentifier: "is.workflow.actions.email",
				//@ts-ignore
				WFWorkflowActionParameters: {
					WFEmailAddress: {
						Value: {
							WFContactFieldValues: ["email@example.com"]
						},
						WFSerializationType: "WFContactFieldValue"
					}
				}
			})
		)
	).toEqual(
		"EmailAddress ??error: This parameter is an error: Inversion for this parameter type WFContactFieldValue is not implemented yet??"
	);
});
test("invert complete valid shortcut and ensure output is exact when compiled", () => {
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
	expect(
		noUUID(sampleshortcutdata[0].WFWorkflowActions, {
			noSCPLData: true,
			ignoreOutputName: true
		})
	).toEqual(
		noUUID(parsed[0].WFWorkflowActions, {
			noSCPLData: true,
			ignoreOutputName: true
		})
	);
});

test("invert an invalid action", () => {
	const icc = new InverseConvertingContext();
	expect(
		icc.createActionAble(
			Action.inverse({
				WFWorkflowActionIdentifier: "dev.scpl.actions.invalid",
				WFWorkflowActionParameters: {
					WFTextActionText: "Icon List V2"
				}
			})
		)
	).toEqual(`??unknown action with id dev.scpl.actions.invalid??`);
});
test("invert an incomplete action", () => {
	const icc = new InverseConvertingContext();
	expect(
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
		)
	).toEqual(
		`FilterFiles filter=??error: This parameter is an error: Inversion for filters is not implemented yet??`
	);
});
test("dictionary number values", () => {
	const icc = new InverseConvertingContext();
	expect(
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
		)
	).toEqual(`Dictionary {name: "23"}`);
});

test("inversions for stringable", () => {
	const icc = new InverseConvertingContext();
	expect(icc.createStringAble("myStringCanBeAn@Identifier_Neat23")).toBe(
		"myStringCanBeAn@Identifier_Neat23"
	);
	expect(icc.createStringAble("2myStringCannotBeAn@Identifier")).toBe(
		'"2myStringCannotBeAn@Identifier"'
	);
	expect(icc.createStringAble("251.62")).toBe("251.62");
	expect(icc.createStringAble("this is my string")).toBe(
		'"this is my string"'
	);
	expect(icc.createStringAble('my\\string\nneeds "escapes"')).toBe(
		'"my\\\\string\\nneeds \\"escapes\\""'
	);
});

test("inversions for numberable", () => {
	const icc = new InverseConvertingContext();
	expect(icc.createNumberAble(25.6)).toBe("25.6");
	expect(icc.createNumberAble(-98.3)).toBe("-98.3");
	expect(icc.createNumberAble(8)).toBe("8");
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

test("parsing things", () => {
	const output = parse(`text "test"`, { makePlist: false });
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	expect(noUUID(actions, { noSCPLData: true })).toEqual([
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "test"
			}
		}
	]);
});

test("lists cannot be used as strings", () => {
	expect(err(() => parse(`text [list]`, { makePlist: false }))).toBe(
		"Error: Error from 1,6 to 1,12: Text fields only accept text."
	);
});

test("variables", () => {
	expect(scplToShortcut(`setvariable v:myvar; text v:myvar`)).toEqual([
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

test("magic variables", () => {
	expect(scplToShortcut(`text "hello" -> mv:myvar; text mv:myvar`)).toEqual([
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

test("undefined variables throw errors", () => {
	expect(
		err(() => parse(`text v:undefindenamedvariable`, { makePlist: false }))
	).toBe(
		"Error: Warning from 1,6 to 1,30: The variable `v:undefindenamedvariable` has not been defined yet. Define it with a `setVariable` action."
	);
	expect(
		err(() => parse(`text mv:undefinedmagicvariable`, { makePlist: false }))
	).toBe(
		"Error: Warning from 1,6 to 1,31: The magic variable `mv:undefinedmagicvariable` has not been defined yet. Define it by putting an arrow on an action, for example `myaction -> mv:undefinedmagicvariable`"
	);
	expect(
		err(() => parse(`text s:invalidspecialvariable`, { makePlist: false }))
	).toBe(
		"Error: Error from 1,8 to 1,30: This special variable does not exist. Valid special variables are clipboard,askwhenrun,currentdate,shortcutinput,actioninput"
	);
});

test("inputarg with actions and other action args", () => {
	expect(scplToShortcut(`calculate ^(number 1) "+" ( number 5 )`)).toEqual([
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

test("inputarg with no get variable needed", () => {
	const output = parse(`calculate "+" (number 5) ^(number 1)`, {
		makePlist: false
	});
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	expect(scplToShortcut(`calculate "+" (number 5) ^(number 1)`)).toEqual([
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

test("inputarg with variables without parenthesis", () => {
	expect(
		scplToShortcut(
			`number 1 -> mv:mynum; calculate ^mv:mynum "+" (number 5)`
		)
	).toEqual([
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

test("long shortcut", () => {
	const output = parse(
		fs.readFileSync(`./test/sampleshortcut.scpl`, "utf8"),
		{ makePlist: false }
	);
	const [scdata] = output.build();
	// fs.writeFileSync(
	// 	"./test/sampleshortcut.json",
	// 	JSON.stringify(noUUID([scdata]), null, "\t"),
	// 	"utf8"
	// );
	expect(noUUID([scdata])).toEqual(sampleshortcutdata);
});

test("foreach macro", () => {
	expect(
		scplToShortcut(
			`@foreach [item1, item2, item3] @{text @:repeatitem}; text "item 4"`
		)
	).toEqual([
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

test("open app action", () => {
	expect(
		scplToShortcut(
			`openapp Safari; openapp Shortcuts; openapp "is.workflow.my.app"`
		)
	).toEqual([
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

test("open app fails with invalid app name", () => {
	expect(
		err(() => parse(`openapp myfavoriteapp`, { makePlist: false }))
	).toBe(
		"Error: Error from 1,9 to 1,22: The app myfavoriteapp is not supported by default. Enter its app id which you can get from this shortcut: https://www.icloud.com/shortcuts/7aff3fcdd0ca4bbc9c0d1b70e2825ed8 (More info on the documentation page for this action)"
	);
});

test("multiple arrows throws a PositionedError", () => {
	expect(
		err(() => parse(`v:a = text "hello" -> v:a`, { makePlist: false }))
	).toBe(
		"Error: Error from 1,1 to 1,26: Actions cannot output to multiple variables"
	);
	expect(
		err(() => parse(`text "hello" -> v:a -> v:b`, { makePlist: false }))
	).toBe(
		"Error: Error from 1,1 to 1,27: Actions cannot output to multiple variables"
	);
	expect(
		err(() => parse(`v:a = v:b = text "hello"`, { makePlist: false }))
	).toBe("Error: Error from 1,8 to 101,1: Parsing error around here");
});

test("get details of * actions", () => {
	expect(scplToShortcut(`getdetailsofcontacts "Email Address"`)).toEqual([
		{
			WFWorkflowActionIdentifier:
				"is.workflow.actions.properties.contacts",
			WFWorkflowActionParameters: {
				WFContentItemPropertyName: "Email Address"
			}
		}
	]);
});

test("an action cannot have multiple = flags", () => {
	expect(
		err(() => parse(`v:a = v:b = text "myaction"`, { makePlist: false }))
	).toBe("Error: Error from 1,8 to 101,1: Parsing error around here");
	expect(err(() => parse(`v:a = v:b"`, { makePlist: false }))).toBe(
		"Error: Error from 1,8 to 101,1: Parsing error around here"
	);
});

test("actions that ignore parameters should still support ->", () => {
	expect(scplToShortcut(`If;End If -> mv:If;GetVariable mv:If`)).toEqual([
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

test("filter action by name", () => {
	expect(
		scplToShortcut(`FilterFiles :filter{Name Is "\\(s:AskWhenRun)hmm"}`)
	).toEqual([
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
										WFSerializationType: "WFTextTokenString"
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
	]);
});

test("filter boolean", () => {
	expect(
		scplToShortcut(
			`FindPhotos :filter{IsAScreenshot Is true :and: Name contains "testname" :and: IsFavorite Is false}`
		)
	).toEqual([
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
	]);
});

test("filter or", () => {
	expect(
		scplToShortcut(
			`FindPhotos :filter{IsAScreenshot Is true :or: Name contains "testname"}`
		)
	).toEqual([
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
	]);
});

test("filter enum", () => {
	expect(scplToShortcut(`FindPhotos :filter{Orientation is Up}`)).toEqual([
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
	expect(
		err(() =>
			scplToShortcut(`FindPhotos :filter{Orientation is NorthEast}`)
		)
	).toBe(
		"Error: Error from 1,20 to 1,44: Must be one of Up,Down,Left,Right,Up Mirrored,Down Mirrored,Left Mirrored,Right Mirrored"
	);
});

test("argument labels and arglists and extendedargs", () => {
	expect(
		scplToShortcut(`
        getfile errorifnotfound=false showdocumentpicker=false filepath="label"
        getfile (errorifnotfound=false showdocumentpicker:false filepath="parenthesis arglist")
        getfile a{errorifnotfound=false showdocumentpicker:false filepath="a{ arglist"}
        getfile
        > errorifnotfound=false
        > showdocumentpicker=false
        > filepath="extendedarg"
    `)
	).toEqual([
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
	]);
});

// console.log(JSON.stringify(noUUID(actions), null, "\t"));

test("different quotes things", () => {
	const output = parse(
		`text "double' \\"quotes"; text 'single ""\\'quotes'; text “smart “"'quotes '"\\””`,
		{ makePlist: false }
	);
	const [scdata] = output.build();
	const actions = scdata.WFWorkflowActions;
	expect(noUUID(actions, { noSCPLData: true })).toEqual([
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

test("glyph and color", () => {
	const output = parse(`@glyph car; @color red`, { makePlist: false });
	const [scdata] = output.build();
	expect(scdata).toEqual({
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

test("showInWidget", () => {
	const output = parse(`@showInWidget false`, { makePlist: false });
	const [scdata] = output.build();
	expect(scdata).toEqual({
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

test("invalid glyph throws error", () => {
	expect(() => scplToShortcut(`@glyph hospitalbank`)).toThrowError();
});

test("invalid color throws error", () => {
	expect(() => scplToShortcut(`@color lightcyangreen`)).toThrowError();
});

test("else if macro", () => {
	expect(
		scplToShortcut(`if Equals "test"
            text "Equal!"
        @elseif Equals "Something Else"
            text "Something Else!"
        @elseif Equals "Third"
            text "Third"
        else
            text "Else"
        end`)
	).toEqual([
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
	]);
});

test("if macro", () => {
	expect(
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
        `)
	).toEqual([
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
	]);
});

test("ccOverride", () => {
	const cc = new ConvertingContext();
	cc.setNamedVariable("myvar");
	parse(`text v:myvar`, { ccOverride: cc });
	expect(err(() => parse(`text v:myvar2`, { ccOverride: cc }))).toEqual(
		"Error: Warning from 1,6 to 1,14: The variable `v:myvar2` has not been defined yet. Define it with a `setVariable` action."
	);
});

test("Dictionaries", () => {
	expect(
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
    `)
	).toEqual([
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
	]);
});

test("Newlines are not allowed", () => {
	expect(err(() => scplToShortcut(`URL "Test \\n"`))).toEqual(
		"Error: Error from 1,5 to 1,14: Newlines are not allowed in this text field. Use a variable with a newline instead."
	);
});

test("Newlines in comments parse", () => {
	expect(scplToShortcut(`// Comment with no newline`)).toEqual([]);
});

test("define custom macro", () => {
	expect(
		scplToShortcut(`
        @def @TestMacro ["name", "value"] @{
            text "Name is: \\(@:name) and value is: \\(@:value)"
        }
        @testmacro "jakob" "tall"
        @testMacro name="jakob" value="tall"
        @TestMacro (value=tall, name=jakob)
        `)
	).toEqual([
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
	]);
	expect(
		scplToShortcut(`
            @def NoAt ["name", "value"] @{
                text "Name is: \\(@:name) and value is: \\(@:value)"
            }
            @NoAt "jakob" "tall"
            `)
	).toEqual([
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "Name is: jakob and value is: tall"
			}
		}
	]);
});

test("@error macro", () => {
	expect(
		err(() => scplToShortcut(`@error "Error! A bad happened."`))
	).toEqual("Error: Error from 1,1 to 1,32: Error! A bad happened.");
});

test("@set with macro", () => {
	expect(scplToShortcut(`@set @:test val; text @:test`)).toEqual([
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: "val"
			}
		}
	]);
});

/*
test("macro that returns a value", t => {
	t.deepEqual(
		scplToShortcut(
			`text (@isdefined @:notdefined)
			@set @:isdefined "yes";
			text (@isdefined @:isdefined)`
		),
		[
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "false"
				}
			},
			{
				WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
				WFWorkflowActionParameters: {
					WFTextActionText: "true"
				}
			}
		]
	);
});
*/

test("Dictionary File and Boolean type", () => {
	expect(
		scplToShortcut(`
    Dictionary{
        key: value
        <file> file: s:shortcutinput
        <bool> bool: false,
        <bool> bool2: true
    }
    `)
	).toEqual([
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
								WFItemType: 5,
								WFKey: "file",
								WFValue: {
									Value: {
										Value: {
											Aggrandizements: [],
											Type: "ExtensionInput"
										},
										WFSerializationType:
											"WFTextTokenAttachment"
									},
									WFSerializationType:
										"WFTokenAttachmentParameterState"
								}
							},
							{
								WFItemType: 4,
								WFKey: "bool",
								WFValue: {
									Value: false,
									WFSerializationType:
										"WFNumberSubstitutableState"
								}
							},
							{
								WFItemType: 4,
								WFKey: "bool2",
								WFValue: {
									Value: 1,
									WFSerializationType:
										"WFNumberSubstitutableState"
								}
							}
						]
					},
					WFSerializationType: "WFDictionaryFieldValue"
				}
			}
		}
	]);
});

test("backtick strings", () => {
	expect(
		scplToShortcut(`
        text \`backtick
string
captures
	everything
_\\n_\`
        `)
	).toEqual([
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText:
					"backtick\nstring\ncaptures\n\teverything\n_\n_"
			}
		}
	]);
});

test("nicer escape sequence errors", () => {
	expect(
		err(() =>
			scplToShortcut(`
			text "oh no I seem to think that my \\q needs escaping. This is so sad, Alexa play Ddespacito."
			`)
		)
	).toEqual(
		"Error: Error from 2,41 to 2,42: Did you mean `\\\\`? The character `q` is not a valid escape sequence. See the docs page on string escapes for more info."
	);
});

test("macros without the correct number of arguments", () => {
	expect(
		err(() =>
			scplToShortcut(`
			@set version 12.5.2
			`)
		)
	).toEqual(
		"Error: Error from 2,21 to 2,23: This action does not have any more arguments. Arguments are: name, value"
	);
});

test("warnings", () => {
	expect(
		scplToShortcut(
			`
		text v:undef1
		text v:undef2
		text mv:undef3
		`,
			true
		)
	).toEqual([
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: {
					Value: {
						attachmentsByRange: {
							"{0, 1}": {
								Aggrandizements: [],
								Type: "Variable",
								VariableName: "undef1"
							}
						},
						string: "[attachment]"
					},
					WFSerializationType: "WFTextTokenString"
				}
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: {
					Value: {
						attachmentsByRange: {
							"{0, 1}": {
								Aggrandizements: [],
								Type: "Variable",
								VariableName: "undef2"
							}
						},
						string: "[attachment]"
					},
					WFSerializationType: "WFTextTokenString"
				}
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
			WFWorkflowActionParameters: {
				WFTextActionText: {
					Value: {
						attachmentsByRange: {
							"{0, 1}": {
								Aggrandizements: [],
								OutputName: "undef3",
								OutputUUID: "<uuid1>",
								Type: "ActionOutput"
							}
						},
						string: "[attachment]"
					},
					WFSerializationType: "WFTextTokenString"
				}
			}
		},
		{
			warnings: [
				"Error from 2,8 to 2,16: The variable `v:undef1` has not been defined yet. Define it with a `setVariable` action.",
				"Error from 3,8 to 3,16: The variable `v:undef2` has not been defined yet. Define it with a `setVariable` action.",
				"Error from 4,8 to 4,17: The magic variable `mv:undef3` has not been defined yet. Define it by putting an arrow on an action, for example `myaction -> mv:undef3`"
			]
		}
	]);
});

test("time offset parameter", () => {
	expect(
		scplToShortcut(`
        adjustdate [add 5 Seconds]
		adjustdate [Subtract s:clipboard hours]
		adjustdate [Get start of month]
        `)
	).toEqual([
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.adjustdate",
			WFWorkflowActionParameters: {
				WFAdjustOffsetPicker: {
					Value: { Operation: "Add", Unit: "Second", Value: 5 },
					WFSerializationType: "WFTimeOffsetValue"
				}
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.adjustdate",
			WFWorkflowActionParameters: {
				WFAdjustOffsetPicker: {
					Value: {
						Operation: "Subtract",
						Unit: "Hour",
						Value: { Aggrandizements: [], Type: "Clipboard" }
					},
					WFSerializationType: "WFTimeOffsetValue"
				}
			}
		},
		{
			WFWorkflowActionIdentifier: "is.workflow.actions.adjustdate",
			WFWorkflowActionParameters: {
				WFAdjustOffsetPicker: {
					Value: {
						Operation: "Get Start Of Month",
						Unit: "Second",
						Value: 0
					},
					WFSerializationType: "WFTimeOffsetValue"
				}
			}
		}
	]);
	// todo: error tests
});

test("raw actions", () => {
	expect(
		scplToShortcut(`
        :raw "dev.scpl.action.test"
        :raw "dev.scpl.action.test" SPMyParameter=:raw{"raw": "value"}
        `)
	).toEqual([
		{
			WFWorkflowActionIdentifier: "dev.scpl.action.test",
			WFWorkflowActionParameters: {}
		},
		{
			WFWorkflowActionIdentifier: "dev.scpl.action.test",
			WFWorkflowActionParameters: {
				SPMyParameter: { raw: "value" }
			}
		}
	]);

	expect(
		err(() => scplToShortcut(`:raw "dev.scpl.my.action" "notright"`))
	).toEqual(
		"Error: Error from 1,27 to 1,37: Labels are required on functions with variable numbers of arguments."
	);
});
