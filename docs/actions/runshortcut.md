
## Run Shortcut / runshortcut (internally `is.workflow.actions.runworkflow`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFMainThreadResource,[object Object].


## description
### summary
Run a shortcut from your shortcut.

### input
The input to pass to the shortcut.

### output
The shortcut's result

### usage
`runshortcut undefined=[???] showwhilerunning=[string boolean|variable]`

### arguments
This paramtype is not implemented. WFWorkflowPickerParameter

---

### Switch: Show While Running / showwhilerunning (internally `WFShowWorkflow`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

### other info

<details><summary>source json</summary>
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
</details>
