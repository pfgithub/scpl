
## Detect Language with Microsoft / DetectLanguagewithMicrosoft (internally `is.workflow.actions.detectlanguage`)


## description

### summary

Detects the language of the text provided as input.


### note

Powered by Microsoft Cognitive Services (microsoft.com/cognitive-services)


### usage
```
DetectLanguagewithMicrosoft "string"
```

### arguments

---

### text: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

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
	"Attribution": "Microsoft Cognitive Services",
	"Category": "Documents",
	"CreationDate": "2015-08-29T17:26:33.000Z",
	"Description": {
		"DescriptionNote": "Powered by Microsoft Cognitive Services (microsoft.com/cognitive-services)",
		"DescriptionSummary": "Detects the language of the text provided as input."
	},
	"IconName": "Translate.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
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
	},
	"ParameterSummary": "Detect language of ${WFInput}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFInput",
			"Label": "Text"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Translation"
}
```
