const fs = require("fs");

const parser = require("./ShortcutsParser");

const parsed = parser.parse(fs.readFileSync("./src/test.shorttxt", "utf8"));
if(parsed.remainingStr) {
	console.log(`Error, could not parse. Remaining str:\n\`\`\`\n...${parsed.remainingStr}\`\`\``);
	throw new Error("Str remaining");
}

const shortcut = parsed.data.asShortcut();
console.log(shortcut.build());
