
## Rotate Image / rotateimage (internally `is.workflow.actions.image.rotate`)


## description

### summary

Turns an image clockwise by a particular number of degrees.


### usage
```
rotateimage degrees=number
```

### arguments

---

### Number: degrees [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**:
```
90
```
**Default Value**:
```
90
```
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

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
	"Category": "Photos & Video",
	"Description": {
		"DescriptionSummary": "Turns an image clockwise by a particular number of degrees."
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
	"Name": "Rotate Image",
	"Output": {
		"Multiple": true,
		"OutputName": "Rotated Image",
		"Types": [
			"UIImage"
		]
	},
	"Parameters": [
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 90,
			"Key": "WFImageRotateAmount",
			"Label": "Degrees",
			"Placeholder": "90",
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Editing",
	"SuggestedNever": true
}
```
