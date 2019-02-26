
## Set Airplane Mode / setairplanemode (internally `is.workflow.actions.airplanemode.set`)

> This action requires that Shortcuts has permission to use WFSiriAccessResource.


## description

### summary

Sets the device’s Airplane Mode to on or off.


### usage
```
setairplanemode a{airplanemode=[string boolean|variable]}
```

### arguments

---

### Switch: Airplane Mode / airplanemode (internally `OnValue`)
**Default Value**:
```
true
```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json

```json
{
	"ACECommandClass": "SASettingSetAirplaneMode",
	"ACESettingValueKey": "OnValue",
	"ActionClass": "WFACESetSettingAction",
	"ActionKeywords": [
		"airport",
		"wi-fi",
		"bluetooth",
		"cellular"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Sets the device’s Airplane Mode to on or off."
	},
	"IconName": "AirplaneMode.png",
	"InputPassthrough": true,
	"Name": "Set Airplane Mode",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "OnValue",
			"Label": "Airplane Mode"
		}
	],
	"RequiredResources": [
		"WFSiriAccessResource"
	],
	"Subcategory": "Device",
	"UnsupportedEnvironments": [
		"WatchOS"
	]
}
```
