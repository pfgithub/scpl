
## Get Group from Matched Text / getgroupfrommatchedtext (internally `is.workflow.actions.text.match.getgroup`)



## description
### summary
Gets the text that matched a particular capture group or all of the capture groups from the output of a Match Text action.


### usage
`getgroupfrommatchedtext get=[string <${strInfo}>] groupindex=[string number]`

### arguments
### Enumeration: Get / get (internally `WFGetGroupType`)
**Default Value**: Group At Index
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Group At Index`
- `All Groups`

---

### Number: Group Index / groupindex (internally `WFGroupIndex`)
**Placeholder**: 1
**Default Value**: 1
**Allows Variables**: true


Accepts a string 
or variable
with a number.
