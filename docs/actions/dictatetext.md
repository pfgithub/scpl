
## Dictate Text / dictatetext (internally `is.workflow.actions.dictatetext`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use [object Object],WFUserInteractionResource,WFSpeechRecognitionAccessResource,WFMicrophoneAccessResource.


## description
### summary
Transcribes what you say aloud into text and passes the result to the next action.


### usage
`dictatetext undefined=[???] stoplistening=[string <${strInfo}>]`

### arguments
This paramtype is not implemented. WFDictateTextLanguagePickerParameter

---

### Enumeration: Stop Listening / stoplistening (internally `WFDictateTextStopListening`)
**Default Value**: After Pause
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `After Pause`
- `After Short Pause`
- `On Tap`
