
## Add Todoist Item / AddTodoistItem (internally `is.workflow.actions.todoist.add`)

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Adds a new item to Todoist.


### input

Files to attach to the item


### output

The URL of the newly created item

### usage
```
AddTodoistItem item="string" project=("string" | variable)] dueDate="string" remindMeOn="string" reminderType=("Email" | "Push Notification" | "Text Message") priority=("4" | "3" | "2" | "1") notes="string" files=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### item: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### project: Todoist Project Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Default Value**: ```
		Inbox
		```
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### dueDate: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"May 23"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### remindMeOn: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"May 23 at 1 PM"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### reminderType: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Email"`
**Allows Variables**: true

**Only enabled if**: argument WFTodoistReminder != ``

Accepts a string 
or variable
containing one of the options:

- `Email`
- `Push Notification`
- `Text Message`

---

### priority: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"4"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `4`
- `3`
- `2`
- `1`

---

### notes: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Notes"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Allows newlines.

---

### files: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Choose Variable
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFTodoistAddAction",
	"ActionKeywords": [
		"note",
		"text",
		"todo",
		"to-do",
		"task"
	],
	"AppIdentifier": "com.todoist.ios",
	"Category": "Text",
	"CreationDate": "2015-05-08T05:00:00.000Z",
	"Description": {
		"DescriptionInput": "Files to attach to the item",
		"DescriptionResult": "The URL of the newly created item",
		"DescriptionSummary": "Adds a new item to Todoist."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFTodoistFile",
		"Required": false,
		"Types": [
			"WFGenericFileContentItem"
		]
	},
	"LastModifiedDate": "2015-08-20T07:00:00.000Z",
	"Name": "Add Todoist Item",
	"Output": {
		"Multiple": false,
		"OutputName": "Todoist Item",
		"Types": [
			"NSURL"
		]
	},
	"ParameterSummary": "Add ${WFTodoistContent}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFTodoistContent",
			"Label": "Item",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTodoistProjectPickerParameter",
			"DefaultValue": "Inbox",
			"Key": "WFTodoistProject",
			"Label": "Project"
		},
		{
			"Class": "WFDateFieldParameter",
			"HintDateMode": "Date",
			"Key": "WFTodoistDueDate",
			"Label": "Due Date",
			"Placeholder": "May 23",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFDateFieldParameter",
			"Key": "WFTodoistReminder",
			"Label": "Remind Me On",
			"Placeholder": "May 23 at 1 PM",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Email",
			"Items": [
				"Email",
				"Push Notification",
				"Text Message"
			],
			"Key": "WFTodoistReminderType",
			"Label": "Reminder Type",
			"RequiredResources": [
				{
					"WFParameterKey": "WFTodoistReminder",
					"WFParameterRelation": "!=",
					"WFParameterValue": "",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "4",
			"Items": [
				"4",
				"3",
				"2",
				"1"
			],
			"Key": "WFTodoistPriority",
			"Label": "Priority"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFTodoistNotes",
			"Label": "Notes",
			"Multiline": true,
			"Placeholder": "Notes"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFTodoistFile",
			"Label": "Files",
			"Placeholder": "Choose Variable"
		}
	],
	"RequiredResources": [
		{
			"WFAccountClass": "WFTodoistAccount",
			"WFResourceClass": "WFAccountAccessResource"
		}
	]
}
```
