
## Get Battery Level / GetBatteryLevel (internally `is.workflow.actions.getbatterylevel`)


## description

### summary

Outputs the percentage of battery remaining as a number from 0 to 100.


### usage
```
GetBatteryLevel 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFBatteryLevelAction",
	"ActionKeywords": [
		"remaining",
		"percentage",
		"left",
		"power"
	],
	"Category": "Scripting",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Outputs the percentage of battery remaining as a number from 0 to 100."
	},
	"IconName": "Battery.png",
	"Name": "Get Battery Level",
	"Output": {
		"Multiple": false,
		"OutputName": "Battery Level",
		"Types": [
			"NSDecimalNumber"
		]
	},
	"ParameterSummary": "Get battery level",
	"Subcategory": "Device",
	"SuggestedNever": true
}
```
