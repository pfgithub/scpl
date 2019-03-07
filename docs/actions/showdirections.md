
## Show Directions / showdirections (internally `is.workflow.actions.getdirections`)

> This action requires that Shortcuts has permission to use WFURLOpenResource.


## description

### summary

Open directions to the location passed into this action in your choice of Maps, Google Maps, Citymapper, Transit, or Waze. For example, you can use this action to get directions to an upcoming event on your calendar.


### input

The destination address


### usage
```
showdirections mapsapp=("Maps" | "Google Maps" | "Waze") mode=("string" | variable)]
```

### arguments

---

### mapsapp: Maps App [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Maps"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Maps`
- `Google Maps`
- `Waze`

---

### mode: Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Default Value**: ```
		Driving
		```
**Allows Variables**: true

**Only enabled if**: argument WFGetDirectionsActionApp == `Maps` or `Google Maps` or `Transit` or `Waze`

		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetDirectionsAction",
	"ActionKeywords": [
		"get",
		"maps",
		"search",
		"query",
		"place",
		"location",
		"find",
		"waze",
		"google",
		"transit",
		"citymapper"
	],
	"AppIdentifier": "com.apple.Maps",
	"Category": "Location",
	"Description": {
		"DescriptionInput": "The destination address",
		"DescriptionSummary": "Open directions to the location passed into this action in your choice of Maps, Google Maps, Citymapper, Transit, or Waze. For example, you can use this action to get directions to an upcoming event on your calendar."
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
	"Name": "Show Directions",
	"Parameters": [
		{
			"Class": "WFMapsAppPickerParameter",
			"DefaultValue": "Maps",
			"Key": "WFGetDirectionsActionApp",
			"Label": "Maps App",
			"SupportedApps": [
				"Maps",
				"Citymapper",
				"Google Maps",
				"Transit",
				"Waze"
			]
		},
		{
			"Class": "WFDynamicEnumerationParameter",
			"DefaultValue": "Driving",
			"Key": "WFGetDirectionsActionMode",
			"Label": "Mode",
			"RequiredResources": [
				{
					"WFParameterKey": "WFGetDirectionsActionApp",
					"WFParameterValues": [
						"Maps",
						"Google Maps",
						"Transit",
						"Waze"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"RequiredResources": [
		"WFURLOpenResource"
	],
	"Subcategory": "Maps",
	"UserInterfaces": [
		"WatchKit",
		"UIKit",
		"UIKitWidget"
	]
}
```
