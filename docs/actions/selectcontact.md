
## Select Contact / selectcontact (internally `is.workflow.actions.selectcontacts`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource,WFContactAccessResource.


## description

### summary

Prompts to pick a person from your contacts and passes the selection to the next action.


### note

The "Select Multiple" option is supported on iOS 9 and later, and is not currently supported from Apple Watch.


### usage
```
selectcontact selectmultiple=(true | f alse | variable)
```

### arguments

---

### selectmultiple: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
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
		"DescriptionNote": "The \"Select Multiple\" option is supported on iOS 9 and later, and is not currently supported from Apple Watch.",
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
