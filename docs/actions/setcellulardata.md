
## Set Cellular Data / setcellulardata (internally `is.workflow.actions.cellulardata.set`)


> This action requires that Shortcuts has permission to use WFSiriAccessResource.


## description
### summary
Sets the device’s Cellular Data to on or off.


### usage
`setcellulardata cellulardata=[string boolean|variable]`

### arguments
### Switch: Cellular Data / cellulardata (internally `OnValue`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

### source json

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
