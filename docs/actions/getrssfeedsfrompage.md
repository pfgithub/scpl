
## Get RSS Feeds from Page / GetRSSFeedsfromPage (internally `is.workflow.actions.rss.extract`)

> This action requires that Shortcuts has permission to use WFRemoteServerAccessResource.


## description

### summary

Extracts any RSS feed URLs from the given web URLs or webpage.


### usage
```
GetRSSFeedsfromPage "string"
```

### arguments

---

### page: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Page"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

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
		"ParameterKey": "WFURLs",
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
	"ParameterSummary": "Get RSS feeds from ${WFURLs}",
	"Parameters": [
		{
			"AllowsMultipleValues": false,
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFURLs",
			"KeyboardType": "URL",
			"Label": "Page",
			"Placeholder": "Page",
			"TextContentType": "URL"
		}
	],
	"RequiredResources": [
		"WFRemoteServerAccessResource"
	],
	"ResidentCompatible": true,
	"ShortName": "Get RSS Feeds",
	"Subcategory": "RSS"
}
```
