
## Count / count (internally `is.workflow.actions.count`)


## description

### summary

Counts the number of items, characters, words, sentences, or lines passed as input.


### usage
```
count count=("Items" | "Characters" | "Words" | "Sentences" | "Lines")
```

### arguments

---

### count: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
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
	"Category": "Scripting",
	"Description": {
		"DescriptionNote": "This is just like the Count in Sesame Street, but instead of a vampire, it's a Shortcuts action.",
		"DescriptionSummary": "Counts the number of items, characters, words, sentences, or lines passed as input."
	},
	"IconName": "Calculator.png",
	"Input": {
		"Multiple": true,
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
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"Items": [
				"Items",
				"Characters",
				"Words",
				"Sentences",
				"Lines"
			],
			"Key": "WFCountType",
			"Label": "Count"
		}
	],
	"Subcategory": "Content"
}
```
