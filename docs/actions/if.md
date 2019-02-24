
## If / if (internally `is.workflow.actions.conditional`)



## description
### summary
Tests if any item passed as input matches the specified condition, and if so, runs the actions inside. Otherwise, the actions under “Otherwise” are run.


### usage
`if input=[string <${strInfo}>|variable] number=[string number] value=[string|text]`

### arguments
### Enumeration: Input / input (internally `WFCondition`)
**Default Value**: Contains


Accepts a string 
containing one of the options:

- `Equals`
- `Contains`
- `Is Greater Than`
- `Is Less Than`

---

### Number: Number / number (internally `WFNumberValue`)
**Placeholder**: 7
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Text Input: Value / value (internally `WFConditionalActionString`)
**Placeholder**: example
**Allows Variables**: true


Accepts a string 
or text
with the text.
