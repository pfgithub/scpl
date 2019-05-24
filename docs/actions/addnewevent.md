
## Add New Event / AddNewEvent (internally `is.workflow.actions.addnewevent`)

> This action requires that Shortcuts has permission to use WFCalendarAccessResource.


## description

### summary

Creates a new event and adds it to the selected calendar.


### output

The new event

### usage
```
AddNewEvent title="string" location="string" calendar=("string" | variable)] date=(true | false) startDate="string" endDate="string" allDay=(true | false | variable) alert=("At time of event" | "5 minutes before" | "15 minutes before" | "30 minutes before" | "1 hour before" | "2 hours before" | "1 day before" | "2 days before" | "1 week before" | "Custom") alertTime="string" notes="string"
```

### arguments

---

### title: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Lunch with Tim"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### location: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### calendar: Calendar Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### date: Expand Arrow [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)


Accepts a boolean for if this
parameter is expanded or not.
Often expanding fields will
enable or disable other
arguments. If you are using
labels, these can be ignored.

---

### startDate: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Tomorrow at noon"`
**Allows Variables**: true

**Only enabled if**: argument WFCalendarItemDates == `true`

Accepts a string 
or text
with the text.

---

### endDate: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Tomorrow at 1pm"`
**Allows Variables**: true

**Only enabled if**: argument WFCalendarItemDates == `true`

Accepts a string 
or text
with the text.

---

### allDay: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true

**Only enabled if**: argument WFCalendarItemDates == `true`

Accepts a boolean
or a variable.

---

### alert: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
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

### alertTime: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Tomorrow at 4pm"`
**Allows Variables**: true

**Only enabled if**: argument WFAlertTime == `Custom`

Accepts a string 
or text
with the text.

---

### notes: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Notes"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json (for developers)

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
