
## isworkflowactionstextmatch / isworkflowactionstextmatch (internally `is.workflow.actions.text.match`)

> This action is not yet complete. Some arguments may be missing.


## description

### output

A list of text items that matched the regular expression

### usage
```
isworkflowactionstextmatch 
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
	"Category": "Documents",
	"Description": {
		"DescriptionResult": "A list of text items that matched the regular expression"
	},
	"IconName": "Text.png",
	"InProcess": true,
	"IntentIdentifier": "sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFMatchTextIntent",
	"ParameterOverrides": {
		"caseSensitive": {
			"Description": "When disabled, the capitalization of letters is ignored.",
			"Key": "WFMatchTextCaseSensitive"
		},
		"pattern": {
			"Key": "WFMatchTextPattern"
		}
	},
	"ResidentCompatible": true,
	"Subcategory": "Text Editing"
}
```
