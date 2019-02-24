
## Get Distance / getdistance (internally `is.workflow.actions.getdistance`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFMainThreadResource,WFLocationAccessResource.


## description
### summary
Calculates the distance to the location passed into this action.

### input
The destination

### output
The distance to the location in miles or kilometers.

### usage
`getdistance from=[string <${strInfo}>|variable] undefined=[???] routetype=[string <${strInfo}>] undefined=[???]`

### arguments
### Enumeration: From / from (internally `WFGetDirectionsFrom`)
**Default Value**: Current Location


Accepts a string 
containing one of the options:

- `Current Location`
- `Custom Location`

---

This paramtype is not implemented. WFLocationFieldParameter

---

### Enumeration: Route Type / routetype (internally `WFGetDirectionsActionMode`)
**Default Value**: Direct
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Direct`
- `Driving`
- `Walking`

---

This paramtype is not implemented. WFGetDistanceUnitPickerParameter
