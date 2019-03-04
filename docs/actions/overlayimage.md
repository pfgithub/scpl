
## Overlay Image / overlayimage (internally `is.workflow.actions.overlayimageonimage`)

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Overlays an image on top of another image.


### input

Background images


### output

The combined images

### usage
```
overlayimage image=v:myvar|mv:myvar|s:myvar showimageeditor=true|false|variable position="Center" | "Top Left" | "Top Right" | "Bottom Left" | "Bottom Right" | "Custom" width=number height=number xcoordinate=number ycoordinate=number rotationdegrees=number opacity=number
```

### arguments

---

### Variable Picker: image [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true



Accepts a variable.

---

### Switch: showimageeditor [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**:
```
true
```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### Enumeration: position [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**:
```
Center
```
**Allows Variables**: true

**Only enabled if**: argument WFShouldShowImageEditor = `false`

Accepts a string 
or variable
containing one of the options:

- `Center`
- `Top Left`
- `Top Right`
- `Bottom Left`
- `Bottom Right`
- `Custom`

[Documentation](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)

---

### Number: width [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**:
```
Auto
```
**Allows Variables**: true

**Only enabled if**: argument WFShouldShowImageEditor = `false`

		Accepts a number 
		or variable
		with a number.

---

### Number: height [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**:
```
Auto
```
**Allows Variables**: true

**Only enabled if**: argument WFShouldShowImageEditor = `false`

		Accepts a number 
		or variable
		with a number.

---

### Number: xcoordinate [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**:
```
0
```
**Allows Variables**: true

**Only enabled if**: argument WFShouldShowImageEditor = `false`

**Only enabled if**: argument WFImagePosition = `Custom`

		Accepts a number 
		or variable
		with a number.

---

### Number: ycoordinate [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**:
```
0
```
**Allows Variables**: true

**Only enabled if**: argument WFShouldShowImageEditor = `false`

**Only enabled if**: argument WFImagePosition = `Custom`

		Accepts a number 
		or variable
		with a number.

---

### Number: rotationdegrees [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**:
```
0
```
**Allows Variables**: true

**Only enabled if**: argument WFShouldShowImageEditor = `false`

		Accepts a number 
		or variable
		with a number.

---

### Number: opacity [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**:
```
100%
```
**Default Value**:
```
100
```
**Allows Variables**: true

**Only enabled if**: argument WFShouldShowImageEditor = `false`

		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFOverlayImageAction",
	"ActionKeywords": [
		"picture",
		"edit",
		"editor"
	],
	"Category": "Photos & Video",
	"CreationDate": "2016-03-07T08:00:00.000Z",
	"Description": {
		"DescriptionInput": "Background images",
		"DescriptionResult": "The combined images",
		"DescriptionSummary": "Overlays an image on top of another image."
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
	"Name": "Overlay Image",
	"Output": {
		"Multiple": true,
		"OutputName": "Overlaid Image",
		"Types": [
			"WFImageContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFImage",
			"Label": "Image"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFShouldShowImageEditor",
			"Label": "Show Image Editor"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Center",
			"Items": [
				"Center",
				"Top Left",
				"Top Right",
				"Bottom Left",
				"Bottom Right",
				"Custom"
			],
			"Key": "WFImagePosition",
			"Label": "Position",
			"RequiredResources": [
				{
					"WFParameterKey": "WFShouldShowImageEditor",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFNumberFieldParameter",
			"Key": "WFImageWidth",
			"Label": "Width",
			"Placeholder": "Auto",
			"RequiredResources": [
				{
					"WFParameterKey": "WFShouldShowImageEditor",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFNumberFieldParameter",
			"Key": "WFImageHeight",
			"Label": "Height",
			"Placeholder": "Auto",
			"RequiredResources": [
				{
					"WFParameterKey": "WFShouldShowImageEditor",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFImageX",
			"Label": "X Coordinate",
			"Placeholder": "0",
			"RequiredResources": [
				{
					"WFParameterKey": "WFShouldShowImageEditor",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFImagePosition",
					"WFParameterValue": "Custom",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFImageY",
			"Label": "Y Coordinate",
			"Placeholder": "0",
			"RequiredResources": [
				{
					"WFParameterKey": "WFShouldShowImageEditor",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFImagePosition",
					"WFParameterValue": "Custom",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 0,
			"Key": "WFRotation",
			"Label": "Rotation (Degrees)",
			"Placeholder": "0",
			"RequiredResources": [
				{
					"WFParameterKey": "WFShouldShowImageEditor",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 100,
			"Key": "WFOverlayImageOpacity",
			"Label": "Opacity",
			"Placeholder": "100%",
			"RequiredResources": [
				{
					"WFParameterKey": "WFShouldShowImageEditor",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"RequiredResources": [
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFShouldShowImageEditor",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFUserInteractionResource"
		}
	],
	"Subcategory": "Editing",
	"UnsupportedEnvironments": [
		"MemoryConstrained"
	],
	"UserInterfaces": [
		"UIKit",
		"UIKitWidget"
	]
}
```
