
## Remove Events / RemoveEvents (internally `is.workflow.actions.removeevents`)

> This action requires that Shortcuts has permission to use WFCalendarAccessResource,WFUserInteractionResource.


## description

### summary

Removes all events passed into the action from the calendars they are contained in.


### note

This is a destructive and permanent action. You will be asked to confirm before events are removed.


### usage
```
RemoveEvents includeFutureEvents=(true | false | variable) events=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### includeFutureEvents: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### events: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Events
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
	"AppIdentifier": "com.apple.mobilecal",
	"BlocksOutput": true,
	"Category": "Calendar",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionNote": "This is a destructive and permanent action. You will be asked to confirm before events are removed.",
		"DescriptionSummary": "Removes all events passed into the action from the calendars they are contained in."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInputEvents",
		"Required": true,
		"Types": [
			"EKEvent"
		]
	},
	"InputPassthrough": false,
	"Name": "Remove Events",
	"ParameterSummary": "Remove ${WFInputEvents}",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Description": "When enabled, any repeats of an event in the future are also removed.",
			"Key": "WFCalendarIncludeFutureEvents",
			"Label": "Include Future Events"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInputEvents",
			"Label": "Events",
			"Placeholder": "Events"
		}
	],
	"RequiredResources": [
		"WFCalendarAccessResource",
		"WFUserInteractionResource"
	],
	"Subcategory": "Calendar",
	"WFCalendarItemEntityType": "Event"
}
```
