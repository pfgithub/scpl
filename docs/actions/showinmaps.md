
## Show in Maps / showinmaps (internally `is.workflow.actions.searchmaps`)


## description

### summary

Opens your choice of Maps, Google Maps, or Waze and searches for the location, place, or text that was passed into the action.


### usage
```
showinmaps mapsapp=("iCloud Drive" | "Dropbox")
```

### arguments

---

### mapsapp: Maps App [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Maps"`
**Allows Variables**: true

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

Accepts a string 
or variable
containing one of the options:

- `iCloud Drive`
- `Dropbox`

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
