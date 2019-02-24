
## Get Phone Numbers from Input / getphonenumbersfrominput (internally `is.workflow.actions.detect.phonenumber`)



## description
### summary
Returns any phone numbers found in the output from the previous action.


### usage
`getphonenumbersfrominput `

### arguments


### source json

```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"phone",
		"number",
		"detect",
		"scan"
	],
	"Category": "Contacts",
	"CoercionItemClass": "WFPhoneNumberContentItem",
	"Description": {
		"DescriptionSummary": "Returns any phone numbers found in the output from the previous action."
	},
	"IconName": "PhoneNumber.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFPhoneNumber"
		]
	},
	"Name": "Get Phone Numbers from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "Phone Numbers",
		"Types": [
			"WFPhoneNumberContentItem"
		]
	},
	"Subcategory": "Phone"
}
```
