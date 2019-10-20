
## Play Podcast / PlayPodcast (internally `is.workflow.actions.playpodcast`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFPodcastsAccessResource.


## description

### summary

Plays a podcast using the Podcasts app.


### input

The podcast to be played


### usage
```
PlayPodcast NotImplemented
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFPodcastPickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### source json (for developers)

```json
{
	"ActionClass": "WFPlayPodcastAction",
	"ActionKeywords": [
		"play",
		"podcast",
		"show",
		"library"
	],
	"AppIdentifier": "com.apple.podcasts",
	"CreationDate": "Feb 1, 2019 at 10:00:00 PM",
	"Description": {
		"DescriptionInput": "The podcast to be played",
		"DescriptionSummary": "Plays a podcast using the Podcasts app."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFPodcastShow",
		"Types": [
			"WFiTunesProductContentItem",
			"WFPodcastEpisodeContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Play Podcast",
	"ParameterSummary": "Play ${WFPodcastShow}",
	"Parameters": [
		{
			"Class": "WFPodcastPickerParameter",
			"Key": "WFPodcastShow",
			"Label": "Podcast"
		}
	],
	"RequiredResources": [
		"WFPodcastsAccessResource"
	]
}
```
