
## Set Wi-Fi / SetWiFi (internally `is.workflow.actions.wifi.set`)

> This action requires that Shortcuts has permission to use WFSiriAccessResource.


## description

### summary

Sets the device’s Wi-Fi to on or off.


### usage
```
SetWiFi (true | false | variable)
```

### arguments

---

### wiFi: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
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
	"ACECommandClass": "SASettingSetWiFi",
	"ACESettingValueKey": "OnValue",
	"ActionClass": "WFACESetWiFiAction",
	"ActionKeywords": [
		"airport",
		"wifi",
		"wi-fi",
		"wireless",
		"internet",
		"network",
		"wlan"
	],
	"Attribution": "Wi-Fi",
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Sets the device’s Wi-Fi to on or off."
	},
	"IconName": "Wi-Fi.png",
	"InputPassthrough": true,
	"Name": "Set Wi-Fi",
	"ParameterSummary": "Turn Wi-Fi ${OnValue}",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "OnValue",
			"Label": "Wi-Fi"
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
