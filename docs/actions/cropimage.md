
## Crop Image / CropImage (internally `is.workflow.actions.image.crop`)


## description

### summary

Crops images to a smaller rectangle.


### usage
```
CropImage image=(v:myvar | mv:myvar | s:myvar) position=("Center" | "Top Left" | "Top Right" | "Bottom Left" | "Bottom Right" | "Custom") xCoordinate=number yCoordinate=number width=number height=number
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

### position: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Center"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Center`
- `Top Left`
- `Top Right`
- `Bottom Left`
- `Bottom Right`
- `Custom`

---

### xCoordinate: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `0`
**Allows Variables**: true

**Only enabled if**: argument WFImageCropPosition == `Custom`

		Accepts a number 
		or variable
		with a number.

---

### yCoordinate: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `0`
**Allows Variables**: true

**Only enabled if**: argument WFImageCropPosition == `Custom`

		Accepts a number 
		or variable
		with a number.

---

### width: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `100`
**Default Value**: `100`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### height: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `100`
**Default Value**: `100`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFImageCropAction",
	"ActionKeywords": [
		"transform",
		"shrink",
		"stretch",
		"expand",
		"rectangle",
		"clip",
		"canvas"
	],
	"Category": "Photos & Video",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Crops images to a smaller rectangle."
	},
	"IconName": "Image.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"UIImage"
		]
	},
	"InputPassthrough": false,
	"LastModifiedDate": "2015-08-20T07:00:00.000Z",
	"Name": "Crop Image",
	"Output": {
		"Multiple": true,
		"OutputName": "Cropped Image",
		"Types": [
			"UIImage"
		]
	},
	"ParameterSummary": "Crop ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Image",
			"Placeholder": "Image"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Center",
			"Description": "Where on the original image the crop should occur.",
			"Items": [
				"Center",
				"Top Left",
				"Top Right",
				"Bottom Left",
				"Bottom Right",
				"Custom"
			],
			"Key": "WFImageCropPosition",
			"Label": "Position"
		},
		{
			"Class": "WFNumberFieldParameter",
			"Key": "WFImageCropX",
			"Label": "X Coordinate",
			"Placeholder": "0",
			"RequiredResources": [
				{
					"WFParameterKey": "WFImageCropPosition",
					"WFParameterValue": "Custom",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFNumberFieldParameter",
			"Key": "WFImageCropY",
			"Label": "Y Coordinate",
			"Placeholder": "0",
			"RequiredResources": [
				{
					"WFParameterKey": "WFImageCropPosition",
					"WFParameterValue": "Custom",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 100,
			"Key": "WFImageCropWidth",
			"Label": "Width",
			"Placeholder": "100",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 100,
			"Key": "WFImageCropHeight",
			"Label": "Height",
			"Placeholder": "100",
			"TextAlignment": "Right"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Editing",
	"SuggestedNever": true
}
```
