
## Append to File / appendtofile (internally is.workflow.actions.file.append)

> This action is not yet complete. Some arguments may be missing.

### usage
`appendtofile [???][???][???][???]`

### arguments
unknown parameter type This paramtype is not implemented. WFStorageServicePickerParameter
---
### Text Input: File Path / filepath (internally WFFilePath)
**Placeholder**: example.txt
**Default Value**: undefined
**Allows Variables**: true


Accepts a string 
or text
with the text.
---
### Enumeration: Mode / mode (internally WFAppendFileWriteMode)
**Placeholder**: undefined
**Default Value**: Append
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Append`
- `Prepend`
---
### Switch: Make New Line / makenewline (internally WFAppendOnNewLine)
**Placeholder**: undefined
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
