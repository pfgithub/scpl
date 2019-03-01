import * as fs from "fs";
import * as bplistc from "bplist-creator";

import parser from "./ShortcutsParser";

const parsed = parser.parse(`${process.argv[2] || fs.readFileSync("./src/test.shorttxt", "utf8")  }\n`, [1,0]);
if(parsed.remainingStr) {
	console.log(`Error, could not parse. Remaining str:\n\`\`\`\n...${parsed.remainingStr}\`\`\``); //eslint-disable-line no-console
	throw new Error("Str remaining");
}

const shortcut = parsed.data.asShortcut();
const shortcutData = shortcut.build();
console.dir(shortcutData, {depth: null}); //eslint-disable-line no-console
// @ts-ignore
const buffer = bplistc(shortcutData);
fs.writeFileSync("./src/test.shortcut", buffer);
