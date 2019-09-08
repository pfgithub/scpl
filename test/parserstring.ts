import * as fs from "fs";
import { resolve, resolveIn } from "../src/Production";
import { o } from "../src/ParserHelper";
import "../src/ShortcutsParser"; // populate o

test("tostring", () => {
	const resultArr: [string, string][] = [];
	Object.keys(o).forEach(v => {
		const vq = resolve(resolveIn(o[v]));
		resultArr.push([vq.name || "!!noname", vq.toString()]);
	});
	const longestElement = resultArr.reduce(
		(t, c) => Math.max(t, c[0].length),
		0
	);
	const result = resultArr
		.map(q => `${q[0].padEnd(longestElement, " ")}  =  ${q[1]}`)
		.join("\n");
	const cont = fs.readFileSync(
		`${__dirname}/parsestringoutput.baparse`,
		"utf-8"
	);
	fs.writeFileSync(`${__dirname}/parsestringoutput.baparse`, result, "utf-8");
	expect(result).toEqual(cont);
});
