
## Append to Note / AppendtoNote (internally `is.workflow.actions.appendnote`)

> This action requires that Shortcuts has permission to use WFNotesAccessResource.


## description

### summary

Appends the text passed as input to the specified note.


### output

The updated note

### usage
```
AppendtoNote App=("string" | variable)] Note=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### App: Intent App Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Default Value**: ```
		com.apple.mobilenotes
		```
**Allows Variables**: true

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### Note: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFAppendToNoteAction",
	"ActionKeywords": [
		"apple"
	],
	"AppIdentifier": "com.apple.mobilenotes",
	"Category": "Text",
	"Description": {
		"DescriptionResult": "The updated note",
		"DescriptionSummary": "Appends the text passed as input to the specified note."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFStringContentItem"
		]
	},
	"IntentIdentifier": "sirikit.intent.notes.AppendToNoteIntent",
	"Name": "Append to Note",
	"Output": {
		"Multiple": false,
		"Types": [
			"INNote"
		]
	},
	"Parameters": [
		{
			"Class": "WFIntentAppPickerParameter",
			"DefaultValue": "com.apple.mobilenotes",
			"Hidden": true,
			"IntentName": "INCreateNoteIntent",
			"Key": "IntentAppIdentifier",
			"Label": "App"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Description": "The note to append to",
			"Key": "WFNote",
			"Label": "Note"
		}
	],
	"RequiredResources": [
		"WFNotesAccessResource"
	]
}
```
