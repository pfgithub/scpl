
## Flip Image / flipimage (internally `is.workflow.actions.image.flip`)


## description

### summary

Reverses the direction of images either horizontally or vertically.


### usage
```
flipimage direction="Horizontal" | "Vertical"
```

### arguments

---

### Enumeration: direction [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**:
```
Horizontal
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Horizontal`
- `Vertical`

[Documentation](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)

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
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Horizontal",
			"Items": [
				"Horizontal",
				"Vertical"
			],
			"Key": "WFImageFlipDirection",
			"Label": "Direction"
		}
	],
	"Subcategory": "Editing",
	"SuggestedNever": true
}
```
