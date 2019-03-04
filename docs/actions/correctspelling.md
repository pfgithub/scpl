
## Correct Spelling / correctspelling (internally `is.workflow.actions.correctspelling`)


## description

### summary

Autocorrects the spelling of text passed into the action.


### usage
```
correctspelling 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFSpellCorrectAction",
	"ActionKeywords": [
		"text",
		"spell",
		"spelling",
		"correct",
		"autocorrect"
	],
	"Category": "Text",
	"Description": {
		"DescriptionSummary": "Autocorrects the spelling of text passed into the action."
	},
	"IconName": "Text.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSString"
		]
	},
	"Name": "Correct Spelling",
	"Output": {
		"Multiple": true,
		"OutputName": "Corrected Spelling",
		"Types": [
			"NSString"
		]
	},
	"Subcategory": "Text Editing",
	"SuggestedNever": true
}
```
