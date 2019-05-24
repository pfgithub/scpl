
## Search Local Businesses / SearchLocalBusinesses (internally `is.workflow.actions.searchlocalbusinesses`)

> This action requires that Shortcuts has permission to use WFMainThreadResource,WFLocationAccessResource.


## description

### summary

Searches for nearby businesses.


### input

A location to search near.


### usage
```
SearchLocalBusinesses search="string" radiuskm=number
```

### arguments

---

### search: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"coffee shops"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### radiuskm: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `1.5`
**Default Value**: `1.5`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFSearchLocalBusinessesAction",
	"ActionKeywords": [
		"maps",
		"search",
		"query",
		"place",
		"location",
		"nearby",
		"find"
	],
	"AppIdentifier": "com.apple.Maps",
	"Category": "Location",
	"CreationDate": "2014-07-13T05:00:00.000Z",
	"Description": {
		"DescriptionInput": "A location to search near.",
		"DescriptionSummary": "Searches for nearby businesses."
	},
	"Input": {
		"Multiple": false,
		"Required": false,
		"Types": [
			"CLLocation"
		]
	},
	"LastModifiedDate": "2015-01-11T06:00:00.000Z",
	"Name": "Search Local Businesses",
	"Output": {
		"Multiple": true,
		"OutputName": "Local Businesses",
		"Types": [
			"MKMapItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Description": "Keywords used to search for businesses.",
			"Key": "WFSearchQuery",
			"Label": "Search",
			"Placeholder": "coffee shops",
			"TextAlignment": "Right"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 1.5,
			"Description": "Maximum distance in kilometers from the source location to find businesses.",
			"Key": "WFSearchRadius",
			"Label": "Radius (km)",
			"Placeholder": "1.5",
			"TextAlignment": "Right"
		}
	],
	"RequiredResources": [
		"WFMainThreadResource",
		"WFLocationAccessResource"
	],
	"ShortName": "Search Maps",
	"Subcategory": "Location",
	"UnsupportedEnvironments": [
		"Background"
	]
}
```
