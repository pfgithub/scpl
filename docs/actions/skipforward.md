
## Skip Forward / SkipForward (internally `is.workflow.actions.skipforward`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description

### summary

Skips to the next song in the current music queue.


### usage
```
SkipForward NotImplemented
```

### arguments

---

#### This paramtype is not implemented. WFMediaRoutePickerParameter

---

### source json (for developers)

```json
{
	"ActionClass": "WFSkipSongAction",
	"ActionKeywords": [
		"ipod",
		"track",
		"music",
		"itunes",
		"next"
	],
	"Attribution": "Now Playing",
	"Category": "Media",
	"Description": {
		"DescriptionSummary": "Skips to the next song in the current music queue."
	},
	"IconName": "FastForward.png",
	"InputPassthrough": true,
	"Name": "Skip Forward",
	"ParameterSummary": "Skip forward",
	"Parameters": [
		{
			"Class": "WFMediaRoutePickerParameter",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFMediaRoute",
			"Label": "Device",
			"RouteType": "Endpoint"
		}
	],
	"RequiredResources": [
		"WFMainThreadResource"
	],
	"Subcategory": "Playback",
	"WFSkipSongActionMode": "Forward"
}
```
