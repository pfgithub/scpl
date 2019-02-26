
## Combine Images / combineimages (internally `is.workflow.actions.image.combine`)


## description

### summary

Combines the images passed into the action horizontally, vertically, or in a grid.


### usage
```
combineimages a{mode=[string <${strInfo}>] direction=[string <${strInfo}>] spacing=[string number]}
```

### arguments

---

### Enumeration: Mode / mode (internally `WFImageCombineMode`)
**Default Value**:
```
Side-by-Side
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Side-by-Side`
- `Grid`

---

### Enumeration: Direction / direction (internally `WFImageCombineDirection`)
**Default Value**:
```
Horizontal
```
**Allows Variables**: true

**Only enabled if**: argument WFImageCombineMode = `Side-by-Side`

Accepts a string 
or variable
containing one of the options:

- `Horizontal`
- `Vertical`

---

### Number: Spacing / spacing (internally `WFImageCombineSpacing`)
**Placeholder**:
```
0
```
**Allows Variables**: true



Accepts a string 
or variable
with a number.

---

### source json

```json
{
	"ActionClass": "WFImageCombineAction",
	"ActionKeywords": [
		"horizontal",
		"vertical",
		"compile",
		"connect",
		"montage",
		"photos"
	],
	"Category": "Photos & Video",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Combines the images passed into the action horizontally, vertically, or in a grid."
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
	"Name": "Combine Images",
	"Output": {
		"Multiple": false,
		"OutputName": "Combined Image",
		"Types": [
			"UIImage"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Side-by-Side",
			"Items": [
				"Side-by-Side",
				"Grid"
			],
			"Key": "WFImageCombineMode",
			"Label": "Mode"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Horizontal",
			"Description": "When horizontal, images are connected together from left to right. When vertical, images are connected from top to bottom.",
			"Items": [
				"Horizontal",
				"Vertical"
			],
			"Key": "WFImageCombineDirection",
			"Label": "Direction",
			"RequiredResources": [
				{
					"WFParameterKey": "WFImageCombineMode",
					"WFParameterValue": "Side-by-Side",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 0,
			"Description": "The number of pixels of transparent space to place between consecutive images.",
			"Key": "WFImageCombineSpacing",
			"Label": "Spacing",
			"Placeholder": "0",
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Editing"
}
```
