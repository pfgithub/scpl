
## Show Note / shownote (internally `is.workflow.actions.shownote`)

> This action requires that Shortcuts has permission to use WFNotesAccessResource.


## description

### summary

Opens the note passed in as input.


### usage
```
shownote 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFShowNoteAction",
	"ActionKeywords": [
		"apple"
	],
	"AppIdentifier": "com.apple.mobilenotes",
	"Category": "Text",
	"Description": {
		"DescriptionSummary": "Opens the note passed in as input."
	},
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"WFNoteContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Show Note",
	"Parameters": [],
	"RequiredResources": [
		"WFNotesAccessResource"
	]
}
```
