
## Share with Extensions / SharewithExtensions (internally `is.workflow.actions.runextension`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Prompts to share the input using action extensions and sharing extensions provided by other apps.


### usage
```
SharewithExtensions (v:myvar | mv:myvar | s:myvar)
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
	"ActionClass": "WFRunExtensionAction",
	"ActionKeywords": [
		"action",
		"extension",
		"sharing",
		"share",
		"ios 8",
		"app",
		"inter"
	],
	"Category": "Sharing",
	"Description": {
		"DescriptionSummary": "Prompts to share the input using action extensions and sharing extensions provided by other apps."
	},
	"IconName": "Apps.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Share with Extensions",
	"ParameterSummary": "Share ${WFInput} with extensions",
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
		"UIKit"
	]
}
```
