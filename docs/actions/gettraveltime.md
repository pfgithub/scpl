
## Get Travel Time / GetTravelTime (internally `is.workflow.actions.gettraveltime`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFMainThreadResource,WFLocationAccessResource.


## description

### summary

Estimates the amount of time it will take to travel to the location passed into this action.


### note

Travel times are provided by Apple Maps and take into account current traffic conditions.


### input

The destination


### output

The amount of time it will take to get to the destination. If passed into an action expecting a date, this will be the date and time of arrival if you leave now.

### usage
```
GetTravelTime undefined=NotImplemented undefined=NotImplemented mode=("Driving" | "Walking" | "Transit")
```

### arguments

---

#### This paramtype is not implemented. WFLocationParameter

---

#### This paramtype is not implemented. WFLocationParameter

---

### mode: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Driving"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Driving`
- `Walking`
- `Transit`

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetTravelTimeAction",
	"ActionKeywords": [
		"maps",
		"directions",
		"calculate",
		"estimated",
		"arrival",
		"eta"
	],
	"AppIdentifier": "com.apple.Maps",
	"Category": "Location",
	"Description": {
		"DescriptionInput": "The destination",
		"DescriptionNote": "Travel times are provided by Apple Maps and take into account current traffic conditions.",
		"DescriptionResult": "The amount of time it will take to get to the destination. If passed into an action expecting a date, this will be the date and time of arrival if you leave now.",
		"DescriptionSummary": "Estimates the amount of time it will take to travel to the location passed into this action."
	},
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFDestination",
		"Required": true,
		"Types": [
			"NSString",
			"CLLocation",
			"MKMapItem"
		]
	},
	"LastModifiedDate": "2015-08-20T07:00:00.000Z",
	"Name": "Get Travel Time",
	"Output": {
		"Multiple": false,
		"OutputName": "Travel Time",
		"Types": [
			"WFTripInfo"
		]
	},
	"ParameterSummary": "Get travel time from ${WFGetDirectionsCustomLocation} to ${WFDestination}",
	"Parameters": [
		{
			"Class": "WFLocationParameter",
			"DefaultToCurrentLocation": true,
			"Key": "WFGetDirectionsCustomLocation",
			"Label": "Start Location",
			"SkipProcessingCurrentLocation": true
		},
		{
			"Class": "WFLocationParameter",
			"Key": "WFDestination",
			"Label": "End Location",
			"SkipProcessingCurrentLocation": true
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Driving",
			"Items": [
				"Driving",
				"Walking",
				"Transit"
			],
			"Key": "WFGetDirectionsActionMode",
			"Label": "Mode"
		}
	],
	"RequiredResources": [
		"WFMainThreadResource",
		"WFLocationAccessResource"
	],
	"ResidentCompatible": true,
	"Subcategory": "Maps"
}
```
