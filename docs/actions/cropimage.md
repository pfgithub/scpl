
## Crop Image / cropimage (internally `is.workflow.actions.image.crop`)



## description
### summary
Crops images to a smaller rectangle.


### usage
`cropimage position=[string <${strInfo}>] xcoordinate=[string number] ycoordinate=[string number] width=[string number] height=[string number]`

### arguments
### Enumeration: Position / position (internally `WFImageCropPosition`)
**Default Value**: Center
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Center`
- `Top Left`
- `Top Right`
- `Bottom Left`
- `Bottom Right`
- `Custom`

---

### Number: X Coordinate / xcoordinate (internally `WFImageCropX`)
**Placeholder**: 0
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Y Coordinate / ycoordinate (internally `WFImageCropY`)
**Placeholder**: 0
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Width / width (internally `WFImageCropWidth`)
**Placeholder**: 100
**Default Value**: 100
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Height / height (internally `WFImageCropHeight`)
**Placeholder**: 100
**Default Value**: 100
**Allows Variables**: true


Accepts a string 
or variable
with a number.
