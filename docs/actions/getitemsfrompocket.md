
## Get Items from Pocket / getitemsfrompocket (internally `is.workflow.actions.pocket.get`)


> This action requires that Shortcuts has permission to use WFPocketAccessResource.

### usage
`getitemsfrompocket wfpocketitemcount=[string integer] type=[string <${strInfo}>] search=[string|text] tag=[string|text]`

### arguments
### Stepper Number: wfpocketitemcount / wfpocketitemcount (internally `WFPocketItemCount`)
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.

---

### Enumeration: Type / type (internally `WFPocketItemState`)
**Default Value**: All
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Unread`
- `Archived`
- `All`

---

### Text Input: Search / search (internally `WFPocketItemSearchTerm`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Tag / tag (internally `WFPocketItemSearchTags`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.
