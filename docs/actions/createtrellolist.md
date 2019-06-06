
## Create Trello List / CreateTrelloList (internally `is.workflow.actions.trello.add.list`)

> This action requires that Shortcuts has permission to use WFTrelloAccessResource.


## description

### summary

Creates a new list on the specified board in your Trello account.


### usage
```
CreateTrelloList name="string" board=("string" | variable)] position=("Top" | "Bottom")
```

### arguments

---

### name: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"List"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### board: Trello Board Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Placeholder**: ```
		Board
		```
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### position: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Top"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Top`
- `Bottom`

---

### source json (for developers)

```json
{
	"ActionClass": "WFTrelloCreateListAction",
	"AppIdentifier": "com.fogcreek.trello",
	"Category": "Text",
	"CreationDate": "2016-05-12T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Creates a new list on the specified board in your Trello account."
	},
	"Name": "Create Trello List",
	"Output": {
		"Multiple": false,
		"OutputName": "Trello List",
		"Types": [
			"WFTrelloList"
		]
	},
	"ParameterSummary": "Create the list ${WFTrelloName} in ${WFTrelloBoard}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFTrelloName",
			"Label": "Name",
			"Placeholder": "List",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTrelloBoardPickerParameter",
			"Key": "WFTrelloBoard",
			"Label": "Board",
			"Placeholder": "Board"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Top",
			"Items": [
				"Top",
				"Bottom"
			],
			"Key": "WFTrelloPosition",
			"Label": "Position"
		}
	],
	"RequiredResources": [
		"WFTrelloAccessResource"
	],
	"ShortName": "Create List"
}
```
