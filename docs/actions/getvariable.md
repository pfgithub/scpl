
## Get Variable / getvariable (internally `is.workflow.actions.getvariable`)



## description
### summary
Gets the value of the specified variable and passes it to the next action.


### usage
`getvariable variable=[variable]`

### arguments
### Variable Picker: Variable / variable (internally `WFVariable`)
**Allows Variables**: true


Accepts a variable.

### for developers

<details><summary>source json</summary>
<p>
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
</p></details>
