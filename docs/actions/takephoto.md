
## Take Photo / takephoto (internally is.workflow.actions.takephoto)


> This action requires that Shortcuts has permission to use WFUserInteractionResource,WFCameraAccessResource.

### usage
`takephoto showcamerapreview=[string|variable] noname=[string integer] camera=[string <${strInfo}>]`

### arguments
### Switch: Show Camera Preview / showcamerapreview (internally WFCameraCaptureShowPreview)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
---
### Stepper Number: No Name / noname (internally WFPhotoCount)
**Default Value**: 1
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.
---
### Enumeration: Camera / camera (internally WFCameraCaptureDevice)
**Default Value**: Back
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Front`
- `Back`
