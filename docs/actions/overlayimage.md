
## Overlay Image / overlayimage (internally `is.workflow.actions.overlayimageonimage`)


> This action requires that Shortcuts has permission to use [object Object].

### usage
`overlayimage image=[variable] showimageeditor=[string boolean|variable] position=[string <${strInfo}>] width=[string number] height=[string number] xcoordinate=[string number] ycoordinate=[string number] rotationdegrees=[string number] opacity=[string number]`

### arguments
### Variable Picker: Image / image (internally `WFImage`)
**Allows Variables**: true


Accepts a variable.

---

### Switch: Show Image Editor / showimageeditor (internally `WFShouldShowImageEditor`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Enumeration: Position / position (internally `WFImagePosition`)
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

### Number: Width / width (internally `WFImageWidth`)
**Placeholder**: Auto
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Height / height (internally `WFImageHeight`)
**Placeholder**: Auto
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: X Coordinate / xcoordinate (internally `WFImageX`)
**Placeholder**: 0
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Y Coordinate / ycoordinate (internally `WFImageY`)
**Placeholder**: 0
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Rotation (Degrees) / rotationdegrees (internally `WFRotation`)
**Placeholder**: 0
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Opacity / opacity (internally `WFOverlayImageOpacity`)
**Placeholder**: 100%
**Default Value**: 100
**Allows Variables**: true


Accepts a string 
or variable
with a number.
