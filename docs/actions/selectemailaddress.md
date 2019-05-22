
## Select Email Address / SelectEmailAddress (internally `is.workflow.actions.selectemail`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource,WFContactAccessResource.


## description

### summary

Prompts to pick an email address from your contacts and passes the selection to the next action.


### usage
```
SelectEmailAddress 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFSelectContactsAction",
	"ActionKeywords": [
		"select",
		"email",
		"address",
		"e-mail",
		"addressbook"
	],
	"AppIdentifier": "com.apple.mobilemail",
	"Category": "Contacts",
	"ContactProperties": [
		"Email"
	],
	"Description": {
		"DescriptionSummary": "Prompts to pick an email address from your contacts and passes the selection to the next action."
	},
	"InputPassthrough": false,
	"Name": "Select Email Address",
	"Output": {
		"Multiple": true,
		"OutputName": "Email Addresses",
		"Types": [
			"WFEmailAddress"
		]
	},
	"RequiredResources": [
		"WFUserInteractionResource",
		"WFContactAccessResource"
	],
	"ShortName": "Select Email",
	"Subcategory": "Email",
	"SuggestedAsInitialAction": false,
	"UserInterfaces": [
		"UIKit",
		"WatchKit"
	]
}
```
