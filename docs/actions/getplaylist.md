
## Get Playlist / GetPlaylist (internally `is.workflow.actions.get.playlist`)

> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource.


## description

### summary

Gets every song in the specified playlist.


### usage
```
GetPlaylist ("string" | variable)]
```

### arguments

---

### playlist: Music Playlist Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetPlaylistAction",
	"ActionKeywords": [
		"song",
		"track"
	],
	"AppIdentifier": "com.apple.Music",
	"Category": "Music",
	"CreationDate": "2015-04-06T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets every song in the specified playlist."
	},
	"Name": "Get Playlist",
	"Output": {
		"Multiple": true,
		"OutputName": "Playlist",
		"Types": [
			"MPMediaItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFPlaylistPickerParameter",
			"Key": "WFPlaylistName",
			"Label": "Playlist"
		}
	],
	"RequiredResources": [
		"WFAppleMusicAccessResource"
	],
	"Subcategory": "Playlists"
}
```
