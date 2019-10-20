
## Get Images from Input / GetImagesfromInput (internally `is.workflow.actions.detect.images`)


## description

### summary

Gets images from the result of the previous action.

For example, this action can get the album art of a song, or all the images on a webpage.


### usage
```
GetImagesfromInput (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Input
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"find",
		"search",
		"detect",
		"scan",
		"e-mail",
		"emails"
	],
	"Category": "Media",
	"CoercionItemClass": "WFImageContentItem",
	"Description": {
		"DescriptionSummary": "Gets images from the result of the previous action.\n\nFor example, this action can get the album art of a song, or all the images on a webpage."
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
	"Name": "Get Images from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "Images",
		"Types": [
			"WFImageContentItem"
		]
	},
	"ParameterSummary": "Get images from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Get Images",
	"Subcategory": "Images"
}
```
