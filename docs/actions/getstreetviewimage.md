
## Get Street View Image / getstreetviewimage (internally `is.workflow.actions.streetview.image`)


> This action requires that Shortcuts has permission to use [object Object].


## description
### summary
Gets photos of the locations passed as input, using Google Street View.


### usage
`getstreetviewimage `

### arguments


### other info

<details><summary>source json</summary>
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
</details>
