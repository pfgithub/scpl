
## Set Do Not Disturb / SetDoNotDisturb (internally `is.workflow.actions.dnd.set`)


## description

### summary

Sets the device’s Do Not Disturb to on or off


### usage
```
SetDoNotDisturb doNotDisturb=(true | false | variable) until=("Turned Off" | "Time" | "I Leave" | "Event Ends") event=(v:myvar | mv:myvar | s:myvar) time="string"
```

### arguments

---

### doNotDisturb: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### until: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Turned Off"`
**Allows Variables**: true

**Only enabled if**: argument Enabled == `true`

Accepts a string 
or variable
containing one of the options:

- `Turned Off`
- `Time`
- `I Leave`
- `Event Ends`

---

### event: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Event
		```
**Allows Variables**: true

**Only enabled if**: argument Enabled == `true`

**Only enabled if**: argument AssertionType == `Event Ends`

Accepts a variable.

---

### time: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"7 PM"`
**Allows Variables**: true

**Only enabled if**: argument Enabled == `true`

**Only enabled if**: argument AssertionType == `Time`

Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

```json
{
	"ActionClass": "WFToggleDoNotDisturbAction",
	"ActionKeywords": [
		"dnd",
		"toggle",
		"turn"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Sets the device’s Do Not Disturb to on or off"
	},
	"IconName": "DoNotDisturb.png",
	"InputPassthrough": true,
	"IntentIdentifier": "sirikit.intents.custom.com.apple.DoNotDisturb.Intents.DNDToggleDoNotDisturbIntent",
	"Name": "Set Do Not Disturb",
	"ParameterSummary": {
		"Enabled": "Turn Do Not Disturb ${Enabled}",
		"Enabled(1),AssertionType(Event Ends),Event": "Turn Do Not Disturb ${Enabled} until ${AssertionType} ${Event}",
		"Enabled(1),AssertionType(I Leave)": "Turn Do Not Disturb ${Enabled} until ${AssertionType}",
		"Enabled(1),AssertionType(Time),Time": "Turn Do Not Disturb ${Enabled} until ${AssertionType} ${Time}",
		"Enabled(1),AssertionType(Turned Off)": "Turn Do Not Disturb ${Enabled} until ${AssertionType}"
	},
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"IntentSlotName": "state",
			"Key": "Enabled",
			"Label": "Do Not Disturb"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Turned Off",
			"Items": [
				"Turned Off",
				"Time",
				"I Leave",
				"Event Ends"
			],
			"Key": "AssertionType",
			"Label": "Until",
			"RequiredResources": [
				{
					"WFParameterKey": "Enabled",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFVariablePickerParameter",
			"Description": "The event after which to turn off Do Not Disturb",
			"IntentSlotName": "event",
			"Key": "Event",
			"Label": "Event",
			"Placeholder": "Event",
			"RequiredResources": [
				{
					"WFParameterKey": "Enabled",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "AssertionType",
					"WFParameterValue": "Event Ends",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFDateFieldParameter",
			"Description": "The time after which to turn off Do Not Disturb",
			"HintDisplayMode": "Always",
			"IntentSlotName": "duration",
			"Key": "Time",
			"Label": "Time",
			"Placeholder": "7 PM",
			"RequiredResources": [
				{
					"WFParameterKey": "Enabled",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "AssertionType",
					"WFParameterValue": "Time",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Device"
}
```
