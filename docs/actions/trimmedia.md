
## Trim Media / trimmedia (internally `is.workflow.actions.trimvideo`)


> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description
### summary
Presents a view allowing you to trim the media passed into the action.

### input
The audio or video file to edit.

### output
The trimmed media.

### usage
`trimmedia `

### arguments


### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFTrimVideoAction",
	"ActionKeywords": [
		"clip",
		"editor",
		"audio",
		"video",
		"movie"
	],
	"Category": "Photos & Video",
	"Description": {
		"DescriptionInput": "The audio or video file to edit.",
		"DescriptionResult": "The trimmed media.",
		"DescriptionSummary": "Presents a view allowing you to trim the media passed into the action."
	},
	"IconName": "QuickTime.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"WFAVAssetContentItem"
		]
	},
	"Name": "Trim Media",
	"Output": {
		"Multiple": false,
		"OutputName": "Trimmed Media",
		"Types": [
			"com.apple.quicktime-movie"
		]
	},
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Video",
	"UserInterfaces": [
		"UIKit"
	]
}
```
</details>
