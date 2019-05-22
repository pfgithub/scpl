
## Take Photo / TakePhoto (internally `is.workflow.actions.takephoto`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource,WFCameraAccessResource.


## description

### summary

Uses the camera to take photos.


### output

Photo from the camera.

### usage
```
TakePhoto ShowCameraPreview=(true | false | variable) WFPhotoCount=number Camera=("Front" | "Back")
```

### arguments

---

### ShowCameraPreview: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### WFPhotoCount: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**: `1`
**Allows Variables**: true

**Only enabled if**: argument WFCameraCaptureShowPreview == `true`

		Accepts a number 
		or variable
		with a number.

---

### Camera: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Back"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Front`
- `Back`

---

### source json (for developers)

```json
{
	"ActionClass": "WFTakePhotoAction",
	"ActionKeywords": [
		"camera",
		"take",
		"photo"
	],
	"AppIdentifier": "com.apple.camera",
	"Category": "Photos & Video",
	"Description": {
		"DescriptionResult": "Photo from the camera.",
		"DescriptionSummary": "Uses the camera to take photos."
	},
	"InputPassthrough": false,
	"LastModifiedDate": "2015-08-20T07:00:00.000Z",
	"Name": "Take Photo",
	"Output": {
		"Multiple": true,
		"OutputName": "Photo",
		"Required": true,
		"Types": [
			"UIImage"
		]
	},
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFCameraCaptureShowPreview",
			"Label": "Show Camera Preview"
		},
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFPhotoCount",
			"RequiredResources": [
				{
					"WFParameterKey": "WFCameraCaptureShowPreview",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"StepperDescription": "Number of Photos",
			"StepperNoun": "Photo",
			"StepperPluralNoun": "Photos",
			"StepperPrefix": "Take"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Back",
			"Items": [
				"Front",
				"Back"
			],
			"Key": "WFCameraCaptureDevice",
			"Label": "Camera"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource",
		"WFCameraAccessResource"
	],
	"Subcategory": "Camera",
	"UnsupportedEnvironments": [
		"Extension"
	],
	"UserInterfaces": [
		"UIKit"
	]
}
```
