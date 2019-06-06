
## Make HTML from Rich Text / MakeHTMLfromRichText (internally `is.workflow.actions.gethtmlfromrichtext`)


## description

### summary

Converts the rich text passed as input to HTML text.


### output

HTML

### usage
```
MakeHTMLfromRichText makeFullDocument=(true | false | variable) richText=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### makeFullDocument: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### richText: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Rich Text
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFHTMLFromRichTextAction",
	"ActionKeywords": [
		"page",
		"source",
		"web",
		"get"
	],
	"Category": "Text",
	"Description": {
		"DescriptionResult": "HTML",
		"DescriptionSummary": "Converts the rich text passed as input to HTML text."
	},
	"IconName": "RichText.png",
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFRichTextContentItem"
		]
	},
	"Name": "Make HTML from Rich Text",
	"Output": {
		"Multiple": false,
		"OutputName": "HTML from Rich Text",
		"Types": [
			"NSString"
		]
	},
	"ParameterSummary": "Make HTML from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"Description": "This indicates whether or not this action writes out an entire HTML document. If this is turned off, partial HTML will be returned if possible.",
			"Key": "WFMakeFullDocument",
			"Label": "Make Full Document"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Rich Text",
			"Placeholder": "Rich Text"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Make HTML",
	"Subcategory": "Rich Text"
}
```
