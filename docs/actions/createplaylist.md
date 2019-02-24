
## Create Playlist / createplaylist (internally `is.workflow.actions.createplaylist`)


> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource,[object Object].


## description
### summary
Creates a new playlist in the Music app, adding any items passed as input to the new playlist.

### input
Items in your music library or items from the Search iTunes action.


### usage
`createplaylist name=[string|text] author=[string|text] description=[string|text]`

### arguments
### Text Input: Name / name (internally `WFPlaylistName`)
**Placeholder**: Greatest Hits
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Author / author (internally `WFPlaylistAuthor`)
**Placeholder**: Shortcuts
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Description / description (internally `WFPlaylistDescription`)
**Placeholder**: All of my favorites
**Allows Variables**: true


Accepts a string 
or text
with the text.

### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFCreatePlaylistAction",
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
		"DescriptionSummary": "Creates a new playlist in the Music app, adding any items passed as input to the new playlist."
	},
	"Input": {
		"Multiple": true,
		"Required": false,
		"Types": [
			"WFiTunesProductContentItem",
			"WFMPMediaContentItem"
		]
	},
	"InputPassthrough": false,
	"Name": "Create Playlist",
	"Output": {
		"Multiple": true,
		"OutputName": "New Playlist",
		"Types": [
			"MPMediaItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFPlaylistName",
			"Label": "Name",
			"Placeholder": "Greatest Hits",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFPlaylistAuthor",
			"Label": "Author",
			"Placeholder": "Shortcuts",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFPlaylistDescription",
			"Label": "Description",
			"Placeholder": "All of my favorites",
			"TextAlignment": "Right"
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
	"Subcategory": "Playlists",
	"SuggestedAsInitialAction": false
}
```
</details>
