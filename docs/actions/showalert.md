
## Show Alert / showalert (internally `is.workflow.actions.alert`)


> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description
### summary
Displays an alert with a title, a message, and two buttons. If the user selects the OK button, the shortcut continues. The cancel button stops the shortcut.


### usage
`showalert title=[string|text] message=[string|text] showcancelbutton=[string boolean|variable]`

### arguments
### Text Input: Title / title (internally `WFAlertActionTitle`)
**Placeholder**: Attention-grabbing title
**Default Value**: Alert
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Message / message (internally `WFAlertActionMessage`)
**Placeholder**: Informational message
**Default Value**: Do you want to continue?
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Switch: Show Cancel Button / showcancelbutton (internally `WFAlertActionCancelButtonShown`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
