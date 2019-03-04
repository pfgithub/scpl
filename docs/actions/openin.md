
## Open In... / openin (internally `is.workflow.actions.openin`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Opens the input as a file in the specified app.


### usage
```
openin showopeninmenu=true|false|variable undefined=NotImplemented wfappname="string"
```

### arguments

---

### Switch: showopeninmenu [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**:
```
true
```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

#### This paramtype is not implemented. WFAppPickerParameter

---

### Text: wfappname [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

Accepts a string 
or text
with the text.

---

### source json (for developers)

```json
{
	"ActionClass": "WFOpenInAction",
	"ActionKeywords": [
		"open",
		"file",
		"document",
		"in",
		"app",
		"application",
		"uidocumentinteractioncontroller"
	],
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Opens the input as a file in the specified app."
	},
	"IconName": "Apps.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"public.data"
		]
	},
	"InputPassthrough": true,
	"Name": "Open In...",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFOpenInAskWhenRun",
			"Label": "Show Open In Menu"
		},
		{
			"AppSearchType": "OpenIn",
			"Class": "WFAppPickerParameter",
			"Key": "WFOpenInAppIdentifier",
			"Label": "App",
			"RequiredResources": [
				{
					"WFParameterKey": "WFOpenInAskWhenRun",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFTextInputParameter",
			"Hidden": true,
			"Key": "WFAppName"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Files",
	"UserInterfaces": [
		"UIKit",
		"UIKitWidget"
	]
}
```
