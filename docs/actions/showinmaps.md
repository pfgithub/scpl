
## Show in Maps / showinmaps (internally `is.workflow.actions.searchmaps`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Opens your choice of Maps, Google Maps, or Waze and searches for the location, place, or text that was passed into the action.


### usage
`showinmaps undefined=[???]`

### arguments
This paramtype is not implemented. WFMapsAppPickerParameter

### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFSearchMapsAction",
	"ActionKeywords": [
		"maps",
		"search",
		"query",
		"places",
		"waze",
		"google"
	],
	"AppIdentifier": "com.apple.Maps",
	"Category": "Location",
	"Description": {
		"DescriptionSummary": "Opens your choice of Maps, Google Maps, or Waze and searches for the location, place, or text that was passed into the action."
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
	"InputPassthrough": true,
	"Name": "Show in Maps",
	"Parameters": [
		{
			"Class": "WFMapsAppPickerParameter",
			"DefaultValue": "Maps",
			"Hidden": true,
			"Key": "WFSearchMapsActionApp",
			"Label": "Maps App",
			"SupportedApps": [
				"Maps",
				"Google Maps",
				"Waze"
			]
		}
	],
	"ShortName": "Show Map",
	"Subcategory": "Maps",
	"UserInterfaces": [
		"UIKit",
		"WatchKit"
	]
}
```
</p></details>
