
## Delete Files / DeleteFiles (internally `is.workflow.actions.file.delete`)


## description

### summary

Delete the files passed in as input.


### usage
```
DeleteFiles (true | false | variable)
```

### arguments

---

### ConfirmBeforeDeleting: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
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
	"ActionClass": "WFDeleteFileAction",
	"ActionKeywords": [
		"delete",
		"files",
		"remove",
		"obliterate"
	],
	"Category": "Documents",
	"CreationDate": "2017-03-13T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Delete the files passed in as input."
	},
	"IconName": "Documents.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"public.data"
		]
	},
	"Name": "Delete Files",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Description": "When enabled, this action will confirm with you before deleting the file.",
			"Key": "WFDeleteFileConfirmDeletion",
			"Label": "Confirm Before Deleting"
		}
	],
	"Subcategory": "File Storage"
}
```
