
## Get Upcoming Reminders / getupcomingreminders (internally `is.workflow.actions.getupcomingreminders`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFReminderAccessResource.


## description

### summary

Gets upcoming reminders, ordered from nearest to farthest away due date.


### usage
```
getupcomingreminders undefined=NotImplemented wfgetupcomingitemcount=number
```

### arguments

---

#### This paramtype is not implemented. WFCalendarPickerParameter

---

### wfgetupcomingitemcount: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
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
