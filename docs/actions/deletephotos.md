
## Delete Photos / deletephotos (internally `is.workflow.actions.deletephotos`)


> This action requires that Shortcuts has permission to use WFPhotoAccessResource.


## description
### summary
Deletes the photos passed as input from the device's photo library. This action asks for confirmation before performing the deletion.


### usage
`deletephotos `

### arguments


### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFDeletePhotosAction",
	"ActionKeywords": [
		"remove",
		"trash",
		"picture"
	],
	"AppIdentifier": "com.apple.mobileslideshow",
	"Category": "Photos & Video",
	"Description": {
		"DescriptionSummary": "Deletes the photos passed as input from the device's photo library. This action asks for confirmation before performing the deletion."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"PHAsset"
		]
	},
	"InputPassthrough": false,
	"Name": "Delete Photos",
	"RequiredResources": [
		"WFPhotoAccessResource"
	],
	"Subcategory": "Photos"
}
```
</details>
