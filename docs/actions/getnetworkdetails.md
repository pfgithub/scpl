
## Get Network Details / getnetworkdetails (internally `is.workflow.actions.getwifi`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Gets information about the currently connected networks.


### usage
`getnetworkdetails undefined=[???] get=[string <${strInfo}>] get=[string <${strInfo}>]`

### arguments
This paramtype is not implemented. WFNetworkPickerParameter

---

### Enumeration: Get / get (internally `WFWiFiDetail`)
**Default Value**: Network Name
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Network Name`
- `BSSID`

---

### Enumeration: Get / get (internally `WFCellularDetail`)
**Default Value**: Carrier Name
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Carrier Name`
- `Radio Technology`
- `Country Code`
