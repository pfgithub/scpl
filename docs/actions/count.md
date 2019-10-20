
## Count / Count (internally `is.workflow.actions.count`)


## description

### summary

Counts the number of items, characters, words, sentences, or lines passed as input.


### note

This is just like the Count in Sesame Street, but instead of a vampire, it's a Shortcuts action.


### usage
```
Count type=("Items" | "Characters" | "Words" | "Sentences" | "Lines") input=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### type: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Items"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Items`
- `Characters`
- `Words`
- `Sentences`
- `Lines`

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Input
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFCountAction",
	"ActionKeywords": [
		"get",
		"number",
		"length",
		"list"
	],
	"AppIdentifier": "com.apple.calculator",
	"Attribution": "Scripting",
	"Category": "Scripting",
	"Description": {
		"DescriptionNote": "This is just like the Count in Sesame Street, but instead of a vampire, it's a Shortcuts action.",
		"DescriptionSummary": "Counts the number of items, characters, words, sentences, or lines passed as input."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "Input",
		"Required": true,
		"Types": [
			"WFContentItem",
			"WFStringContentItem"
		]
	},
	"Name": "Count",
	"Output": {
		"Multiple": false,
		"OutputName": "Count",
		"Types": [
			"NSDecimalNumber"
		]
	},
	"ParameterSummary": "Count ${WFCountType} in ${Input}",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Items",
			"Items": [
				"Items",
				"Characters",
				"Words",
				"Sentences",
				"Lines"
			],
			"Key": "WFCountType",
			"Label": "Type"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "Input",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Items"
}
```
