
## Get Trello Items / gettrelloitems (internally `is.workflow.actions.trello.get`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFTrelloAccessResource.


## description
### summary
Gets cards, lists, or boards in your Trello account.


### usage
`gettrelloitems get=[string <${strInfo}>] undefined=[???] undefined=[???]`

### arguments
### Enumeration: Get / get (internally `WFTrelloItemType`)
**Default Value**: Boards
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Boards`
- `Lists`
- `Cards`

---

This paramtype is not implemented. WFTrelloBoardPickerParameter

---

This paramtype is not implemented. WFTrelloListPickerParameter

### source json

```json
{
	"ActionClass": "WFTrelloGetItemsAction",
	"AppIdentifier": "com.fogcreek.trello",
	"Category": "Text",
	"CreationDate": "2016-05-12T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets cards, lists, or boards in your Trello account."
	},
	"Name": "Get Trello Items",
	"Output": {
		"Multiple": true,
		"OutputName": "Trello Items",
		"Types": [
			"WFTrelloBoard",
			"WFTrelloList",
			"WFTrelloCard"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Boards",
			"Items": [
				"Boards",
				"Lists",
				"Cards"
			],
			"Key": "WFTrelloItemType",
			"Label": "Get"
		},
		{
			"Class": "WFTrelloBoardPickerParameter",
			"Key": "WFTrelloBoard",
			"Label": "Board",
			"RequiredResources": [
				{
					"WFParameterKey": "WFTrelloItemType",
					"WFParameterValues": [
						"Lists",
						"Cards"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"BoardKey": "WFTrelloBoard",
			"Class": "WFTrelloListPickerParameter",
			"Key": "WFTrelloList",
			"Label": "List",
			"RequiredResources": [
				{
					"WFParameterKey": "WFTrelloItemType",
					"WFParameterValue": "Cards",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"RequiredResources": [
		"WFTrelloAccessResource"
	],
	"ShortName": "Get Items"
}
```
