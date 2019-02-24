
## Select Photos / selectphotos (internally `is.workflow.actions.selectphoto`)


> This action requires that Shortcuts has permission to use WFPhotoAccessResource,WFUserInteractionResource.


## description
### summary
Prompts to choose photos and videos from your photo library.

### output
The selected photos/videos

### usage
`selectphotos selectmultiple=[string boolean|variable]`

### arguments
### Switch: Select Multiple / selectmultiple (internally `WFSelectMultiplePhotos`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

### other info

<details><summary>source json</summary>
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
</details>
