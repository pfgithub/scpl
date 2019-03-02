"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bplistc = require("bplist-creator");
const CodeMirror = require("codemirror");
const ShortcutsParser_1 = require("../ShortcutsParser");
const ParserData_1 = require("../ParserData");
const inputArea = document.getElementById("inputArea");
const messageArea = document.getElementById("messageArea");
const outputArea = document.getElementById("outputArea");
// inputArea should keep its text from the browser
messageArea.value = "";
outputArea.value = "";
const downloadShortcutBtn = document.getElementById("downloadShortcutBtn");
let bufferToDownload;
let timeout;
const cm = CodeMirror.fromTextArea(inputArea, {
    lineNumbers: true,
    mode: "text/plain",
    indentWithTabs: true
});
cm.on("change", () => {
    messageArea.value = "";
    outputArea.value = "";
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(convert, 200);
});
inputArea.addEventListener("input", () => {
});
// @ts-ignore
global.cm = cm;
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
    textMarks.forEach(mark => mark.clear());
    textMarks = [];
    const startedConversion = time();
    const parsed = ShortcutsParser_1.default.parse(`${cm.getValue()}\n`, [1, 1]);
    if (parsed.remainingStr) {
        bufferToDownload = undefined;
        textMarks.push(cm.getDoc().markText({ line: parsed.pos[0] - 1, ch: parsed.pos[1] - 1 }, { line: parsed.pos[0] + 100, ch: 0 }, {
            className: "error",
            inclusiveLeft: false,
            inclusiveRight: false
        }));
        messageArea.value = (`Error, could not parse. Took ${time() - startedConversion}ms. Ended at line ${parsed.pos[0]}, character ${parsed.pos[1]}`);
        outputArea.value = "Error!";
        throw new Error("Str remaining");
    }
    const finishedParsing = time();
    let shortcut;
    try {
        shortcut = parsed.data.asShortcut();
    }
    catch (er) {
        if (er instanceof ParserData_1.PositionedError) {
            textMarks.push(cm.getDoc().markText({ line: er.start[0] - 1, ch: er.start[1] - 1 }, { line: er.end[0] - 1, ch: er.end[1] - 1 }, {
                className: "error",
                inclusiveLeft: false,
                inclusiveRight: false,
                // @ts-ignore
                attributes: { title: er.message }
            }));
        }
        messageArea.value = (`Error, could not convert. Took ${time() - startedConversion}ms. ${er.message}`);
        outputArea.value = "Error!";
        // throw er;
        return;
    }
    const shortcutData = shortcut.build();
    messageArea.value = `Success in ${time() - startedConversion}ms. Parsed in ${finishedParsing - startedConversion}ms. Converted in ${time() - finishedParsing}ms.`;
    outputArea.value = JSON.stringify(shortcutData, null, "\t");
    // @ts-ignore
    const buffer = bplistc(shortcutData);
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
