
## Add Wunderlist Task / AddWunderlistTask (internally `is.workflow.actions.wunderlist.add`)

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
AddWunderlistTask task="string" list=("string" | variable)] dueDate="string" reminder="string" starred=(true | false | variable) notes="string" file=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### task: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### list: Wunderlist List Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### dueDate: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### reminder: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

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
with the text. Allows newlines.

---

### file: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Choose Variable
		```
**Allows Variables**: true



Accepts a variable.

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
		"ParameterKey": "WFWunderlistFile",
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
	"ParameterSummary": "Add ${WFWunderlistTitle} to ${WFWunderlistList}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFWunderlistTitle",
			"Label": "Task",
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
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFWunderlistFile",
			"Label": "File",
			"Placeholder": "Choose Variable"
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
