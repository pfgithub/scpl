
## Email Address / emailaddress (internally `is.workflow.actions.email`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFContactAccessResource.


## description
### summary
Passes the specified email addresses to the next action.


### usage
`emailaddress undefined=[???]`

### arguments
This paramtype is not implemented. WFEmailAddressFieldParameter

### source json

```json
{
	"ActionClass": "WFEmailAddressAction",
	"ActionKeywords": [
		"emails",
		"e-mails",
		"address"
	],
	"AppIdentifier": "com.apple.mobilemail",
	"Category": "Contacts",
	"Description": {
		"DescriptionSummary": "Passes the specified email addresses to the next action."
	},
	"Name": "Email Address",
	"Output": {
		"Multiple": true,
		"OutputName": "Email Address",
		"Types": [
			"WFEmailAddress"
		]
	},
	"Parameters": [
		{
			"Class": "WFEmailAddressFieldParameter",
			"Key": "WFEmailAddress",
			"Placeholder": "Type in an email address"
		}
	],
	"RequiredResources": [
		"WFContactAccessResource"
	],
	"Subcategory": "Email"
}
```
