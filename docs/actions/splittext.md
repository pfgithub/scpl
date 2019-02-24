
## Split Text / splittext (internally `is.workflow.actions.text.split`)



## description
### summary
Separates text passed into the action into a list.


### usage
`splittext separator=[string <${strInfo}>] custom=[string|text]`

### arguments
### Enumeration: Separator / separator (internally `WFTextSeparator`)
**Default Value**: New Lines
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `New Lines`
- `Spaces`
- `Every Character`
- `Custom`

---

### Text Input: Custom / custom (internally `WFTextCustomSeparator`)
**Placeholder**: Text
**Allows Variables**: true


Accepts a string 
or text
with the text.
