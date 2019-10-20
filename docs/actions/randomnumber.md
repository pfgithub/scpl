
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
**Placeholder**: `Minimum`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### maximum: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `Maximum`
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
	"AppIdentifier": "com.apple.calculator",
	"Attribution": "Math",
	"Category": "Scripting",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Passes a random number between the given minimum and maximum to the next action. The minimum and maximum numbers are included as possible results."
	},
	"Name": "Random Number",
	"Output": {
		"Multiple": false,
		"OutputName": "Random Number",
		"Types": [
			"NSDecimalNumber"
		]
	},
	"ParameterSummary": "Random number between ${WFRandomNumberMinimum} and ${WFRandomNumberMaximum}",
	"Parameters": [
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFRandomNumberMinimum",
			"Label": "Minimum",
			"Placeholder": "Minimum",
			"TextAlignment": "Right"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFRandomNumberMaximum",
			"Label": "Maximum",
			"Placeholder": "Maximum",
			"TextAlignment": "Right"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Numbers",
	"SuggestedNever": true
}
```
