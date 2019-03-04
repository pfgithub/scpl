
## URL Encode / urlencode (internally `is.workflow.actions.urlencode`)


## description

### summary

Encodes or decodes text passed into the action to be suitable for inclusion in a URL by adding or removing percent escapes when appropriate.


### usage
```
urlencode mode="Encode" | "Decode"
```

### arguments

---

### Enumeration: mode [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**:
```
Encode
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Encode`
- `Decode`

[Documentation](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)

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
		}
	],
	"Subcategory": "X-Callback",
	"SuggestedNever": true
}
```
