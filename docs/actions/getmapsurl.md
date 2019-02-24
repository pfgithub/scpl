
## Get Maps URL / getmapsurl (internally `is.workflow.actions.getmapslink`)



## description
### summary
Creates a URL to search for the location, place, or text that was passed into the action in a separate maps app.


### usage
`getmapsurl `

### arguments


### source json

```json
{
	"ActionClass": "WFGetMapsLinkAction",
	"ActionKeywords": [
		"link",
		"location",
		"app"
	],
	"AppIdentifier": "com.apple.Maps",
	"Category": "Location",
	"Description": {
		"DescriptionSummary": "Creates a URL to search for the location, place, or text that was passed into the action in a separate maps app."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSString",
			"CLLocation",
			"MKMapItem"
		]
	},
	"Name": "Get Maps URL",
	"Output": {
		"Multiple": true,
		"OutputName": "Maps URL",
		"Types": [
			"NSURL"
		]
	},
	"Subcategory": "Maps"
}
```
