
## Make PDF / makepdf (internally is.workflow.actions.makepdf)

### usage
`makepdf [???][???][???][???][???]`

### arguments
### Switch: Include Margin / includemargin (internally WFPDFIncludeMargin)
**Placeholder**: undefined
**Default Value**: false
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
---
### Enumeration: Include / include (internally WFPDFIncludedPages)
**Placeholder**: undefined
**Default Value**: All Pages
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `All Pages`
- `Single Page`
- `Page Range`
---
### Number: Page # / page (internally WFPDFSinglePage)
**Placeholder**: 1
**Default Value**: undefined
**Allows Variables**: true


Accepts a string 
or variable
with a number.
---
### Number: Start Page # / startpage (internally WFPDFPageRangeStart)
**Placeholder**: 1
**Default Value**: undefined
**Allows Variables**: true


Accepts a string 
or variable
with a number.
---
### Number: End Page # / endpage (internally WFPDFPageRangeEnd)
**Placeholder**: 3
**Default Value**: undefined
**Allows Variables**: true


Accepts a string 
or variable
with a number.
