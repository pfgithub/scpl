
## AirDrop / AirDrop (internally `is.workflow.actions.airdropdocument`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Prompts to share the input via AirDrop.


### usage
```
AirDrop (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### content: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Content
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFAirDropAction",
	"ActionKeywords": [
		"airdrop",
		"file",
		"document",
		"send",
		"share"
	],
	"Attribution": "AirDrop",
	"Category": "Sharing",
	"Description": {
		"DescriptionSummary": "Prompts to share the input via AirDrop."
	},
	"IconName": "AirDrop.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "AirDrop",
	"ParameterSummary": "AirDrop ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Content",
			"Placeholder": "Content"
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
