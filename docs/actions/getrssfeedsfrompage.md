
## Get RSS Feeds from Page / getrssfeedsfrompage (internally `is.workflow.actions.rss.extract`)



## description
### summary
Extracts any RSS feed URLs from the given web URLs or web page.


### usage
`getrssfeedsfrompage `

### arguments


### for developers

<details><summary>source json</summary>
<p>
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
		"DescriptionSummary": "Extracts any RSS feed URLs from the given web URLs or web page."
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
</p></details>
