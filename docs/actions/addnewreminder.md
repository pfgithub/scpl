
## Add New Reminder / addnewreminder (internally `is.workflow.actions.addnewreminder`)

> This action requires that Shortcuts has permission to use WFReminderAccessResource.


## description

### summary

Creates a new reminder and adds it to the selected list of reminders.


### output

The new reminder

### usage
```
addnewreminder title="string" list=("string" | variable)] remindme=(true | false) remind=("At Time" | "At Location") wheni=("Enter" | "Leave") radius=number oflocation="string" alerttime="string" notes="string"
```

### arguments

---

### title: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Buy some milk"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### list: Calendar Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable with the name of the calendar.

---

### remindme: Expand Arrow [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)


Accepts a boolean for if this
parameter is expanded or not.
Often expanding fields will
enable or disable other
arguments. If you are using
labels, these can be ignored.

---

### remind: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true

**Only enabled if**: argument WFCalendarItemAlert == `true`

Accepts a string 
or variable
containing one of the options:

- `At Time`
- `At Location`

---

### wheni: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true

**Only enabled if**: argument WFCalendarItemAlert == `true`

**Only enabled if**: argument WFAlertTrigger == `At Location`

Accepts a string 
or variable
containing one of the options:

- `Enter`
- `Leave`

---

### radius: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `in meters`
**Default Value**: `300`
**Allows Variables**: true

**Only enabled if**: argument WFCalendarItemAlert == `true`

**Only enabled if**: argument WFAlertTrigger == `At Location`

		Accepts a number 
		or variable
		with a number.

---

### oflocation: Location [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"One Apple Park Way, Cupertino, CA"`
**Allows Variables**: true

**Only enabled if**: argument WFCalendarItemAlert == `true`

**Only enabled if**: argument WFAlertTrigger == `At Location`

Accepts a string 
or text
with the text.

---

### alerttime: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Tomorrow at 4pm"`
**Allows Variables**: true

**Only enabled if**: argument WFCalendarItemAlert == `true`

**Only enabled if**: argument WFAlertTrigger == `At Time`

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
