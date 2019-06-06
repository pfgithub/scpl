
## Add to Playlist / AddtoPlaylist (internally `is.workflow.actions.addtoplaylist`)

> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource,[object Object].


## description

### summary

Adds the items passed as input to the specified playlist.


### input

Items in your music library or items from the Search iTunes action.


### output

The contents of the updated playlist

### usage
```
AddtoPlaylist playlist=("string" | variable)] music=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### playlist: Music Playlist Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Placeholder**: ```
		Playlist
		```
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

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
	"Category": "Media",
	"CreationDate": "2016-03-15T07:00:00.000Z",
	"Description": {
		"DescriptionInput": "Items in your music library or items from the Search iTunes action.",
		"DescriptionResult": "The contents of the updated playlist",
		"DescriptionSummary": "Adds the items passed as input to the specified playlist."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
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
	"ParameterSummary": "Add ${WFInput} to ${WFPlaylistName}",
	"Parameters": [
		{
			"Class": "WFPlaylistPickerParameter",
			"Key": "WFPlaylistName",
			"Label": "Playlist",
			"Placeholder": "Playlist",
			"ShowLibrary": true
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
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
	"Subcategory": "Playlists"
}
```
