
## Show in Maps / ShowinMaps (internally `is.workflow.actions.searchmaps`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Opens your choice of Maps, Google Maps, or Waze and searches for the location, place, or text that was passed into the action.


### usage
```
ShowinMaps undefined=NotImplemented app=("Maps" | "Google Maps" | "Waze")
```

### arguments

---

#### This paramtype is not implemented. WFLocationParameter

---

### app: Maps App [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Maps"`
**Allows Variables**: true

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

Accepts a string 
or variable
containing one of the options:

- `Maps`
- `Google Maps`
- `Waze`

---

### source json (for developers)

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
	"Category": "Location",
	"Description": {
		"DescriptionSummary": "Opens your choice of Maps, Google Maps, or Waze and searches for the location, place, or text that was passed into the action."
	},
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"NSString",
			"CLLocation",
			"MKMapItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Show in Maps",
	"ParameterSummary": "Show ${WFInput} in Maps",
	"Parameters": [
		{
			"Class": "WFLocationParameter",
			"Key": "WFInput",
			"Label": "Location",
			"Placeholder": "Location"
		},
		{
			"Class": "WFMapsAppPickerParameter",
			"DefaultValue": "Maps",
			"Hidden": true,
			"Key": "WFSearchMapsActionApp",
			"Label": "App",
			"SupportedApps": [
				"Maps",
				"Google Maps",
				"Waze"
			]
		}
	],
	"RequiredResources": [
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFInput",
					"WFParameterValue": {
						"isCurrentLocation": true
					},
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFLocationAccessResource"
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
