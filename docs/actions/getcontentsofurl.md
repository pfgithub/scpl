
## Get Contents of URL / getcontentsofurl (internally `is.workflow.actions.downloadurl`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Gets the contents of URLs passed into the action. Useful for downloading files and web content, or for making API requests.

### output
The fetched data

### usage
`getcontentsofurl advanced=[string boolean] method=[string <${strInfo}>] headers=[string boolean] undefined=[???] requestbody=[string <${strInfo}>|variable] undefined=[???] undefined=[???] file=[variable]`

### arguments
### Expand Arrow: Advanced / advanced (internally `Advanced`)


Accepts a string with either true or false for if this
parameter is expanded or not.

---

### Enumeration: Method / method (internally `WFHTTPMethod`)
**Default Value**: GET
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `GET`
- `POST`
- `PUT`
- `PATCH`
- `DELETE`

---

### Expand Arrow: Headers / headers (internally `ShowHeaders`)


Accepts a string with either true or false for if this
parameter is expanded or not.

---

This paramtype is not implemented. WFDictionaryParameter

---

### Enumeration: Request Body / requestbody (internally `WFHTTPBodyType`)
**Default Value**: JSON


Accepts a string 
containing one of the options:

- `JSON`
- `Form`
- `File`

---

This paramtype is not implemented. WFDictionaryParameter

---

This paramtype is not implemented. WFDictionaryParameter

---

### Variable Picker: File / file (internally `WFRequestVariable`)
**Allows Variables**: true


Accepts a variable.
