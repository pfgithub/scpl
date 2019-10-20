
## Rotate Image / RotateImage (internally `is.workflow.actions.image.rotate`)


## description

### summary

Turns an image clockwise by a particular number of degrees.


### usage
```
RotateImage degrees=number image=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### degrees: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `90`
**Default Value**: `90`
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
	"ActionClass": "WFImageRotateAction",
	"ActionKeywords": [
		"portrait",
		"landscape",
		"degrees",
		"rotation",
		"orientation"
	],
	"Category": "Media",
	"Description": {
		"DescriptionSummary": "Turns an image clockwise by a particular number of degrees."
	},
	"IconName": "Image.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFImage",
		"Required": true,
		"Types": [
			"UIImage"
		]
	},
	"InputPassthrough": false,
	"LastModifiedDate": "2015-08-20T07:00:00.000Z",
	"Name": "Rotate Image",
	"Output": {
		"Multiple": true,
		"OutputName": "Rotated Image",
		"Types": [
			"UIImage"
		]
	},
	"ParameterSummary": "Rotate ${WFImage} by ${WFImageRotateAmount} degrees",
	"Parameters": [
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 90,
			"Key": "WFImageRotateAmount",
			"Label": "Degrees",
			"Placeholder": "90",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFImage",
			"Label": "Image",
			"Placeholder": "Image"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Image Editing",
	"SuggestedNever": true
}
```
