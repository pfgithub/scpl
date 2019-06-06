
## URL Encode / URLEncode (internally `is.workflow.actions.urlencode`)


## description

### summary

Encodes or decodes text passed into the action to be suitable for inclusion in a URL by adding or removing percent escapes when appropriate.


### usage
```
URLEncode mode=("Encode" | "Decode") text="string"
```

### arguments

---

### mode: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Encode"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Encode`
- `Decode`

---

### text: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Text"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

```json
{
	"ActionClass": "WFURLEncodeAction",
	"ActionKeywords": [
		"URL",
		"encode",
		"decode",
		"x",
		"callback",
		"x-callback",
		"xcallback"
	],
	"Category": "Scripting",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Encodes or decodes text passed into the action to be suitable for inclusion in a URL by adding or removing percent escapes when appropriate."
	},
	"IconName": "URL.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFStringContentItem"
		]
	},
	"Name": "URL Encode",
	"Output": {
		"Multiple": true,
		"OutputName": "URL Encoded Text",
		"Types": [
			"WFStringContentItem"
		]
	},
	"ParameterSummary": "URL ${WFEncodeMode} ${WFInput}",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Encode",
			"Items": [
				"Encode",
				"Decode"
			],
			"Key": "WFEncodeMode",
			"Label": "Mode"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFInput",
			"Label": "Text",
			"Placeholder": "Text"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "X-Callback",
	"SuggestedNever": true
}
```
