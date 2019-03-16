"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builtin = require("./Shortcuts 2.1.2.json");
const GetTypes_1 = require("./GetTypes");
const Types_1 = require("../WFTypes/Types");
const fs = require("fs");
const actions = builtin[0];
actions["is.workflow.actions.documentpicker.open"].Parameters[4].Hidden = true;
actions["is.workflow.actions.conditional"].BlockInfo = {
    Example: "\n  ...\notherwise\n  ...\nend",
    Completion: "\n\t$0\notherwise\nend"
};
actions["is.workflow.actions.choosefrommenu"].BlockInfo = {
    Example: "\ncase\n  ...\ncase\n  ...\nend",
    Completion: "\ncase\n\t$0\nend"
};
actions["is.workflow.actions.repeat.count"].BlockInfo = {
    Example: "\n  ...\nend",
    Completion: "\n\t$0\nend"
};
actions["is.workflow.actions.repeat.each"].BlockInfo = {
    Example: "\n  ...\nend",
    Completion: "\n\t$0\nend"
};
Object.values(actions).forEach((action) => {
    if (action.ActionClass === "WFContentItemPropertiesAction") {
        if (!action.Parameters) {
            action.Parameters = [];
        }
        const getTypeItemClass = action.WFContentItemClass;
        if (!Types_1.isCoercionTypeClass(getTypeItemClass)) {
            action.Parameters.push({ Class: "_UndefinedCoercionClass" });
        }
        else {
            action.Parameters.push({
                Class: "WFEnumerationParameter",
                Key: "WFContentItemPropertyName",
                Label: "Get",
                Items: Object.values(GetTypes_1.default[getTypeItemClass]).map(t => t.name),
            });
        }
    }
    else if (action.ActionClass === "WFContentItemFilterAction") {
        if (!action.Parameters) {
            action.Parameters = [];
        }
        const getTypeItemClass = action.WFContentItemClass;
        if (!Types_1.isCoercionTypeClass(getTypeItemClass)) {
            action.Parameters.push({ Class: "_UndefinedCoercionClass" });
        }
        else {
            action.Parameters.push({
                Class: "WFFilterParameter",
                Key: "WFContentItemFilter",
                Label: "Filter",
                ContentItemClass: getTypeItemClass
            });
            action.Parameters.push({
                Class: "WFEnumerationParameter",
                Key: "WFContentItemSortProperty",
                Label: "Sort by",
                Items: [...Object.values(GetTypes_1.default[getTypeItemClass]).map(t => t.name), "Random"],
            });
            action.Parameters.push({
                Class: "WFEnumerationParameter",
                Key: "WFContentItemSortOrder",
                Label: "Order",
                Items: ["Oldest First", "Newest First", "A to Z", "Z to A"],
                RequiredResources: [
                    {
                        WFParameterKey: "WFContentItemSortProperty",
                        WFParameterValues: ["Random"],
                        WFResourceClass: "WFParameterRelationResource",
                        WFParameterRelation: "!="
                    }
                ]
            });
            action.Parameters.push({
                Class: "WFSwitchParameter",
                Key: "WFContentItemLimitEnabled",
                Label: "Limit"
            });
            action.Parameters.push({
                Class: "WFStepperParameter",
                Key: "WFContentItemLimitNumber",
                Label: "Get Items",
                RequiredResources: [
                    {
                        WFParameterKey: "WFSwitchParameter",
                        WFParameterValues: [true],
                        WFResourceClass: "WFParameterRelationResource"
                    }
                ]
            });
        }
    }
    else {
        // good, do nothing
    }
});
fs.writeFileSync("./src/Data/OutActions.json", JSON.stringify(actions, null, "\t"));
