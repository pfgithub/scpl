
## Add New Reminder / AddNewReminder (internally `is.workflow.actions.addnewreminder`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFReminderAccessResource,[object Object].


## description

### summary

Creates a new reminder and adds it to the selected list of reminders.


### output

The new reminder

### usage
```
AddNewReminder reminder="string" list=("string" | variable)] alert=("No Alert" | "Alert") trigger=("At Time" | "When I Arrive" | "When I Leave") undefined=NotImplemented undefined=NotImplemented 200PM="string" notes="string"
```

### arguments

---

### reminder: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### list: Calendar Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### alert: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"No Alert"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `No Alert`
- `Alert`

---

### trigger: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"At Time"`
**Allows Variables**: true

**Only enabled if**: argument WFAlertEnabled == `Alert`

Accepts a string 
or variable
containing one of the options:

- `At Time`
- `When I Arrive`
- `When I Leave`

---

#### This parameter is not implemented yet.

The parameter type is WFLocationParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

#### This parameter is not implemented yet.

The parameter type is WFUnitQuantityFieldParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### 200PM: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true

**Only enabled if**: argument WFAlertEnabled == `Alert`

**Only enabled if**: argument WFAlertCondition == `At Time`

Accepts a string 
or text
with the text. Does not allow newlines.

---

### notes: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Notes"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Allows newlines.

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
	"ParameterSummary": {
		"WFCalendarItemTitle,WFCalendarItemCalendar,WFAlertEnabled(Alert),WFAlertCondition(At Time),WFAlertCustomTime,WFCalendarItemNotes": "Add ${WFCalendarItemTitle} to ${WFCalendarItemCalendar} with ${WFAlertEnabled} ${WFAlertCondition} ${WFAlertCustomTime}",
		"WFCalendarItemTitle,WFCalendarItemCalendar,WFAlertEnabled(Alert),WFAlertCondition(When I Arrive),WFAlertLocation,WFCalendarItemNotes,WFAlertLocationRadius": "Add ${WFCalendarItemTitle} to ${WFCalendarItemCalendar} with ${WFAlertEnabled} ${WFAlertCondition} at ${WFAlertLocation}",
		"WFCalendarItemTitle,WFCalendarItemCalendar,WFAlertEnabled(Alert),WFAlertCondition(When I Leave),WFAlertLocation,WFCalendarItemNotes,WFAlertLocationRadius": "Add ${WFCalendarItemTitle} to ${WFCalendarItemCalendar} with ${WFAlertEnabled} ${WFAlertCondition} from ${WFAlertLocation}",
		"WFCalendarItemTitle,WFCalendarItemCalendar,WFAlertEnabled(No Alert),WFCalendarItemNotes": "Add ${WFCalendarItemTitle} to ${WFCalendarItemCalendar} with ${WFAlertEnabled}"
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Description": "The title of this reminder.",
			"Key": "WFCalendarItemTitle",
			"Label": "Reminder",
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
			"Class": "WFEnumerationParameter",
			"DefaultValue": "No Alert",
			"Items": [
				"No Alert",
				"Alert"
			],
			"Key": "WFAlertEnabled",
			"Label": "Alert"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "At Time",
			"Items": [
				"At Time",
				"When I Arrive",
				"When I Leave"
			],
			"Key": "WFAlertCondition",
			"Label": "Trigger",
			"RequiredResources": [
				{
					"WFParameterKey": "WFAlertEnabled",
					"WFParameterValue": "Alert",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFLocationParameter",
			"Description": "Text representing the address or coordinates of the location that triggers the alert.",
			"Key": "WFAlertLocation",
			"Label": "Location",
			"RequiredResources": [
				{
					"WFParameterKey": "WFAlertEnabled",
					"WFParameterValue": "Alert",
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFAlertCondition",
					"WFParameterValues": [
						"When I Arrive",
						"When I Leave"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFUnitQuantityFieldParameter",
			"DefaultUnit": "ft",
			"DefaultValue": 1000,
			"Description": "The distance from the provided location to consider \"arriving\" or \"leaving\" the location",
			"Key": "WFAlertLocationRadius",
			"Label": "Radius",
			"RequiredResources": [
				{
					"WFParameterKey": "WFAlertEnabled",
					"WFParameterValue": "Alert",
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFAlertCondition",
					"WFParameterValues": [
						"When I Arrive",
						"When I Leave"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right",
			"WFUnitType": "Length"
		},
		{
			"Class": "WFDateFieldParameter",
			"Description": "Text representing the date when the alert should occur. Examples: “tonight at 7”, “March 7”",
			"HintDisplayMode": "WhileProcessing",
			"Key": "WFAlertCustomTime",
			"Label": "2:00 PM",
			"RequiredResources": [
				{
					"WFParameterKey": "WFAlertEnabled",
					"WFParameterValue": "Alert",
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFAlertCondition",
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
		"WFReminderAccessResource",
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFAlertLocation",
					"WFParameterValue": {
						"isCurrentLocation": true
					},
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFLocationAccessResource"
		}
	],
	"ShortName": "Add Reminder",
	"Subcategory": "Reminders",
	"WatchCompatible": true
}
```
