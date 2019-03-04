
## Get Type / gettype (internally `is.workflow.actions.getitemtype`)


## description

### summary

Returns the type of every item passed as input. For example, if a URL is passed, this action will return “URL”.


### usage
```
gettype 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFGetItemTypeAction",
	"ActionKeywords": [
		"content",
		"item",
		"class"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Returns the type of every item passed as input. For example, if a URL is passed, this action will return “URL”."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"Name": "Get Type",
	"Output": {
		"Multiple": true,
		"OutputName": "Type",
		"Types": [
			"NSString"
		]
	},
	"Subcategory": "Content",
	"SuggestedNever": true
}
```
