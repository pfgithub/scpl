
## Mask Image / maskimage (internally `is.workflow.actions.image.mask`)


### usage
`maskimage type=[string <${strInfo}>|variable] cornerradius=[string number] imagemask=[variable]`

### arguments
### Enumeration: Type / type (internally `WFMaskType`)


Accepts a string 
containing one of the options:

- `Rounded Rectangle`
- `Ellipse`
- `Icon`
- `Custom Image`

---

### Number: Corner Radius / cornerradius (internally `WFMaskCornerRadius`)
**Placeholder**: 0
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Variable Picker: Image Mask / imagemask (internally `WFCustomMaskImage`)
**Allows Variables**: true


Accepts a variable.
