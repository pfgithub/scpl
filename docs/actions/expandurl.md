
## Expand URL / ExpandURL (internally `is.workflow.actions.url.expand`)

> This action requires that Shortcuts has permission to use WFRemoteServerAccessResource.


## description

### summary

This action expands and cleans up URLs which have been shortened using a URL shortening service like TinyURL or Bit.ly.


### note

The expanded URL is cleaned, removing unnecessary parameters such as "utm_source".


### output

The full, expanded URL, or the original URL if the URL was not shortened

### usage
```
ExpandURL "string"
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
		"ParameterKey": "URL",
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
	"ParameterSummary": "Expand ${URL}",
	"Parameters": [
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "URL",
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
	"Subcategory": "URLs"
}
```
