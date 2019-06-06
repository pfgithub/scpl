
## Quick Look / QuickLook (internally `is.workflow.actions.previewdocument`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Displays a preview of the input.


### usage
```
QuickLook input=(v:myvar | mv:myvar | s:myvar) fullScreen=(true | false | variable)
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

### fullScreen: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true

**Only enabled if**: Device attributes match `{"WFDeviceAttributeIdiom":"Pad"}` This action is always enabled inside Shortcutslang.

Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFQuickLookAction",
	"ActionKeywords": [
		"preview",
		"show",
		"file",
		"document",
		"quicklook",
		"quick",
		"look"
	],
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Displays a preview of the input."
	},
	"IconName": "Quick Look.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"public.data"
		]
	},
	"InputPassthrough": true,
	"Name": "Quick Look",
	"ParameterSummary": "Show ${WFInput} in Quick Look",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		},
		{
			"Class": "WFSwitchParameter",
			"Key": "WFQuickLookActionFullScreen",
			"Label": "Full Screen",
			"RequiredResources": [
				{
					"WFDeviceAttributes": {
						"WFDeviceAttributeIdiom": "Pad"
					},
					"WFResourceClass": "WFDeviceAttributesResource"
				}
			]
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Previewing",
	"UserInterfaces": [
		"WatchKit",
		"UIKit"
	]
}
```
