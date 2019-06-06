
## View Content Graph / ViewContentGraph (internally `is.workflow.actions.viewresult`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Shows the results of the previous action in the Content Graph.


### usage
```
ViewContentGraph (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFViewContentGraphAction",
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Shows the results of the previous action in the Content Graph."
	},
	"IconName": "Graph.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "View Content Graph",
	"ParameterSummary": "View Content Graph of ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"ShortName": "Content Graph",
	"Subcategory": "Content",
	"UserInterfaces": [
		"UIKit"
	]
}
```
