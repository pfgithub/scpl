
## Contacts / Contacts (internally `is.workflow.actions.contacts`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Passes the specified contacts to the next action.


### usage
```
Contacts NotImplemented
```

### arguments

---

#### This paramtype is not implemented. WFContactFieldParameter

---

### source json (for developers)

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
	"Constructor": true,
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
			"AllowsMultipleValues": true,
			"AllowsTextEntry": false,
			"Class": "WFContactFieldParameter",
			"Key": "WFContact",
			"Placeholder": "Press + to add contacts"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Contacts"
}
```
