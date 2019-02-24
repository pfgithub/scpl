
## Make PDF / makepdf (internally `is.workflow.actions.makepdf`)



## description
### summary
Makes a PDF out of the input. The resulting PDF can optionally include a quarter-inch margin for better printing.


### usage
`makepdf includemargin=[string boolean|variable] include=[string <${strInfo}>] page=[string number] startpage=[string number] endpage=[string number]`

### arguments
### Switch: Include Margin / includemargin (internally `WFPDFIncludeMargin`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Enumeration: Include / include (internally `WFPDFIncludedPages`)
**Default Value**: All Pages
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `All Pages`
- `Single Page`
- `Page Range`

---

### Number: Page # / page (internally `WFPDFSinglePage`)
**Placeholder**: 1
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Start Page # / startpage (internally `WFPDFPageRangeStart`)
**Placeholder**: 1
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: End Page # / endpage (internally `WFPDFPageRangeEnd`)
**Placeholder**: 3
**Allows Variables**: true


Accepts a string 
or variable
with a number.
