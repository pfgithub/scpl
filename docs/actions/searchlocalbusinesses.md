
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
SearchLocalBusinesses undefined=NotImplemented search="string" undefined=NotImplemented
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFLocationParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### search: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Local Businesses"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

#### This parameter is not implemented yet.

The parameter type is WFSearchLocalBusinessesRadiusParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

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
			"Class": "WFSearchLocalBusinessesRadiusParameter",
			"Key": "WFSearchRadius",
			"Label": "Radius",
			"TextAlignment": "Right",
			"WFUnitType": "Length"
		}
	],
	"RequiredResources": [
		"WFMainThreadResource",
		"WFLocationAccessResource"
	],
	"ResidentCompatible": true,
	"ShortName": "Search Maps",
	"Subcategory": "Routing"
}
```
