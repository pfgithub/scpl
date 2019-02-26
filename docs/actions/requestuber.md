
## Request Uber / requestuber (internally `com.ubercab.UberClient.requestuber`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Requests an Uber from the specified location to the location passed as input.


### input

The destination


### output

The shareable link to your Uber ride

### usage
```
requestuber a{showestimate=[string boolean|variable] undefined=[???] undefined=[???] pickupat=[string <${strInfo}>] undefined=[???]}
```

### arguments

---

### Switch: Show Estimate / showestimate (internally `UberShowEstimate`)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

#### This paramtype is not implemented. WFUberProductPickerParameter

---

#### This paramtype is not implemented. WFUberSeatCountPickerParameter

---

### Enumeration: Pick Up At / pickupat (internally `UberPickupAt`)
**Default Value**:
```
Current Location
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Current Location`
- `Custom Location`

---

#### This paramtype is not implemented. WFLocationFieldParameter

---

### source json

```json
{
	"ActionClass": "WFRequestUberAction",
	"ActionKeywords": [
		"hail",
		"cab",
		"taxi",
		"lyft"
	],
	"AppIdentifier": "com.ubercab.UberClient",
	"Category": "Location",
	"Description": {
		"DescriptionInput": "The destination",
		"DescriptionResult": "The shareable link to your Uber ride",
		"DescriptionSummary": "Requests an Uber from the specified location to the location passed as input."
	},
	"Discontinued": true,
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"CLLocation"
		]
	},
	"LastModifiedDate": "2015-04-01T05:00:00.000Z",
	"Name": "Request Uber",
	"Output": {
		"Multiple": false,
		"OutputName": "Uber Ride URL",
		"Types": [
			"NSURL"
		]
	},
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"Key": "UberShowEstimate",
			"Label": "Show Estimate"
		},
		{
			"Class": "WFUberProductPickerParameter",
			"Key": "UberProductId",
			"Label": "Ride Type",
			"RequiredResources": [
				"WFLocationAccessResource"
			]
		},
		{
			"Class": "WFUberSeatCountPickerParameter",
			"DefaultValue": "1",
			"Items": [
				"1",
				"2"
			],
			"Key": "UberSeatCount",
			"Label": "Number of Seats"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Current Location",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Items": [
				"Current Location",
				"Custom Location"
			],
			"Key": "UberPickupAt",
			"Label": "Pick Up At"
		},
		{
			"Class": "WFLocationFieldParameter",
			"Key": "UberCustomLocation",
			"Label": "Location",
			"Placeholder": "One Apple Park Way",
			"RequiredResources": [
				{
					"WFParameterKey": "UberPickupAt",
					"WFParameterValue": "Custom Location",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"RequiredResources": [
		{
			"WFResourceClass": "WFUnavailableResource",
			"WFUnavailableResourceReason": "Shortcuts is no longer able to support Uber."
		}
	],
	"UserInterfaces": [
		"UIKit",
		"WatchKit",
		"UIKitWidget"
	]
}
```
