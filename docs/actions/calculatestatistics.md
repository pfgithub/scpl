
## Calculate Statistics / CalculateStatistics (internally `is.workflow.actions.statistics`)


## description

### summary

Calculates statistics on the numbers that are provided as input.


### usage
```
CalculateStatistics operation=("Average" | "Minimum" | "Maximum" | "Sum" | "Median" | "Mode" | "Range" | "Standard Deviation") input=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### operation: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Average"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Average`
- `Minimum`
- `Maximum`
- `Sum`
- `Median`
- `Mode`
- `Range`
- `Standard Deviation`

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFCalculateStatisticsAction",
	"ActionKeywords": [
		"number",
		"average",
		"mean",
		"mode",
		"median",
		"maximum",
		"deviation",
		"sum",
		"minimum"
	],
	"Category": "Scripting",
	"CreationDate": "2015-06-16T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Calculates statistics on the numbers that are provided as input."
	},
	"IconName": "Calculator.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "Input",
		"Required": true,
		"Types": [
			"NSNumber"
		]
	},
	"Name": "Calculate Statistics",
	"Output": {
		"Multiple": true,
		"OutputName": "Statistics",
		"Types": [
			"NSNumber"
		]
	},
	"ParameterSummary": "Calculate the ${WFStatisticsOperation} of ${Input}",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Average",
			"Items": [
				"Average",
				"Minimum",
				"Maximum",
				"Sum",
				"Median",
				"Mode",
				"Range",
				"Standard Deviation"
			],
			"Key": "WFStatisticsOperation",
			"Label": "Operation"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "Input",
			"Label": "Input"
		}
	],
	"Subcategory": "Math"
}
```
