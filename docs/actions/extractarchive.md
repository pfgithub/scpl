
## Extract Archive / ExtractArchive (internally `is.workflow.actions.unzip`)


## description

### summary

Extracts files from the archive passed as input. Many archive formats are supported, including zip, rar, tar.gz, tar.bz2, tar, gzip, cpio, cab, and iso archives.


### input

Archive


### usage
```
ExtractArchive (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### archive: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Archive
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFExtractArchiveAction",
	"ActionKeywords": [
		"extract",
		"unarchive",
		"unzip",
		"contents",
		"gzip"
	],
	"Category": "Documents",
	"CreationDate": "2016-09-23T05:00:00.000Z",
	"Description": {
		"DescriptionInput": "Archive",
		"DescriptionSummary": "Extracts files from the archive passed as input. Many archive formats are supported, including zip, rar, tar.gz, tar.bz2, tar, gzip, cpio, cab, and iso archives."
	},
	"IconName": "Documents.png",
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFArchive",
		"Required": true,
		"Types": [
			"public.data"
		]
	},
	"Name": "Extract Archive",
	"Output": {
		"Multiple": true,
		"OutputName": "Files",
		"Types": [
			"WFGenericFileContentItem"
		]
	},
	"ParameterSummary": "Extract ${WFArchive}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFArchive",
			"Label": "Archive",
			"Placeholder": "Archive"
		}
	],
	"Subcategory": "Archives"
}
```
