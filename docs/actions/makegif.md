
## Make GIF / makegif (internally `is.workflow.actions.makegif`)


## description

### summary

Creates an animated GIF from the images or video passed into the action.


### output

An animated GIF

### usage
```
makegif secondsperphoto=number loopforever=true|false|variable wfmakegifactionloopcount=number autosize=true|false|variable width=number height=number
```

### arguments

---

### Number: secondsperphoto [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**:
```
0.2
```
**Default Value**:
```
0.2
```
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### Switch: loopforever [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**:
```
true
```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### Stepper Number: wfmakegifactionloopcount [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Allows Variables**: true

**Only enabled if**: argument WFMakeGIFActionLoopEnabled = `false`

		Accepts a number 
		or variable
		with a number.

---

### Switch: autosize [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**:
```
true
```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### Number: width [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**:
```
500
```
**Allows Variables**: true

**Only enabled if**: argument WFMakeGIFActionAutoSize = `false`

		Accepts a number 
		or variable
		with a number.

---

### Number: height [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**:
```
500
```
**Allows Variables**: true

**Only enabled if**: argument WFMakeGIFActionAutoSize = `false`

		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

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
