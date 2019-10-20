
## isworkflowactionstextchangecase / isworkflowactionstextchangecase (internally `is.workflow.actions.text.changecase`)

> This action is not yet complete. Some arguments may be missing.



### usage
```
isworkflowactionstextchangecase 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFHandleCustomIntentAction",
	"ActionKeywords": [
		"uppercase",
		"lowercase",
		"title",
		"transform",
		"text",
		"capitalize"
	],
	"Attribution": "Text",
	"Category": "Documents",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"IconName": "Text.png",
	"InProcess": true,
	"IntentIdentifier": "sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFChangeCaseIntent",
	"LastModifiedDate": "2015-02-19T08:00:00.000Z",
	"ParameterOverrides": {
		"type": {
			"IntentEnumOverrides": {
				"alternatingCase": "cApItAlIzE wItH aLtErNaTiNg cAsE",
				"capitalize": "Capitalize Every Word",
				"lowercase": "lowercase",
				"sentenceCase": "Capitalize with sentence case",
				"titleCase": "Capitalize with Title Case",
				"uppercase": "UPPERCASE"
			},
			"Key": "WFCaseType"
		}
	},
	"ResidentCompatible": true,
	"Subcategory": "Text Editing",
	"SuggestedNever": true
}
```
