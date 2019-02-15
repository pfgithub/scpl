const bplistc = require("bplist-creator");
const fs = require("fs");

const bplistp = require("bplist-parser");

let args = process.argv.slice(2);

// let action = args.shift().toLowerCase();
let [input, output] = args;
let action;

if(input.endsWith(".json") &&  output.endsWith(".shortcut")) {action = "jsontoshortcut";}
if(input.endsWith(".shortcut") &&  output.endsWith(".json")) {action = "shortcuttojson";}
if(!action) {throw new Error("Invalid. Usage: plistconv <input.shortcut> <output.json> OR <input.json> <output.shortcut>");}

function cfbtr(json) { // hack to workaround buffers not saving into json
	// console.log("doing", json);
	if(json.type === "Buffer") {return Buffer.from(json.data);}
	Object.keys(json).forEach(key => {
		if(typeof json[key] === "object") {json[key] = cfbtr(json[key]);}
	});
	return json;
}

if(action === "shortcuttojson") {
	bplistp.parseFile(input, (err, obj) => {
		if (err) {throw err;}
		fs.writeFileSync(output, JSON.stringify(obj, null, "\t"), "utf8");
	});
}else if(action === "jsontoshortcut") {
	let buffer = bplistc(cfbtr(JSON.parse(fs.readFileSync(input, "utf8"))));
	fs.writeFileSync(output, buffer);
}



// console.log(toShortcut(od));
