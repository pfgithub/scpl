
## Exit Shortcut / ExitShortcut (internally `is.workflow.actions.exit`)

> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description

### summary

Stops execution of the current shortcut and dismisses the shortcut on screen. No more actions will be run after this action.


### usage
```
ExitShortcut 
```

### arguments

---



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
		"Required": false,
		"Types": [
			"WFContentItem"
		]
	},
	"LastModifiedDate": "2015-08-20T07:00:00.000Z",
	"Name": "Exit Shortcut",
	"RequiredResources": [
		"WFMainThreadResource"
	],
	"Subcategory": "Control Flow",
	"SuggestedNever": true
}
```
