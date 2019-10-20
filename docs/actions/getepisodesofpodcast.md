
## Get Episodes of Podcast / GetEpisodesofPodcast (internally `is.workflow.actions.getepisodesforpodcast`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Returns a list of episodes from a podcast show.


### usage
```
GetEpisodesofPodcast NotImplemented
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
	"ActionClass": "WFGetEpisodesForPodcastAction",
	"ActionKeywords": [
		"episodes",
		"podcast",
		"show",
		"library"
	],
	"AppIdentifier": "com.apple.podcasts",
	"Description": {
		"DescriptionSummary": "Returns a list of episodes from a podcast show."
	},
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFiTunesProductContentItem"
		]
	},
	"Name": "Get Episodes of Podcast",
	"Output": {
		"Multiple": true,
		"OutputName": "Episodes",
		"Types": [
			"WFPodcastEpisodeContentItem"
		]
	},
	"ParameterSummary": "Get episodes of ${WFInput}",
	"Parameters": [
		{
			"Class": "WFPodcastPickerParameter",
			"Key": "WFInput",
			"Label": "Podcast",
			"Placeholder": "Podcast"
		}
	]
}
```
