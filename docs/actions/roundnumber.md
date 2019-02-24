
## Round Number / roundnumber (internally `is.workflow.actions.round`)



## description
### summary
Rounds the number(s) passed into the action.


### usage
`roundnumber round=[string <${strInfo}>] mode=[string <${strInfo}>] wfrounddecimalplaces=[string integer]`

### arguments
### Enumeration: Round / round (internally `WFRoundType`)
**Default Value**: Left of Decimal
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Left of Decimal`
- `Right of Decimal`

---

### Enumeration: Mode / mode (internally `WFRoundMode`)
**Default Value**: Normal
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Normal`
- `Always Round Up`
- `Always Round Down`

---

### Stepper Number: wfrounddecimalplaces / wfrounddecimalplaces (internally `WFRoundDecimalPlaces`)
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.
