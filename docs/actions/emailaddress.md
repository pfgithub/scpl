
## Email Address / emailaddress (internally `is.workflow.actions.email`)

> This action requires that Shortcuts has permission to use WFContactAccessResource.


## description

### summary

Passes the specified email addresses to the next action.


### usage
```
emailaddress wfemailaddress="string"|[list, of, strings]|variable
```

### arguments

---

### Email: wfemailaddress [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Placeholder**:
```
Type in an email address
```
**Allows Variables**: true



Accepts a string or string array or variable of email addresses.

---

### source json (for developers)

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
