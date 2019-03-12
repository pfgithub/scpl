
## Dictionary / dictionary (internally `is.workflow.actions.dictionary`)


## description

### summary

Passes the specified list of key-value pairs to the next action as a dictionary.


### note

When coerced to text, the dictionary is represented as JSON.


### usage
```
dictionary items={dictionary}
```

### arguments

---

### items: Dictionary [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#dictionary-field)
**Allows Variables**: true



Accepts a dictionary.

---

### source json (for developers)

```json
{
	"ActionClass": "WFDictionaryAction",
	"ActionKeywords": [
		"json",
		"plist"
	],
	"Category": "Scripting",
	"CreationDate": "2016-11-10T20:00:00.000Z",
	"Description": {
		"DescriptionNote": "When coerced to text, the dictionary is represented as JSON.",
		"DescriptionSummary": "Passes the specified list of key-value pairs to the next action as a dictionary."
	},
	"IconName": "Scripting.png",
	"Name": "Dictionary",
	"Output": {
		"Multiple": false,
		"OutputName": "Dictionary",
		"Types": [
			"NSDictionary"
		]
	},
	"Parameters": [
		{
			"AllowedValueTypes": [
				0,
				1,
				2,
				3,
				4
			],
			"Class": "WFDictionaryParameter",
			"Key": "WFItems",
			"Label": "Items"
		}
	],
	"Subcategory": "Dictionaries",
	"SuggestedNever": true
}
```
