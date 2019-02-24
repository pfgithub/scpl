
## Add Frame to GIF / addframetogif (internally `is.workflow.actions.addframetogif`)



## description
### summary
Adds an image to the existing animated GIF passed as input. If no GIF is passed as input, a new animated GIF is created.

### input
An existing animated GIF, if desired.

### output
An animated GIF

### usage
`addframetogif image=[variable] delaytime=[string number] autosize=[string boolean|variable] width=[string number] height=[string number]`

### arguments
### Variable Picker: Image / image (internally `WFImage`)
**Allows Variables**: true


Accepts a variable.

---

### Number: Delay Time / delaytime (internally `WFGIFDelayTime`)
**Placeholder**: 0.25
**Default Value**: 0.25
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Switch: Auto Size / autosize (internally `WFGIFAutoSize`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Number: Width / width (internally `WFGIFManualSizeWidth`)
**Placeholder**: 500
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Height / height (internally `WFGIFManualSizeHeight`)
**Placeholder**: 500
**Allows Variables**: true


Accepts a string 
or variable
with a number.

### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFAddFrameToGIFAction",
	"ActionKeywords": [
		"animate",
		"make",
		"generate",
		"gif"
	],
	"Category": "Photos & Video",
	"CreationDate": "2016-03-08T06:00:00.000Z",
	"Description": {
		"DescriptionInput": "An existing animated GIF, if desired.",
		"DescriptionResult": "An animated GIF",
		"DescriptionSummary": "Adds an image to the existing animated GIF passed as input. If no GIF is passed as input, a new animated GIF is created."
	},
	"IconName": "GIF.png",
	"Input": {
		"Multiple": false,
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
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFImage",
			"Label": "Image"
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
	"Subcategory": "GIFs"
}
```
</details>
