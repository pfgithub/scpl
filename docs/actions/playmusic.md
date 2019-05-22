
## Play Music / PlayMusic (internally `is.workflow.actions.playmusic`)

> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource,WFMainThreadResource.


## description

### summary

Plays music using the Music app.


### input

The music to be played


### usage
```
PlayMusic Shuffle=("Off" | "Songs") Repeat=("None" | "One" | "All")
```

### arguments

---

### Shuffle: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Off`
- `Songs`

---

### Repeat: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `None`
- `One`
- `All`

---

### source json (for developers)

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
