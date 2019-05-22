
## Markup / Markup (internally `is.workflow.actions.avairyeditphoto`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Edits an image or PDF with Markup.


### output

The edited content

### usage
```
Markup 
```

### arguments

---



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
	"Category": "Documents",
	"CreationDate": "2014-01-20T06:00:00.000Z",
	"Description": {
		"DescriptionResult": "The edited content",
		"DescriptionSummary": "Edits an image or PDF with Markup."
	},
	"IconName": "Markup.png",
	"Input": {
		"Multiple": true,
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
	"Parameters": [],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Editing",
	"UserInterfaces": [
		"UIKit"
	]
}
```
