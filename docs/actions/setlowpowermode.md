
## Set Low Power Mode / setlowpowermode (internally `is.workflow.actions.lowpowermode.set`)


> This action requires that Shortcuts has permission to use WFSiriAccessResource,[object Object].


## description
### summary
Sets the device’s Low Power Mode to on or off.


### usage
`setlowpowermode lowpowermode=[string boolean|variable]`

### arguments
### Switch: Low Power Mode / lowpowermode (internally `OnValue`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

### source json

```json
{
	"ACECommandClass": "SASettingSetPowerSavingMode",
	"ACESettingValueKey": "OnValue",
	"ActionClass": "WFACESetSettingAction",
	"ActionKeywords": [
		"battery",
		"life",
		"charge"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Sets the device’s Low Power Mode to on or off."
	},
	"IconName": "Battery.png",
	"InputPassthrough": true,
	"Name": "Set Low Power Mode",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "OnValue",
			"Label": "Low Power Mode"
		}
	],
	"RequiredResources": [
		"WFSiriAccessResource",
		{
			"WFDeviceAttributes": {
				"WFDeviceAttributeIdiom": "Phone"
			},
			"WFResourceClass": "WFDeviceAttributesResource"
		}
	],
	"Subcategory": "Device",
	"UnsupportedEnvironments": [
		"WatchOS"
	]
}
```
