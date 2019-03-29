
## Create Note / createnote (internally `com.apple.mobilenotes.SharingExtension`)

> This action requires that Shortcuts has permission to use [object Object],WFNotesAccessResource.


## description

### summary

Creates a note using the content passed as input.


### usage
```
createnote app=("string" | variable)] showcomposesheet=(true | false | variable)
```

### arguments

---

### app: Intent App Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Default Value**: ```
		com.apple.mobilenotes
		```
**Allows Variables**: true

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### showcomposesheet: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFCreateNoteAction",
	"ActionKeywords": [
		"apple"
	],
	"AppIdentifier": "com.apple.mobilenotes",
	"Category": "Text",
	"Description": {
		"DescriptionSummary": "Creates a note using the content passed as input."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFStringContentItem"
		]
	},
	"IntentIdentifier": "sirikit.intent.notes.CreateNoteIntent",
	"Name": "Create Note",
	"Output": {
		"Multiple": false,
		"Types": [
			"INNote"
		]
	},
	"Parameters": [
		{
			"Class": "WFIntentAppPickerParameter",
			"DefaultValue": "com.apple.mobilenotes",
			"Hidden": true,
			"IntentName": "INCreateNoteIntent",
			"Key": "IntentAppIdentifier",
			"Label": "App"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "ShowWhenRun",
			"Label": "Show Compose Sheet"
		}
	],
	"RequiredResources": [
		{
			"RequiredResources": [
				{
					"WFParameterKey": "ShowWhenRun",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFUserInteractionResource"
		},
		"WFNotesAccessResource"
	],
	"UserInterfaces": [
		"UIKit",
		"Siri"
	]
}
```
