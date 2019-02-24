
## Get Details of Trello Item / getdetailsoftrelloitem (internally `is.workflow.actions.properties.trello`)


> This action requires that Shortcuts has permission to use WFTrelloAccessResource.



### usage
`getdetailsoftrelloitem `

### arguments


### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFContentItemPropertiesAction",
	"AppIdentifier": "com.fogcreek.trello",
	"Category": "Text",
	"CreationDate": "2016-03-15T07:00:00.000Z",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFTrelloBoardContentItem",
			"WFTrelloListContentItem",
			"WFTrelloCardContentItem"
		]
	},
	"Name": "Get Details of Trello Item",
	"RequiredResources": [
		"WFTrelloAccessResource"
	],
	"WFContentItemClass": "WFTrelloItemContentItem"
}
```
</p></details>
