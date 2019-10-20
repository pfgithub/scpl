
## Append to Note / AppendtoNote (internally `is.workflow.actions.appendnote`)

> This action requires that Shortcuts has permission to use WFNotesAccessResource.


## description

### summary

Appends the text passed as input to the specified note.


### output

The updated note

### usage
```
AppendtoNote app=("string" | variable)] note=(v:myvar | mv:myvar | s:myvar) text="string"
```

### arguments

---

### app: Intent App Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Default Value**: ```
		com.apple.mobilenotes
		```
**Allows Variables**: true

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### note: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Note
		```
**Allows Variables**: true



Accepts a variable.

---

### text: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

```json
{
	"ActionClass": "WFAppendToNoteAction",
	"ActionKeywords": [
		"apple"
	],
	"AppIdentifier": "com.apple.mobilenotes",
	"Category": "Documents",
	"Description": {
		"DescriptionResult": "The updated note",
		"DescriptionSummary": "Appends the text passed as input to the specified note."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFStringContentItem"
		]
	},
	"IntentIdentifier": "sirikit.intent.notes.AppendToNoteIntent",
	"Name": "Append to Note",
	"Output": {
		"Multiple": false,
		"OutputName": "Appended Note",
		"Types": [
			"INNote"
		]
	},
	"ParameterSummary": "Append ${WFInput} to ${WFNote}",
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
			"Label": "Note",
			"Placeholder": "Note"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFInput",
			"Label": "Text"
		}
	],
	"RequiredResources": [
		"WFNotesAccessResource"
	],
	"Subcategory": "Notes"
}
```
