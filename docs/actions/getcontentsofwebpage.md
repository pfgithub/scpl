
## Get Contents of Web Page / getcontentsofwebpage (internally `is.workflow.actions.getwebpagecontents`)



## description
### summary
Extracts the contents of the web pages passed into the action.


### usage
`getcontentsofwebpage `

### arguments


### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFGetWebPageAction",
	"AppIdentifier": "com.apple.mobilesafari",
	"Category": "Web",
	"Description": {
		"DescriptionSummary": "Extracts the contents of the web pages passed into the action."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"Name": "Get Contents of Web Page",
	"Output": {
		"Multiple": true,
		"OutputName": "Contents of Web Page",
		"Types": [
			"NSAttributedString"
		]
	},
	"ShortName": "Get Web Page",
	"Subcategory": "Web",
	"UnsupportedEnvironments": [
		"MemoryConstrained"
	]
}
```
</details>
