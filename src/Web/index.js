
const bplistc = require("bplist-creator");

const parser = require("../ShortcutsParser");

const inputArea = document.getElementById("inputArea");
const messageArea = document.getElementById("messageArea");
const outputArea = document.getElementById("outputArea");

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

document.getElementById("convertBtn").addEventListener("click", () => {
	const parsed = parser.parse(inputArea.value);
	if(parsed.remainingStr) {
		bufferToDownload = undefined;
		messageArea.value = (`Error, could not parse. Remaining str:\n\`\`\`\n...${parsed.remainingStr}\`\`\``);
		outputArea.value = "Error!";
		throw new Error("Str remaining");
	}

	const shortcut = parsed.data.asShortcut();
	const shortcutData = shortcut.build();
	messageArea.value = "Success in ??ms";
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
