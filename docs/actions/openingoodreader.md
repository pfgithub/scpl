
## Open in GoodReader / OpeninGoodReader (internally `is.workflow.actions.goodreader.open`)

> This action requires that Shortcuts has permission to use WFURLOpenResource,[object Object].


## description

### summary

Opens a file in GoodReader.


### usage
```
OpeninGoodReader (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### file: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFSendToGoodReaderAction",
	"ActionKeywords": [
		"save",
		"file",
		"document"
	],
	"AppIdentifier": "com.goodiware.goodreader4",
	"Category": "Documents",
	"CreationDate": "2015-02-03T08:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Opens a file in GoodReader."
	},
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"public.data"
		]
	},
	"InputPassthrough": true,
	"Name": "Open in GoodReader",
	"ParameterSummary": "Open ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "File"
		}
	],
	"RequiredResources": [
		"WFURLOpenResource",
		{
			"AppIdentifier": "com.goodiware.goodreader4",
			"WFResourceClass": "WFAppInstalledResource"
		}
	]
}
```
