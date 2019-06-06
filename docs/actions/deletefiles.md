
## Delete Files / DeleteFiles (internally `is.workflow.actions.file.delete`)


## description

### summary

Delete the files passed in as input.


### usage
```
DeleteFiles confirmBeforeDeleting=(true | false | variable) files=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### confirmBeforeDeleting: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### files: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Files
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFDeleteFileAction",
	"ActionKeywords": [
		"delete",
		"files",
		"remove",
		"obliterate"
	],
	"BlocksOutput": true,
	"Category": "Documents",
	"CreationDate": "2017-03-13T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Delete the files passed in as input."
	},
	"IconName": "Documents.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"public.data"
		]
	},
	"Name": "Delete Files",
	"ParameterSummary": "Delete ${WFInput}",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Description": "When enabled, this action will confirm with you before deleting the file.",
			"Key": "WFDeleteFileConfirmDeletion",
			"Label": "Confirm Before Deleting"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Files",
			"Placeholder": "Files"
		}
	],
	"Subcategory": "File Storage"
}
```
