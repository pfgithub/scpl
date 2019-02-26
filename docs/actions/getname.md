
## Get Name / getname (internally `is.workflow.actions.getitemname`)


## description

### summary

Returns the name of every item passed as input. Depending on the input, this could be a file name, the title of a website, the title of a calendar event, etc.


### usage
```
getname a{}
```

### arguments

---



---

### source json

```json
{
	"ActionClass": "WFGetItemNameAction",
	"ActionKeywords": [
		"title"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Returns the name of every item passed as input. Depending on the input, this could be a file name, the title of a website, the title of a calendar event, etc."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"Name": "Get Name",
	"Output": {
		"Multiple": true,
		"OutputName": "Name",
		"Types": [
			"NSString"
		]
	},
	"Subcategory": "Content"
}
```
