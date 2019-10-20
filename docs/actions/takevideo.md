
## Take Video / TakeVideo (internally `is.workflow.actions.takevideo`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource,WFCameraAccessResource.


## description

### summary

Uses the camera to take a video clip.


### output

Video from the camera.

### usage
```
TakeVideo camera=("Front" | "Back") quality=("Low" | "Medium" | "High") startRecording=("On Tap" | "Immediately")
```

### arguments

---

### camera: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Back"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Front`
- `Back`

---

### quality: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Medium"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Low`
- `Medium`
- `High`

---

### startRecording: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Immediately"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `On Tap`
- `Immediately`

---

### source json (for developers)

```json
{
	"ActionClass": "WFTakeVideoAction",
	"ActionKeywords": [
		"camera",
		"clip",
		"record"
	],
	"AppIdentifier": "com.apple.camera",
	"Category": "Media",
	"Description": {
		"DescriptionResult": "Video from the camera.",
		"DescriptionSummary": "Uses the camera to take a video clip."
	},
	"InputPassthrough": false,
	"Name": "Take Video",
	"Output": {
		"Multiple": false,
		"OutputName": "Video",
		"Types": [
			"com.apple.quicktime-movie"
		]
	},
	"ParameterSummary": "Take video with ${WFCameraCaptureDevice} camera",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Back",
			"Items": [
				"Front",
				"Back"
			],
			"Key": "WFCameraCaptureDevice",
			"Label": "Camera"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Medium",
			"Items": [
				"Low",
				"Medium",
				"High"
			],
			"Key": "WFCameraCaptureQuality",
			"Label": "Quality"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Immediately",
			"Items": [
				"On Tap",
				"Immediately"
			],
			"Key": "WFRecordingStart",
			"Label": "Start Recording"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource",
		"WFCameraAccessResource"
	],
	"Subcategory": "Camera",
	"UserInterfaces": [
		"UIKit"
	]
}
```
