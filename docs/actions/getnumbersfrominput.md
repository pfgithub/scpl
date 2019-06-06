
## Get Numbers from Input / GetNumbersfromInput (internally `is.workflow.actions.detect.number`)


## description

### summary

Returns numbers from the previous action's output.


### usage
```
GetNumbersfromInput 
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
	"ResidentCompatible": true,
	"ShortName": "Get Numbers",
	"Subcategory": "Math"
}
```
