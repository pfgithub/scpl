
## Get RSS Feeds from Page / GetRSSFeedsfromPage (internally `is.workflow.actions.rss.extract`)


## description

### summary

Extracts any RSS feed URLs from the given web URLs or webpage.


### usage
```
GetRSSFeedsfromPage 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFRSSFeedExtractAction",
	"ActionKeywords": [
		"extract",
		"clipboard",
		"copy",
		"paste"
	],
	"Category": "Web",
	"CreationDate": "2015-02-19T08:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Extracts any RSS feed URLs from the given web URLs or webpage."
	},
	"IconName": "RSS.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFURLContentItem",
			"WFRichTextContentItem"
		]
	},
	"Name": "Get RSS Feeds from Page",
	"Output": {
		"Multiple": true,
		"OutputName": "RSS Feeds from Page",
		"Types": [
			"WFURLContentItem"
		]
	},
	"ShortName": "Get RSS Feeds",
	"Subcategory": "URLs"
}
```
