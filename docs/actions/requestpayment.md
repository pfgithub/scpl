
## Request Payment / requestpayment (internally `is.workflow.actions.venmo.request`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFContactAccessResource.

### usage
`requestpayment undefined=[???] undefined=[???] amount=[string number] openinapp=[string boolean|variable] note=[string|text]`

### arguments
This paramtype is not implemented. WFIntentAppPickerParameter

---

This paramtype is not implemented. WFContactHandleFieldParameter

---

### Number: Amount / amount (internally `WFVenmoActionAmount`)
**Placeholder**: 7.00
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Switch: Open in App / openinapp (internally `WFVenmoActionAppSwitch`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Text Input: Note / note (internally `WFVenmoActionNote`)
**Placeholder**: Note
**Allows Variables**: true


Accepts a string 
or text
with the text.
