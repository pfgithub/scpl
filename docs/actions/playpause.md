
## Play/Pause / PlayPause (internally `is.workflow.actions.pausemusic`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description

### summary

Plays or pauses the currently playing media.


### usage
```
PlayPause WFPlayPauseBehavior=("Play/Pause" | "Play" | "Pause") undefined=NotImplemented
```

### arguments

---

### WFPlayPauseBehavior: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Play/Pause"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Play/Pause`
- `Play`
- `Pause`

---

#### This parameter is not implemented yet.

The parameter type is WFMediaRoutePickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### source json (for developers)

```json
{
	"ActionClass": "WFPlayPauseAction",
	"ActionKeywords": [
		"pause",
		"play",
		"song",
		"podcast",
		"ipod",
		"track",
		"music",
		"itunes"
	],
	"Attribution": "Now Playing",
	"Category": "Media",
	"Description": {
		"DescriptionSummary": "Plays or pauses the currently playing media."
	},
	"IconName": "PlayPause.png",
	"InputPassthrough": true,
	"Name": "Play/Pause",
	"ParameterSummary": "${WFPlayPauseBehavior} on ${WFMediaRoute}",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Play/Pause",
			"Items": [
				"Play/Pause",
				"Play",
				"Pause"
			],
			"Key": "WFPlayPauseBehavior"
		},
		{
			"Class": "WFMediaRoutePickerParameter",
			"DefaultValue": "Local",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFMediaRoute",
			"Label": "Device",
			"RouteType": "Endpoint"
		}
	],
	"RequiredResources": [
		"WFMainThreadResource"
	],
	"Subcategory": "Playback"
}
```
