
## Get Episodes for Podcast / GetEpisodesforPodcast (internally `is.workflow.actions.getepisodesforpodcast`)


## description

### summary

Returns a list of episodes from a podcast show.


### usage
```
GetEpisodesforPodcast 
```

### arguments

---



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
		"Required": true,
		"Types": [
			"WFiTunesProductContentItem"
		]
	},
	"Name": "Get Episodes for Podcast",
	"Output": {
		"Multiple": true,
		"OutputName": "Episodes",
		"Types": [
			"WFPodcastEpisodeContentItem"
		]
	}
}
```
