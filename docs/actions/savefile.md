
## Save File / savefile (internally `is.workflow.actions.documentpicker.save`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use [object Object].


## description
### summary
Save files to iCloud Drive or Dropbox. Turn off “Ask Where to Save” in order to specify a destination path.

### output
The saved files

### usage
`savefile undefined=[???] askwheretosave=[string boolean|variable] destinationpath=[string|text] overwriteiffileexists=[string boolean|variable]`

### arguments
This paramtype is not implemented. WFStorageServicePickerParameter

---

### Switch: Ask Where to Save / askwheretosave (internally `WFAskWhereToSave`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Text Input: Destination Path / destinationpath (internally `WFFileDestinationPath`)
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Switch: Overwrite If File Exists / overwriteiffileexists (internally `WFSaveFileOverwrite`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
