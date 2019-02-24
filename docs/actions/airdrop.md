
## AirDrop / airdrop (internally `is.workflow.actions.airdropdocument`)


> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description
### summary
Prompts to share the input via AirDrop.


### usage
`airdrop `

### arguments


### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFAirDropAction",
	"ActionKeywords": [
		"airdrop",
		"file",
		"document",
		"send",
		"share"
	],
	"Category": "Sharing",
	"Description": {
		"DescriptionSummary": "Prompts to share the input via AirDrop."
	},
	"IconName": "AirDrop.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "AirDrop",
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "System",
	"UserInterfaces": [
		"UIKit"
	]
}
```
</p></details>
