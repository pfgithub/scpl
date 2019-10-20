
## Combine Images / CombineImages (internally `is.workflow.actions.image.combine`)


## description

### summary

Combines the images passed into the action horizontally, vertically, or in a grid.


### usage
```
CombineImages mode=("Horizontally" | "Vertically" | "In a Grid") spacing=number images=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### mode: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Horizontally"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Horizontally`
- `Vertically`
- `In a Grid`

---

### spacing: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `0`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### images: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Images
		```
**Allows Variables**: true



Accepts a variable.

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
	"Category": "Media",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Combines the images passed into the action horizontally, vertically, or in a grid."
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
	"Name": "Combine Images",
	"Output": {
		"Multiple": false,
		"OutputName": "Combined Image",
		"Types": [
			"UIImage"
		]
	},
	"ParameterSummary": "Combine ${WFInput} ${WFImageCombineMode}",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Horizontally",
			"Items": [
				"Horizontally",
				"Vertically",
				"In a Grid"
			],
			"Key": "WFImageCombineMode",
			"Label": "Mode"
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
		},
		{
			"AllowsMultipleValues": true,
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Images",
			"Placeholder": "Images"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Image Editing"
}
```
