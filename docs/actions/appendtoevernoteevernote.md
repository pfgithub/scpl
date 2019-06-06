
## Append to Evernote (Evernote) / AppendtoEvernoteEvernote (internally `is.workflow.actions.evernote.append`)

> This action requires that Shortcuts has permission to use WFEvernoteAccessResource.


## description

### summary

Finds a note using the specified criteria and appends the input to the note.


### input

The content to add to your note


### usage
```
AppendtoEvernoteEvernote content=(v:myvar | mv:myvar | s:myvar) noteTitle="string" mode=("Append" | "Prepend") inNotebook=("string" | variable)]
```

### arguments

---

### content: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Content
		```
**Allows Variables**: true



Accepts a variable.

---

### noteTitle: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### mode: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Append"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Append`
- `Prepend`

---

### inNotebook: Evernote Notebook Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### source json (for developers)

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
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"Name": "Append to Evernote",
	"Output": {
		"Multiple": false,
		"OutputName": "Note",
		"Types": [
			"ENNoteRef"
		]
	},
	"ParameterSummary": "${WFEvernoteWriteMode} ${WFInput} to the note ${WFEvernoteNotesTitleSearch}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Content",
			"Placeholder": "Content"
		},
		{
			"Class": "WFTextInputParameter",
			"Description": "The title (or part of the title) of the note to append to",
			"Key": "WFEvernoteNotesTitleSearch",
			"Label": "Note Title",
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
	],
	"AppInfo": "Evernote"
}
```
