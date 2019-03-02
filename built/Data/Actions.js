"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deepmerge = require("deepmerge");
const builtin = require("./Shortcuts 2.1.2.json");
const overrides = require("./Overrides.json");
const merged = deepmerge(builtin[0], overrides[0]);
merged["is.workflow.actions.documentpicker.open"].Parameters[4].Hidden = true;
exports.default = merged;
