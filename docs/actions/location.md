
## Location / Location (internally `is.workflow.actions.location`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Passes the specified location to the next action.


### usage
```
Location NotImplemented
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFLocationParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### source json (for developers)

```json
{
	"ActionClass": "WFLocationAction",
	"ActionKeywords": [
		"maps",
		"search",
		"query",
		"place",
		"location",
		"find"
	],
	"Category": "Location",
	"Constructor": true,
	"Description": {
		"DescriptionSummary": "Passes the specified location to the next action."
	},
	"IconName": "Location",
	"InputPassthrough": false,
	"Name": "Location",
	"Output": {
		"Multiple": false,
		"OutputName": "Location",
		"Types": [
			"WFLocationContentItem"
		]
	},
	"ParameterSummary": "${WFLocation}",
	"Parameters": [
		{
			"Class": "WFLocationParameter",
			"Key": "WFLocation",
			"Label": "Location"
		}
	],
	"RequiredResources": [
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFLocation",
					"WFParameterValue": {
						"isCurrentLocation": true
					},
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFLocationAccessResource"
		}
	],
	"ResidentCompatible": true
}
```
