
## Get Upcoming Events / getupcomingevents (internally `is.workflow.actions.getupcomingevents`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFCalendarAccessResource.


## description
### summary
Gets upcoming calendar events, ordered from nearest to farthest away in time.


### usage
`getupcomingevents undefined=[???] wfgetupcomingitemcount=[string integer] day=[string <${strInfo}>] undefined=[???]`

### arguments
This paramtype is not implemented. WFCalendarPickerParameter

---

### Stepper Number: wfgetupcomingitemcount / wfgetupcomingitemcount (internally `WFGetUpcomingItemCount`)
**Default Value**: 1
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.

---

### Enumeration: Day / day (internally `WFDateSpecifier`)
**Default Value**: Any Day
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Any Day`
- `Today`
- `Tomorrow`
- `Specified Day`

---

This paramtype is not implemented. WFDateFieldParameter
