
## Select Photos / SelectPhotos (internally `is.workflow.actions.selectphoto`)

> This action requires that Shortcuts has permission to use WFPhotoAccessResource,WFUserInteractionResource.


## description

### summary

Prompts to choose photos and videos from your photo library.


### output

The selected photos/videos

### usage
```
SelectPhotos (true | false | variable)
```

### arguments

---

### SelectMultiple: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFSelectPhotoAction",
	"ActionKeywords": [
		"select",
		"photo",
		"from",
		"library",
		"picture"
	],
	"AppIdentifier": "com.apple.mobileslideshow",
	"Category": "Photos & Video",
	"Description": {
		"DescriptionResult": "The selected photos/videos",
		"DescriptionSummary": "Prompts to choose photos and videos from your photo library."
	},
	"Name": "Select Photos",
	"Output": {
		"Multiple": true,
		"OutputName": "Photos",
		"Types": [
			"PHAsset"
		]
	},
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"Key": "WFSelectMultiplePhotos",
			"Label": "Select Multiple"
		}
	],
	"RequiredResources": [
		"WFPhotoAccessResource",
		"WFUserInteractionResource"
	],
	"Subcategory": "Photos",
	"UserInterfaces": [
		"WatchKit",
		"UIKit"
	]
}
```
