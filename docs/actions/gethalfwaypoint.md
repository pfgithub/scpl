
## Get Halfway Point / gethalfwaypoint (internally `is.workflow.actions.gethalfwaypoint`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Gets the halfway point between two locations.


### usage
```
gethalfwaypoint a{undefined=[???] undefined=[???]}
```

### arguments

---

#### This paramtype is not implemented. WFLocationFieldParameter

---

#### This paramtype is not implemented. WFLocationFieldParameter

---

### source json

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
			"Class": "WFLocationFieldParameter",
			"Key": "WFGetHalfwayPointFirstLocation",
			"Label": "First Location",
			"Placeholder": "San Francisco, CA",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFLocationFieldParameter",
			"Key": "WFGetHalfwayPointSecondLocation",
			"Label": "Second Location",
			"Placeholder": "Philadelphia, PA",
			"TextAlignment": "Right"
		}
	],
	"SuggestedNever": true
}
```
