
## Subscribe to Podcast / SubscribetoPodcast (internally `is.workflow.actions.podcasts.subscribe`)

> This action requires that Shortcuts has permission to use WFPodcastsAccessResource.


## description

### summary

Subscribes to podcasts or podcast feed URLs passed into the action.


### usage
```
SubscribetoPodcast "string"
```

### arguments

---

### podcastURL: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

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
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFURLContentItem",
			"WFiTunesProductContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Subscribe to Podcast",
	"ParameterSummary": "Subscribe to ${WFInput}",
	"Parameters": [
		{
			"AllowsMultipleValues": true,
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFInput",
			"KeyboardType": "URL",
			"Label": "Podcast URL",
			"TextContentType": "URL"
		}
	],
	"RequiredResources": [
		"WFPodcastsAccessResource"
	]
}
```
