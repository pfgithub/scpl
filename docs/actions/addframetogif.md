
## Add Frame to GIF / addframetogif (internally `is.workflow.actions.addframetogif`)



## description
### summary
Adds an image to the existing animated GIF passed as input. If no GIF is passed as input, a new animated GIF is created.

### input
An existing animated GIF, if desired.

### output
An animated GIF

### usage
`addframetogif image=[variable] delaytime=[string number] autosize=[string boolean|variable] width=[string number] height=[string number]`

### arguments
### Variable Picker: Image / image (internally `WFImage`)
**Allows Variables**: true


Accepts a variable.

---

### Number: Delay Time / delaytime (internally `WFGIFDelayTime`)
**Placeholder**: 0.25
**Default Value**: 0.25
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Switch: Auto Size / autosize (internally `WFGIFAutoSize`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Number: Width / width (internally `WFGIFManualSizeWidth`)
**Placeholder**: 500
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Height / height (internally `WFGIFManualSizeHeight`)
**Placeholder**: 500
**Allows Variables**: true


Accepts a string 
or variable
with a number.
