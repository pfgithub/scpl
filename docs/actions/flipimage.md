
## Flip Image / FlipImage (internally `is.workflow.actions.image.flip`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Reverses the direction of images either horizontally or vertically.


### usage
```
FlipImage undefined=NotImplemented image=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

#### This paramtype is not implemented. WFFlipImageDirectionPickerParameter

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
	"ActionClass": "WFImageFlipAction",
	"ActionKeywords": [
		"portrait",
		"landscape",
		"horizontal",
		"vertical"
	],
	"Category": "Photos & Video",
	"Description": {
		"DescriptionSummary": "Reverses the direction of images either horizontally or vertically."
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
	"Name": "Flip Image",
	"Output": {
		"Multiple": true,
		"OutputName": "Flipped Image",
		"Types": [
			"UIImage"
		]
	},
	"ParameterSummary": "Flip ${WFInput} ${WFImageFlipDirection}",
	"Parameters": [
		{
			"Class": "WFFlipImageDirectionPickerParameter",
			"DefaultValue": "Horizontal",
			"Items": [
				"Horizontal",
				"Vertical"
			],
			"Key": "WFImageFlipDirection",
			"Label": "Direction"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Image",
			"Placeholder": "Image"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Editing",
	"SuggestedNever": true
}
```
