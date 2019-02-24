const fs = require("fs");
const bplistc = require("bplist-creator");

const parser = require("./ShortcutsParser");

const parsed = parser.parse(fs.readFileSync("./src/test.shorttxt", "utf8"));
if(parsed.remainingStr) {
	console.log(`Error, could not parse. Remaining str:\n\`\`\`\n...${parsed.remainingStr}\`\`\``);
	throw new Error("Str remaining");
}

const shortcut = parsed.data.asShortcut();
const shortcutData = shortcut.build();
console.log(shortcutData);
const buffer = bplistc(shortcutData);
fs.writeFileSync("./src/test.shortcut", buffer);
