
## Get Email Addresses from Input / GetEmailAddressesfromInput (internally `is.workflow.actions.detect.emailaddress`)


## description

### summary

Returns any email addresses found in the output from the previous action.


### usage
```
GetEmailAddressesfromInput "string"
```

### arguments

---

### input: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Input"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

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
		"ParameterKey": "WFInput",
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
	"ParameterSummary": "Get email addresses from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Get Addresses",
	"Subcategory": "Email"
}
```
