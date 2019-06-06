
## Play Podcast / PlayPodcast (internally `is.workflow.actions.playpodcast`)

> This action is not yet complete. Some arguments may be missing.


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

#### This paramtype is not implemented. WFPodcastPickerParameter

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
	]
}
```
