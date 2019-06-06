
## Share / Share (internally `is.workflow.actions.share`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Prompts to share the input.


### usage
```
Share (v:myvar | mv:myvar | s:myvar)
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

### source json (for developers)

```json
{
	"ActionClass": "WFShareAction",
	"ActionKeywords": [
		"share",
		"file",
		"document",
		"send"
	],
	"Category": "Sharing",
	"Description": {
		"DescriptionSummary": "Prompts to share the input."
	},
	"IconName": "Sharing.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Share",
	"ParameterSummary": "Share ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "System",
	"UserInterfaces": [
		"UIKit",
		"WatchKit"
	]
}
```
