const fs = require("fs");
const path = require("path");
const { allActions, genReadme } = require("./ActionData.js");
const actionCompletionInfo = {};
const codeSnippets = {};
allActions.forEach(action => {
    const name = action.shortName;
    const docs = action.genDocs();
    fs.writeFileSync(path.join("./docs/actions/", `${name}.md`), docs, "utf8");
    actionCompletionInfo[name] = {
        docs: docs,
        args: action.genDocsParams(),
        autocomplete: action.genDocsAutocompleteUsage()
    };
    codeSnippets[name] = { // ${1|one,two,three|}
    };
});
fs.writeFileSync("./docs/README.md", genReadme(), "utf8");
fs.writeFileSync("./docs/ActionCompletionInfo.json", JSON.stringify(actionCompletionInfo, null, "\t"), "utf8");
