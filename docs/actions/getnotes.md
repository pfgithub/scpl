
## Get Notes / getnotes (internally `is.workflow.actions.evernote.get`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFEvernoteAccessResource.


## description
### summary
Get recent notes from Evernote, optionally filtering based on criteria.


### usage
`getnotes titlesearch=[string|text] undefined=[???] undefined=[???] wfevernotenotescount=[string integer]`

### arguments
### Text Input: Title Search / titlesearch (internally `WFEvernoteNotesTitleSearch`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFEvernoteTagsTagFieldParameter

---

This paramtype is not implemented. WFEvernoteNotebookPickerParameter

---

### Stepper Number: wfevernotenotescount / wfevernotenotescount (internally `WFEvernoteNotesCount`)
**Default Value**: 1
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.

### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFEvernoteGetNotesAction",
	"ActionKeywords": [
		"search",
		"tag"
	],
	"AppIdentifier": "com.evernote.iPhone.Evernote",
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Get recent notes from Evernote, optionally filtering based on criteria."
	},
	"Name": "Get Notes",
	"Output": {
		"Multiple": true,
		"OutputName": "Notes",
		"Types": [
			"ENNoteRef"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Description": "Text to look for in the title of notes.",
			"Key": "WFEvernoteNotesTitleSearch",
			"Label": "Title Search",
			"Placeholder": "optional"
		},
		{
			"Class": "WFEvernoteTagsTagFieldParameter",
			"Description": "A list of tags with which to find matching notes. Wildcard characters (*) may be used.",
			"Key": "WFEvernoteNotesTags",
			"Label": "Tags",
			"Placeholder": "optional"
		},
		{
			"Class": "WFEvernoteNotebookPickerParameter",
			"Description": "The notebook in which to look for notes (optional)",
			"Key": "WFEvernoteNotesNotebookName",
			"Label": "In Notebook"
		},
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFEvernoteNotesCount",
			"StepperDescription": "Number of Notes",
			"StepperNoun": "Note",
			"StepperPluralNoun": "Notes",
			"StepperPrefix": "Get"
		}
	],
	"RequiredResources": [
		"WFEvernoteAccessResource"
	]
}
```
</p></details>
