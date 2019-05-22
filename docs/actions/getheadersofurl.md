
## Get Headers of URL / GetHeadersofURL (internally `is.workflow.actions.url.getheaders`)


## description

### summary

Retrieves the HTTP headers of the URL passed as input using a HEAD request.


### usage
```
GetHeadersofURL 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFGetURLHeadersAction",
	"ActionKeywords": [
		"URL",
		"web",
		"http"
	],
	"Category": "Web",
	"CreationDate": "2016-06-04T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Retrieves the HTTP headers of the URL passed as input using a HEAD request."
	},
	"IconName": "Downloads.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"InputPassthrough": false,
	"Name": "Get Headers of URL",
	"Output": {
		"Multiple": true,
		"OutputName": "Headers of URL",
		"Types": [
			"NSDictionary"
		]
	},
	"ShortName": "Get Headers",
	"Subcategory": "URLs",
	"SuggestedNever": true
}
```
