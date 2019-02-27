
## Get Upcoming Events / getupcomingevents (internally `is.workflow.actions.getupcomingevents`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFCalendarAccessResource.


## description

### summary

Gets upcoming calendar events, ordered from nearest to farthest away in time.


### usage
```
getupcomingevents a{undefined=[???] wfgetupcomingitemcount=[string integer] day=[string <Any Day | Today | Tomorrow | Specified Day>] undefined=[???]}
```

### arguments

---

#### This paramtype is not implemented. WFCalendarPickerParameter

---

### Stepper Number: wfgetupcomingitemcount / wfgetupcomingitemcount (internally `WFGetUpcomingItemCount`)
**Default Value**:
```
1
```
**Allows Variables**: true



Accepts a string 
or variable
containing an integer value.

---

### Enumeration: Day / day (internally `WFDateSpecifier`)
**Default Value**:
```
Any Day
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Any Day`
- `Today`
- `Tomorrow`
- `Specified Day`

---

#### This paramtype is not implemented. WFDateFieldParameter

---

### source json

```json
{
	"ActionClass": "WFGetUpcomingCalendarItemsAction",
	"ActionKeywords": [
		"calendar",
		"event",
		"events",
		"next",
		"upcoming"
	],
	"AppIdentifier": "com.apple.mobilecal",
	"Category": "Calendar",
	"Description": {
		"DescriptionSummary": "Gets upcoming calendar events, ordered from nearest to farthest away in time."
	},
	"LastModifiedDate": "2015-02-03T08:00:00.000Z",
	"Name": "Get Upcoming Events",
	"Output": {
		"Multiple": true,
		"OutputName": "Upcoming Events",
		"Types": [
			"EKEvent"
		]
	},
	"Parameters": [
		{
			"AllowsAllCalendars": true,
			"Class": "WFCalendarPickerParameter",
			"EventKitEntityType": "Event",
			"Key": "WFGetUpcomingItemCalendar",
			"Label": "Calendar"
		},
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFGetUpcomingItemCount",
			"StepperDescription": "Number of Events",
			"StepperNoun": "Event",
			"StepperPluralNoun": "Events",
			"StepperPrefix": "Get"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Any Day",
			"Items": [
				"Any Day",
				"Today",
				"Tomorrow",
				"Specified Day"
			],
			"Key": "WFDateSpecifier",
			"Label": "Day"
		},
		{
			"Class": "WFDateFieldParameter",
			"HintDateMode": "Date",
			"Key": "WFSpecifiedDate",
			"Label": "Specified Day",
			"Placeholder": "June 29, 2007",
			"RequiredResources": [
				{
					"WFParameterKey": "WFDateSpecifier",
					"WFParameterValue": "Specified Day",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"RequiredResources": [
		"WFCalendarAccessResource"
	],
	"ShortName": "Get Events",
	"Subcategory": "Calendar",
	"WFGetUpcomingItemType": 0
}
```
