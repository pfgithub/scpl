
## Set Bluetooth / SetBluetooth (internally `is.workflow.actions.bluetooth.set`)

> This action requires that Shortcuts has permission to use WFSiriAccessResource.


## description

### summary

Sets the device’s Bluetooth to on or off.


### usage
```
SetBluetooth (true | false | variable)
```

### arguments

---

### bluetooth: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
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
	"ACECommandClass": "SASettingSetBluetooth",
	"ACESettingValueKey": "OnValue",
	"ActionClass": "WFACESetSettingAction",
	"ActionKeywords": [
		"wireless",
		"accessories",
		"accessory"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Sets the device’s Bluetooth to on or off."
	},
	"IconName": "Bluetooth.png",
	"InputPassthrough": true,
	"Name": "Set Bluetooth",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "OnValue",
			"Label": "Bluetooth"
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
