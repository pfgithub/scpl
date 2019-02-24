
## Format Number / formatnumber (internally `is.workflow.actions.format.number`)



## description
### summary
Formats a number into text.


### usage
`formatnumber wfnumberformatdecimalplaces=[string integer]`

### arguments
### Stepper Number: wfnumberformatdecimalplaces / wfnumberformatdecimalplaces (internally `WFNumberFormatDecimalPlaces`)
**Default Value**: 2
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.

### source json

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
	"Parameters": [
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
	"Subcategory": "Math"
}
```
