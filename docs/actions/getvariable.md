
## Get Variable / GetVariable (internally `is.workflow.actions.getvariable`)


## description

### summary

Gets the value of the specified variable and passes it to the next action.


### usage
```
GetVariable (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### variable: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Variable
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetVariableAction",
	"ActionKeywords": [
		"programming",
		"scripting",
		"var"
	],
	"Attribution": "Variables",
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Gets the value of the specified variable and passes it to the next action."
	},
	"Discoverable": false,
	"IconName": "Variable.png",
	"Name": "Get Variable",
	"Output": {
		"Multiple": true,
		"OutputName": "Variable",
		"Types": [
			"WFContentItem"
		]
	},
	"ParameterSummary": "Get ${WFVariable}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"DisallowedVariableTypes": [
				"Clipboard"
			],
			"Key": "WFVariable",
			"Label": "Variable",
			"Placeholder": "Variable"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Variables"
}
```
