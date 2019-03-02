"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builtin = require("./Shortcuts 2.1.2.json");
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
exports.default = actions;
