
## Run Shortcut / RunShortcut (internally `is.workflow.actions.runworkflow`)

> This action requires that Shortcuts has permission to use WFMainThreadResource,[object Object].


## description

### summary

Run a shortcut from your shortcut.


### input

The input to pass to the shortcut.


### output

The shortcut's result

### usage
```
RunShortcut shortcut=("string" | variable)] input=(v:myvar | mv:myvar | s:myvar) showWhileRunning=(true | false | variable)
```

### arguments

---

### shortcut: Shortcut Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Placeholder**: ```
		Shortcut
		```
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Choose Variable
		```
**Allows Variables**: true



Accepts a variable.

---

### showWhileRunning: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFRunWorkflowAction",
	"ActionKeywords": [
		"action",
		"workflow",
		"shortcuts"
	],
	"AppIdentifier": "com.apple.shortcuts",
	"Category": "Scripting",
	"CreationDate": "2017-02-15T06:00:00.000Z",
	"Description": {
		"DescriptionInput": "The input to pass to the shortcut.",
		"DescriptionResult": "The shortcut's result",
		"DescriptionSummary": "Run a shortcut from your shortcut."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"Name": "Run Shortcut",
	"Output": {
		"Multiple": true,
		"OutputName": "Shortcut Result",
		"Types": [
			"WFContentItem"
		]
	},
	"ParameterSummary": "Run ${WFWorkflowName}",
	"Parameters": [
		{
			"Class": "WFWorkflowPickerParameter",
			"Key": "WFWorkflowName",
			"Label": "Shortcut",
			"Placeholder": "Shortcut"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Choose Variable"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFShowWorkflow",
			"Label": "Show While Running"
		}
	],
	"RequiredResources": [
		"WFMainThreadResource",
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFShowWorkflow",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFUserInteractionResource"
		}
	],
	"Subcategory": "Shortcuts",
	"SuggestedNever": true,
	"UserInterfaces": [
		"UIKit",
		"UIKitWidget",
		"WatchKit"
	]
}
```
