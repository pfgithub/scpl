
## Get Travel Time / gettraveltime (internally `is.workflow.actions.gettraveltime`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFMainThreadResource,WFLocationAccessResource.


## description
### summary
Estimates the amount of time it will take to travel to the location passed into this action.

### input
The destination

### output
The amount of time it will take to get to the destination. If passed into an action expecting a date, this will be the date and time of arrival if you leave now.

### usage
`gettraveltime from=[string <${strInfo}>|variable] undefined=[???] transportationmode=[string <${strInfo}>]`

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

### Enumeration: Transportation Mode / transportationmode (internally `WFGetDirectionsActionMode`)
**Default Value**: Driving
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Driving`
- `Walking`
- `Transit`
