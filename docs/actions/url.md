
## URL / URL (internally `is.workflow.actions.url`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Passes the specified URL to the next action.


### usage
```
URL NotImplemented
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFURLParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### source json (for developers)

```json
{
	"ActionClass": "WFURLAction",
	"ActionKeywords": [
		"text",
		"such text",
		"very speech",
		"much words",
		"so wow"
	],
	"Category": "Web",
	"Constructor": true,
	"Description": {
		"DescriptionSummary": "Passes the specified URL to the next action."
	},
	"IconName": "URL.png",
	"Name": "URL",
	"Output": {
		"Multiple": false,
		"OutputName": "URL",
		"Types": [
			"NSURL"
		]
	},
	"ParameterSummary": "${WFURLActionURL}",
	"Parameters": [
		{
			"Class": "WFURLParameter",
			"Key": "WFURLActionURL",
			"Label": "URL",
			"Placeholder": "apple.com"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "URLs"
}
```
