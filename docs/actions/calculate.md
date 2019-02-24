
## Calculate / calculate (internally `is.workflow.actions.math`)


### usage
`calculate operation=[string <${strInfo}>] scientificoperation=[string <${strInfo}>] operand=[string number] operand=[string number]`

### arguments
### Enumeration: Operation / operation (internally `WFMathOperation`)
**Default Value**: +
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `+`
- `-`
- `×`
- `÷`
- `…`

---

### Enumeration: Scientific Operation / scientificoperation (internally `WFScientificMathOperation`)
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Modulus`
- `x^2`
- `x^3`
- `x^y`
- `e^x`
- `10^x`
- `ln(x)`
- `log(x)`
- `√x`
- `∛x`
- `x!`
- `sin(x)`
- `cos(x)`
- `tan(x)`
- `abs(x)`

---

### Number: Operand / operand (internally `WFMathOperand`)
**Placeholder**: 0
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Operand / operand (internally `WFScientificMathOperand`)
**Placeholder**: 3
**Allows Variables**: true


Accepts a string 
or variable
with a number.
