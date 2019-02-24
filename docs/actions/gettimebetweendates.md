
## Get Time Between Dates / gettimebetweendates (internally `is.workflow.actions.gettimebetweendates`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Subtracts the specified date from the date passed into the action. For example, this action could get the number of minutes from now until a calendar event passed in as input.


### usage
`gettimebetweendates gettimefrom=[string <${strInfo}>|variable] undefined=[???] in=[string <${strInfo}>]`

### arguments
### Enumeration: Get Time From / gettimefrom (internally `WFTimeUntilReferenceDate`)
**Default Value**: Right Now


Accepts a string 
containing one of the options:

- `Right Now`
- `Other`

---

This paramtype is not implemented. WFDateFieldParameter

---

### Enumeration: In / in (internally `WFTimeUntilUnit`)
**Default Value**: Minutes
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Total Time`
- `Seconds`
- `Minutes`
- `Hours`
- `Days`
- `Weeks`
- `Months`
- `Years`
