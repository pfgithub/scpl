
## Make Markdown from Rich Text / MakeMarkdownfromRichText (internally `is.workflow.actions.getmarkdownfromrichtext`)


## description

### summary

Converts the rich text passed as input to Markdown text (comparable to Aaron Swartz's html2text script).


### output

Markdown

### usage
```
MakeMarkdownfromRichText (v:myvar | mv:myvar | s:myvar)
```

### arguments

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
	"ActionClass": "WFMarkdownFromRichTextAction",
	"ActionKeywords": [
		"html2text",
		"source"
	],
	"Category": "Text",
	"CreationDate": "2016-03-07T08:00:00.000Z",
	"Description": {
		"DescriptionResult": "Markdown",
		"DescriptionSummary": "Converts the rich text passed as input to Markdown text (comparable to Aaron Swartz's html2text script)."
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
	"Name": "Make Markdown from Rich Text",
	"Output": {
		"Multiple": false,
		"OutputName": "Markdown from Rich Text",
		"Types": [
			"NSString"
		]
	},
	"ParameterSummary": "Make Markdown from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Rich Text",
			"Placeholder": "Rich Text"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Make Markdown",
	"Subcategory": "Rich Text"
}
```
