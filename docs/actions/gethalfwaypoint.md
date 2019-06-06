
## Get Halfway Point / GetHalfwayPoint (internally `is.workflow.actions.gethalfwaypoint`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use [object Object],[object Object].


## description

### summary

Gets the halfway point between two locations.


### usage
```
GetHalfwayPoint undefined=NotImplemented undefined=NotImplemented
```

### arguments

---

#### This paramtype is not implemented. WFLocationParameter

---

#### This paramtype is not implemented. WFLocationParameter

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetHalfwayPointAction",
	"ActionKeywords": [
		"Location",
		"Maps",
		"Two",
		"Places"
	],
	"AppIdentifier": "com.apple.Maps",
	"Category": "Location",
	"CreationDate": "2015-08-29T17:26:33.000Z",
	"Description": {
		"DescriptionSummary": "Gets the halfway point between two locations."
	},
	"Name": "Get Halfway Point",
	"Output": {
		"OutputName": "Halfway Point",
		"Types": [
			"CLLocation"
		]
	},
	"Parameters": [
		{
			"AllowTextOnly": true,
			"Class": "WFLocationParameter",
			"Key": "WFGetHalfwayPointFirstLocation",
			"Label": "First Location"
		},
		{
			"AllowTextOnly": true,
			"Class": "WFLocationParameter",
			"Key": "WFGetHalfwayPointSecondLocation",
			"Label": "Second Location"
		}
	],
	"RequiredResources": [
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFGetHalfwayPointSecondLocation",
					"WFParameterValue": {
						"isCurrentLocation": true
					},
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFLocationAccessResource"
		},
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFGetHalfwayPointFirstLocation",
					"WFParameterValue": {
						"isCurrentLocation": true
					},
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFLocationAccessResource"
		}
	],
	"ResidentCompatible": true,
	"SuggestedNever": true
}
```
