
## Add New Event / addnewevent (internally `is.workflow.actions.addnewevent`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFCalendarAccessResource.


## description
### summary
Creates a new event and adds it to the selected calendar.

### output
The new event

### usage
`addnewevent title=[string|text] location=[string|text] undefined=[???] date=[string boolean] undefined=[???] undefined=[???] allday=[string boolean|variable] alert=[string <${strInfo}>] alerttime=[string|text] notes=[string|text]`

### arguments
### Text Input: Title / title (internally `WFCalendarItemTitle`)
**Placeholder**: Lunch with Tim
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Location / location (internally `WFCalendarItemLocation`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFCalendarPickerParameter

---

### Expand Arrow: Date / date (internally `WFCalendarItemDates`)


Accepts a string with either true or false for if this
parameter is expanded or not.

---

This paramtype is not implemented. WFDateFieldParameter

---

This paramtype is not implemented. WFDateFieldParameter

---

### Switch: All Day / allday (internally `WFCalendarItemAllDay`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Enumeration: Alert / alert (internally `WFAlertTime`)
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `At time of event`
- `5 minutes before`
- `15 minutes before`
- `30 minutes before`
- `1 hour before`
- `2 hours before`
- `1 day before`
- `2 days before`
- `1 week before`
- `Custom`

---

### Text Input: Alert Time / alerttime (internally `WFAlertCustomTime`)
**Placeholder**: Tomorrow at 4pm
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Notes / notes (internally `WFCalendarItemNotes`)
**Placeholder**: Notes
**Allows Variables**: true


Accepts a string 
or text
with the text.
