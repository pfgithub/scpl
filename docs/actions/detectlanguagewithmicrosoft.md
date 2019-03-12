
## Detect Language with Microsoft / detectlanguagewithmicrosoft (internally `is.workflow.actions.detectlanguage`)


## description

### summary

Detects the language of the text provided as input.


### note

Powered by Microsoft Cognitive Services (microsoft.com/cognitive-services)


### usage
```
detectlanguagewithmicrosoft 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFDetectLanguageAction",
	"ActionKeywords": [
		"Translate",
		"Get",
		"Text"
	],
	"Category": "Text",
	"CreationDate": "2015-08-29T17:26:33.000Z",
	"Description": {
		"DescriptionNote": "Powered by Microsoft Cognitive Services (microsoft.com/cognitive-services)",
		"DescriptionSummary": "Detects the language of the text provided as input."
	},
	"IconName": "Translate.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSString"
		]
	},
	"Name": "Detect Language with Microsoft",
	"Output": {
		"Multiple": true,
		"OutputName": "Language",
		"Types": [
			"NSString"
		]
	}
}
```
