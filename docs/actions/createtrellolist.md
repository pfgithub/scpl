
## Create Trello List / createtrellolist (internally `is.workflow.actions.trello.add.list`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFTrelloAccessResource.


## description
### summary
Creates a new list on the specified board in your Trello account.


### usage
`createtrellolist name=[string|text] undefined=[???] position=[string <${strInfo}>]`

### arguments
### Text Input: Name / name (internally `WFTrelloName`)
**Placeholder**: Shortcut Ideas
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFTrelloBoardPickerParameter

---

### Enumeration: Position / position (internally `WFTrelloPosition`)
**Default Value**: Top
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Top`
- `Bottom`

### for developers

<details><summary>source json</summary>
<p>
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
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFTrelloName",
			"Label": "Name",
			"Placeholder": "Shortcut Ideas",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTrelloBoardPickerParameter",
			"Key": "WFTrelloBoard",
			"Label": "Board"
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
</p></details>
