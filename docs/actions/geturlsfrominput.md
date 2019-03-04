
## Get URLs from Input / geturlsfrominput (internally `is.workflow.actions.detect.link`)


## description

### summary

Returns any links found in the output from the previous action.


### usage
```
geturlsfrominput 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"link",
		"web",
		"site",
		"detect",
		"scan"
	],
	"Category": "Web",
	"CoercionItemClass": "WFURLContentItem",
	"Description": {
		"DescriptionSummary": "Returns any links found in the output from the previous action."
	},
	"IconName": "URL.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSURL"
		]
	},
	"Name": "Get URLs from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "URLs",
		"Types": [
			"WFURLContentItem"
		]
	},
	"ShortName": "Get URLs",
	"Subcategory": "URLs"
}
```
