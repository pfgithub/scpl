
## Add to Variable / AddtoVariable (internally `is.workflow.actions.appendvariable`)


## description

### summary

Appends this action's input to the specified variable, creating the variable if it does not exist.

This allows you to make a variable hold multiple items.


### output

The updated contents of the variable.

### usage
```
AddtoVariable variable=(v:variableName | variableName) input=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### variable: Variable Input [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-field)
**Placeholder**: ```
		Variable Name
		```
**Allows Variables**: true



Accepts a string with the name of the named variable (v:) you want to set,
or a named variable (v:) that you want to set.


---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Input
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFAppendVariableAction",
	"ActionKeywords": [
		"add"
	],
	"Attribution": "Variables",
	"Category": "Scripting",
	"Description": {
		"DescriptionResult": "The updated contents of the variable.",
		"DescriptionSummary": "Appends this action's input to the specified variable, creating the variable if it does not exist.\n\nThis allows you to make a variable hold multiple items."
	},
	"IconName": "Variable.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"TypePassthrough": true,
		"Types": [
			"WFContentItem"
		]
	},
	"Name": "Add to Variable",
	"Output": {
		"Multiple": true,
		"OutputName": "Variable",
		"Types": [
			"WFContentItem"
		]
	},
	"ParameterSummary": "Add ${WFInput} to ${WFVariableName}",
	"Parameters": [
		{
			"Class": "WFVariableFieldParameter",
			"Key": "WFVariableName",
			"Label": "Variable",
			"Placeholder": "Variable Name",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Variables"
}
```
