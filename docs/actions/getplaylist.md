
## Get Playlist / getplaylist (internally `is.workflow.actions.get.playlist`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource.


## description
### summary
Gets every song in the specified playlist.


### usage
`getplaylist a{undefined=[???]}`

### arguments
This paramtype is not implemented. WFPlaylistPickerParameter

### source json

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
