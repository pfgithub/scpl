
## Add Trello Card / AddTrelloCard (internally `is.workflow.actions.trello.add.card`)

> This action requires that Shortcuts has permission to use WFTrelloAccessResource.


## description

### summary

Creates a new card on the specified list and board in your Trello account.


### usage
```
AddTrelloCard name="string" board=("string" | variable)] list=("string" | variable)] due="string" position=("Top" | "Bottom") attachments=(v:myvar | mv:myvar | s:myvar) WFTrelloDescription="string"
```

### arguments

---

### name: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Be productive"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### board: Trello Board Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### list: Trello List Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### due: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Tomorrow at 1pm"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

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

### attachments: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true



Accepts a variable.

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
	"ActionClass": "WFTrelloAddCardAction",
	"AppIdentifier": "com.fogcreek.trello",
	"Category": "Text",
	"CreationDate": "2016-05-12T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Creates a new card on the specified list and board in your Trello account."
	},
	"Name": "Add Trello Card",
	"Output": {
		"Multiple": false,
		"OutputName": "Trello Card",
		"Types": [
			"WFTrelloCard"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFTrelloName",
			"Label": "Name",
			"Placeholder": "Be productive",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTrelloBoardPickerParameter",
			"Key": "WFTrelloBoard",
			"Label": "Board"
		},
		{
			"BoardKey": "WFTrelloBoard",
			"Class": "WFTrelloListPickerParameter",
			"Key": "WFTrelloList",
			"Label": "List"
		},
		{
			"Class": "WFDateFieldParameter",
			"Key": "WFTrelloDueDate",
			"Label": "Due",
			"Placeholder": "Tomorrow at 1pm",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Top",
			"Items": [
				"Top",
				"Bottom"
			],
			"Key": "WFTrelloCardPosition",
			"Label": "Position"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Description": "A list of items to be attached to the new card as files",
			"Key": "WFTrelloAttachments",
			"Label": "Attachments"
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
	"ShortName": "Add Card"
}
```
