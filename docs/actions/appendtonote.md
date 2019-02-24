
## Append to Note / appendtonote (internally `is.workflow.actions.evernote.append`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFEvernoteAccessResource.


## description
### summary
Finds a note using the specified criteria and appends the input to the note.

### input
The content to add to your note


### usage
`appendtonote notetitle=[string|text] mode=[string <${strInfo}>] undefined=[???]`

### arguments
### Text Input: Note Title / notetitle (internally `WFEvernoteNotesTitleSearch`)
**Placeholder**: example note
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Enumeration: Mode / mode (internally `WFEvernoteWriteMode`)
**Default Value**: Append
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Append`
- `Prepend`

---

This paramtype is not implemented. WFEvernoteNotebookPickerParameter

### source json

```json
{
	"ActionClass": "WFEvernoteAppendAction",
	"ActionKeywords": [
		"add",
		"prepend",
		"save",
		"evernote"
	],
	"AppIdentifier": "com.evernote.iPhone.Evernote",
	"Category": "Documents",
	"Description": {
		"DescriptionInput": "The content to add to your note",
		"DescriptionSummary": "Finds a note using the specified criteria and appends the input to the note."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"Name": "Append to Note",
	"Output": {
		"Multiple": false,
		"OutputName": "Note",
		"Types": [
			"ENNoteRef"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Description": "The title (or part of the title) of the note to append to",
			"Key": "WFEvernoteNotesTitleSearch",
			"Label": "Note Title",
			"Placeholder": "example note",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Append",
			"Items": [
				"Append",
				"Prepend"
			],
			"Key": "WFEvernoteWriteMode",
			"Label": "Mode"
		},
		{
			"Class": "WFEvernoteNotebookPickerParameter",
			"Description": "The notebook in which the note is located (optional)",
			"Key": "WFEvernoteNotesNotebookName",
			"Label": "In Notebook"
		}
	],
	"RequiredResources": [
		"WFEvernoteAccessResource"
	]
}
```
