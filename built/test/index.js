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
        if (key === "UUID") {
            let index = uuids.indexOf(value);
            if (index === -1) {
                index = uuids.push(value) - 1; // push returns array length
            }
            return `<uuid${index + 1}>`;
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
