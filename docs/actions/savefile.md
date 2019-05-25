
## Save File / SaveFile (internally `is.workflow.actions.documentpicker.save`)

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Save files to iCloud Drive or Dropbox. Turn off “Ask Where to Save” in order to specify a destination path.


### note

In the iCloud picker, tap “Locations” to see document pickers from other apps.


### output

The saved files

### usage
```
SaveFile service=("iCloud Drive" | "Dropbox") askWheretoSave=(true | false | variable) destinationPath="string" overwriteIfFileExists=(true | false | variable)
```

### arguments

---

### service: Storage Service Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `iCloud Drive`
- `Dropbox`

---

### askWheretoSave: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### destinationPath: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true

**Only enabled if**: argument WFAskWhereToSave == `false`

Accepts a string 
or text
with the text. Does not allow newlines.

---

### overwriteIfFileExists: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true

**Only enabled if**: argument WFAskWhereToSave == `false`

Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFSaveFileAction",
	"ActionKeywords": [
		"save",
		"file",
		"document",
		"icloud",
		"cloud",
		"upload"
	],
	"Category": "Documents",
	"Description": {
		"DescriptionNote": "In the iCloud picker, tap “Locations” to see document pickers from other apps.",
		"DescriptionResult": "The saved files",
		"DescriptionSummary": "Save files to iCloud Drive or Dropbox. Turn off “Ask Where to Save” in order to specify a destination path."
	},
	"IconName": "Documents.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"public.data"
		]
	},
	"LastModifiedDate": "2017-03-13T05:00:00.000Z",
	"Name": "Save File",
	"Output": {
		"Multiple": true,
		"OutputName": "Saved File",
		"Types": [
			"public.data"
		]
	},
	"Parameters": [
		{
			"AlwaysShowsButton": true,
			"Class": "WFStorageServicePickerParameter",
			"Key": "WFFileStorageService",
			"Label": "Service"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFAskWhereToSave",
			"Label": "Ask Where to Save"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"Description": "The path to save to, such as \"/folder/file.txt\"",
			"DisableAutocorrection": true,
			"Key": "WFFileDestinationPath",
			"Label": "Destination Path",
			"RequiredResources": [
				{
					"WFParameterKey": "WFAskWhereToSave",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Left"
		},
		{
			"Class": "WFSwitchParameter",
			"Key": "WFSaveFileOverwrite",
			"Label": "Overwrite If File Exists",
			"RequiredResources": [
				{
					"WFParameterKey": "WFAskWhereToSave",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"RequiredResources": [
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFAskWhereToSave",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFUserInteractionResource"
		}
	],
	"Subcategory": "File Storage",
	"UserInterfaces": [
		"UIKit"
	]
}
```
