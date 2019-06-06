
## Get Maps URL / GetMapsURL (internally `is.workflow.actions.getmapslink`)


## description

### summary

Creates a URL to search for the location, place, or text that was passed into the action in a separate maps app.


### usage
```
GetMapsURL (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### location: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Location
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

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
		"ParameterKey": "WFInput",
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
	"ParameterSummary": "Get maps URL from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Location",
			"Placeholder": "Location"
		}
	],
	"Subcategory": "Maps"
}
```
