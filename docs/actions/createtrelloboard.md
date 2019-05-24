
## Create Trello Board / CreateTrelloBoard (internally `is.workflow.actions.trello.add.board`)

> This action requires that Shortcuts has permission to use WFTrelloAccessResource.


## description

### summary

Creates a new board in your Trello account.


### usage
```
CreateTrelloBoard name="string" WFTrelloDescription="string"
```

### arguments

---

### name: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Shortcuts"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### WFTrelloDescription: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Description"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json (for developers)

```json
{
	"ActionClass": "WFTrelloCreateBoardAction",
	"AppIdentifier": "com.fogcreek.trello",
	"Category": "Text",
	"CreationDate": "2016-05-12T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Creates a new board in your Trello account."
	},
	"Name": "Create Trello Board",
	"Output": {
		"Multiple": false,
		"OutputName": "Trello Board",
		"Types": [
			"WFTrelloBoard"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFTrelloName",
			"Label": "Name",
			"Placeholder": "Shortcuts",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFTrelloDescription",
			"Multiline": true,
			"Placeholder": "Description"
		}
	],
	"RequiredResources": [
		"WFTrelloAccessResource"
	],
	"ShortName": "Create Board"
}
```
