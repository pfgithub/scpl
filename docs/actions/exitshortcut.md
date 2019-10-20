
## Exit Shortcut / ExitShortcut (internally `is.workflow.actions.exit`)

> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description

### summary

Stops execution of the current shortcut and dismisses the shortcut on screen. No more actions will be run after this action.


### usage
```
ExitShortcut (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### result: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Result
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFExitAction",
	"ActionKeywords": [
		"quit",
		"return",
		"workflow"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Stops execution of the current shortcut and dismisses the shortcut on screen. No more actions will be run after this action."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFResult",
		"Required": false,
		"Types": [
			"WFContentItem"
		]
	},
	"LastModifiedDate": "2015-08-20T07:00:00.000Z",
	"Name": "Exit Shortcut",
	"ParameterSummary": "Exit shortcut with ${WFResult}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFResult",
			"Label": "Result",
			"Placeholder": "Result"
		}
	],
	"RequiredResources": [
		"WFMainThreadResource"
	],
	"ResidentCompatible": true,
	"Subcategory": "Control Flow",
	"SuggestedNever": true
}
```
