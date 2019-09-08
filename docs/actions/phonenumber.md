
## Phone Number / PhoneNumber (internally `is.workflow.actions.phonenumber`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Passes the specified phone numbers to the next action.


### usage
```
PhoneNumber NotImplemented
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFPhoneNumberFieldParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### source json (for developers)

```json
{
	"ActionClass": "WFPhoneNumberAction",
	"ActionKeywords": [
		"phone",
		"number",
		"mobile",
		"home",
		"cellular",
		"telephone"
	],
	"Category": "Contacts",
	"Constructor": true,
	"Description": {
		"DescriptionSummary": "Passes the specified phone numbers to the next action."
	},
	"IconName": "PhoneNumber.png",
	"LastModifiedDate": "2015-01-11T06:00:00.000Z",
	"Name": "Phone Number",
	"Output": {
		"Multiple": true,
		"OutputName": "Phone Number",
		"Types": [
			"WFPhoneNumber"
		]
	},
	"Parameters": [
		{
			"AllowsMultipleValues": true,
			"Class": "WFPhoneNumberFieldParameter",
			"Key": "WFPhoneNumber",
			"Placeholder": "Type in a phone number"
		}
	],
	"Subcategory": "Phone"
}
```
