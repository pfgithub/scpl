const fs = require("fs");
const path = require("path");

const {allActions, genReadme} = require("./ActionData.js");

allActions.forEach(action => {
	const name = action.shortName;
	const docs = action.genDocs();
	fs.writeFileSync(path.join("./docs/actions/", `${name}.md`), docs, "utf8");
});

fs.writeFileSync("./docs/README.md", genReadme(), "utf8");
