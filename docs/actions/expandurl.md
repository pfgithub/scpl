
## Expand URL / expandurl (internally `is.workflow.actions.url.expand`)


## description

### summary

This action expands and cleans up URLs which have been shortened using a URL shortening service like TinyURL or Bit.ly.


### output

The full, expanded URL, or the original URL if the URL was not shortened

### usage
```
expandurl a{}
```

### arguments

---



---

### source json

```json
{
	"ActionClass": "WFExpandURLAction",
	"ActionKeywords": [
		"clean",
		"link",
		"links",
		"long",
		"short"
	],
	"Category": "Web",
	"CreationDate": "2015-02-03T08:00:00.000Z",
	"Description": {
		"DescriptionNote": "The expanded URL is cleaned, removing unnecessary parameters such as \"utm_source\".",
		"DescriptionResult": "The full, expanded URL, or the original URL if the URL was not shortened",
		"DescriptionSummary": "This action expands and cleans up URLs which have been shortened using a URL shortening service like TinyURL or Bit.ly."
	},
	"IconName": "URL.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"Name": "Expand URL",
	"Output": {
		"Multiple": true,
		"OutputName": "Expanded URL",
		"Types": [
			"WFURLContentItem"
		]
	},
	"Subcategory": "URLs"
}
```
