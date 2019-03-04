
## Share / share (internally `is.workflow.actions.share`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Prompts to share the input.


### usage
```
share 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFShareAction",
	"ActionKeywords": [
		"share",
		"file",
		"document",
		"send"
	],
	"Category": "Sharing",
	"Description": {
		"DescriptionSummary": "Prompts to share the input."
	},
	"IconName": "Sharing.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Share",
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "System",
	"UserInterfaces": [
		"UIKit",
		"WatchKit"
	]
}
```
