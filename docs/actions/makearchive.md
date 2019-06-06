
## Make Archive / MakeArchive (internally `is.workflow.actions.makezip`)


## description

### summary

Makes an archive out of the files passed as input. Supports creating zip, tar.gz, tar.bz2, tar, gzip, cpio, or iso archives.


### output

Archive

### usage
```
MakeArchive archiveName="string" format=(".zip" | ".tar.gz" | ".tar.bz2" | ".tar.xz" | ".tar" | ".gz" | ".cpio" | ".iso") input=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### archiveName: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### format: Archive Format [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `.zip`
- `.tar.gz`
- `.tar.bz2`
- `.tar.xz`
- `.tar`
- `.gz`
- `.cpio`
- `.iso`

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Input
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFMakeArchiveAction",
	"ActionKeywords": [
		"make",
		"generate",
		"gzip"
	],
	"Category": "Documents",
	"Description": {
		"DescriptionResult": "Archive",
		"DescriptionSummary": "Makes an archive out of the files passed as input. Supports creating zip, tar.gz, tar.bz2, tar, gzip, cpio, or iso archives."
	},
	"IconName": "Documents.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"LastModifiedDate": "2016-09-23T05:00:00.000Z",
	"Name": "Make Archive",
	"Output": {
		"Multiple": false,
		"OutputName": "Archive",
		"Types": [
			"WFGenericFileContentItem"
		]
	},
	"ParameterSummary": "Make ${WFArchiveFormat} archive from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFZIPName",
			"Label": "Archive Name",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFArchiveFormatParameter",
			"Key": "WFArchiveFormat",
			"Label": "Format"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Archives"
}
```
