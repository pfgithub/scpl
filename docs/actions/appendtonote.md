
## Append to Note / appendtonote (internally `is.workflow.actions.evernote.append`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFEvernoteAccessResource.

### usage
`appendtonote notetitle=[string|text] mode=[string <${strInfo}>] undefined=[???]`

### arguments
### Text Input: Note Title / notetitle (internally `WFEvernoteNotesTitleSearch`)
**Placeholder**: example note
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Enumeration: Mode / mode (internally `WFEvernoteWriteMode`)
**Default Value**: Append
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Append`
- `Prepend`

---

This paramtype is not implemented. WFEvernoteNotebookPickerParameter
