
## Get Distance / getdistance (internally `is.workflow.actions.getdistance`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFMainThreadResource,WFLocationAccessResource.


## description
### summary
Calculates the distance to the location passed into this action.

### input
The destination

### output
The distance to the location in miles or kilometers.

### usage
`getdistance from=[string <${strInfo}>|variable] undefined=[???] routetype=[string <${strInfo}>] undefined=[???]`

### arguments
### Enumeration: From / from (internally `WFGetDirectionsFrom`)
**Default Value**: Current Location


Accepts a string 
containing one of the options:

- `Current Location`
- `Custom Location`

---

This paramtype is not implemented. WFLocationFieldParameter

---

### Enumeration: Route Type / routetype (internally `WFGetDirectionsActionMode`)
**Default Value**: Direct
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Direct`
- `Driving`
- `Walking`

---

This paramtype is not implemented. WFGetDistanceUnitPickerParameter

### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFGetDistanceAction",
	"ActionKeywords": [
		"maps",
		"directions",
		"calculate"
	],
	"AppIdentifier": "com.apple.Maps",
	"Category": "Location",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionInput": "The destination",
		"DescriptionResult": "The distance to the location in miles or kilometers.",
		"DescriptionSummary": "Calculates the distance to the location passed into this action."
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
	"Name": "Get Distance",
	"Output": {
		"Multiple": false,
		"OutputName": "Distance",
		"Types": [
			"NSNumber"
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
			"DefaultValue": "Direct",
			"Items": [
				"Direct",
				"Driving",
				"Walking"
			],
			"Key": "WFGetDirectionsActionMode",
			"Label": "Route Type"
		},
		{
			"Class": "WFGetDistanceUnitPickerParameter",
			"Items": [
				"Miles",
				"Kilometers"
			],
			"Key": "WFDistanceUnit",
			"Label": "Unit"
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
</p></details>
