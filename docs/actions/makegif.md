
## Make GIF / makegif (internally `is.workflow.actions.makegif`)



## description
### summary
Creates an animated GIF from the images or video passed into the action.

### output
An animated GIF

### usage
`makegif secondsperphoto=[string number] loopforever=[string boolean|variable] wfmakegifactionloopcount=[string integer] autosize=[string boolean|variable] width=[string number] height=[string number]`

### arguments
### Number: Seconds Per Photo / secondsperphoto (internally `WFMakeGIFActionDelayTime`)
**Placeholder**: 0.2
**Default Value**: 0.2
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Switch: Loop Forever / loopforever (internally `WFMakeGIFActionLoopEnabled`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Stepper Number: wfmakegifactionloopcount / wfmakegifactionloopcount (internally `WFMakeGIFActionLoopCount`)
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.

---

### Switch: Auto Size / autosize (internally `WFMakeGIFActionAutoSize`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Number: Width / width (internally `WFMakeGIFActionManualSizeWidth`)
**Placeholder**: 500
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Height / height (internally `WFMakeGIFActionManualSizeHeight`)
**Placeholder**: 500
**Allows Variables**: true


Accepts a string 
or variable
with a number.

### source json

```json
{
	"ActionClass": "WFMakeGIFAction",
	"ActionKeywords": [
		"animate",
		"make",
		"generate",
		"gif"
	],
	"Category": "Photos & Video",
	"Description": {
		"DescriptionResult": "An animated GIF",
		"DescriptionSummary": "Creates an animated GIF from the images or video passed into the action."
	},
	"IconName": "GIF.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"UIImage",
			"public.mpeg-4"
		]
	},
	"InputPassthrough": false,
	"LastModifiedDate": "2015-02-03T08:00:00.000Z",
	"Name": "Make GIF",
	"Output": {
		"Multiple": false,
		"OutputName": "GIF",
		"Types": [
			"com.compuserve.gif"
		]
	},
	"Parameters": [
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 0.2,
			"Key": "WFMakeGIFActionDelayTime",
			"Label": "Seconds Per Photo",
			"Placeholder": "0.2",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFMakeGIFActionLoopEnabled",
			"Label": "Loop Forever"
		},
		{
			"Class": "WFStepperParameter",
			"Key": "WFMakeGIFActionLoopCount",
			"RequiredResources": [
				{
					"WFParameterKey": "WFMakeGIFActionLoopEnabled",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"StepperDescription": "Number of Loops",
			"StepperNoun": "Time",
			"StepperPluralNoun": "Times",
			"StepperPrefix": "Loop"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFMakeGIFActionAutoSize",
			"Label": "Auto Size"
		},
		{
			"Class": "WFNumberFieldParameter",
			"Key": "WFMakeGIFActionManualSizeWidth",
			"Label": "Width",
			"Placeholder": "500",
			"RequiredResources": [
				{
					"WFParameterKey": "WFMakeGIFActionAutoSize",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFNumberFieldParameter",
			"Key": "WFMakeGIFActionManualSizeHeight",
			"Label": "Height",
			"Placeholder": "500",
			"RequiredResources": [
				{
					"WFParameterKey": "WFMakeGIFActionAutoSize",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "GIFs"
}
```
