
## Subscribe to Podcast / SubscribetoPodcast (internally `is.workflow.actions.podcasts.subscribe`)

> This action requires that Shortcuts has permission to use .


## description

### summary

Subscribes to podcasts or podcast feed URLs passed into the action.


### usage
```
SubscribetoPodcast 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFSubscribeToPodcastAction",
	"ActionKeywords": [
		"URL",
		"podcast",
		"show",
		"subscribe"
	],
	"AppIdentifier": "com.apple.podcasts",
	"Description": {
		"DescriptionSummary": "Subscribes to podcasts or podcast feed URLs passed into the action."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFURLContentItem",
			"WFiTunesProductContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Subscribe to Podcast",
	"RequiredResources": []
}
```
