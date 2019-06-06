
## Get Link to File / GetLinktoFile (internally `is.workflow.actions.file.getlink`)


## description

### summary

Gets a public link to the file passed into the action.


### usage
```
GetLinktoFile (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### file: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		File
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetFileLinkAction",
	"ActionKeywords": [
		"url",
		"share"
	],
	"Category": "Documents",
	"CreationDate": "2017-03-13T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets a public link to the file passed into the action."
	},
	"IconName": "Documents.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFFile",
		"Required": true,
		"Types": []
	},
	"Name": "Get Link to File",
	"Output": {
		"Multiple": true,
		"Types": [
			"NSURL"
		]
	},
	"OutputName": "Link to File",
	"ParameterSummary": "Get link to ${WFFile}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFFile",
			"Label": "File",
			"Placeholder": "File"
		}
	],
	"ShortName": "Get Link",
	"Subcategory": "File Storage"
}
```
