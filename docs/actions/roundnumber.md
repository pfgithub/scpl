
## Round Number / RoundNumber (internally `is.workflow.actions.round`)


## description

### summary

Rounds the number(s) passed into the action.


### usage
```
RoundNumber number=number value=("Millions" | "Hundred Thousands" | "Ten Thousands" | "Thousands" | "Hundreds Place" | "Tens Place" | "Ones Place" | "Tenths" | "Hundredths" | "Thousandths" | "Ten Thousandths" | "Hundred Thousandths" | "Millionths" | "Ten Millionths" | "Hundred Millionths" | "Billionths" | "10 ^") mode=("Normal" | "Always Round Up" | "Always Round Down") tenToThePowerOf=number
```

### arguments

---

### number: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `Number`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### value: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Placeholder**: `"Value"`
**Default Value**: `"Ones Place"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Millions`
- `Hundred Thousands`
- `Ten Thousands`
- `Thousands`
- `Hundreds Place`
- `Tens Place`
- `Ones Place`
- `Tenths`
- `Hundredths`
- `Thousandths`
- `Ten Thousandths`
- `Hundred Thousandths`
- `Millionths`
- `Ten Millionths`
- `Hundred Millionths`
- `Billionths`
- `10 ^`

---

### mode: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Normal"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Normal`
- `Always Round Up`
- `Always Round Down`

---

### tenToThePowerOf: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Allows Variables**: true

**Only enabled if**: argument WFRoundTo == `10 ^`

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
	"AppIdentifier": "com.apple.calculator",
	"Attribution": "Math",
	"Category": "Scripting",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Rounds the number(s) passed into the action."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
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
	"ParameterSummary": {
		"WFInput,WFRoundTo(10 ^),WFRoundMode,TenToThePowerOf": "Round ${WFInput} to ${WFRoundTo} ${TenToThePowerOf}",
		"WFInput,WFRoundTo,WFRoundMode": "Round ${WFInput} to ${WFRoundTo}"
	},
	"Parameters": [
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFInput",
			"Label": "Number",
			"Placeholder": "Number"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Ones Place",
			"Items": [
				"Millions",
				"Hundred Thousands",
				"Ten Thousands",
				"Thousands",
				"Hundreds Place",
				"Tens Place",
				"Ones Place",
				"Tenths",
				"Hundredths",
				"Thousandths",
				"Ten Thousandths",
				"Hundred Thousandths",
				"Millionths",
				"Ten Millionths",
				"Hundred Millionths",
				"Billionths",
				"10 ^"
			],
			"Key": "WFRoundTo",
			"Label": "Value",
			"Placeholder": "Value"
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
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 0,
			"Key": "TenToThePowerOf",
			"MinimumValue": 0,
			"RequiredResources": [
				{
					"WFParameterKey": "WFRoundTo",
					"WFParameterValue": "10 ^",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Math"
}
```
