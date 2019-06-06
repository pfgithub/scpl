
## Get Podcasts from Library / GetPodcastsfromLibrary (internally `is.workflow.actions.getpodcastsfromlibrary`)


## description

### summary

Gets a list of all shows in your Podcast library.


### usage
```
GetPodcastsfromLibrary 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFGetPodcastsFromLibraryAction",
	"ActionKeywords": [
		"podcast",
		"show",
		"library"
	],
	"AppIdentifier": "com.apple.podcasts",
	"CreationDate": "2019-02-11T08:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets a list of all shows in your Podcast library."
	},
	"Name": "Get Podcasts from Library",
	"Output": {
		"Multiple": true,
		"OutputName": "Podcast",
		"Types": [
			"WFiTunesProductContentItem"
		]
	}
}
```
