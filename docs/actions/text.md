
## Text / text (internally `is.workflow.actions.gettext`)



## description
### summary
Passes the specified text to the next action.


### usage
`text a{wftextactiontext=[string|text]}`

### arguments
### Text: wftextactiontext / wftextactiontext (internally `WFTextActionText`)
**Placeholder**:
```
Enter text...
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

### source json

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
			"Placeholder": "Enter text..."
		}
	]
}
```
