
## Show in Calendar / showincalendar (internally `is.workflow.actions.showincalendar`)


> This action requires that Shortcuts has permission to use WFURLOpenResource.


## description
### summary
Shows the date or calendar event passed as input in the Calendar app.


### usage
`showincalendar `

### arguments


### source json

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
		"Required": true,
		"Types": [
			"WFDateContentItem",
			"WFCalendarEventContentItem",
			"WFTimeIntervalContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Show in Calendar",
	"RequiredResources": [
		"WFURLOpenResource"
	],
	"Subcategory": "Calendar"
}
```
