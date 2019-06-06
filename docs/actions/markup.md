
## Markup / Markup (internally `is.workflow.actions.avairyeditphoto`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Edits an image or PDF with Markup.


### output

The edited content

### usage
```
Markup (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### document: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Document
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFMarkupAction",
	"ActionKeywords": [
		"edit",
		"photo",
		"modify",
		"picture",
		"aviary",
		"adobe",
		"pdf",
		"sign",
		"draw",
		"document"
	],
	"Categories": [
		"Documents",
		"Photos & Video"
	],
	"CreationDate": "2014-01-20T06:00:00.000Z",
	"Description": {
		"DescriptionResult": "The edited content",
		"DescriptionSummary": "Edits an image or PDF with Markup."
	},
	"IconName": "Markup.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFDocument",
		"Required": true,
		"Types": [
			"WFImageContentItem",
			"WFPDFContentItem"
		]
	},
	"LastModifiedDate": "2018-06-30T07:00:00.000Z",
	"Name": "Markup",
	"Output": {
		"Multiple": true,
		"OutputName": "Markup Result",
		"Types": [
			"WFImageContentItem",
			"WFPDFContentItem"
		]
	},
	"ParameterSummary": "Mark up ${WFDocument}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFDocument",
			"Label": "Document",
			"Placeholder": "Document"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Editing",
	"UserInterfaces": [
		"UIKit"
	]
}
```
