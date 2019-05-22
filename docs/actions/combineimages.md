
## Combine Images / CombineImages (internally `is.workflow.actions.image.combine`)


## description

### summary

Combines the images passed into the action horizontally, vertically, or in a grid.


### usage
```
CombineImages Mode=("Side-by-Side" | "Grid") Direction=("Horizontal" | "Vertical") Spacing=number
```

### arguments

---

### Mode: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Side-by-Side"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Side-by-Side`
- `Grid`

---

### Direction: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Horizontal"`
**Allows Variables**: true

**Only enabled if**: argument WFImageCombineMode == `Side-by-Side`

Accepts a string 
or variable
containing one of the options:

- `Horizontal`
- `Vertical`

---

### Spacing: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `0`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

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
