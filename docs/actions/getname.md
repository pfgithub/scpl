
## Get Name / GetName (internally `is.workflow.actions.getitemname`)


## description

### summary

Returns the name of every item passed as input. Depending on the input, this could be a file name, the title of a website, the title of a calendar event, etc.


### usage
```
GetName (v:myvar | mv:myvar | s:myvar)
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
	"ActionClass": "WFGetItemNameAction",
	"ActionKeywords": [
		"title"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Returns the name of every item passed as input. Depending on the input, this could be a file name, the title of a website, the title of a calendar event, etc."
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
	"Name": "Get Name",
	"Output": {
		"Multiple": true,
		"OutputName": "Name",
		"Types": [
			"NSString"
		]
	},
	"ParameterSummary": "Get name of ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Item",
			"Placeholder": "Item"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Items"
}
```
