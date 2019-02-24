
## Append to File / appendtofile (internally `is.workflow.actions.file.append`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Adds the text passed as input to the end of the specified file.

### output
The file that was appended to

### usage
`appendtofile undefined=[???] filepath=[string|text] mode=[string <${strInfo}>] makenewline=[string boolean|variable]`

### arguments
This paramtype is not implemented. WFStorageServicePickerParameter

---

### Text Input: File Path / filepath (internally `WFFilePath`)
**Placeholder**: example.txt
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Enumeration: Mode / mode (internally `WFAppendFileWriteMode`)
**Default Value**: Append
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Append`
- `Prepend`

---

### Switch: Make New Line / makenewline (internally `WFAppendOnNewLine`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
