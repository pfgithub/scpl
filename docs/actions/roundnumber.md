
## Round Number / roundnumber (internally `is.workflow.actions.round`)



## description
### summary
Rounds the number(s) passed into the action.


### usage
`roundnumber round=[string <${strInfo}>] mode=[string <${strInfo}>] wfrounddecimalplaces=[string integer]`

### arguments
### Enumeration: Round / round (internally `WFRoundType`)
**Default Value**: Left of Decimal
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Left of Decimal`
- `Right of Decimal`

---

### Enumeration: Mode / mode (internally `WFRoundMode`)
**Default Value**: Normal
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Normal`
- `Always Round Up`
- `Always Round Down`

---

### Stepper Number: wfrounddecimalplaces / wfrounddecimalplaces (internally `WFRoundDecimalPlaces`)
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.

### source json

```json
{
	"ActionClass": "WFRoundNumberAction",
	"ActionKeywords": [
		"calculator",
		"calculate",
		"number",
		"ceiling",
		"floor"
	],
	"Category": "Scripting",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Rounds the number(s) passed into the action."
	},
	"IconName": "Calculator.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFNumberContentItem"
		]
	},
	"Name": "Round Number",
	"Output": {
		"Multiple": true,
		"OutputName": "Rounded Number",
		"Types": [
			"NSDecimalNumber"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Left of Decimal",
			"Items": [
				"Left of Decimal",
				"Right of Decimal"
			],
			"Key": "WFRoundType",
			"Label": "Round"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Normal",
			"Items": [
				"Normal",
				"Always Round Up",
				"Always Round Down"
			],
			"Key": "WFRoundMode",
			"Label": "Mode"
		},
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 0,
			"Key": "WFRoundDecimalPlaces",
			"MinimumValue": 0,
			"StepperDescription": "Decimal Places",
			"StepperNoun": "Decimal Place",
			"StepperPluralNoun": "Decimal Places"
		}
	],
	"Subcategory": "Math"
}
```
