
## Add New Event / addnewevent (internally `is.workflow.actions.addnewevent`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFCalendarAccessResource.


## description
### summary
Creates a new event and adds it to the selected calendar.

### output
The new event

### usage
`addnewevent title=[string|text] location=[string|text] undefined=[???] date=[string boolean] undefined=[???] undefined=[???] allday=[string boolean|variable] alert=[string <${strInfo}>] alerttime=[string|text] notes=[string|text]`

### arguments
### Text Input: Title / title (internally `WFCalendarItemTitle`)
**Placeholder**: Lunch with Tim
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Location / location (internally `WFCalendarItemLocation`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFCalendarPickerParameter

---

### Expand Arrow: Date / date (internally `WFCalendarItemDates`)


Accepts a string with either true or false for if this
parameter is expanded or not.

---

This paramtype is not implemented. WFDateFieldParameter

---

This paramtype is not implemented. WFDateFieldParameter

---

### Switch: All Day / allday (internally `WFCalendarItemAllDay`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Enumeration: Alert / alert (internally `WFAlertTime`)
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `At time of event`
- `5 minutes before`
- `15 minutes before`
- `30 minutes before`
- `1 hour before`
- `2 hours before`
- `1 day before`
- `2 days before`
- `1 week before`
- `Custom`

---

### Text Input: Alert Time / alerttime (internally `WFAlertCustomTime`)
**Placeholder**: Tomorrow at 4pm
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Notes / notes (internally `WFCalendarItemNotes`)
**Placeholder**: Notes
**Allows Variables**: true


Accepts a string 
or text
with the text.

### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFAddNewEventAction",
	"ActionKeywords": [
		"create",
		"calendar"
	],
	"AppIdentifier": "com.apple.mobilecal",
	"Category": "Calendar",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionResult": "The new event",
		"DescriptionSummary": "Creates a new event and adds it to the selected calendar."
	},
	"InputPassthrough": false,
	"Name": "Add New Event",
	"Output": {
		"Multiple": false,
		"OutputName": "New Event",
		"Types": [
			"EKEvent"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Description": "The title of this event.",
			"Key": "WFCalendarItemTitle",
			"Label": "Title",
			"Placeholder": "Lunch with Tim",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFCalendarItemLocation",
			"Label": "Location",
			"Placeholder": "optional",
			"TextAlignment": "Right",
			"TextContentType": "Location"
		},
		{
			"Class": "WFCalendarPickerParameter",
			"Description": "The calendar to add this event to.",
			"EventKitEntityType": "Event",
			"Key": "WFCalendarItemCalendar",
			"Label": "Calendar"
		},
		{
			"Class": "WFExpandingParameter",
			"Key": "WFCalendarItemDates",
			"Label": "Date"
		},
		{
			"Class": "WFDateFieldParameter",
			"Description": "Text representing the date this event begins. Examples: “tomorrow at 2”, “January 3”, “8:00pm”",
			"HintDisplayMode": "WhileProcessing",
			"Key": "WFCalendarItemStartDate",
			"Label": "Start Date",
			"Placeholder": "Tomorrow at noon",
			"ReactiveParameterKey": "WFCalendarItemEndDate",
			"RequiredResources": [
				{
					"WFParameterKey": "WFCalendarItemDates",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFDateFieldParameter",
			"Description": "Text representing the date this event finishes.",
			"HintDisplayMode": "WhileProcessing",
			"Key": "WFCalendarItemEndDate",
			"Label": "End Date",
			"Placeholder": "Tomorrow at 1pm",
			"RequiredResources": [
				{
					"WFParameterKey": "WFCalendarItemDates",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFSwitchParameter",
			"Description": "When enabled, the event takes place over an entire day and time is ignored.",
			"Key": "WFCalendarItemAllDay",
			"Label": "All Day",
			"RequiredResources": [
				{
					"WFParameterKey": "WFCalendarItemDates",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"Description": "Optionally, when to show an alert to notify me of this event.",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Items": [
				"At time of event",
				"5 minutes before",
				"15 minutes before",
				"30 minutes before",
				"1 hour before",
				"2 hours before",
				"1 day before",
				"2 days before",
				"1 week before",
				"Custom"
			],
			"Key": "WFAlertTime",
			"Label": "Alert"
		},
		{
			"Class": "WFTextInputParameter",
			"Description": "Text representing the date when the alert should occur. Examples: “tonight at 7”, “March 7”",
			"Key": "WFAlertCustomTime",
			"Label": "Alert Time",
			"Placeholder": "Tomorrow at 4pm",
			"RequiredResources": [
				{
					"WFParameterKey": "WFAlertTime",
					"WFParameterValue": "Custom",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Description": "Optionally, a description for this event.",
			"Key": "WFCalendarItemNotes",
			"Label": "Notes",
			"Multiline": true,
			"Placeholder": "Notes"
		}
	],
	"RequiredResources": [
		"WFCalendarAccessResource"
	],
	"ShortName": "Add Event",
	"Subcategory": "Calendar"
}
```
</p></details>
