
## Add Todoist Item / addtodoistitem (internally `is.workflow.actions.todoist.add`)

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
addtodoistitem content="string" project=("string" | variable)] duedate="string" remindmeon="string" remindertype=("Email" | "Push Notification" | "Text Message") priority=("4" | "3" | "2" | "1") notes="string"
```

### arguments

---

### content: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Buy some milk"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### project: Todoist Project Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Default Value**: ```
		Inbox
		```
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### duedate: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"May 23"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### remindmeon: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"May 23 at 1 PM"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### remindertype: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
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
with the text.

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
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFTodoistContent",
			"Label": "Content",
			"Placeholder": "Buy some milk",
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
