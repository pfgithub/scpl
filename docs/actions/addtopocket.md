
## Add to Pocket / addtopocket (internally `is.workflow.actions.pocket.add`)


> This action requires that Shortcuts has permission to use WFPocketAccessResource.


## description
### summary
Adds the input to Pocket.


### usage
`addtopocket tags=[string|text]`

### arguments
### Text Input: Tags / tags (internally `WFPocketTags`)
**Placeholder**: example, tags
**Allows Variables**: true


Accepts a string 
or text
with the text.

### source json

```json
{
	"ActionClass": "WFPocketAddAction",
	"AppIdentifier": "com.ideashower.ReadItLaterPro",
	"Category": "Web",
	"Description": {
		"DescriptionSummary": "Adds the input to Pocket."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Add to Pocket",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Description": "A comma-separated list of tags to apply to the items added to Pocket.",
			"Key": "WFPocketTags",
			"Label": "Tags",
			"Placeholder": "example, tags"
		}
	],
	"RequiredResources": [
		"WFPocketAccessResource"
	]
}
```
