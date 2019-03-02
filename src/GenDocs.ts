import * as fs from "fs";
import * as path from "path";

import {allActions, genReadme, WFAction} from "./ActionData.js";

const actionCompletionInfo: {[key: string]: {docs: string, args: Array<{ argType: string; argName?: string; argAutocompletePlaceholder?: string; }>, autocomplete: string}} = {};

allActions.forEach((action: WFAction) => {
	const name = action.shortName;
	const docs = action.genDocs();
	fs.writeFileSync(path.join("./docs/actions/", `${name}.md`), docs, "utf8");
	actionCompletionInfo[name] = {
		docs: docs,
		args: action.genDocsParams(),
		autocomplete: action.genDocsAutocompleteUsage()
	};
});

fs.writeFileSync("./docs/README.md", genReadme(), "utf8");
fs.writeFileSync("./docs/ActionCompletionInfo.json", JSON.stringify(actionCompletionInfo, null, "\t"), "utf8");
