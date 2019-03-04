
## Make Markdown from Rich Text / makemarkdownfromrichtext (internally `is.workflow.actions.getmarkdownfromrichtext`)


## description

### summary

Converts the rich text passed as input to Markdown text (comparable to Aaron Swartz's html2text script).


### output

Markdown

### usage
```
makemarkdownfromrichtext 
```

### arguments

---



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
	"ShortName": "Make Markdown",
	"Subcategory": "Rich Text"
}
```
