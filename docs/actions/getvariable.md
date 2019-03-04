
## Get Variable / getvariable (internally `is.workflow.actions.getvariable`)


## description

### summary

Gets the value of the specified variable and passes it to the next action.


### usage
```
getvariable variable=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### variable: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
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
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Gets the value of the specified variable and passes it to the next action."
	},
	"IconName": "Variable.png",
	"Name": "Get Variable",
	"Output": {
		"Multiple": true,
		"OutputName": "Variable",
		"Types": [
			"WFContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"DisallowedVariableTypes": [
				"Clipboard"
			],
			"Key": "WFVariable",
			"Label": "Variable"
		}
	],
	"Subcategory": "Variables"
}
```
