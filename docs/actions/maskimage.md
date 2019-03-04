
## Mask Image / maskimage (internally `is.workflow.actions.image.mask`)


## description

### summary

Applies a mask to each image passed into the action. For example, you can cut images into a rounded rectangle, ellipse or icon shape, or provide a custom alpha mask.


### input

Images to mask


### output

The masked images

### usage
```
maskimage type="Rounded Rectangle" | "Ellipse" | "Icon" | "Custom Image"|variable cornerradius=number imagemask=v:myvar|mv:myvar|s:myvar
```

### arguments

---

### Enumeration: type [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)


Accepts a string 
containing one of the options:

- `Rounded Rectangle`
- `Ellipse`
- `Icon`
- `Custom Image`

[Documentation](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)

---

### Number: cornerradius [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**:
```
0
```
**Allows Variables**: true

**Only enabled if**: argument WFMaskType = `Rounded Rectangle`

		Accepts a number 
		or variable
		with a number.

---

### Variable Picker: imagemask [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true

**Only enabled if**: argument WFMaskType = `Custom Image`

Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFMaskImageAction",
	"ActionKeywords": [
		"photos",
		"transform",
		"overlay",
		"clip",
		"corner",
		"radius"
	],
	"Category": "Photos & Video",
	"CreationDate": "2018-02-02T08:00:00.000Z",
	"Description": {
		"DescriptionInput": "Images to mask",
		"DescriptionResult": "The masked images",
		"DescriptionSummary": "Applies a mask to each image passed into the action. For example, you can cut images into a rounded rectangle, ellipse or icon shape, or provide a custom alpha mask."
	},
	"IconName": "Image.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFImageContentItem"
		]
	},
	"InputPassthrough": false,
	"Name": "Mask Image",
	"Output": {
		"Multiple": true,
		"OutputName": "Masked Image",
		"Types": [
			"WFImageContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"Items": [
				"Rounded Rectangle",
				"Ellipse",
				"Icon",
				"Custom Image"
			],
			"Key": "WFMaskType",
			"Label": "Type"
		},
		{
			"Class": "WFNumberFieldParameter",
			"Description": "A radius to apply to each corner of the source image in pixels.",
			"Key": "WFMaskCornerRadius",
			"Label": "Corner Radius",
			"Placeholder": "0",
			"RequiredResources": [
				{
					"WFParameterKey": "WFMaskType",
					"WFParameterValue": "Rounded Rectangle",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Description": "An alpha mask to apply to the source image, where darker colors become transparent and lighter colors remain opaque. If the mask is sized differently than the source image, the mask is resized to match the dimensions of the source image.",
			"Key": "WFCustomMaskImage",
			"Label": "Image Mask",
			"RequiredResources": [
				{
					"WFParameterKey": "WFMaskType",
					"WFParameterValue": "Custom Image",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"Subcategory": "Editing"
}
```
