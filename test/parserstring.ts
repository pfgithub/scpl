import * as fs from "fs";
import { resolve, resolveIn } from "../src/Production";
import { o } from "../src/ParserHelper";
import "../src/ShortcutsParser"; // populate o

test("tostring", () => {
	let result = "";
	Object.keys(o).forEach(v => {
		const vq = resolve(resolveIn(o[v]));
		result += `${vq.name}  =  ${vq.toString()}\n`;
	});
	const cont = fs.readFileSync(`${__dirname  }/parsestringoutput.baparse`, "utf-8");
	fs.writeFileSync(`${__dirname  }/parsestringoutput.baparse`, result, "utf-8");
	expect(result).toEqual(cont);
});
