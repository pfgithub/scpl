
## Make Rich Text from Markdown / MakeRichTextfromMarkdown (internally `is.workflow.actions.getrichtextfrommarkdown`)


## description

### summary

Takes the inputted Markdown and turns it into rich text, which can then be converted to other formats.


### input

Markdown


### usage
```
MakeRichTextfromMarkdown (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### markdownText: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Markdown Text
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFRichTextFromMarkdownAction",
	"ActionKeywords": [
		"html",
		"get"
	],
	"Category": "Documents",
	"Description": {
		"DescriptionInput": "Markdown",
		"DescriptionSummary": "Takes the inputted Markdown and turns it into rich text, which can then be converted to other formats."
	},
	"IconName": "RichText.png",
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFStringContentItem"
		]
	},
	"Name": "Make Rich Text from Markdown",
	"Output": {
		"Multiple": false,
		"OutputName": "Rich Text from Markdown",
		"Types": [
			"public.html"
		]
	},
	"ParameterSummary": "Make rich text from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Markdown Text",
			"Placeholder": "Markdown Text"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Make Rich Text",
	"Subcategory": "Rich Text",
	"SuggestedNever": true
}
```
