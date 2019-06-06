
## Get Dates from Input / GetDatesfromInput (internally `is.workflow.actions.detect.date`)


## description

### summary

Returns any dates found in the output from the previous action.


### usage
```
GetDatesfromInput (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Input
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"date",
		"time",
		"detect",
		"scan"
	],
	"Category": "Calendar",
	"CoercionItemClass": "WFDateContentItem",
	"Description": {
		"DescriptionSummary": "Returns any dates found in the output from the previous action."
	},
	"IconName": "Date.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"NSDate"
		]
	},
	"Name": "Get Dates from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "Dates",
		"Types": [
			"WFDateContentItem"
		]
	},
	"ParameterSummary": "Get dates from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Get Dates",
	"Subcategory": "Dates"
}
```
