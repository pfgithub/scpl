
## List / list (internally `is.workflow.actions.list`)



## description
### summary
Allows you to specify a list of items to be passed to the next action.


### usage
`list items=[list]`

### arguments
### List: Items / items (internally `WFItems`)
**Default Value**: One,Two
**Allows Variables**: true


Accepts a list.

### source json

```json
{
	"ActionClass": "WFListAction",
	"ActionKeywords": [
		"array"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionNote": "If you specify a variable, the contents of that variable will be included in the list.",
		"DescriptionSummary": "Allows you to specify a list of items to be passed to the next action."
	},
	"IconName": "Scripting.png",
	"Name": "List",
	"Output": {
		"Multiple": true,
		"OutputName": "List",
		"Types": [
			"WFContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFContentArrayParameter",
			"DefaultValue": [
				"One",
				"Two"
			],
			"Key": "WFItems",
			"Label": "Items"
		}
	],
	"Subcategory": "Lists",
	"SuggestedNever": true
}
```
