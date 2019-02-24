
## Request Uber / requestuber (internally `com.ubercab.UberClient.requestuber`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use [object Object].


## description
### summary
Requests an Uber from the specified location to the location passed as input.

### input
The destination

### output
The shareable link to your Uber ride

### usage
`requestuber showestimate=[string boolean|variable] undefined=[???] undefined=[???] pickupat=[string <${strInfo}>] undefined=[???]`

### arguments
### Switch: Show Estimate / showestimate (internally `UberShowEstimate`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

This paramtype is not implemented. WFUberProductPickerParameter

---

This paramtype is not implemented. WFUberSeatCountPickerParameter

---

### Enumeration: Pick Up At / pickupat (internally `UberPickupAt`)
**Default Value**: Current Location
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Current Location`
- `Custom Location`

---

This paramtype is not implemented. WFLocationFieldParameter
