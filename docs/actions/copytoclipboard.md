
## Copy to Clipboard / copytoclipboard (internally `is.workflow.actions.setclipboard`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description

### summary

Copies the result of the last action to the clipboard.


### usage
```
copytoclipboard a{localonly=[string boolean|variable] undefined=[???]}
```

### arguments

---

### Switch: Local Only / localonly (internally `WFLocalOnly`)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

#### This paramtype is not implemented. WFDateFieldParameter

---

### source json

```json
{
	"ActionClass": "WFSetClipboardAction",
	"ActionKeywords": [
		"text",
		"clipboard",
		"copy",
		"paste",
		"set"
	],
	"Category": "Sharing",
	"Description": {
		"DescriptionSummary": "Copies the result of the last action to the clipboard."
	},
	"IconName": "Clipboard.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"InputPassthrough": true,
	"LastModifiedDate": "2016-09-10T07:00:00.000Z",
	"Name": "Copy to Clipboard",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Description": "When enabled, the input will only be copied locally, and will not be shared to other devices via Handoff.",
			"Key": "WFLocalOnly",
			"Label": "Local Only"
		},
		{
			"Class": "WFDateFieldParameter",
			"Description": "When set, the clipboard contents will expire and be automatically deleted at the specified time. Optional.",
			"Key": "WFExpirationDate",
			"Label": "Expire At",
			"Placeholder": "Today at 3 PM",
			"TextAlignment": "Right"
		}
	],
	"RequiredResources": [
		"WFMainThreadResource"
	],
	"ShortName": "Copy",
	"Subcategory": "Clipboard"
}
```
