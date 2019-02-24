
## Combine Images / combineimages (internally is.workflow.actions.image.combine)


### usage
`combineimages mode=[string <${strInfo}>] direction=[string <${strInfo}>] spacing=[string number]`

### arguments
### Enumeration: Mode / mode (internally WFImageCombineMode)
**Default Value**: Side-by-Side
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Side-by-Side`
- `Grid`
---
### Enumeration: Direction / direction (internally WFImageCombineDirection)
**Default Value**: Horizontal
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Horizontal`
- `Vertical`
---
### Number: Spacing / spacing (internally WFImageCombineSpacing)
**Placeholder**: 0
**Allows Variables**: true


Accepts a string 
or variable
with a number.
