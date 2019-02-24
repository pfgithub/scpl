
## Round Number / roundnumber (internally is.workflow.actions.round)


### usage
`roundnumber round=[string <${strInfo}>] mode=[string <${strInfo}>] noname=[string integer]`

### arguments
### Enumeration: Round / round (internally WFRoundType)
**Default Value**: Left of Decimal
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Left of Decimal`
- `Right of Decimal`
---
### Enumeration: Mode / mode (internally WFRoundMode)
**Default Value**: Normal
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Normal`
- `Always Round Up`
- `Always Round Down`
---
### Stepper Number: No Name / noname (internally WFRoundDecimalPlaces)
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.
