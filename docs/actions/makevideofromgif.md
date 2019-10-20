
## Make Video from GIF / MakeVideofromGIF (internally `is.workflow.actions.makevideofromgif`)


## description

### summary

Converts an animated GIF into a video.


### input

An animated GIF


### output

A video

### usage
```
MakeVideofromGIF WFMakeVideoFromGIFActionLoopCount=number image=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### WFMakeVideoFromGIFActionLoopCount: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**: `1`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### image: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Image
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFMakeVideoFromGIFAction",
	"ActionKeywords": [
		"video",
		"gif",
		"convert",
		"make"
	],
	"Category": "Media",
	"CreationDate": "2015-02-03T08:00:00.000Z",
	"Description": {
		"DescriptionInput": "An animated GIF",
		"DescriptionResult": "A video",
		"DescriptionSummary": "Converts an animated GIF into a video."
	},
	"IconName": "GIF.png",
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFInputGIF",
		"Required": true,
		"Types": [
			"com.compuserve.gif"
		]
	},
	"InputPassthrough": false,
	"Name": "Make Video from GIF",
	"Output": {
		"Multiple": false,
		"OutputName": "Video",
		"Types": [
			"public.mpeg-4"
		]
	},
	"ParameterSummary": "Make video from GIF ${WFInputGIF}",
	"Parameters": [
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFMakeVideoFromGIFActionLoopCount",
			"StepperDescription": "Number of Loops",
			"StepperNoun": "Time",
			"StepperPluralNoun": "Times",
			"StepperPrefix": "Loop"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInputGIF",
			"Label": "Image",
			"Placeholder": "Image"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Make Video",
	"Subcategory": "GIFs",
	"SuggestedNever": true
}
```
