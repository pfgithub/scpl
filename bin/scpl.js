#!/usr/bin/env node
const argv = require("yargs").argv;
const {parse} = require("../built/index");
const fs = require("fs");
const path = require("path");

if(argv.h || argv.help) {
	console.log("Usage: scpl [inputfile] -o [outputfile]"); //eslint-disable-line no-console
	process.exit(0);
	return;
}
if(!argv.o && !argv.output) {
	console.log("Usage: scpl [inputfile] -o [>outputfile]"); //eslint-disable-line no-console
	process.exit(0);
	return;
}
if(!argv._ || !argv._[0]) {
	console.log("Usage: scpl [>inputfile] -o [outputfile]"); //eslint-disable-line no-console
	process.exit(0);
	return;
}

const outputPath = path.join(process.cwd(), argv.o || argv.output);
const inputPath = path.join(process.cwd(), argv._[0]);

console.log(`Converting ${outputPath}`); //eslint-disable-line no-console
const started = (new Date()).getTime();

const extraParseActions = {extraParseActions: {import: (cc, filename) => { // extraParseActions is not yet supported
	console.log(`Importing \`${filename}\`...`); //eslint-disable-line no-console
	
	if(!filename.canBeString()) {throw filename.error("Filename must be a string");}
	const dir = path.dirname(inputPath);
	const importPath = path.join(dir, filename.asString());
	if(!fs.fileExists(importPath)) {throw filename.error(`File ${importPath} does not exist.`);}
	const actions = parse(fs.readFileSync(inputPath, "utf8"), {extraParseActions});
	actions.asAction(cc);
	
	console.log(`Done importing \`${filename}\`...`); //eslint-disable-line no-console
}}};

const plist = parse(fs.readFileSync(inputPath, "utf8"), {makePlist: true, extraParseActions});
console.log(`Done in ${(new Date()).getTime() - started}ms`); //eslint-disable-line no-console
fs.writeFileSync(outputPath, plist);