
## Get File / getfile (internally is.workflow.actions.documentpicker.open)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use [object Object].

### usage
`getfile undefined=[???] showdocumentpicker=[string|variable] selectmultiple=[string|variable] filepath=[string|text] initialpath=[string|text] errorifnotfound=[string|variable]`

### arguments
This paramtype is not implemented. WFStorageServicePickerParameter
---
### Switch: Show Document Picker / showdocumentpicker (internally WFShowFilePicker)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
---
### Switch: Select Multiple / selectmultiple (internally SelectMultiple)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
---
### Text Input: File Path / filepath (internally WFGetFilePath)
**Placeholder**: example.txt
**Allows Variables**: true


Accepts a string 
or text
with the text.
---
### Text Input: Initial Path / initialpath (internally WFGetFileInitialDirectoryPath)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.
---
### Switch: Error If Not Found / errorifnotfound (internally WFFileErrorIfNotFound)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
