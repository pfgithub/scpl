#!/usr/bin/env node
const argv = require("yargs").argv;
const {parse, PositionedError} = require("../built/index");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

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

function throwError(fileContent, error) {
	process.stdout.write("\n");
	if(error instanceof PositionedError) {
		const split = fileContent.split`\n`;
		const startPos = [error.start[0] - 1, error.start[1] - 1]; const endPos = [error.end[0] - 1, error.end[1] - 1];
		const num = `${startPos[0]  }: `;
		if(startPos[0] === endPos[0]) {
			// line numbers are the same
			const line = split[startPos[0]];
			process.stdout.write(`${num}${line.substr(0, startPos[1])}${chalk.red.underline(line.substr(startPos[1], endPos[1] - startPos[1]))}${line.substr(endPos[1])}\n`);
			process.stdout.write(`${" ".repeat(startPos[1] + num.length) + "~".repeat(endPos[1] - startPos[1])  }\n`);
		}else{
			const line = split[startPos[0]];
			process.stdout.write(`${num}${line  }\n`);
			process.stdout.write(`${" ".repeat(startPos[1] + num.length)}^\n`);
		}
	}
	console.log(error.message); //eslint-disable-line no-console
	process.exit(0);
	throw new Error("Process did not exit");
}

console.log(`Converting ${outputPath}`); //eslint-disable-line no-console
const started = (new Date()).getTime();

const extraParseActions = {"@import": (cc, filename) => { // extraParseActions is not yet supported
	if(!filename.canBeString()) {throw filename.error("Filename must be a string");}
	const dir = path.dirname(inputPath);
	const importPath = path.join(dir, filename.asString());
	console.log(`Importing \`${importPath}\`...`); //eslint-disable-line no-console
	if(!fs.existsSync(importPath)) {throw filename.error(`File ${importPath} does not exist.`);}
	const fileCont = fs.readFileSync(importPath, "utf8");
	let actions;
	try{actions = parse(fileCont, {extraParseActions});}catch(e) {throwError(fileCont, e);}
	actions.actions.forEach(action => cc.add(action));
	
	console.log(`Done importing \`${importPath}\``); //eslint-disable-line no-console
}};

const fileCont = fs.readFileSync(inputPath, "utf8");
let plist;
try{plist = parse(fileCont, {makePlist: true, extraParseActions});}catch(e) {throwError(fileCont, e);}
console.log(`Done in ${(new Date()).getTime() - started}ms`); //eslint-disable-line no-console
fs.writeFileSync(outputPath, plist);