const fs = require("fs");
const json = require("../../OutActions.json");
const { JSONPath } = require("jsonpath-plus");
const files = fs.readdirSync(__dirname);
for (const file of files) {
	if (file.charAt(0).toUpperCase() !== file.charAt(0)) {
		continue;
	}
	const fileText = fs.readFileSync(`${__dirname}/${file}`, "utf-8");
	const [, jsonpath, typename] = fileText.match(
		/^\/\/ ([^\n]+)\n\nexport type ([^ ]+) =/
	);
	const result = jsonpath.split(";also;").flatMap(v => JSONPath({ path: v, json }));

	const output = `// ${jsonpath}

export type ${typename} =
${[...new Set(result)]
	.sort()
	.map(c => `\t| ${JSON.stringify(c)}`)
	.join("\n")};\n`;
	fs.writeFileSync(`${__dirname}/${file}`, output, "utf-8");
}
