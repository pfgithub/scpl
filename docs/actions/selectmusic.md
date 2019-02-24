
## Select Music / selectmusic (internally `is.workflow.actions.exportsong`)


> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource,WFUserInteractionResource.


## description
### summary
Prompts to select music from your local music library.


### usage
`selectmusic selectmultiplesongs=[string boolean|variable]`

### arguments
### Switch: Select Multiple Songs / selectmultiplesongs (internally `WFExportSongActionSelectMultiple`)
**Allows Variables**: true



Accepts a string with either true or false
or a variable.

### source json

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
