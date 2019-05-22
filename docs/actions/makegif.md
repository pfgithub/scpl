
## Make GIF / MakeGIF (internally `is.workflow.actions.makegif`)


## description

### summary

Creates an animated GIF from the images or video passed into the action.


### output

An animated GIF

### usage
```
MakeGIF SecondsPerPhoto=number LoopForever=(true | false | variable) WFMakeGIFActionLoopCount=number AutoSize=(true | false | variable) Width=number Height=number
```

### arguments

---

### SecondsPerPhoto: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `0.2`
**Default Value**: `0.2`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### LoopForever: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### WFMakeGIFActionLoopCount: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Allows Variables**: true

**Only enabled if**: argument WFMakeGIFActionLoopEnabled == `false`

		Accepts a number 
		or variable
		with a number.

---

### AutoSize: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### Width: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `500`
**Allows Variables**: true

**Only enabled if**: argument WFMakeGIFActionAutoSize == `false`

		Accepts a number 
		or variable
		with a number.

---

### Height: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `500`
**Allows Variables**: true

**Only enabled if**: argument WFMakeGIFActionAutoSize == `false`

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
