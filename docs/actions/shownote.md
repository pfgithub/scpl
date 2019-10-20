
## Show Note / ShowNote (internally `is.workflow.actions.shownote`)

> This action requires that Shortcuts has permission to use WFNotesAccessResource.


## description

### summary

Opens the note passed in as input.


### usage
```
ShowNote (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### note: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Note
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFShowNoteAction",
	"ActionKeywords": [
		"apple"
	],
	"AppIdentifier": "com.apple.mobilenotes",
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Opens the note passed in as input."
	},
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFNoteContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Show Note",
	"ParameterSummary": "Show ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Note",
			"Placeholder": "Note"
		}
	],
	"RequiredResources": [
		"WFNotesAccessResource"
	]
}
```
