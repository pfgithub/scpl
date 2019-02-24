
## Add New Reminder / addnewreminder (internally `is.workflow.actions.addnewreminder`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFReminderAccessResource.


## description
### summary
Creates a new reminder and adds it to the selected list of reminders.

### output
The new reminder

### usage
`addnewreminder title=[string|text] undefined=[???] remindme=[string boolean] remind=[string <${strInfo}>] wheni=[string <${strInfo}>] radius=[string number] undefined=[???] undefined=[???] notes=[string|text]`

### arguments
### Text Input: Title / title (internally `WFCalendarItemTitle`)
**Placeholder**: Buy some milk
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFCalendarPickerParameter

---

### Expand Arrow: Remind Me / remindme (internally `WFCalendarItemAlert`)


Accepts a string with either true or false for if this
parameter is expanded or not.

---

### Enumeration: Remind / remind (internally `WFAlertTrigger`)
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `At Time`
- `At Location`

---

### Enumeration: When I... / wheni (internally `WFAlertLocationProximity`)
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Enter`
- `Leave`

---

### Number: Radius / radius (internally `WFAlertLocationRadius`)
**Placeholder**: in meters
**Default Value**: 300
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

This paramtype is not implemented. WFLocationFieldParameter

---

This paramtype is not implemented. WFDateFieldParameter

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
	"ActionClass": "WFAddNewReminderAction",
	"ActionKeywords": [
		"create",
		"calendar",
		"task",
		"todo",
		"to-do"
	],
	"AppIdentifier": "com.apple.reminders",
	"Category": "Calendar",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionResult": "The new reminder",
		"DescriptionSummary": "Creates a new reminder and adds it to the selected list of reminders."
	},
	"InputPassthrough": false,
	"Name": "Add New Reminder",
	"Output": {
		"Multiple": false,
		"OutputName": "New Reminder",
		"Types": [
			"EKReminder"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Description": "The title of this reminder.",
			"Key": "WFCalendarItemTitle",
			"Label": "Title",
			"Placeholder": "Buy some milk",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFCalendarPickerParameter",
			"Description": "The list of reminders to add this reminder to.",
			"EventKitEntityType": "Reminder",
			"Key": "WFCalendarItemCalendar",
			"Label": "List"
		},
		{
			"Class": "WFExpandingParameter",
			"Description": "Optionally, where or when to show an alert to notify me of this reminder.",
			"Key": "WFCalendarItemAlert",
			"Label": "Remind Me"
		},
		{
			"Class": "WFEnumerationParameter",
			"Items": [
				"At Time",
				"At Location"
			],
			"Key": "WFAlertTrigger",
			"Label": "Remind",
			"RequiredResources": [
				{
					"WFParameterKey": "WFCalendarItemAlert",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"Items": [
				"Enter",
				"Leave"
			],
			"Key": "WFAlertLocationProximity",
			"Label": "When I...",
			"RequiredResources": [
				{
					"WFParameterKey": "WFCalendarItemAlert",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFAlertTrigger",
					"WFParameterValue": "At Location",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 300,
			"Description": "The distance (in meters) from the provided location to consider “entering” or “leaving” the location.",
			"Key": "WFAlertLocationRadius",
			"Label": "Radius",
			"Placeholder": "in meters",
			"RequiredResources": [
				{
					"WFParameterKey": "WFCalendarItemAlert",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFAlertTrigger",
					"WFParameterValue": "At Location",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFLocationFieldParameter",
			"Description": "Text representing the address or coordinates of the location that triggers the alert.",
			"HintDisplayMode": "WhileProcessing",
			"Key": "WFAlertLocation",
			"Label": "Of Location",
			"Placeholder": "One Apple Park Way, Cupertino, CA",
			"RequiredResources": [
				{
					"WFParameterKey": "WFCalendarItemAlert",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFAlertTrigger",
					"WFParameterValue": "At Location",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFDateFieldParameter",
			"Description": "Text representing the date when the alert should occur. Examples: “tonight at 7”, “March 7”",
			"HintDisplayMode": "WhileProcessing",
			"Key": "WFAlertCustomTime",
			"Label": "Alert Time",
			"Placeholder": "Tomorrow at 4pm",
			"RequiredResources": [
				{
					"WFParameterKey": "WFCalendarItemAlert",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFAlertTrigger",
					"WFParameterValue": "At Time",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Description": "Optionally, a description for this reminder.",
			"Key": "WFCalendarItemNotes",
			"Label": "Notes",
			"Multiline": true,
			"Placeholder": "Notes"
		}
	],
	"RequiredResources": [
		"WFReminderAccessResource"
	],
	"ShortName": "Add Reminder",
	"Subcategory": "Reminders"
}
```
</p></details>
