
## Add to Playlist / addtoplaylist (internally `is.workflow.actions.addtoplaylist`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource,[object Object].


## description
### summary
Adds the items passed as input to the specified playlist.

### input
Items in your music library or items from the Search iTunes action.

### output
The contents of the updated playlist

### usage
`addtoplaylist undefined=[???]`

### arguments
This paramtype is not implemented. WFPlaylistPickerParameter

### source json

```json
{
	"ActionClass": "WFAddToPlaylistAction",
	"ActionKeywords": [
		"song",
		"music",
		"itunes",
		"playlist",
		"apple",
		"album"
	],
	"AppIdentifier": "com.apple.Music",
	"Category": "Music",
	"CreationDate": "2016-03-15T07:00:00.000Z",
	"Description": {
		"DescriptionInput": "Items in your music library or items from the Search iTunes action.",
		"DescriptionResult": "The contents of the updated playlist",
		"DescriptionSummary": "Adds the items passed as input to the specified playlist."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFiTunesProductContentItem",
			"WFMPMediaContentItem"
		]
	},
	"InputPassthrough": false,
	"Name": "Add to Playlist",
	"Output": {
		"Multiple": true,
		"OutputName": "Updated Playlist",
		"Types": [
			"MPMediaItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFPlaylistPickerParameter",
			"Key": "WFPlaylistName",
			"Label": "Playlist",
			"ShowLibrary": true
		}
	],
	"RequiredResources": [
		"WFAppleMusicAccessResource",
		{
			"WFDeviceAttributes": {
				"WFDeviceAttributeSystemVersion": {
					"WFSystemVersion": "9.3",
					"WFSystemVersionRelation": ">="
				}
			},
			"WFResourceClass": "WFDeviceAttributesResource"
		}
	],
	"Subcategory": "Playlists"
}
```
