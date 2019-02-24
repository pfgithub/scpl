
## Make Rich Text from Markdown / makerichtextfrommarkdown (internally `is.workflow.actions.getrichtextfrommarkdown`)



## description
### summary
Takes the inputted Markdown and turns it into rich text, which can then be converted to other formats.

### input
Markdown


### usage
`makerichtextfrommarkdown `

### arguments


### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFRichTextFromMarkdownAction",
	"ActionKeywords": [
		"html",
		"get"
	],
	"Category": "Text",
	"Description": {
		"DescriptionInput": "Markdown",
		"DescriptionSummary": "Takes the inputted Markdown and turns it into rich text, which can then be converted to other formats."
	},
	"IconName": "RichText.png",
	"Input": {
		"Multiple": false,
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
	"ShortName": "Make Rich Text",
	"Subcategory": "Rich Text",
	"SuggestedNever": true
}
```
</p></details>
