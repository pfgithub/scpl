
## Get URLs from Input / GetURLsfromInput (internally `is.workflow.actions.detect.link`)


## description

### summary

Returns any links found in the output from the previous action.


### usage
```
GetURLsfromInput "string"
```

### arguments

---

### input: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Input"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"link",
		"web",
		"site",
		"detect",
		"scan"
	],
	"Category": "Web",
	"CoercionItemClass": "WFURLContentItem",
	"Description": {
		"DescriptionSummary": "Returns any links found in the output from the previous action."
	},
	"IconName": "URL.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"NSURL"
		]
	},
	"Name": "Get URLs from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "URLs",
		"Types": [
			"WFURLContentItem"
		]
	},
	"ParameterSummary": "Get URLs from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Get URLs",
	"Subcategory": "URLs"
}
```
