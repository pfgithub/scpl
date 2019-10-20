
## Set Airplane Mode / SetAirplaneMode (internally `is.workflow.actions.airplanemode.set`)

> This action requires that Shortcuts has permission to use WFSiriAccessResource.


## description

### summary

Sets the device’s Airplane Mode to on or off.


### usage
```
SetAirplaneMode (true | false | variable)
```

### arguments

---

### airplaneMode: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
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
	"ACECommandClass": "SASettingSetAirplaneMode",
	"ACESettingValueKey": "OnValue",
	"ActionClass": "WFACESetSettingAction",
	"ActionKeywords": [
		"airport",
		"wi-fi",
		"bluetooth",
		"cellular",
		"turn",
		"toggle"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Sets the device’s Airplane Mode to on or off."
	},
	"IconName": "AirplaneMode.png",
	"InputPassthrough": true,
	"Name": "Set Airplane Mode",
	"ParameterSummary": "Turn Airplane Mode ${OnValue}",
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
	"Subcategory": "Network",
	"UnsupportedEnvironments": [
		"WatchOS"
	]
}
```
