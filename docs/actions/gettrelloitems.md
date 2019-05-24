
## Get Trello Items / GetTrelloItems (internally `is.workflow.actions.trello.get`)

> This action requires that Shortcuts has permission to use WFTrelloAccessResource.


## description

### summary

Gets cards, lists, or boards in your Trello account.


### usage
```
GetTrelloItems get=("Boards" | "Lists" | "Cards") board=("string" | variable)] list=("string" | variable)]
```

### arguments

---

### get: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Boards"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Boards`
- `Lists`
- `Cards`

---

### board: Trello Board Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true

**Only enabled if**: argument WFTrelloItemType == `Lists` or `Cards`

		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### list: Trello List Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true

**Only enabled if**: argument WFTrelloItemType == `Cards`

		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### source json (for developers)

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
