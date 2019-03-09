"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const ActionData_1 = require("../src/ActionData");
const ParserData_1 = require("../src/ParserData");
const Converter_1 = require("../src/Converter");
const index_1 = require("../index");
function noUUID(obj) {
    const uuids = [];
    return JSON.parse(JSON.stringify(obj, (key, value) => {
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
ava_1.default("text field", t => {
    const cc = new Converter_1.ConvertingContext();
    // let text = new WFTypes.WFTextInputParameter();
    const textAction = ActionData_1.getActionFromName("Text");
    t.truthy(textAction); // test
    if (!textAction) {
        return;
    } // typescript
    textAction.build(cc, undefined, new ParserData_1.IdentifierParse([0, 0], [0, 0], "Data"));
    const [output] = cc.shortcut.build();
    const actions = output.WFWorkflowActions;
    t.deepEqual(noUUID(actions), [
        {
            WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
            WFWorkflowActionParameters: {
                UUID: "<uuid1>",
                WFTextActionText: "Data"
            }
        }
    ]);
});
ava_1.default("parsing things", t => {
    const output = index_1.parse(`text "test"`, { makePlist: false });
    const [scdata] = output.build();
    const actions = scdata.WFWorkflowActions;
    t.deepEqual(noUUID(actions), [
        {
            WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
            WFWorkflowActionParameters: {
                UUID: "<uuid1>",
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
    t.deepEqual(noUUID(actions), [
        {
            WFWorkflowActionIdentifier: "is.workflow.actions.setvariable",
            WFWorkflowActionParameters: {
                UUID: "<uuid1>",
                WFVariableName: "myvar"
            }
        },
        {
            WFWorkflowActionIdentifier: "is.workflow.actions.gettext",
            WFWorkflowActionParameters: {
                UUID: "<uuid2>",
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
    t.deepEqual(noUUID(actions), [
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
                UUID: "<uuid2>",
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
