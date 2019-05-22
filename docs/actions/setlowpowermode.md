
## Set Low Power Mode / SetLowPowerMode (internally `is.workflow.actions.lowpowermode.set`)

> This action requires that Shortcuts has permission to use WFSiriAccessResource,[object Object].


## description

### summary

Sets the device’s Low Power Mode to on or off.


### usage
```
SetLowPowerMode (true | false | variable)
```

### arguments

---

### LowPowerMode: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

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
