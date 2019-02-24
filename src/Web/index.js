
const bplistc = require("bplist-creator");

const parser = require("../ShortcutsParser");

const defaultText = require("./demo.shorttxt");

const inputArea = document.getElementById("inputArea");
const messageArea = document.getElementById("messageArea");
const outputArea = document.getElementById("outputArea");

inputArea.value = defaultText;

const downloadShortcutBtn = document.getElementById("downloadShortcutBtn");

let bufferToDownload;

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
	document.body.appendChild(a);
	a.style = "display: none";
	a.click();
	a.remove();
}

inputArea.addEventListener("change", () => {
	downloadShortcutBtn.setAttribute("disabled", "true");
});

const time = () => (new Date).getTime();

document.getElementById("convertBtn").addEventListener("click", () => {
	const startedConversion = time();

	const parsed = parser.parse(`${inputArea.value}\n`);
	if(parsed.remainingStr) {
		bufferToDownload = undefined;
		messageArea.value = (`Error, could not parse. Took ${time() - parsed}ms. Remaining str:\n\`\`\`\n...${parsed.remainingStr}\`\`\``);
		outputArea.value = "Error!";
		throw new Error("Str remaining");
	}

	const finishedParsing = time();

	let shortcut;
	try{
		shortcut = parsed.data.asShortcut();
	}catch(er) {
		messageArea.value = (`Error, could not convert. Took ${time() - startedConversion}ms. ${er.message}`);
		outputArea.value = "Error!";
		return;
	}
	const shortcutData = shortcut.build();
	messageArea.value = `Success in ${time() - startedConversion}ms. Parsed in ${finishedParsing - startedConversion}ms. Converted in ${time() - finishedParsing}ms.`;
	outputArea.value = JSON.stringify(shortcutData, null, "\t");
	const buffer = bplistc(shortcutData);
	bufferToDownload = buffer;
	downloadShortcutBtn.removeAttribute("disabled");
	// TODO (https://github.com/pine/arraybuffer-loader)
});

downloadShortcutBtn.addEventListener("click", () => {
	if(bufferToDownload) {
		downloadBlob(bufferToDownload, "demoshortcut.shortcut", "application/x-octet-stream");
	}
});
