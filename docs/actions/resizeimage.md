
## Resize Image / resizeimage (internally `is.workflow.actions.image.resize`)


## description

### summary

Scales images to a particular width and height.


### usage
```
resizeimage a{width=[string number] height=[string number]}
```

### arguments

---

### Number: Width / width (internally `WFImageResizeWidth`)
**Placeholder**:
```
Auto
```
**Default Value**:
```
640
```
**Allows Variables**: true



Accepts a string 
or variable
with a number.

---

### Number: Height / height (internally `WFImageResizeHeight`)
**Placeholder**:
```
Auto
```
**Allows Variables**: true



Accepts a string 
or variable
with a number.

---

### source json

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
	"Category": "Photos & Video",
	"Description": {
		"DescriptionNote": "If the width or height is not set, that dimension is automatically calculated to maintain the original image's aspect ratio.",
		"DescriptionSummary": "Scales images to a particular width and height."
	},
	"IconName": "Image.png",
	"Input": {
		"Multiple": true,
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
	"Parameters": [
		{
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 640,
			"Key": "WFImageResizeWidth",
			"Label": "Width",
			"Placeholder": "Auto",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFNumberFieldParameter",
			"Key": "WFImageResizeHeight",
			"Label": "Height",
			"Placeholder": "Auto",
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Editing"
}
```
