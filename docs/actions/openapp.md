
## Open App / OpenApp (internally `is.workflow.actions.openapp`)

> This action requires that Shortcuts has permission to use WFURLOpenResource.


## description

### summary

Opens the specified app.


### usage
```
OpenApp App=("app name" | "com.identifier.for.app")] WFAppName="string"
```

### arguments

---

### App: App [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



Accepts a string containing a supported app or an app identifier.
You can use [this shortcut](https://www.icloud.com/shortcuts/7aff3fcdd0ca4bbc9c0d1b70e2825ed8) to get an app identifier for an unsupported app.
Supported apps are:
- `appstore` (App Store)
- `files` (Files)
- `shortcuts` (Shortcuts)
- `safari` (Safari)
- Any other app by entering its id from [this shortcut](https://www.icloud.com/shortcuts/7aff3fcdd0ca4bbc9c0d1b70e2825ed8)
		

---

### WFAppName: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

Accepts a string 
or text
with the text.

---

### source json (for developers)

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
