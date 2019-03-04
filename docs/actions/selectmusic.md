
## Select Music / selectmusic (internally `is.workflow.actions.exportsong`)

> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource,WFUserInteractionResource.


## description

### summary

Prompts to select music from your local music library.


### usage
```
selectmusic selectmultiplesongs=(true | f alse | variable)
```

### arguments

---

### selectmultiplesongs: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFSelectMusicAction",
	"ActionKeywords": [
		"export",
		"song",
		"music",
		"itunes",
		"library"
	],
	"AppIdentifier": "com.apple.Music",
	"Category": "Music",
	"Description": {
		"DescriptionSummary": "Prompts to select music from your local music library."
	},
	"InputPassthrough": false,
	"LastModifiedDate": "2015-05-12T07:00:00.000Z",
	"Name": "Select Music",
	"Output": {
		"Multiple": true,
		"OutputName": "Music",
		"Types": [
			"MPMediaItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"Key": "WFExportSongActionSelectMultiple",
			"Label": "Select Multiple Songs"
		}
	],
	"RequiredResources": [
		"WFAppleMusicAccessResource",
		"WFUserInteractionResource"
	],
	"Subcategory": "Music",
	"UserInterfaces": [
		"UIKit"
	]
}
```
