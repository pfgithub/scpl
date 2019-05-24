
## Get Upcoming Reminders / GetUpcomingReminders (internally `is.workflow.actions.getupcomingreminders`)

> This action requires that Shortcuts has permission to use WFReminderAccessResource.


## description

### summary

Gets upcoming reminders, ordered from nearest to farthest away due date.


### usage
```
GetUpcomingReminders list=("string" | variable)] WFGetUpcomingItemCount=number
```

### arguments

---

### list: Calendar Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### WFGetUpcomingItemCount: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**: `1`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetUpcomingCalendarItemsAction",
	"ActionKeywords": [
		"calendar",
		"reminder",
		"next",
		"upcoming"
	],
	"AppIdentifier": "com.apple.reminders",
	"Category": "Calendar",
	"Description": {
		"DescriptionSummary": "Gets upcoming reminders, ordered from nearest to farthest away due date."
	},
	"LastModifiedDate": "2015-02-03T08:00:00.000Z",
	"Name": "Get Upcoming Reminders",
	"Output": {
		"Multiple": true,
		"OutputName": "Upcoming Reminders",
		"Types": [
			"EKReminder"
		]
	},
	"Parameters": [
		{
			"AllowsAllCalendars": true,
			"Class": "WFCalendarPickerParameter",
			"EventKitEntityType": "Reminder",
			"Key": "WFGetUpcomingItemCalendar",
			"Label": "List"
		},
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFGetUpcomingItemCount",
			"StepperDescription": "Number of Reminders",
			"StepperNoun": "Reminder",
			"StepperPluralNoun": "Reminders",
			"StepperPrefix": "Get"
		}
	],
	"RequiredResources": [
		"WFReminderAccessResource"
	],
	"ShortName": "Get Reminders",
	"Subcategory": "Reminders",
	"WFGetUpcomingItemType": 1
}
```
