
## Base64 Encode / base64encode (internally `is.workflow.actions.base64encode`)



## description
### summary
Encodes or decodes text or files using Base64 encoding.


### usage
`base64encode mode=[string <${strInfo}>] linebreaks=[string <${strInfo}>]`

### arguments
### Enumeration: Mode / mode (internally `WFEncodeMode`)
**Default Value**: Encode
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Encode`
- `Decode`

---

### Enumeration: Line Breaks / linebreaks (internally `WFBase64LineBreakMode`)
**Default Value**: Every 76 Characters
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `None`
- `Every 64 Characters`
- `Every 76 Characters`
