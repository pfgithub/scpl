
## Show Definition / showdefinition (internally `is.workflow.actions.showdefinition`)


> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description
### summary
Shows the definition of the word passed into the action.


### usage
`showdefinition `

### arguments


### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFShowDefinitionAction",
	"ActionKeywords": [
		"define",
		"word",
		"dictionary",
		"lookup",
		"term"
	],
	"Category": "Text",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Shows the definition of the word passed into the action."
	},
	"IconName": "Dictionary.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"NSString"
		]
	},
	"InputPassthrough": true,
	"Name": "Show Definition",
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"UserInterfaces": [
		"UIKit",
		"AppKit"
	]
}
```
</p></details>
