
## Play Music / PlayMusic (internally `is.workflow.actions.playmusic`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource,WFMainThreadResource.


## description

### summary

Plays music using the Music app.


### input

The music to be played


### usage
```
PlayMusic undefined=NotImplemented shuffle=("Off" | "Songs") repeat=("None" | "One" | "All")
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFMediaPickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### shuffle: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Off`
- `Songs`

---

### repeat: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
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
	"Category": "Media",
	"Description": {
		"DescriptionInput": "The music to be played",
		"DescriptionSummary": "Plays music using the Music app."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFMediaItems",
		"Types": [
			"MPMediaItem",
			"WFMediaItemCollectionContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Play Music",
	"ParameterSummary": "Play ${WFMediaItems}",
	"Parameters": [
		{
			"AlwaysShowsButton": true,
			"Class": "WFMediaPickerParameter",
			"Description": "Selects music to start playing.",
			"Key": "WFMediaItems",
			"Label": "Music"
		},
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
	"Subcategory": "Music"
}
```
