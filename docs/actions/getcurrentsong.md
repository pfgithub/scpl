
## Get Current Song / GetCurrentSong (internally `is.workflow.actions.getcurrentsong`)

> This action requires that Shortcuts has permission to use WFMainThreadResource,WFAppleMusicAccessResource.


## description

### summary

Returns the song that is currently playing in the Music app, if any.


### usage
```
GetCurrentSong 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFGetCurrentSongAction",
	"ActionKeywords": [
		"current",
		"song",
		"ipod",
		"track",
		"music",
		"itunes",
		"library",
		"listening",
		"playing"
	],
	"AppIdentifier": "com.apple.Music",
	"Category": "Music",
	"Description": {
		"DescriptionSummary": "Returns the song that is currently playing in the Music app, if any."
	},
	"InputPassthrough": false,
	"Name": "Get Current Song",
	"Output": {
		"Multiple": false,
		"OutputName": "Current Song",
		"Types": [
			"MPMediaItem"
		]
	},
	"RequiredResources": [
		"WFMainThreadResource",
		"WFAppleMusicAccessResource"
	],
	"Subcategory": "Music"
}
```
