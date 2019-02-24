
## Vibrate Device / vibratedevice (internally `is.workflow.actions.vibrate`)


> This action requires that Shortcuts has permission to use [object Object].


## description
### summary
Vibrates the device for a short amount of time.


### usage
`vibratedevice hapticpattern=[string <${strInfo}>]`

### arguments
### Enumeration: Haptic Pattern / hapticpattern (internally `WFVibrateHapticType`)
**Default Value**: Default
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Default`
- `Up Direction`
- `Down Direction`
- `Success`
- `Failure`
- `Retry`
- `Start`
- `Stop`
- `Click`

### source json

```json
{
	"ActionClass": "WFVibrateAction",
	"ActionKeywords": [
		"vibration",
		"taptic",
		"haptic",
		"notification",
		"alert"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Vibrates the device for a short amount of time."
	},
	"IconName": "Notification.png",
	"InputPassthrough": true,
	"Name": "Vibrate Device",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Default",
			"Description": "When run on Apple Watch, the selected pattern will be tapped on to your wrist.",
			"Hidden": true,
			"Items": [
				"Default",
				"Up Direction",
				"Down Direction",
				"Success",
				"Failure",
				"Retry",
				"Start",
				"Stop",
				"Click"
			],
			"Key": "WFVibrateHapticType",
			"Label": "Haptic Pattern",
			"RequiredResources": [
				{
					"WFResourceClass": "WFWorkflowTypeResource",
					"WFWorkflowType": "WatchKit"
				}
			]
		}
	],
	"RequiredResources": [
		{
			"WFDeviceAttributes": {
				"WFDeviceAttributeCapabilities": [
					"Vibration"
				]
			},
			"WFResourceClass": "WFDeviceAttributesResource"
		}
	],
	"Subcategory": "Notification"
}
```
