import { Action, Shortcut } from "../src/OutputData";
import { parse, inverse } from "../index";
import { ConvertingContext } from "../src/Converter";
import { InverseConvertingContext } from "../src/InverseConvertingContext";
// import * as path from "path";
import { PositionedError } from "../src/PositionedError";

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

export function noUUID(
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
		"Error: Warning from 1,6 to 1,12: Text fields only accept text."
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
		"Error: Warning from 1,8 to 1,30: This special variable does not exist. Valid special variables are clipboard,askwhenrun,currentdate,shortcutinput,actioninput"
	);
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
		"Error: Warning from 1,20 to 1,44: Must be one of Up,Down,Left,Right,Up Mirrored,Down Mirrored,Left Mirrored,Right Mirrored"
	);
});

// console.log(JSON.stringify(noUUID(actions), null, "\t"));

test("File with only a comment parses", () => {
	expect(scplToShortcut(`// Comment with no newline`)).toEqual([]);
});

test("warnings error when not handled", () => {
	expect(err(() => scplToShortcut("text mv:myv"))).toBe(
		"Error: Warning from 1,6 to 1,12: The magic variable `mv:myv` has not been defined yet. Define it by putting an arrow on an action, for example `myaction -> mv:myv`"
	);
});
