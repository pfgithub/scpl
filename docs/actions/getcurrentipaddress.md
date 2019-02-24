
## Get Current IP Address / getcurrentipaddress (internally is.workflow.actions.getipaddress)


### usage
`getcurrentipaddress address=[string <${strInfo}>] type=[string <${strInfo}>]`

### arguments
### Enumeration: Address / address (internally WFIPAddressSourceOption)
**Default Value**: External
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `External`
- `Local`
---
### Enumeration: Type / type (internally WFIPAddressTypeOption)
**Default Value**: IPv4
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `IPv4`
- `IPv6`
