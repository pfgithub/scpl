
## Random Number / RandomNumber (internally `is.workflow.actions.number.random`)


## description

### summary

Passes a random number between the given minimum and maximum to the next action. The minimum and maximum numbers are included as possible results.


### usage
```
RandomNumber minimum=number maximum=number
```

### arguments

---

### minimum: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `0`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### maximum: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `100`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFRandomNumberAction",
	"ActionKeywords": [
		"decimal",
		"math",
		"generate",
		"generator"
	],
	"Category": "Scripting",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Passes a random number between the given minimum and maximum to the next action. The minimum and maximum numbers are included as possible results."
	},
	"IconName": "Calculator.png",
	"Name": "Random Number",
	"Output": {
		"Multiple": false,
		"OutputName": "Random Number",
		"Types": [
			"NSDecimalNumber"
		]
	},
	"Parameters": [
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFRandomNumberMinimum",
			"Label": "Minimum",
			"Placeholder": "0",
			"TextAlignment": "Right"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFRandomNumberMaximum",
			"Label": "Maximum",
			"Placeholder": "100",
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Math",
	"SuggestedNever": true
}
```
