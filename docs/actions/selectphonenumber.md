
## Select Phone Number / SelectPhoneNumber (internally `is.workflow.actions.selectphone`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Prompts to pick a phone number from your contacts and passes the selection to the next action.


### usage
```
SelectPhoneNumber 
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
		"phone",
		"number",
		"telephone",
		"addressbook"
	],
	"Category": "Contacts",
	"ContactProperties": [
		"Phone"
	],
	"Description": {
		"DescriptionSummary": "Prompts to pick a phone number from your contacts and passes the selection to the next action."
	},
	"IconName": "PhoneNumber.png",
	"InputPassthrough": false,
	"Name": "Select Phone Number",
	"Output": {
		"Multiple": true,
		"OutputName": "Phone Numbers",
		"Types": [
			"WFPhoneNumber"
		]
	},
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"ShortName": "Select Phone #",
	"Subcategory": "Phone",
	"SuggestedAsInitialAction": false,
	"UserInterfaces": [
		"UIKit",
		"WatchKit"
	]
}
```
