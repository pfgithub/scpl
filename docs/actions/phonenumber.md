
## Phone Number / phonenumber (internally `is.workflow.actions.phonenumber`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFContactAccessResource.


## description
### summary
Passes the specified phone numbers to the next action.


### usage
`phonenumber a{undefined=[???]}`

### arguments
This paramtype is not implemented. WFPhoneNumberFieldParameter

### source json

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
			"Class": "WFPhoneNumberFieldParameter",
			"Key": "WFPhoneNumber",
			"Placeholder": "Type in a phone number"
		}
	],
	"RequiredResources": [
		"WFContactAccessResource"
	],
	"Subcategory": "Phone"
}
```
