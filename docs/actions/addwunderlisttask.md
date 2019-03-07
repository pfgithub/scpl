
## Add Wunderlist Task / addwunderlisttask (internally `is.workflow.actions.wunderlist.add`)

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Adds a new task to Wunderlist.


### input

Files to attach to the task


### output

The URL of the newly created task

### usage
```
addwunderlisttask title="string" list=("string" | variable)] duedate="string" reminder="string" starred=(true | f alse | variable) notes="string"
```

### arguments

---

### title: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Buy some milk"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### list: Wunderlist List Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### duedate: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### reminder: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### starred: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### notes: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Notes"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json (for developers)

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
