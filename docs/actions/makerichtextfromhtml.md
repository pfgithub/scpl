
## Make Rich Text from HTML / MakeRichTextfromHTML (internally `is.workflow.actions.getrichtextfromhtml`)


## description

### summary

Takes the inputted HTML and turns it into rich text, which can then be converted to other formats.


### input

HTML


### usage
```
MakeRichTextfromHTML (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### hTML: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		HTML
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFRichTextFromHTMLAction",
	"ActionKeywords": [
		"page",
		"source",
		"web",
		"get"
	],
	"Category": "Documents",
	"Description": {
		"DescriptionInput": "HTML",
		"DescriptionSummary": "Takes the inputted HTML and turns it into rich text, which can then be converted to other formats."
	},
	"IconName": "RichText.png",
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFHTML",
		"Required": true,
		"Types": [
			"WFStringContentItem"
		]
	},
	"Name": "Make Rich Text from HTML",
	"Output": {
		"Multiple": false,
		"OutputName": "Rich Text from HTML",
		"Types": [
			"public.html"
		]
	},
	"ParameterSummary": "Make rich text from ${WFHTML}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFHTML",
			"Label": "HTML",
			"Placeholder": "HTML"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Make Rich Text",
	"Subcategory": "Rich Text",
	"SuggestedNever": true
}
```
