
## Add to Reading List / AddtoReadingList (internally `is.workflow.actions.readinglist`)

> This action requires that Shortcuts has permission to use WFAddToReadingListAccessResource.


## description

### summary

Adds URLs passed into the action to your reading list.


### usage
```
AddtoReadingList "string"
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
	"ActionClass": "WFAddToReadingListAction",
	"ActionKeywords": [
		"URL",
		"web",
		"later",
		"save",
		"reading",
		"list"
	],
	"AppIdentifier": "com.apple.mobilesafari",
	"Category": "Web",
	"Description": {
		"DescriptionSummary": "Adds URLs passed into the action to your reading list."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFURL",
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Add to Reading List",
	"ParameterSummary": "Add ${WFURL} to Reading List",
	"Parameters": [
		{
			"AllowsMultipleValues": true,
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFURL",
			"KeyboardType": "URL",
			"Label": "URL",
			"Placeholder": "URL",
			"TextContentType": "URL"
		}
	],
	"RequiredResources": [
		"WFAddToReadingListAccessResource"
	],
	"ShortName": "Read Later",
	"Subcategory": "Safari"
}
```
