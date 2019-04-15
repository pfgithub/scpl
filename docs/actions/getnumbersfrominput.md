
## Get Numbers from Input / getnumbersfrominput (internally `is.workflow.actions.detect.number`)


## description

### summary

Returns numbers from the previous action's output.


### usage
```
getnumbersfrominput 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"numeric",
		"digits",
		"detect",
		"extract",
		"scan"
	],
	"Category": "Scripting",
	"CoercionItemClass": "WFNumberContentItem",
	"Description": {
		"DescriptionSummary": "Returns numbers from the previous action's output."
	},
	"IconName": "Calculator.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSNumber"
		]
	},
	"Name": "Get Numbers from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "Numbers",
		"Types": [
			"WFNumberContentItem"
		]
	},
	"ShortName": "Get Numbers",
	"Subcategory": "Math"
}
```
