
## Open URLs / OpenURLs (internally `is.workflow.actions.openurl`)

> This action requires that Shortcuts has permission to use WFURLOpenResource.


## description

### summary

Opens URLs passed into the action in Safari.


### usage
```
OpenURLs "string"
```

### arguments

---

### uRL: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"URLs"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

```json
{
	"ActionClass": "WFOpenURLAction",
	"ActionKeywords": [
		"URL",
		"web",
		"display",
		"site",
		"open",
		"show",
		"multiple"
	],
	"AppIdentifier": "com.apple.mobilesafari",
	"Category": "Web",
	"Description": {
		"DescriptionSummary": "Opens URLs passed into the action in Safari."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"NSURL"
		]
	},
	"InputPassthrough": true,
	"IntentIdentifier": "sirikit.intents.custom.com.apple.mobilesafari.OpenURLsIntent",
	"LastModifiedDate": "2015-12-14T08:00:00.000Z",
	"Name": "Open URLs",
	"ParameterSummary": "Open ${WFInput}",
	"Parameters": [
		{
			"AllowsMultipleValues": true,
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFInput",
			"KeyboardType": "URL",
			"Label": "URL",
			"Placeholder": "URLs",
			"TextContentType": "URL"
		}
	],
	"RequiredResources": [
		"WFURLOpenResource"
	],
	"Subcategory": "Safari"
}
```
