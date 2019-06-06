
## Number / Number (internally `is.workflow.actions.number`)


## description

### summary

Passes a number to the next action.


### usage
```
Number number
```

### arguments

---

### number: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `42`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFNumberAction",
	"ActionKeywords": [
		"decimal",
		"math"
	],
	"Category": "Scripting",
	"Constructor": true,
	"Description": {
		"DescriptionSummary": "Passes a number to the next action."
	},
	"IconName": "Calculator.png",
	"Name": "Number",
	"Output": {
		"Multiple": false,
		"OutputName": "Number",
		"Types": [
			"NSDecimalNumber"
		]
	},
	"ParameterSummary": "${WFNumberActionNumber}",
	"Parameters": [
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFNumberActionNumber",
			"Label": "Number",
			"Placeholder": "42",
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Math",
	"SuggestedNever": true
}
```
