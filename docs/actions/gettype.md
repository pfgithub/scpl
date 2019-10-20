
## Get Type / GetType (internally `is.workflow.actions.getitemtype`)


## description

### summary

Returns the type of every item passed as input. For example, if a URL is passed, this action will return “URL”.


### usage
```
GetType (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### item: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Item
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetItemTypeAction",
	"ActionKeywords": [
		"content",
		"item",
		"class"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Returns the type of every item passed as input. For example, if a URL is passed, this action will return “URL”."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"Name": "Get Type",
	"Output": {
		"Multiple": true,
		"OutputName": "Type",
		"Types": [
			"NSString"
		]
	},
	"ParameterSummary": "Get type of ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Item",
			"Placeholder": "Item"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Items",
	"SuggestedNever": true
}
```
