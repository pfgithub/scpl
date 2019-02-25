
## Get Travel Time / gettraveltime (internally `is.workflow.actions.gettraveltime`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFMainThreadResource,WFLocationAccessResource.


## description
### summary
Estimates the amount of time it will take to travel to the location passed into this action.

### input
The destination

### output
The amount of time it will take to get to the destination. If passed into an action expecting a date, this will be the date and time of arrival if you leave now.

### usage
`gettraveltime a{from=[string <${strInfo}>|variable] undefined=[???] transportationmode=[string <${strInfo}>]}`

### arguments
### Enumeration: From / from (internally `WFGetDirectionsFrom`)
**Default Value**:
```
Current Location
```


Accepts a string 
containing one of the options:

- `Current Location`
- `Custom Location`

---

This paramtype is not implemented. WFLocationFieldParameter

---

### Enumeration: Transportation Mode / transportationmode (internally `WFGetDirectionsActionMode`)
**Default Value**:
```
Driving
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Driving`
- `Walking`
- `Transit`

### source json

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
			"WFTimeInterval"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Current Location",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"Items": [
				"Current Location",
				"Custom Location"
			],
			"Key": "WFGetDirectionsFrom",
			"Label": "From"
		},
		{
			"Class": "WFLocationFieldParameter",
			"Key": "WFGetDirectionsCustomLocation",
			"Label": "Location",
			"Placeholder": "One Apple Park Way",
			"RequiredResources": [
				{
					"WFParameterKey": "WFGetDirectionsFrom",
					"WFParameterValue": "Custom Location",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
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
			"Label": "Transportation Mode"
		}
	],
	"RequiredResources": [
		"WFMainThreadResource",
		"WFLocationAccessResource"
	],
	"Subcategory": "Maps",
	"UnsupportedEnvironments": [
		"Background"
	]
}
```
