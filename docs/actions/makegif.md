
## Make GIF / makegif (internally `is.workflow.actions.makegif`)


### usage
`makegif secondsperphoto=[string number] loopforever=[string boolean|variable] wfmakegifactionloopcount=[string integer] autosize=[string boolean|variable] width=[string number] height=[string number]`

### arguments
### Number: Seconds Per Photo / secondsperphoto (internally `WFMakeGIFActionDelayTime`)
**Placeholder**: 0.2
**Default Value**: 0.2
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Switch: Loop Forever / loopforever (internally `WFMakeGIFActionLoopEnabled`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Stepper Number: wfmakegifactionloopcount / wfmakegifactionloopcount (internally `WFMakeGIFActionLoopCount`)
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.

---

### Switch: Auto Size / autosize (internally `WFMakeGIFActionAutoSize`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Number: Width / width (internally `WFMakeGIFActionManualSizeWidth`)
**Placeholder**: 500
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Height / height (internally `WFMakeGIFActionManualSizeHeight`)
**Placeholder**: 500
**Allows Variables**: true


Accepts a string 
or variable
with a number.
