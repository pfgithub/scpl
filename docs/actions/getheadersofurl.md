
## Get Headers of URL / GetHeadersofURL (internally `is.workflow.actions.url.getheaders`)

> This action requires that Shortcuts has permission to use WFRemoteServerAccessResource.


## description

### summary

Retrieves the HTTP headers of the URL passed as input using a HEAD request.


### usage
```
GetHeadersofURL "string"
```

### arguments

---

### uRL: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"URL"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

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
	"Attribution": "Network",
	"Category": "Web",
	"CreationDate": "2016-06-04T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Retrieves the HTTP headers of the URL passed as input using a HEAD request."
	},
	"IconName": "Downloads.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
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
	"ParameterSummary": "Get headers of ${WFInput}",
	"Parameters": [
		{
			"AllowsMultipleValues": false,
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFInput",
			"KeyboardType": "URL",
			"Label": "URL",
			"Placeholder": "URL",
			"TextContentType": "URL"
		}
	],
	"RequiredResources": [
		"WFRemoteServerAccessResource"
	],
	"ResidentCompatible": true,
	"ShortName": "Get Headers",
	"Subcategory": "Web Requests",
	"SuggestedNever": true
}
```
