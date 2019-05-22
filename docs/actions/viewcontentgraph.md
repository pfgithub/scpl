
## View Content Graph / ViewContentGraph (internally `is.workflow.actions.viewresult`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Shows the results of the previous action in the Content Graph.


### usage
```
ViewContentGraph 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFViewContentGraphAction",
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Shows the results of the previous action in the Content Graph."
	},
	"IconName": "Graph.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "View Content Graph",
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"ShortName": "Content Graph",
	"Subcategory": "Content",
	"UserInterfaces": [
		"UIKit"
	]
}
```
