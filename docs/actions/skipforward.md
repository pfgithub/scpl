
## Skip Forward / skipforward (internally `is.workflow.actions.skipforward`)


> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description
### summary
Skips to the next song in the current music queue.


### usage
`skipforward `

### arguments


### for developers

<details><summary>source json</summary>
<p>
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
	"Category": "Music",
	"Description": {
		"DescriptionSummary": "Skips to the next song in the current music queue."
	},
	"IconName": "FastForward.png",
	"InputPassthrough": true,
	"Name": "Skip Forward",
	"RequiredResources": [
		"WFMainThreadResource"
	],
	"Subcategory": "Playback",
	"WFSkipSongActionMode": "Forward"
}
```
</p></details>
