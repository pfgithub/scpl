
## Format File Size / formatfilesize (internally is.workflow.actions.format.filesize)


### usage
`formatfilesize format=[string <${strInfo}>] includeunits=[string|variable]`

### arguments
### Enumeration: Format / format (internally WFFileSizeFormat)
**Default Value**: Automatic
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Automatic`
- `Bytes`
- `KB`
- `MB`
- `GB`
- `TB`
- `PB`
- `EB`
- `ZB`
- `YB or Higher`
---
### Switch: Include Units / includeunits (internally WFFileSizeIncludeUnits)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
