
## Add Frame to GIF / AddFrametoGIF (internally `is.workflow.actions.addframetogif`)


## description

### summary

Adds an image to the existing animated GIF passed as input. If no GIF is passed as input, a new animated GIF is created.


### input

An existing animated GIF, if desired.


### output

An animated GIF

### usage
```
AddFrametoGIF image=(v:myvar | mv:myvar | s:myvar) gIF=(v:myvar | mv:myvar | s:myvar) delayTime=number autoSize=(true | false | variable) width=number height=number
```

### arguments

---

### image: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Image
		```
**Allows Variables**: true



Accepts a variable.

---

### gIF: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		GIF
		```
**Allows Variables**: true



Accepts a variable.

---

### delayTime: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `0.25`
**Default Value**: `0.25`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### autoSize: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### width: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `500`
**Allows Variables**: true

**Only enabled if**: argument WFGIFAutoSize == `false`

		Accepts a number 
		or variable
		with a number.

---

### height: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `500`
**Allows Variables**: true

**Only enabled if**: argument WFGIFAutoSize == `false`

		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFAddFrameToGIFAction",
	"ActionKeywords": [
		"animate",
		"make",
		"generate",
		"gif"
	],
	"Category": "Media",
	"CreationDate": "2016-03-08T06:00:00.000Z",
	"Description": {
		"DescriptionInput": "An existing animated GIF, if desired.",
		"DescriptionResult": "An animated GIF",
		"DescriptionSummary": "Adds an image to the existing animated GIF passed as input. If no GIF is passed as input, a new animated GIF is created."
	},
	"IconName": "GIF.png",
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFInputGIF",
		"Required": true,
		"Types": [
			"WFImageContentItem"
		]
	},
	"InputPassthrough": false,
	"Name": "Add Frame to GIF",
	"Output": {
		"Multiple": false,
		"OutputName": "GIF",
		"Types": [
			"com.compuserve.gif"
		]
	},
	"ParameterSummary": "Add ${WFImage} to ${WFInputGIF}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFImage",
			"Label": "Image",
			"Placeholder": "Image"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInputGIF",
			"Label": "GIF",
			"Placeholder": "GIF"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 0.25,
			"Key": "WFGIFDelayTime",
			"Label": "Delay Time",
			"Placeholder": "0.25",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFGIFAutoSize",
			"Label": "Auto Size"
		},
		{
			"Class": "WFNumberFieldParameter",
			"Key": "WFGIFManualSizeWidth",
			"Label": "Width",
			"Placeholder": "500",
			"RequiredResources": [
				{
					"WFParameterKey": "WFGIFAutoSize",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFNumberFieldParameter",
			"Key": "WFGIFManualSizeHeight",
			"Label": "Height",
			"Placeholder": "500",
			"RequiredResources": [
				{
					"WFParameterKey": "WFGIFAutoSize",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "GIFs"
}
```
