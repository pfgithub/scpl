
## Find Notes / findnotes (internally `is.workflow.actions.filter.notes`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFNotesAccessResource.



### usage
```
findnotes undefined=NotImplemented
```

### arguments

---

#### This paramtype is not implemented. _UndefinedCoercionClass

---

### source json (for developers)

```json
{
	"ActionClass": "WFContentItemFilterAction",
	"AppIdentifier": "com.apple.mobilenotes",
	"Category": "Text",
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
	"Parameters": [
		{
			"Class": "_UndefinedCoercionClass"
		}
	]
}
```
