
## Set Do Not Disturb / setdonotdisturb (internally `is.workflow.actions.dnd.set`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Sets the device’s Do Not Disturb to on or off


### usage
`setdonotdisturb a{donotdisturb=[string boolean|variable] until=[string <${strInfo}>] event=[variable] undefined=[???]}`

### arguments
### Switch: Do Not Disturb / donotdisturb (internally `Enabled`)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### Enumeration: Until / until (internally `AssertionType`)
**Default Value**:
```
Turned Off
```
**Allows Variables**: true

**Only enabled if**: argument Enabled = `true`
**Only enabled if**: Device attributes match `{"WFDeviceAttributeSystemVersion":{"WFSystemVersion":"12.0","WFSystemVersionRelation":">="}}` This action is always enabled inside Shortcutslang.

Accepts a string 
or variable
containing one of the options:

- `Turned Off`
- `Time`
- `I Leave`
- `Event Ends`

---

### Variable Picker: Event / event (internally `Event`)
**Allows Variables**: true

**Only enabled if**: argument Enabled = `true`
**Only enabled if**: argument AssertionType = `Event Ends`
**Only enabled if**: Device attributes match `{"WFDeviceAttributeSystemVersion":{"WFSystemVersion":"12.0","WFSystemVersionRelation":">="}}` This action is always enabled inside Shortcutslang.

Accepts a variable.

---

This paramtype is not implemented. WFDateFieldParameter

### source json

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
