
## Get Email Addresses from Input / getemailaddressesfrominput (internally `is.workflow.actions.detect.emailaddress`)


## description

### summary

Returns any email addresses found in the output from the previous action.


### usage
```
getemailaddressesfrominput a{}
```

### arguments

---



---

### source json

```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"find",
		"search",
		"detect",
		"scan",
		"e-mail",
		"emails"
	],
	"AppIdentifier": "com.apple.mobilemail",
	"Category": "Contacts",
	"CoercionItemClass": "WFEmailAddressContentItem",
	"Description": {
		"DescriptionSummary": "Returns any email addresses found in the output from the previous action."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFEmailAddress"
		]
	},
	"Name": "Get Email Addresses from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "Email Addresses",
		"Types": [
			"WFEmailAddressContentItem"
		]
	},
	"ShortName": "Get Addresses",
	"Subcategory": "Email"
}
```
