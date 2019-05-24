
## Select Contact / SelectContact (internally `is.workflow.actions.selectcontacts`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource,WFContactAccessResource.


## description

### summary

Prompts to pick a person from your contacts and passes the selection to the next action.


### usage
```
SelectContact (true | false | variable)
```

### arguments

---

### selectMultiple: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFSelectContactsAction",
	"ActionKeywords": [
		"select",
		"person",
		"people",
		"contact",
		"addressbook"
	],
	"AppIdentifier": "com.apple.MobileAddressBook",
	"Category": "Contacts",
	"Description": {
		"DescriptionSummary": "Prompts to pick a person from your contacts and passes the selection to the next action."
	},
	"InputPassthrough": false,
	"LastModifiedDate": "2015-12-14T08:00:00.000Z",
	"Name": "Select Contact",
	"Output": {
		"Multiple": true,
		"OutputName": "Contacts",
		"Types": [
			"WFContact"
		]
	},
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"Key": "WFSelectMultiple",
			"Label": "Select Multiple"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource",
		"WFContactAccessResource"
	],
	"Subcategory": "Contacts",
	"UserInterfaces": [
		"UIKit",
		"WatchKit"
	]
}
```
