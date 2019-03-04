
## Run Shortcut / runshortcut (internally `is.workflow.actions.runworkflow`)

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
runshortcut shortcut="string"|variable] showwhilerunning=true|false|variable
```

### arguments

---

### Shortcut Picker: shortcut [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string 
		or variable
		with the name of the shortcut to run.

---

### Switch: showwhilerunning [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**:
```
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
	"AppIdentifier": "is.workflow.my.app",
	"Category": "Scripting",
	"CreationDate": "2017-02-15T06:00:00.000Z",
	"Description": {
		"DescriptionInput": "The input to pass to the shortcut.",
		"DescriptionResult": "The shortcut's result",
		"DescriptionSummary": "Run a shortcut from your shortcut."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"Name": "Run Shortcut",
	"Output": {
		"Multiple": true,
		"OutputName": "Run Shortcut",
		"Types": [
			"WFContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFWorkflowPickerParameter",
			"Key": "WFWorkflowName",
			"Label": "Shortcut"
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
