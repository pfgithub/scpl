
## Remove Reminders / RemoveReminders (internally `is.workflow.actions.removereminders`)

> This action requires that Shortcuts has permission to use WFReminderAccessResource,WFUserInteractionResource.


## description

### summary

Removes all reminders passed into the action from the lists they are contained in.


### note

This is a destructive and permanent action. You will be asked to confirm before reminders are removed.


### usage
```
RemoveReminders (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### reminders: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Reminders
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFRemoveCalendarItemsAction",
	"ActionKeywords": [
		"calendar",
		"delete"
	],
	"AppIdentifier": "com.apple.reminders",
	"BlocksOutput": true,
	"Category": "Calendar",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionNote": "This is a destructive and permanent action. You will be asked to confirm before reminders are removed.",
		"DescriptionSummary": "Removes all reminders passed into the action from the lists they are contained in."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInputReminders",
		"Required": true,
		"Types": [
			"EKReminder"
		]
	},
	"InputPassthrough": false,
	"Name": "Remove Reminders",
	"ParameterSummary": "Remove ${WFInputReminders}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInputReminders",
			"Label": "Reminders",
			"Placeholder": "Reminders"
		}
	],
	"RequiredResources": [
		"WFReminderAccessResource",
		"WFUserInteractionResource"
	],
	"Subcategory": "Reminders",
	"WFCalendarItemEntityType": "Reminder"
}
```
