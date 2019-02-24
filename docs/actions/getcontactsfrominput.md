
## Get Contacts from Input / getcontactsfrominput (internally `is.workflow.actions.detect.contacts`)


> This action requires that Shortcuts has permission to use WFContactAccessResource.


## description
### summary
Gets contacts from the result of the previous action.


### usage
`getcontactsfrominput `

### arguments


### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"find",
		"detect",
		"people",
		"person",
		"email",
		"e-mail",
		"phone"
	],
	"AppIdentifier": "com.apple.MobileAddressBook",
	"Category": "Contacts",
	"CoercionItemClass": "WFContactContentItem",
	"Description": {
		"DescriptionSummary": "Gets contacts from the result of the previous action."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFContact"
		]
	},
	"Name": "Get Contacts from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "Contacts",
		"Types": [
			"WFContactContentItem"
		]
	},
	"RequiredResources": [
		"WFContactAccessResource"
	],
	"ShortName": "Get Contacts",
	"Subcategory": "Contacts"
}
```
</p></details>
