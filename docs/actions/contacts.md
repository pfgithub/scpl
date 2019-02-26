
## Contacts / contacts (internally `is.workflow.actions.contacts`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFContactAccessResource.


## description

### summary

Passes the specified contacts to the next action.


### usage
```
contacts a{undefined=[???]}
```

### arguments

---

#### This paramtype is not implemented. WFContactFieldParameter

---

### source json

```json
{
	"ActionClass": "WFContactsAction",
	"ActionKeywords": [
		"contact",
		"person",
		"people"
	],
	"AppIdentifier": "com.apple.MobileAddressBook",
	"Category": "Contacts",
	"Description": {
		"DescriptionSummary": "Passes the specified contacts to the next action."
	},
	"Name": "Contacts",
	"Output": {
		"Multiple": true,
		"OutputName": "Contacts",
		"Types": [
			"WFContact"
		]
	},
	"Parameters": [
		{
			"AllowsTextEntry": false,
			"Class": "WFContactFieldParameter",
			"Key": "WFContact",
			"Placeholder": "Press + to add contacts"
		}
	],
	"RequiredResources": [
		"WFContactAccessResource"
	],
	"Subcategory": "Contacts"
}
```
