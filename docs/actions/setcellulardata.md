
## Set Cellular Data / setcellulardata (internally `is.workflow.actions.cellulardata.set`)

> This action requires that Shortcuts has permission to use WFSiriAccessResource.


## description

### summary

Sets the device’s Cellular Data to on or off.


### usage
```
setcellulardata cellulardata=(true | f alse | variable)
```

### arguments

---

### cellulardata: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
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
	"ACECommandClass": "SASettingSetCellularData",
	"ACESettingValueKey": "OnValue",
	"ActionClass": "WFACESetSettingAction",
	"ActionKeywords": [
		"service",
		"phone",
		"airplane"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Sets the device’s Cellular Data to on or off."
	},
	"IconName": "CellularData.png",
	"InputPassthrough": true,
	"Name": "Set Cellular Data",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "OnValue",
			"Label": "Cellular Data"
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
