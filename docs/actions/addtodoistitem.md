
## Add Todoist Item / addtodoistitem (internally `is.workflow.actions.todoist.add`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use [object Object].


## description
### summary
Adds a new item to Todoist.

### input
Files to attach to the item

### output
The URL of the newly created item

### usage
`addtodoistitem content=[string|text] undefined=[???] undefined=[???] undefined=[???] remindertype=[string <${strInfo}>] priority=[string <${strInfo}>] notes=[string|text]`

### arguments
### Text Input: Content / content (internally `WFTodoistContent`)
**Placeholder**: Buy some milk
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFTodoistProjectPickerParameter

---

This paramtype is not implemented. WFDateFieldParameter

---

This paramtype is not implemented. WFDateFieldParameter

---

### Enumeration: Reminder Type / remindertype (internally `WFTodoistReminderType`)
**Default Value**: Email
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Email`
- `Push Notification`
- `Text Message`

---

### Enumeration: Priority / priority (internally `WFTodoistPriority`)
**Default Value**: 4
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `4`
- `3`
- `2`
- `1`

---

### Text Input: Notes / notes (internally `WFTodoistNotes`)
**Placeholder**: Notes
**Allows Variables**: true


Accepts a string 
or text
with the text.
