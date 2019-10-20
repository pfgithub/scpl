
## List / List (internally `is.workflow.actions.list`)


## description

### summary

Allows you to specify a list of items to be passed to the next action.


### note

If you specify a variable, the contents of that variable will be included in the list.


### usage
```
List [list, items]
```

### arguments

---

### items: List [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#list-field)
**Default Value**: ```
		["One","Two"]
		```
**Allows Variables**: true



Accepts a list.

---

### source json (for developers)

```json
{
	"ActionClass": "WFListAction",
	"ActionKeywords": [
		"array"
	],
	"Category": "Scripting",
	"Constructor": true,
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
	"ResidentCompatible": true,
	"Subcategory": "Lists",
	"SuggestedNever": true
}
```
