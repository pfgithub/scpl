"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as CodeMirror from "codemirror";
const index_1 = require("../../index");
const ParserData_1 = require("../ParserData");
const inputArea = document.getElementById("inputArea");
const messageArea = document.getElementById("messageArea");
const outputArea = document.getElementById("outputArea");
//@ts-ignore
let editor = ace.edit("editor");
editor.setTheme("ace/theme/ambiance");
editor.session.setMode("ace/mode/scpl");
// inputArea should keep its text from the browser
messageArea.value = "";
outputArea.value = "";
const downloadShortcutBtn = document.getElementById("downloadShortcutBtn");
let bufferToDownload;
let timeout;
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
function downloadBlob(data, fileName, mimeType) {
    const blob = new Blob([data], {
        type: mimeType
    });
    const url = window.URL.createObjectURL(blob);
    downloadURL(url, fileName);
    setTimeout(() => {
        return window.URL.revokeObjectURL(url);
    }, 1000);
}
function downloadURL(data, fileName) {
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
document.getElementById("convertBtn").addEventListener("click", convert);
let textMarks = [];
// @ts-ignore
global.textMarks = textMarks;
function convert() {
    messageArea.value = "Loading...";
    outputArea.value = "Loading...";
    console.log("Converting...");
    let output;
    try {
        console.log("Parsing " + editor.getValue());
        output = index_1.parse(editor.getValue() + "\n", { makePlist: true });
    }
    catch (er) {
        console.log(er);
        if (!(er instanceof ParserData_1.PositionedError)) {
            throw new Error("Not positioned");
        }
        console.log("Setting annotation at ");
        editor.getSession().setAnnotations([{
                row: er.start[0] - 1,
                column: er.end[0] - 1,
                text: er.message,
                type: "error" // also warning and information
            }]);
    }
    const buffer = output;
    bufferToDownload = buffer;
    // TODO (https://github.com/pine/arraybuffer-loader)
}
downloadShortcutBtn.addEventListener("click", () => {
    convert();
    if (bufferToDownload) {
        downloadBlob(bufferToDownload, "demoshortcut.shortcut", "application/x-octet-stream");
    }
});
convert();
