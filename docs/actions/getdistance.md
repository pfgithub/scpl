
## Get Distance / GetDistance (internally `is.workflow.actions.getdistance`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFMainThreadResource,[object Object],[object Object].


## description

### summary

Calculates the distance to the location passed into this action.


### input

The destination


### output

The distance to the location in miles or kilometers.

### usage
```
GetDistance undefined=NotImplemented undefined=NotImplemented routeType=("Direct" | "Driving" | "Walking") undefined=NotImplemented
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFLocationParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

#### This parameter is not implemented yet.

The parameter type is WFLocationParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### routeType: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Direct"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Direct`
- `Driving`
- `Walking`

---

#### This parameter is not implemented yet.

The parameter type is WFGetDistanceUnitPickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### source json (for developers)

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
		"ParameterKey": "WFGetDistanceDestination",
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
	"ParameterSummary": "Get distance from ${WFGetDirectionsCustomLocation} to ${WFGetDistanceDestination}",
	"Parameters": [
		{
			"Class": "WFLocationParameter",
			"CurrentLocationAccuracy": "HundredMeters",
			"DefaultToCurrentLocation": true,
			"Key": "WFGetDirectionsCustomLocation",
			"Label": "Start Location",
			"SkipProcessingCurrentLocation": true
		},
		{
			"Class": "WFLocationParameter",
			"CurrentLocationAccuracy": "HundredMeters",
			"DefaultToCurrentLocation": false,
			"Key": "WFGetDistanceDestination",
			"Label": "End Location",
			"SkipProcessingCurrentLocation": true
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
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFGetDirectionsCustomLocation",
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
					"WFParameterKey": "WFGetDistanceDestination",
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
	"Subcategory": "Routing"
}
```
