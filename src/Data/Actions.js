const deepmerge = require("deepmerge");

const builtin = require("./Shortcuts 2.1.2.json")[0];
const overrides = require("./Overrides.json")[0];

const merged = deepmerge(builtin, overrides);

merged["is.workflow.actions.documentpicker.open"].Parameters[4].Hidden = true;

module.exports = [merged];
