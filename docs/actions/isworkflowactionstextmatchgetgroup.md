
## isworkflowactionstextmatchgetgroup / isworkflowactionstextmatchgetgroup (internally `is.workflow.actions.text.match.getgroup`)

> This action is not yet complete. Some arguments may be missing.



### usage
```
isworkflowactionstextmatchgetgroup 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFHandleCustomIntentAction",
	"ActionKeywords": [
		"finding",
		"matching",
		"searching",
		"regular",
		"expression",
		"regexp"
	],
	"Attribution": "Text",
	"Category": "Text",
	"CreationDate": "2016-05-23T07:00:00.000Z",
	"IconName": "Text.png",
	"InProcess": true,
	"IntentIdentifier": "sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFMatchTextGetGroupIntent",
	"ParameterOverrides": {
		"groupIndex": {
			"Key": "WFGroupIndex"
		},
		"type": {
			"IntentEnumOverrides": {
				"all": "All Groups",
				"atIndex": "Group At Index"
			},
			"Key": "WFGetGroupType"
		}
	},
	"ResidentCompatible": true,
	"Subcategory": "Text Editing"
}
```
