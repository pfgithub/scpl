
## Copy to Clipboard / copytoclipboard (internally `is.workflow.actions.setclipboard`)

> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description

### summary

Copies the result of the last action to the clipboard.


### usage
```
copytoclipboard localonly=true|false|variable expireat="string"
```

### arguments

---

### Switch: localonly [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### Date: expireat [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**:
```
Today at 3 PM
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json (for developers)

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
