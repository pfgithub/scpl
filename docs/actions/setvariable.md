
## Set Variable / SetVariable (internally `is.workflow.actions.setvariable`)


## description

### summary

Sets the value of the specified variable to the input of this action.


### usage
```
SetVariable input=(v:myvar | mv:myvar | s:myvar) variable=(v:variableName | variableName)
```

### arguments

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Input
		```
**Allows Variables**: true



Accepts a variable.

---

### variable: Variable Input [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-field)
**Placeholder**: ```
		Variable Name
		```
**Allows Variables**: true



Accepts a string with the name of the named variable (v:) you want to set,
or a named variable (v:) that you want to set.


---

### source json (for developers)

```json
{
	"ActionClass": "WFSetVariableAction",
	"ActionKeywords": [
		"programming",
		"scripting",
		"var"
	],
	"Attribution": "Variables",
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Sets the value of the specified variable to the input of this action."
	},
	"IconName": "Variable.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Set Variable",
	"ParameterSummary": "Set variable ${WFVariableName} to ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		},
		{
			"Class": "WFVariableFieldParameter",
			"Key": "WFVariableName",
			"Label": "Variable",
			"Placeholder": "Variable Name",
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Variables"
}
```
