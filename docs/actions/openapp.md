
## Open App / openapp (internally `is.workflow.actions.openapp`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFURLOpenResource.


## description
### summary
Opens the specified app.


### usage
`openapp undefined=[???] wfappname=[string|text]`

### arguments
This paramtype is not implemented. WFAppPickerParameter

---

### Text Input: wfappname / wfappname (internally `WFAppName`)
**Allows Variables**: true



Accepts a string 
or text
with the text.

### source json

```json
{
	"ActionClass": "WFOpenAppAction",
	"ActionKeywords": [
		"launch",
		"run",
		"switch"
	],
	"Category": "Apps",
	"Description": {
		"DescriptionSummary": "Opens the specified app."
	},
	"IconName": "Apps.png",
	"InputPassthrough": true,
	"Name": "Open App",
	"Parameters": [
		{
			"AppSearchType": "OpenApp",
			"Class": "WFAppPickerParameter",
			"Key": "WFAppIdentifier",
			"Label": "App"
		},
		{
			"Class": "WFTextInputParameter",
			"Hidden": true,
			"Key": "WFAppName"
		}
	],
	"RequiredResources": [
		"WFURLOpenResource"
	],
	"SuggestedNever": true
}
```
