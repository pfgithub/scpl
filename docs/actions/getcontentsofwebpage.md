
## Get Contents of Webpage / GetContentsofWebpage (internally `is.workflow.actions.getwebpagecontents`)

> This action requires that Shortcuts has permission to use WFRemoteServerAccessResource.


## description

### summary

Extracts the contents of the webpages passed into the action.


### usage
```
GetContentsofWebpage "string"
```

### arguments

---

### uRL: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetWebPageAction",
	"AppIdentifier": "com.apple.mobilesafari",
	"Category": "Web",
	"Description": {
		"DescriptionSummary": "Extracts the contents of the webpages passed into the action."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"Name": "Get Contents of Webpage",
	"Output": {
		"Multiple": true,
		"OutputName": "Contents of Webpage",
		"Types": [
			"NSAttributedString"
		]
	},
	"ParameterSummary": "Get contents of webpage at ${WFInput}",
	"Parameters": [
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFInput",
			"KeyboardType": "URL",
			"Label": "URL",
			"TextContentType": "URL"
		}
	],
	"RequiredResources": [
		"WFRemoteServerAccessResource"
	],
	"ResidentCompatible": true,
	"ShortName": "Get Webpage",
	"Subcategory": "Web Requests",
	"UnsupportedEnvironments": [
		"MemoryConstrained"
	]
}
```
