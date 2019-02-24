
## Record Audio / recordaudio (internally is.workflow.actions.recordaudio)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFUserInteractionResource,WFMicrophoneAccessResource.

### usage
`recordaudio audioquality=[string <${strInfo}>] startrecording=[string <${strInfo}>] finishrecording=[string <${strInfo}>] undefined=[???]`

### arguments
### Enumeration: Audio Quality / audioquality (internally WFRecordingCompression)
**Default Value**: Normal
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Normal`
- `Very High`
---
### Enumeration: Start Recording / startrecording (internally WFRecordingStart)
**Default Value**: On Tap
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `On Tap`
- `Immediately`
---
### Enumeration: Finish Recording / finishrecording (internally WFRecordingEnd)
**Default Value**: On Tap
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `On Tap`
- `After Time`
---
This paramtype is not implemented. WFTimeIntervalParameter
