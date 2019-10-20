
## Find Notes / FindNotes (internally `is.workflow.actions.filter.notes`)

> This action requires that Shortcuts has permission to use WFNotesAccessResource.



### usage
```
FindNotes 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFContentItemFilterAction",
	"AppIdentifier": "com.apple.mobilenotes",
	"Category": "Documents",
	"CreationDate": "2018-12-26T08:00:00.000Z",
	"Input": {
		"Required": false,
		"Types": [
			"WFNoteContentItem"
		]
	},
	"Name": "Find Notes",
	"RequiredResources": [
		"WFNotesAccessResource"
	],
	"Subcategory": "Notes",
	"SuggestedAsInitialAction": false,
	"WFContentItemClass": "WFNoteContentItem",
	"WFContentItemDefaultProperty": "Body",
	"Parameters": []
}
```
