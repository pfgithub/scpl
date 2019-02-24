
## Show Result / showresult (internally `is.workflow.actions.showresult`)


> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description
### summary
Shows the specified text in Siri or in an alert.


### usage
`showresult text=[string|text]`

### arguments
### Text Input: text / text (internally `Text`)
**Placeholder**: Enter text...
**Allows Variables**: true


Accepts a string 
or text
with the text.

### source json

```json
{
	"ActionClass": "WFShowResultAction",
	"ActionKeywords": [
		"text",
		"such text",
		"very speech",
		"much words",
		"so wow",
		"string"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Shows the specified text in Siri or in an alert."
	},
	"IconName": "Scripting",
	"InputPassthrough": true,
	"Name": "Show Result",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "",
			"Key": "Text",
			"Multiline": true,
			"Placeholder": "Enter text..."
		}
	],
	"RequiredResources": [
		"WFMainThreadResource"
	]
}
```
