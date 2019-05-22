
## Delete Notes / DeleteNotes (internally `is.workflow.actions.evernote.delete`)

> This action requires that Shortcuts has permission to use WFEvernoteAccessResource.


## description

### summary

Deletes the notes passed as input from Evernote.


### usage
```
DeleteNotes (true | false | variable)
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
	"ActionClass": "WFEvernoteDeleteAction",
	"ActionKeywords": [
		"banish",
		"demolish",
		"remove",
		"peace",
		"byebye"
	],
	"AppIdentifier": "com.evernote.iPhone.Evernote",
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Deletes the notes passed as input from Evernote."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"ENNoteRef"
		]
	},
	"Name": "Delete Notes",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Description": "When enabled, this action will confirm with you before deleting notes from Evernote. You'll always be asked for confirmation when deleting 10 notes or more at a time.",
			"Key": "WFEvernoteConfirmDeletion",
			"Label": "Confirm Before Deleting"
		}
	],
	"RequiredResources": [
		"WFEvernoteAccessResource"
	]
}
```
