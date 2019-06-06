
## Create Playlist / CreatePlaylist (internally `is.workflow.actions.createplaylist`)

> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource,[object Object].


## description

### summary

Creates a new playlist in the Music app, adding any items passed as input to the new playlist.


### input

Items in your music library or items from the Search iTunes action.


### usage
```
CreatePlaylist playlistName="string" author="string" description="string" music=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### playlistName: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Playlist Name"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### author: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Shortcuts"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### description: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"All of my favorites"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### music: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Music
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

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
	"Category": "Media",
	"CreationDate": "2016-03-15T07:00:00.000Z",
	"Description": {
		"DescriptionInput": "Items in your music library or items from the Search iTunes action.",
		"DescriptionSummary": "Creates a new playlist in the Music app, adding any items passed as input to the new playlist."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFPlaylistItems",
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
	"ParameterSummary": "Create playlist ${WFPlaylistName} with ${WFPlaylistItems}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFPlaylistName",
			"Label": "Playlist Name",
			"Placeholder": "Playlist Name",
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
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFPlaylistItems",
			"Label": "Music",
			"Placeholder": "Music"
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
