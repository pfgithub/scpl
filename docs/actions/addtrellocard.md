
## Add Trello Card / addtrellocard (internally `is.workflow.actions.trello.add.card`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFTrelloAccessResource.


## description
### summary
Creates a new card on the specified list and board in your Trello account.


### usage
`addtrellocard name=[string|text] undefined=[???] undefined=[???] undefined=[???] position=[string <${strInfo}>] attachments=[variable] wftrellodescription=[string|text]`

### arguments
### Text Input: Name / name (internally `WFTrelloName`)
**Placeholder**: Be productive
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFTrelloBoardPickerParameter

---

This paramtype is not implemented. WFTrelloListPickerParameter

---

This paramtype is not implemented. WFDateFieldParameter

---

### Enumeration: Position / position (internally `WFTrelloCardPosition`)
**Default Value**: Top
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

### Text Input: wftrellodescription / wftrellodescription (internally `WFTrelloDescription`)
**Placeholder**: Description
**Allows Variables**: true


Accepts a string 
or text
with the text.
