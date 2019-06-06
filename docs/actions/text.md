
## Text / Text (internally `is.workflow.actions.gettext`)


## description

### summary

Passes the specified text to the next action.


### usage
```
Text "string"
```

### arguments

---

### WFTextActionText: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Text"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Allows newlines.

---

### source json (for developers)

```json
{
	"ActionClass": "WFTextAction",
	"ActionKeywords": [
		"text",
		"such text",
		"very speech",
		"much words",
		"so wow",
		"string"
	],
	"Category": "Text",
	"Constructor": true,
	"Description": {
		"DescriptionSummary": "Passes the specified text to the next action."
	},
	"IconName": "Text.png",
	"Name": "Text",
	"Output": {
		"Multiple": false,
		"OutputName": "Text",
		"Types": [
			"NSString"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "",
			"Key": "WFTextActionText",
			"Multiline": true,
			"Placeholder": "Text"
		}
	]
}
```
