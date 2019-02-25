
## Remove Events / removeevents (internally `is.workflow.actions.removeevents`)


> This action requires that Shortcuts has permission to use WFCalendarAccessResource,WFUserInteractionResource.


## description
### summary
Removes all events passed into the action from the calendars they are contained in.


### usage
`removeevents includefutureevents=[string boolean|variable]`

### arguments
### Switch: Include Future Events / includefutureevents (internally `WFCalendarIncludeFutureEvents`)
**Allows Variables**: true



Accepts a boolean
or a variable.

### source json

```json
{
	"ActionClass": "WFRemoveCalendarItemsAction",
	"ActionKeywords": [
		"calendar",
		"delete"
	],
	"AppIdentifier": "com.apple.mobilecal",
	"Category": "Calendar",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionNote": "This is a destructive and permanent action. You will be asked to confirm before events are removed.",
		"DescriptionSummary": "Removes all events passed into the action from the calendars they are contained in."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"EKEvent"
		]
	},
	"InputPassthrough": false,
	"Name": "Remove Events",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Description": "When enabled, any repeats of an event in the future are also removed.",
			"Key": "WFCalendarIncludeFutureEvents",
			"Label": "Include Future Events"
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
