"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const index_1 = require("../index");
const fs = require("fs");
const sampleshortcutdata = require("./sampleshortcut.json");
function noUUID(obj, options = {}) {
    const uuids = [];
    return JSON.parse(JSON.stringify(obj, (key, value) => {
        if (options.noSCPLData && key === "SCPLData") {
            return undefined;
        }
        if (typeof value === "string") {
            if (value.match(/[a-z0-9]{6}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/)) {
                let index = uuids.indexOf(value);
                if (index === -1) {
                    index = uuids.push(value) - 1; // push returns array length
                }
                return `<uuid${index + 1}>`;
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
ava_1.default("parsing things", t => {
    const output = index_1.parse(`text "test"`, { makePlist: false });
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
ava_1.default("lists cannot be used as strings", t => {
    t.throws(() => index_1.parse(`text [list]`, { makePlist: false }));
});
ava_1.default("variables", t => {
    const output = index_1.parse(`setvariable v:myvar; text v:myvar`, { makePlist: false });
    const [scdata] = output.build();
    const actions = scdata.WFWorkflowActions;
    t.deepEqual(noUUID(actions, { noSCPLData: true }), [
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
ava_1.default("magic variables", t => {
    const output = index_1.parse(`text "hello" -> mv:myvar; text mv:myvar`, { makePlist: false });
    const [scdata] = output.build();
    const actions = scdata.WFWorkflowActions;
    t.deepEqual(noUUID(actions, { noSCPLData: true }), [
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
ava_1.default("undefined variables throw errors", t => {
    t.throws(() => index_1.parse(`text v:undefindenamedvariable`, { makePlist: false }));
    t.throws(() => index_1.parse(`text mv:undefinedmagicvariable`, { makePlist: false }));
    t.throws(() => index_1.parse(`text s:invalidspecialvariable`, { makePlist: false }));
});
ava_1.default("inputarg with actions and other action args", t => {
    const output = index_1.parse(`calculate ^(number 1) "+" (number 5)`, { makePlist: false });
    const [scdata] = output.build();
    const actions = scdata.WFWorkflowActions;
    t.deepEqual(noUUID(actions, { noSCPLData: true }), [
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
ava_1.default("inputarg with no get variable needed", t => {
    const output = index_1.parse(`calculate "+" (number 5) ^(number 1)`, { makePlist: false });
    const [scdata] = output.build();
    const actions = scdata.WFWorkflowActions;
    t.deepEqual(noUUID(actions, { noSCPLData: true }), [
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
ava_1.default("inputarg with variables without parenthesis", t => {
    const output = index_1.parse(`number 1 -> mv:mynum; calculate ^mv:mynum "+" (number 5)`, { makePlist: false });
    const [scdata] = output.build();
    const actions = scdata.WFWorkflowActions;
    t.deepEqual(noUUID(actions, { noSCPLData: true }), [
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
ava_1.default("long shortcut", t => {
    const output = index_1.parse(fs.readFileSync(`./test/sampleshortcut.scpl`, "utf8"), { makePlist: false });
    const [scdata] = output.build();
    const actions = scdata.WFWorkflowActions;
    // fs.writeFileSync("./test/sampleshortcut.json", JSON.stringify(noUUID([scdata]), null, "\t"), "utf8");
    t.deepEqual(noUUID([scdata]), sampleshortcutdata);
});
ava_1.default("foreach macro", t => {
    const output = index_1.parse(`@foreach [item1, item2, item3] @{text @:repeatitem}; text "item 4"`, { makePlist: false });
    const [scdata] = output.build();
    const actions = scdata.WFWorkflowActions;
    t.deepEqual(noUUID(actions, { noSCPLData: true }), [
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
ava_1.default("open app action", t => {
    const output = index_1.parse(`openapp Safari; openapp Shortcuts; openapp "is.workflow.my.app"`, { makePlist: false });
    const [scdata] = output.build();
    const actions = scdata.WFWorkflowActions;
    t.deepEqual(noUUID(actions, { noSCPLData: true }), [
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
ava_1.default("open app fails with invalid app name", t => {
    t.throws(() => index_1.parse(`openapp myfavoriteapp`, { makePlist: false }));
});
// console.log(JSON.stringify(noUUID(actions), null, "\t"));
