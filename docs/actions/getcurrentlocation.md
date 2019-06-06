
## Get Current Location / GetCurrentLocation (internally `is.workflow.actions.getcurrentlocation`)

> This action requires that Shortcuts has permission to use WFMainThreadResource,WFLocationAccessResource.


## description

### summary

Gets the current location of the device.


### usage
```
GetCurrentLocation 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFGetCurrentLocationAction",
	"ActionKeywords": [
		"gps",
		"map",
		"place",
		"address"
	],
	"Category": "Location",
	"Description": {
		"DescriptionSummary": "Gets the current location of the device."
	},
	"IconName": "Location.png",
	"Name": "Get Current Location",
	"Output": {
		"Multiple": false,
		"OutputName": "Current Location",
		"Types": [
			"CLLocation"
		]
	},
	"ParameterSummary": "Get current location",
	"RequiredResources": [
		"WFMainThreadResource",
		"WFLocationAccessResource"
	],
	"ResidentCompatible": true,
	"ShortName": "Current Location"
}
```
