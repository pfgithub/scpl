
## Delete Photos / DeletePhotos (internally `is.workflow.actions.deletephotos`)

> This action requires that Shortcuts has permission to use WFPhotoAccessResource.


## description

### summary

Deletes the photos passed as input from the device's photo library. This action asks for confirmation before performing the deletion.


### usage
```
DeletePhotos (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### photos: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Photos
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFDeletePhotosAction",
	"ActionKeywords": [
		"remove",
		"trash",
		"picture"
	],
	"AppIdentifier": "com.apple.mobileslideshow",
	"BlocksOutput": true,
	"Category": "Media",
	"Description": {
		"DescriptionSummary": "Deletes the photos passed as input from the device's photo library. This action asks for confirmation before performing the deletion."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInputPhotos",
		"Required": true,
		"Types": [
			"PHAsset"
		]
	},
	"InputPassthrough": false,
	"Name": "Delete Photos",
	"ParameterSummary": "Delete ${WFInputPhotos}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInputPhotos",
			"Label": "Photos",
			"Placeholder": "Photos"
		}
	],
	"RequiredResources": [
		"WFPhotoAccessResource"
	],
	"Subcategory": "Photos"
}
```
