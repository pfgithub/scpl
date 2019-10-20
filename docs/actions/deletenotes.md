
## Delete Notes / DeleteNotes (internally `is.workflow.actions.evernote.delete`)

> This action requires that Shortcuts has permission to use WFEvernoteAccessResource.


## description

### summary

Deletes the notes passed as input from Evernote.


### usage
```
DeleteNotes confirmBeforeDeleting=(true | false | variable) notes=(v:myvar | mv:myvar | s:myvar)
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

### notes: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Notes
		```
**Allows Variables**: true



Accepts a variable.

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
	"BlocksOutput": true,
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Deletes the notes passed as input from Evernote."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"ENNoteRef"
		]
	},
	"Name": "Delete Notes",
	"ParameterSummary": "Delete ${WFInput}",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Description": "When enabled, this action will confirm with you before deleting notes from Evernote. You'll always be asked for confirmation when deleting 10 notes or more at a time.",
			"Key": "WFEvernoteConfirmDeletion",
			"Label": "Confirm Before Deleting"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Notes",
			"Placeholder": "Notes"
		}
	],
	"RequiredResources": [
		"WFEvernoteAccessResource"
	]
}
```
