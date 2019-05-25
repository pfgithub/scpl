
## Get Upcoming Events / GetUpcomingEvents (internally `is.workflow.actions.getupcomingevents`)

> This action requires that Shortcuts has permission to use WFCalendarAccessResource.


## description

### summary

Gets upcoming calendar events, ordered from nearest to farthest away in time.


### usage
```
GetUpcomingEvents calendar=("string" | variable)] WFGetUpcomingItemCount=number day=("Any Day" | "Today" | "Tomorrow" | "Specified Day") specifiedDay="string"
```

### arguments

---

### calendar: Calendar Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
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

### day: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Any Day"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Any Day`
- `Today`
- `Tomorrow`
- `Specified Day`

---

### specifiedDay: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"June 29, 2007"`
**Allows Variables**: true

**Only enabled if**: argument WFDateSpecifier == `Specified Day`

Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

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
