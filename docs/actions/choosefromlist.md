
## Choose from List / choosefromlist (internally `is.workflow.actions.choosefromlist`)


> This action requires that Shortcuts has permission to use WFUserInteractionResource.

### usage
`choosefromlist prompt=[string|text] selectmultiple=[string boolean|variable] selectallinitially=[string boolean|variable]`

### arguments
### Text Input: Prompt / prompt (internally `WFChooseFromListActionPrompt`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Switch: Select Multiple / selectmultiple (internally `WFChooseFromListActionSelectMultiple`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Switch: Select All Initially / selectallinitially (internally `WFChooseFromListActionSelectAll`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
