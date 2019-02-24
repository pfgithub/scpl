
## Replace Text / replacetext (internally `is.workflow.actions.text.replace`)



## description
### summary
Replaces some text passed into the action with other text.


### usage
`replacetext findtext=[string|text] replacewith=[string|text] casesensitive=[string boolean|variable] regularexpression=[string boolean|variable]`

### arguments
### Text Input: Find Text / findtext (internally `WFReplaceTextFind`)
**Placeholder**: hello
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Replace With / replacewith (internally `WFReplaceTextReplace`)
**Placeholder**: world
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Switch: Case Sensitive / casesensitive (internally `WFReplaceTextCaseSensitive`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Switch: Regular Expression / regularexpression (internally `WFReplaceTextRegularExpression`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
