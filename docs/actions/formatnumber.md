
## Format Number / FormatNumber (internally `is.workflow.actions.format.number`)


## description

### summary

Formats a number into text.


### usage
```
FormatNumber number=number WFNumberFormatDecimalPlaces=number
```

### arguments

---

### number: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### WFNumberFormatDecimalPlaces: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**: `2`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFFormatNumberAction",
	"ActionKeywords": [
		"digits",
		"decimal"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Formats a number into text."
	},
	"IconName": "Calculator.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFNumber",
		"Required": true,
		"Types": [
			"WFBooleanContentItem",
			"WFNumberContentItem"
		]
	},
	"Name": "Format Number",
	"Output": {
		"Multiple": true,
		"OutputName": "Formatted Number",
		"Types": [
			"NSString"
		]
	},
	"ParameterSummary": "Format ${WFNumber} to ${WFNumberFormatDecimalPlaces}",
	"Parameters": [
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFNumber",
			"Label": "Number"
		},
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 2,
			"Key": "WFNumberFormatDecimalPlaces",
			"MinimumValue": 0,
			"StepperDescription": "Decimal Places",
			"StepperNoun": "Decimal Place",
			"StepperPluralNoun": "Decimal Places"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Math"
}
```
