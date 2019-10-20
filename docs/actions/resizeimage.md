
## Resize Image / ResizeImage (internally `is.workflow.actions.image.resize`)


## description

### summary

Scales images to a particular width and height.


### note

If the width or height is not set, that dimension is automatically calculated to maintain the original image's aspect ratio.


### usage
```
ResizeImage width=number height=number image=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### width: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `Auto Width`
**Default Value**: `640`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### height: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `Auto Height`
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
	"ActionClass": "WFImageResizeAction",
	"ActionKeywords": [
		"scale",
		"transform",
		"shrink",
		"stretch",
		"expand",
		"width",
		"height"
	],
	"Category": "Media",
	"Description": {
		"DescriptionNote": "If the width or height is not set, that dimension is automatically calculated to maintain the original image's aspect ratio.",
		"DescriptionSummary": "Scales images to a particular width and height."
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
	"Name": "Resize Image",
	"Output": {
		"Multiple": true,
		"OutputName": "Resized Image",
		"Types": [
			"UIImage"
		]
	},
	"ParameterSummary": "Resize ${WFImage} to ${WFImageResizeWidth}x${WFImageResizeHeight}",
	"Parameters": [
		{
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 640,
			"Key": "WFImageResizeWidth",
			"Label": "Width",
			"Placeholder": "Auto Width",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFNumberFieldParameter",
			"Key": "WFImageResizeHeight",
			"Label": "Height",
			"Placeholder": "Auto Height",
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
	"Subcategory": "Image Editing"
}
```
