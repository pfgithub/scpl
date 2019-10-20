
## Show in Calendar / ShowinCalendar (internally `is.workflow.actions.showincalendar`)

> This action requires that Shortcuts has permission to use WFURLOpenResource.


## description

### summary

Shows the date or calendar event passed as input in the Calendar app.


### usage
```
ShowinCalendar (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### event: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Event
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFShowInCalendarAction",
	"ActionKeywords": [
		"date",
		"event",
		"show",
		"reveal"
	],
	"AppIdentifier": "com.apple.mobilecal",
	"Category": "Calendar",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Shows the date or calendar event passed as input in the Calendar app."
	},
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFEvent",
		"Required": true,
		"Types": [
			"WFDateContentItem",
			"WFCalendarEventContentItem",
			"WFTimeIntervalContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Show in Calendar",
	"ParameterSummary": "Show ${WFEvent} in Calendar",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFEvent",
			"Label": "Event",
			"Placeholder": "Event"
		}
	],
	"RequiredResources": [
		"WFURLOpenResource"
	],
	"Subcategory": "Calendar"
}
```
