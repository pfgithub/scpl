
## Make Rich Text from HTML / makerichtextfromhtml (internally `is.workflow.actions.getrichtextfromhtml`)


## description

### summary

Takes the inputted HTML and turns it into rich text, which can then be converted to other formats.


### input

HTML


### usage
```
makerichtextfromhtml a{}
```

### arguments

---



---

### source json

```json
{
	"ActionClass": "WFRichTextFromHTMLAction",
	"ActionKeywords": [
		"page",
		"source",
		"web",
		"get"
	],
	"Category": "Text",
	"Description": {
		"DescriptionInput": "HTML",
		"DescriptionSummary": "Takes the inputted HTML and turns it into rich text, which can then be converted to other formats."
	},
	"IconName": "RichText.png",
	"Input": {
		"Multiple": false,
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
	"ShortName": "Make Rich Text",
	"Subcategory": "Rich Text",
	"SuggestedNever": true
}
```
