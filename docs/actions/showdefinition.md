
## Show Definition / ShowDefinition (internally `is.workflow.actions.showdefinition`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Shows the definition of the word passed into the action.


### usage
```
ShowDefinition "string"
```

### arguments

---

### word: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"word"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

```json
{
	"ActionClass": "WFShowDefinitionAction",
	"ActionKeywords": [
		"define",
		"word",
		"dictionary",
		"lookup",
		"term"
	],
	"Category": "Text",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Shows the definition of the word passed into the action."
	},
	"IconName": "Dictionary.png",
	"Input": {
		"Multiple": false,
		"ParameterKey": "Word",
		"Required": true,
		"Types": [
			"NSString"
		]
	},
	"InputPassthrough": true,
	"Name": "Show Definition",
	"ParameterSummary": "Show definition of ${Word}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "Word",
			"Label": "Word",
			"Placeholder": "word"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"UserInterfaces": [
		"UIKit",
		"AppKit"
	]
}
```
