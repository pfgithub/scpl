
## Combine Text / combinetext (internally `is.workflow.actions.text.combine`)



## description
### summary
Joins text together, inserting the separator between each join.


### usage
`combinetext separator=[string <${strInfo}>] custom=[string|text]`

### arguments
### Enumeration: Separator / separator (internally `WFTextSeparator`)
**Default Value**: Spaces
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `New Lines`
- `Spaces`
- `Custom`

---

### Text Input: Custom / custom (internally `WFTextCustomSeparator`)
**Placeholder**: Text
**Allows Variables**: true


Accepts a string 
or text
with the text.
