
## Set Bluetooth / setbluetooth (internally `is.workflow.actions.bluetooth.set`)


> This action requires that Shortcuts has permission to use WFSiriAccessResource.


## description
### summary
Sets the device’s Bluetooth to on or off.


### usage
`setbluetooth bluetooth=[string boolean|variable]`

### arguments
### Switch: Bluetooth / bluetooth (internally `OnValue`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

### for developers

<details><summary>source json</summary>
<p>
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
</p></details>
