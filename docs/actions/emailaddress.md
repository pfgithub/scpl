
## Email Address / EmailAddress (internally `is.workflow.actions.email`)


## description

### summary

Passes the specified email addresses to the next action.


### usage
```
EmailAddress ("string" | [list, of, strings] | variable)
```

### arguments

---

### WFEmailAddress: Email [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Placeholder**: ```
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
	"Constructor": true,
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
			"AllowsMultipleValues": true,
			"Class": "WFEmailAddressFieldParameter",
			"Key": "WFEmailAddress",
			"Placeholder": "Type in an email address"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Email"
}
```
