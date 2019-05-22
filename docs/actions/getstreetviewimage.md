
## Get Street View Image / GetStreetViewImage (internally `is.workflow.actions.streetview.image`)

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Gets photos of the locations passed as input, using Google Street View.


### usage
```
GetStreetViewImage 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFStreetViewImageAction",
	"ActionKeywords": [
		"google",
		"maps",
		"picture",
		"photo",
		"location",
		"business"
	],
	"AppIdentifier": "com.google.Maps",
	"Category": "Location",
	"Description": {
		"DescriptionSummary": "Gets photos of the locations passed as input, using Google Street View."
	},
	"Discontinued": true,
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFStreetAddress"
		]
	},
	"Name": "Get Street View Image",
	"Output": {
		"Multiple": true,
		"OutputName": "Street View Image",
		"Types": [
			"WFImageContentItem"
		]
	},
	"RequiredResources": [
		{
			"WFResourceClass": "WFUnavailableResource",
			"WFUnavailableResourceReason": "Shortcuts is no longer able to support Get Street View Image."
		}
	],
	"ShortName": "Get Street View"
}
```
