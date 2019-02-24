
## Add Wunderlist Task / addwunderlisttask (internally `is.workflow.actions.wunderlist.add`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use [object Object].


## description
### summary
Adds a new task to Wunderlist.

### input
Files to attach to the task

### output
The URL of the newly created task

### usage
`addwunderlisttask title=[string|text] undefined=[???] undefined=[???] undefined=[???] starred=[string boolean|variable] notes=[string|text]`

### arguments
### Text Input: Title / title (internally `WFWunderlistTitle`)
**Placeholder**:
```
Buy some milk
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFWunderlistListPickerParameter

---

This paramtype is not implemented. WFDateFieldParameter

---

This paramtype is not implemented. WFDateFieldParameter

---

### Switch: Starred / starred (internally `WFWunderlistStarred`)
**Allows Variables**: true



Accepts a string with either true or false
or a variable.

---

### Text Input: Notes / notes (internally `WFWunderlistNotes`)
**Placeholder**:
```
Notes
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

### source json

```json
{
	"ActionClass": "WFWunderlistAddAction",
	"ActionKeywords": [
		"note",
		"text",
		"todo",
		"to-do",
		"task"
	],
	"AppIdentifier": "com.6wunderkinder.wunderlistmobile",
	"Category": "Text",
	"CreationDate": "2015-04-23T05:00:00.000Z",
	"Description": {
		"DescriptionInput": "Files to attach to the task",
		"DescriptionResult": "The URL of the newly created task",
		"DescriptionSummary": "Adds a new task to Wunderlist."
	},
	"Input": {
		"Multiple": true,
		"Required": false,
		"Types": [
			"WFGenericFileContentItem"
		]
	},
	"Name": "Add Wunderlist Task",
	"Output": {
		"Multiple": false,
		"OutputName": "Wunderlist Task",
		"Types": [
			"NSURL"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFWunderlistTitle",
			"Label": "Title",
			"Placeholder": "Buy some milk",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFWunderlistListPickerParameter",
			"Key": "WFWunderlistList",
			"Label": "List"
		},
		{
			"Class": "WFDateFieldParameter",
			"Key": "WFWunderlistDueDate",
			"Label": "Due Date",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFDateFieldParameter",
			"Key": "WFWunderlistReminder",
			"Label": "Reminder",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFSwitchParameter",
			"Key": "WFWunderlistStarred",
			"Label": "Starred"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFWunderlistNotes",
			"Label": "Notes",
			"Multiline": true,
			"Placeholder": "Notes"
		}
	],
	"RequiredResources": [
		{
			"WFAccountClass": "WFWunderlistAccount",
			"WFResourceClass": "WFAccountAccessResource"
		}
	],
	"ShortName": "Add Task"
}
```
