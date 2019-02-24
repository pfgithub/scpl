
## Print / print (internally `is.workflow.actions.print`)


> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description
### summary
Prints the input using AirPrint.


### usage
`print `

### arguments


### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFPrintAction",
	"ActionKeywords": [
		"pdf",
		"print",
		"printer",
		"airprint"
	],
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Prints the input using AirPrint."
	},
	"IconName": "Print.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"UIPrintFormatter",
			"com.adobe.pdf"
		]
	},
	"InputPassthrough": true,
	"Name": "Print",
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Printing",
	"UserInterfaces": [
		"UIKit"
	]
}
```
</details>
