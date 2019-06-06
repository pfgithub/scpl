
## Create Note / CreateNote (internally `com.apple.mobilenotes.SharingExtension`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Creates a note using the content passed as input.


### usage
```
CreateNote app=("string" | variable)] showComposeSheet=(true | false | variable) undefined=NotImplemented note="string"
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

### showComposeSheet: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

#### This paramtype is not implemented. WFNoteGroupPickerParameter

---

### note: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

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
		"ParameterKey": "WFCreateNoteInput",
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
	"ParameterSummary": "Create ${WFCreateNoteInput} in ${WFNoteGroup}",
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
		},
		{
			"AlwaysShowsButton": true,
			"Class": "WFNoteGroupPickerParameter",
			"Description": "The folder in which to save the new note.",
			"IntentSlotName": "groupName",
			"Key": "WFNoteGroup",
			"Label": "Folder",
			"RequiredResources": [
				{
					"WFParameterKey": "ShowWhenRun",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFCreateNoteInput",
			"Label": "Note"
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
		}
	],
	"UserInterfaces": [
		"UIKit",
		"Siri"
	]
}
```
