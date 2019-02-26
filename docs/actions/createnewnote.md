
## Create New Note / createnewnote (internally `is.workflow.actions.evernote.new`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFEvernoteAccessResource.


## description

### summary

Saves the input as a note in Evernote.


### input

The content to include in your new note


### usage
```
createnewnote a{notetitle=[string|text] undefined=[???] undefined=[???]}
```

### arguments

---

### Text: Note Title / notetitle (internally `WFEvernoteNoteTitle`)
**Placeholder**:
```
optional
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

#### This paramtype is not implemented. WFEvernoteNotebookPickerParameter

---

#### This paramtype is not implemented. WFEvernoteTagsTagFieldParameter

---

### source json

```json
{
	"ActionClass": "WFEvernoteCreateAction",
	"ActionKeywords": [
		"make",
		"save"
	],
	"AppIdentifier": "com.evernote.iPhone.Evernote",
	"Category": "Documents",
	"Description": {
		"DescriptionInput": "The content to include in your new note",
		"DescriptionSummary": "Saves the input as a note in Evernote."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"Name": "Create New Note",
	"Output": {
		"Multiple": false,
		"OutputName": "New Note",
		"Types": [
			"ENNoteRef"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFEvernoteNoteTitle",
			"Label": "Note Title",
			"Placeholder": "optional"
		},
		{
			"Class": "WFEvernoteNotebookPickerParameter",
			"Description": "The notebook in which to save your new note (optional)",
			"Key": "WFEvernoteNotebook",
			"Label": "Notebook"
		},
		{
			"Class": "WFEvernoteTagsTagFieldParameter",
			"Description": "A list of tags to apply to the new note (optional)",
			"Key": "WFEvernoteTags",
			"Label": "Tags",
			"Placeholder": "optional"
		}
	],
	"RequiredResources": [
		"WFEvernoteAccessResource"
	]
}
```
