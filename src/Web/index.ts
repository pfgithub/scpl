import * as bplistc from "bplist-creator";
// import * as CodeMirror from "codemirror";

import { parse } from "../../index"
import parser from "../ShortcutsParser";
import { PositionedError } from "../ParserData";

const inputArea = <HTMLTextAreaElement>document.getElementById("inputArea");
const messageArea = <HTMLTextAreaElement>document.getElementById("messageArea");
const outputArea = <HTMLTextAreaElement>document.getElementById("outputArea");

//@ts-ignore
let editor = ace.edit("editor");
editor.setTheme("ace/theme/ambiance");
editor.session.setMode("ace/mode/scpl");

// inputArea should keep its text from the browser
messageArea.value = "";
outputArea.value = "";

const downloadShortcutBtn = document.getElementById("downloadShortcutBtn");

let bufferToDownload: Buffer | undefined;

let timeout: NodeJS.Timeout;

// const cm = CodeMirror.fromTextArea(inputArea, {
// 	lineNumbers: true,
// 	mode: "text/plain",
// 	indentWithTabs: true
// });
// cm.on("change", () => {
// 	messageArea.value = "";
// 	outputArea.value = "";
// 	if(timeout) {
// 		clearTimeout(timeout);
// 	}
// 	timeout = setTimeout(convert, 200);
// });

console.log("Code loaded");


function downloadBlob(data: string | Buffer | ArrayBufferView | ArrayBuffer | Blob, fileName: string, mimeType: string) {
	const blob = new Blob([data], {
		type: mimeType
	});
	const url = window.URL.createObjectURL(blob);
	downloadURL(url, fileName);
	setTimeout(() => {
		return window.URL.revokeObjectURL(url);
	}, 1000);
}

function downloadURL(data: string, fileName: string) {
	const a = document.createElement("a");
	a.href = data;
	a.download = fileName;
	// a.setAttribute("target", "_blank"); // breaks safari
	document.body.appendChild(a);
	a.style.display = "none";
	a.click();
	a.remove();
}

const time = () => (new Date).getTime();

(<HTMLButtonElement>document.getElementById("convertBtn")).addEventListener("click", convert);

let textMarks: CodeMirror.TextMarker[] = [];
// @ts-ignore
global.textMarks = textMarks;

function convert() {
	messageArea.value = "Loading...";
	outputArea.value = "Loading...";

	console.log("Converting...");

	let output;
	try {
		console.log("Parsing "+editor.getValue());
		output = parse(editor.getValue() + "\n", { makePlist: true });
	} catch (er) {
		console.log(er);
		if(!(er instanceof PositionedError)){throw new Error("Not positioned");}
		console.log("Setting annotation at ");
		editor.getSession().setAnnotations([{
			row: er.start[0] - 1,
			column: er.end[0] - 1,
			text: er.message, // Or the Json reply from the parser
			type: "error" // also warning and information
		}]);
	}

	const buffer = output;
	bufferToDownload = buffer;
	// TODO (https://github.com/pine/arraybuffer-loader)
}

(<HTMLButtonElement>downloadShortcutBtn).addEventListener("click", () => {
	convert();
	if (bufferToDownload) {
		downloadBlob(bufferToDownload, "demoshortcut.shortcut", "application/x-octet-stream");
	}
});

convert();
