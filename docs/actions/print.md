
## Print / Print (internally `is.workflow.actions.print`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Prints the input using AirPrint.


### usage
```
Print (v:myvar | mv:myvar | s:myvar)
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
	"ActionClass": "WFPrintAction",
	"ActionKeywords": [
		"pdf",
		"print",
		"printer",
		"airprint"
	],
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Prints the input using AirPrint."
	},
	"IconName": "Print.png",
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"UIPrintFormatter",
			"com.adobe.pdf"
		]
	},
	"InputPassthrough": true,
	"Name": "Print",
	"ParameterSummary": "Print ${WFInput}",
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
	"Subcategory": "Printing",
	"UserInterfaces": [
		"UIKit"
	]
}
```
