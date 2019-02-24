
## Take Video / takevideo (internally `is.workflow.actions.takevideo`)


> This action requires that Shortcuts has permission to use WFUserInteractionResource,WFCameraAccessResource.


## description
### summary
Uses the camera to take a video clip.

### output
Video from the camera.

### usage
`takevideo camera=[string <${strInfo}>] quality=[string <${strInfo}>] startrecording=[string <${strInfo}>]`

### arguments
### Enumeration: Camera / camera (internally `WFCameraCaptureDevice`)
**Default Value**: Back
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Front`
- `Back`

---

### Enumeration: Quality / quality (internally `WFCameraCaptureQuality`)
**Default Value**: Medium
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Low`
- `Medium`
- `High`

---

### Enumeration: Start Recording / startrecording (internally `WFRecordingStart`)
**Default Value**: Immediately
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `On Tap`
- `Immediately`
