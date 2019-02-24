
## Open X-Callback URL / openxcallbackurl (internally `is.workflow.actions.openxcallbackurl`)


> This action requires that Shortcuts has permission to use WFURLOpenResource.


## description
### summary
Performs the specified x-callback-url action. The x-success, x-cancel, and x-error parameters will be added automatically.

### output
When the app that's opened calls back to Shortcuts using x-success, it may include parameters in the URL. These will be passed as output to the next action, as text if there is just one parameter, or as a dictionary if there are multiple (use Get Dictionary Value to access it).

### usage
`openxcallbackurl customcallback=[string boolean|variable] successkey=[string|text] cancelkey=[string|text] errorkey=[string|text] customxsuccessurl=[string boolean|variable] xsuccessurl=[string|text]`

### arguments
### Switch: Custom Callback / customcallback (internally `WFXCallbackCustomCallbackEnabled`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Text Input: Success Key / successkey (internally `WFXCallbackCustomSuccessKey`)
**Default Value**: x-success
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Cancel Key / cancelkey (internally `WFXCallbackCustomCancelKey`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Error Key / errorkey (internally `WFXCallbackCustomErrorKey`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Switch: Custom X-Success URL / customxsuccessurl (internally `WFXCallbackCustomSuccessURLEnabled`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Text Input: X-Success URL / xsuccessurl (internally `WFXCallbackCustomSuccessURL`)
**Default Value**: shortcuts://callback
**Allows Variables**: true


Accepts a string 
or text
with the text.
