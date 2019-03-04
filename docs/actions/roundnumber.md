
## Round Number / roundnumber (internally `is.workflow.actions.round`)


## description

### summary

Rounds the number(s) passed into the action.


### usage
```
roundnumber round="Left of Decimal" | "Right of Decimal" mode="Normal" | "Always Round Up" | "Always Round Down" wfrounddecimalplaces=number
```

### arguments

---

### Enumeration: round [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**:
```
Left of Decimal
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Left of Decimal`
- `Right of Decimal`

[Documentation](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)

---

### Enumeration: mode [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**:
```
Normal
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Normal`
- `Always Round Up`
- `Always Round Down`

[Documentation](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)

---

### Stepper Number: wfrounddecimalplaces [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

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
