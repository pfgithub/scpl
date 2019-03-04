
## Wait to Return / waittoreturn (internally `is.workflow.actions.waittoreturn`)

> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description

### summary

Pauses execution until you leave the Shortcuts app and return to it.

This action might be useful after an action that switches apps, to pause execution until you return to the Shortcuts app.


### usage
```
waittoreturn 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFWaitToReturnAction",
	"ActionKeywords": [
		"wait"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Pauses execution until you leave the Shortcuts app and return to it.\n\nThis action might be useful after an action that switches apps, to pause execution until you return to the Shortcuts app."
	},
	"IconName": "Scripting.png",
	"InputPassthrough": true,
	"Name": "Wait to Return",
	"RequiredResources": [
		"WFMainThreadResource"
	],
	"Subcategory": "Control Flow"
}
```
