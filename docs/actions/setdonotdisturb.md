
## Set Do Not Disturb / setdonotdisturb (internally `is.workflow.actions.dnd.set`)

> This action is not yet complete. Some arguments may be missing.


### usage
`setdonotdisturb donotdisturb=[string boolean|variable] until=[string <${strInfo}>] event=[variable] undefined=[???]`

### arguments
### Switch: Do Not Disturb / donotdisturb (internally `Enabled`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Enumeration: Until / until (internally `AssertionType`)
**Default Value**: Turned Off
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Turned Off`
- `Time`
- `I Leave`
- `Event Ends`

---

### Variable Picker: Event / event (internally `Event`)
**Allows Variables**: true


Accepts a variable.

---

This paramtype is not implemented. WFDateFieldParameter
