
## isworkflowactionstextsplit / isworkflowactionstextsplit (internally `is.workflow.actions.text.split`)



### usage
```
isworkflowactionstextsplit 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFTextComponentsAction",
	"ActionKeywords": [
		"separate",
		"delimiter"
	],
	"Attribution": "Text",
	"Category": "Text",
	"IconName": "Text.png",
	"InProcess": true,
	"IntentIdentifier": "sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFSplitTextIntent",
	"LastModifiedDate": "2016-10-10T19:00:00.000Z",
	"ParameterOverrides": {
		"customSeparator": {
			"Key": "WFTextCustomSeparator"
		},
		"separator": {
			"IntentEnumOverrides": {
				"custom": "Custom",
				"everyCharacter": "Every Character",
				"newLines": "New Lines",
				"spaces": "Spaces"
			},
			"Key": "WFTextSeparator"
		}
	},
	"ResidentCompatible": true,
	"Subcategory": "Text Editing",
	"WFTextComponentsMode": "Split"
}
```
