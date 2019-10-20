
## Get Numbers from Input / GetNumbersfromInput (internally `is.workflow.actions.detect.number`)


## description

### summary

Returns numbers from the previous action's output.


### usage
```
GetNumbersfromInput number
```

### arguments

---

### input: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

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
	"AppIdentifier": "com.apple.calculator",
	"Attribution": "Scripting",
	"Category": "Scripting",
	"CoercionItemClass": "WFNumberContentItem",
	"Description": {
		"DescriptionSummary": "Returns numbers from the previous action's output."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
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
	"ParameterSummary": "Get numbers from ${WFInput}",
	"Parameters": [
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFInput",
			"Label": "Input"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Get Numbers",
	"Subcategory": "Numbers"
}
```
