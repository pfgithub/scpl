
## isworkflowactionstextcombine / isworkflowactionstextcombine (internally `is.workflow.actions.text.combine`)



### usage
```
isworkflowactionstextcombine 
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
	"IntentIdentifier": "sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFCombineTextIntent",
	"ParameterOverrides": {
		"customSeparator": {
			"Key": "WFTextCustomSeparator"
		},
		"separator": {
			"IntentEnumOverrides": {
				"custom": "Custom",
				"newLines": "New Lines",
				"spaces": "Spaces"
			},
			"Key": "WFTextSeparator"
		}
	},
	"ResidentCompatible": true,
	"Subcategory": "Text Editing",
	"WFTextComponentsMode": "Combine"
}
```
