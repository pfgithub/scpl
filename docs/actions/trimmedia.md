
## Trim Media / TrimMedia (internally `is.workflow.actions.trimvideo`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Presents a view allowing you to trim the media passed into the action.


### input

The audio or video file to edit.


### output

The trimmed media.

### usage
```
TrimMedia (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### media: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Media
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

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
		"ParameterKey": "WFInputMedia",
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
	"ParameterSummary": "Trim ${WFInputMedia}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInputMedia",
			"Label": "Media",
			"Placeholder": "Media"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Video",
	"UserInterfaces": [
		"UIKit"
	]
}
```
