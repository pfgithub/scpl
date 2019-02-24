
## Format Date / formatdate (internally is.workflow.actions.format.date)

> This action is not yet complete. Some arguments may be missing.

### usage
`formatdate [???][???][???][???][???]`

### arguments
### Enumeration: Date Format / dateformat (internally WFDateFormatStyle)
**Placeholder**: undefined
**Default Value**: Short
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `None`
- `Short`
- `Medium`
- `Long`
- `Relative`
- `RFC 2822`
- `ISO 8601`
- `Custom`
---
### Enumeration: Alternate Format / alternateformat (internally WFRelativeDateFormatStyle)
**Placeholder**: undefined
**Default Value**: Medium
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Short`
- `Medium`
- `Long`
---
### Enumeration: Time Format / timeformat (internally WFTimeFormatStyle)
**Placeholder**: undefined
**Default Value**: Short
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `None`
- `Short`
- `Medium`
- `Long`
- `Relative`
---
### Switch: Include ISO 8601 Time / includeiso8601time (internally WFISO8601IncludeTime)
**Placeholder**: undefined
**Default Value**: undefined
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
---
unknown parameter type This paramtype is not implemented. WFCustomDateFormatParameter
