
## Add Trello Card / addtrellocard (internally `is.workflow.actions.trello.add.card`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFTrelloAccessResource.


## description

### summary

Creates a new card on the specified list and board in your Trello account.


### usage
```
addtrellocard a{name=[string|text] undefined=[???] undefined=[???] undefined=[???] position=[string <Top | Bottom>] attachments=[variable] wftrellodescription=[string|text]}
```

### arguments

---

### Text: Name / name (internally `WFTrelloName`)
**Placeholder**:
```
Be productive
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

#### This paramtype is not implemented. WFTrelloBoardPickerParameter

---

#### This paramtype is not implemented. WFTrelloListPickerParameter

---

#### This paramtype is not implemented. WFDateFieldParameter

---

### Enumeration: Position / position (internally `WFTrelloCardPosition`)
**Default Value**:
```
Top
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Top`
- `Bottom`

---

### Variable Picker: Attachments / attachments (internally `WFTrelloAttachments`)
**Allows Variables**: true



Accepts a variable.

---

### Text: wftrellodescription / wftrellodescription (internally `WFTrelloDescription`)
**Placeholder**:
```
Description
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json

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
