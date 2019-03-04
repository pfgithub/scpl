
## Get Note Link / getnotelink (internally `is.workflow.actions.evernote.getlink`)

> This action requires that Shortcuts has permission to use WFEvernoteAccessResource.


## description

### summary

Gets a link to the Evernote note passed into the action, which can be shared.


### usage
```
getnotelink inapplink=true|false|variable
```

### arguments

---

### Switch: inapplink [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFEvernoteGetLinkAction",
	"ActionKeywords": [
		"url",
		"share"
	],
	"AppIdentifier": "com.evernote.iPhone.Evernote",
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Gets a link to the Evernote note passed into the action, which can be shared."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"ENNoteRef"
		]
	},
	"Name": "Get Note Link",
	"Output": {
		"Multiple": true,
		"OutputName": "Note Link",
		"Types": [
			"NSURL"
		]
	},
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Description": "When enabled, an evernote:// URL will be generated, suitable for opening the note in the Evernote app.",
			"Key": "WFEvernoteShareInAppLink",
			"Label": "In-App Link"
		}
	],
	"RequiredResources": [
		"WFEvernoteAccessResource"
	]
}
```
