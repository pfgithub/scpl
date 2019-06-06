
## Search Local Businesses / SearchLocalBusinesses (internally `is.workflow.actions.searchlocalbusinesses`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFMainThreadResource,WFLocationAccessResource.


## description

### summary

Searches for nearby businesses.


### input

A location to search near.


### usage
```
SearchLocalBusinesses undefined=NotImplemented search="string" radiuskm=number
```

### arguments

---

#### This paramtype is not implemented. WFLocationParameter

---

### search: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Local Businesses"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

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
		"ParameterKey": "WFInput",
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
	"ParameterSummary": "Search for ${WFSearchQuery} near ${WFInput}",
	"Parameters": [
		{
			"Class": "WFLocationParameter",
			"DefaultToCurrentLocation": true,
			"Key": "WFInput",
			"Label": "Location",
			"SkipProcessingCurrentLocation": true
		},
		{
			"Class": "WFTextInputParameter",
			"Description": "Keywords used to search for businesses.",
			"Key": "WFSearchQuery",
			"Label": "Search",
			"Placeholder": "Local Businesses",
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
	"ResidentCompatible": true,
	"ShortName": "Search Maps",
	"Subcategory": "Location"
}
```
