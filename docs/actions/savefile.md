
## Save File / savefile (internally `is.workflow.actions.documentpicker.save`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use [object Object].


## description
### summary
Save files to iCloud Drive or Dropbox. Turn off “Ask Where to Save” in order to specify a destination path.

### output
The saved files

### usage
`savefile undefined=[???] askwheretosave=[string boolean|variable] destinationpath=[string|text] overwriteiffileexists=[string boolean|variable]`

### arguments
This paramtype is not implemented. WFStorageServicePickerParameter

---

### Switch: Ask Where to Save / askwheretosave (internally `WFAskWhereToSave`)
**Default Value**:
```
true
```
**Allows Variables**: true



Accepts a string with either true or false
or a variable.

---

### Text Input: Destination Path / destinationpath (internally `WFFileDestinationPath`)
**Allows Variables**: true

**Only enabled if**: argument WFAskWhereToSave = `false`

Accepts a string 
or text
with the text.

---

### Switch: Overwrite If File Exists / overwriteiffileexists (internally `WFSaveFileOverwrite`)
**Allows Variables**: true

**Only enabled if**: argument WFAskWhereToSave = `false`

Accepts a string with either true or false
or a variable.

### source json

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
