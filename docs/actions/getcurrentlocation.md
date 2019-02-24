
## Get Current Location / getcurrentlocation (internally `is.workflow.actions.getcurrentlocation`)


> This action requires that Shortcuts has permission to use WFMainThreadResource,WFLocationAccessResource.


## description
### summary
Gets the current location of the device.


### usage
`getcurrentlocation `

### arguments


### other info

<details><summary>source json</summary>
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
	"RequiredResources": [
		"WFMainThreadResource",
		"WFLocationAccessResource"
	],
	"ShortName": "Current Location",
	"UnsupportedEnvironments": [
		"Background"
	]
}
```
</details>
