"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const ActionData_js_1 = require("./ActionData.js");
const actionCompletionInfo = {};
ActionData_js_1.allActions.forEach((action) => {
    const name = action.shortName;
    const docs = action.genDocs();
    fs.writeFileSync(path.join("./docs/actions/", `${name}.md`), docs, "utf8");
    actionCompletionInfo[name] = {
        docs: docs,
        args: action.genDocsParams(),
        autocomplete: action.genDocsAutocompleteUsage()
    };
});
fs.writeFileSync("./docs/README.md", ActionData_js_1.genReadme(), "utf8");
fs.writeFileSync("./docs/ActionCompletionInfo.json", JSON.stringify(actionCompletionInfo, null, "\t"), "utf8");
