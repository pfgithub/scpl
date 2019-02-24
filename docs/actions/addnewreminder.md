
## Add New Reminder / addnewreminder (internally is.workflow.actions.addnewreminder)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFReminderAccessResource.

### usage
`addnewreminder title=[string|text] undefined=[???] undefined=[???] remind=[string <${strInfo}>] wheni=[string <${strInfo}>] radius=[string number] undefined=[???] undefined=[???] notes=[string|text]`

### arguments
### Text Input: Title / title (internally WFCalendarItemTitle)
**Placeholder**: Buy some milk
**Allows Variables**: true


Accepts a string 
or text
with the text.
---
This paramtype is not implemented. WFCalendarPickerParameter
---
This paramtype is not implemented. WFExpandingParameter
---
### Enumeration: Remind / remind (internally WFAlertTrigger)
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `At Time`
- `At Location`
---
### Enumeration: When I... / wheni (internally WFAlertLocationProximity)
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Enter`
- `Leave`
---
### Number: Radius / radius (internally WFAlertLocationRadius)
**Placeholder**: in meters
**Default Value**: 300
**Allows Variables**: true


Accepts a string 
or variable
with a number.
---
This paramtype is not implemented. WFLocationFieldParameter
---
This paramtype is not implemented. WFDateFieldParameter
---
### Text Input: Notes / notes (internally WFCalendarItemNotes)
**Placeholder**: Notes
**Allows Variables**: true


Accepts a string 
or text
with the text.
