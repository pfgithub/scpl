
## Match Text / matchtext (internally `is.workflow.actions.text.match`)



## description
### summary
Searches text passed into the action for matches to a regular expression.

### output
A list of text items that matched the regular expression

### usage
`matchtext pattern=[string|text] casesensitive=[string boolean|variable]`

### arguments
### Text Input: Pattern / pattern (internally `WFMatchTextPattern`)
**Default Value**: [0-9a-zA-Z]
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Switch: Case Sensitive / casesensitive (internally `WFMatchTextCaseSensitive`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
