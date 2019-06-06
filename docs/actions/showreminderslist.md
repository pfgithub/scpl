
## Show Reminders List / ShowRemindersList (internally `is.workflow.actions.reminders.showlist`)

> This action requires that Shortcuts has permission to use WFReminderAccessResource.


## description

### summary

Shows the specified list in the Reminders app.


### usage
```
ShowRemindersList ("string" | variable)]
```

### arguments

---

### list: Calendar Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### source json (for developers)

```json
{
	"ActionClass": "WFShowRemindersListAction",
	"ActionKeywords": [
		"task",
		"todo",
		"to-do"
	],
	"AppIdentifier": "com.apple.reminders",
	"Category": "Calendar",
	"Description": {
		"DescriptionSummary": "Shows the specified list in the Reminders app."
	},
	"Name": "Show Reminders List",
	"ParameterSummary": "Show ${WFList}",
	"Parameters": [
		{
			"Class": "WFCalendarPickerParameter",
			"Description": "The list to show",
			"EventKitEntityType": "Reminder",
			"Key": "WFList",
			"Label": "List"
		}
	],
	"RequiredResources": [
		"WFReminderAccessResource"
	],
	"Subcategory": "Reminders"
}
```
