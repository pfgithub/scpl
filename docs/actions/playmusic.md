
## Play Music / playmusic (internally `is.workflow.actions.playmusic`)


> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource,WFMainThreadResource.


## description
### summary
Plays music using the Music app.

### input
The music to be played


### usage
`playmusic shuffle=[string <${strInfo}>] repeat=[string <${strInfo}>]`

### arguments
### Enumeration: Shuffle / shuffle (internally `WFPlayMusicActionShuffle`)
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Off`
- `Songs`

---

### Enumeration: Repeat / repeat (internally `WFPlayMusicActionRepeat`)
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `None`
- `One`
- `All`

### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFPlayMusicAction",
	"ActionKeywords": [
		"play",
		"song",
		"ipod",
		"track",
		"music",
		"itunes",
		"library"
	],
	"AppIdentifier": "com.apple.Music",
	"Category": "Music",
	"Description": {
		"DescriptionInput": "The music to be played",
		"DescriptionSummary": "Plays music using the Music app."
	},
	"Input": {
		"Multiple": true,
		"Types": [
			"MPMediaItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Play Music",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"Items": [
				"Off",
				"Songs"
			],
			"Key": "WFPlayMusicActionShuffle",
			"Label": "Shuffle"
		},
		{
			"Class": "WFEnumerationParameter",
			"Items": [
				"None",
				"One",
				"All"
			],
			"Key": "WFPlayMusicActionRepeat",
			"Label": "Repeat"
		}
	],
	"RequiredResources": [
		"WFAppleMusicAccessResource",
		"WFMainThreadResource"
	],
	"Subcategory": "Playback"
}
```
</details>
