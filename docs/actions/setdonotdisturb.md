
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

**Only enabled if**: Device attributes match `{"WFDeviceAttributeSystemVersion":{"WFSystemVersion":"12.0","WFSystemVersionRelation":">="}}` This action is always enabled inside Shortcutslang.

Accepts a string 
or variable
containing one of the options:

- `Turned Off`
- `Time`
- `I Leave`
- `Event Ends`

---

### event: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true

**Only enabled if**: argument Enabled == `true`

**Only enabled if**: argument AssertionType == `Event Ends`

**Only enabled if**: Device attributes match `{"WFDeviceAttributeSystemVersion":{"WFSystemVersion":"12.0","WFSystemVersionRelation":">="}}` This action is always enabled inside Shortcutslang.

Accepts a variable.

---

### time: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"7 PM"`
**Allows Variables**: true

**Only enabled if**: argument Enabled == `true`

**Only enabled if**: argument AssertionType == `Time`

**Only enabled if**: Device attributes match `{"WFDeviceAttributeSystemVersion":{"WFSystemVersion":"12.0","WFSystemVersionRelation":">="}}` This action is always enabled inside Shortcutslang.

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
				},
				{
					"WFDeviceAttributes": {
						"WFDeviceAttributeSystemVersion": {
							"WFSystemVersion": "12.0",
							"WFSystemVersionRelation": ">="
						}
					},
					"WFResourceClass": "WFDeviceAttributesResource"
				}
			]
		},
		{
			"Class": "WFVariablePickerParameter",
			"Description": "The event after which to turn off Do Not Disturb",
			"IntentSlotName": "event",
			"Key": "Event",
			"Label": "Event",
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
				},
				{
					"WFDeviceAttributes": {
						"WFDeviceAttributeSystemVersion": {
							"WFSystemVersion": "12.0",
							"WFSystemVersionRelation": ">="
						}
					},
					"WFResourceClass": "WFDeviceAttributesResource"
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
				},
				{
					"WFDeviceAttributes": {
						"WFDeviceAttributeSystemVersion": {
							"WFSystemVersion": "12.0",
							"WFSystemVersionRelation": ">="
						}
					},
					"WFResourceClass": "WFDeviceAttributesResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Device"
}
```
