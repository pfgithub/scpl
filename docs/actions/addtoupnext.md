
## Add to Up Next / AddtoUpNext (internally `is.workflow.actions.addmusictoupnext`)

> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource,[object Object].


## description

### summary

Adds the music passed as input to your Up Next queue.


### input

Items in your music library or items from the Search iTunes action.


### usage
```
AddtoUpNext ("Next" | "Later")
```

### arguments

---

### play: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Next"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Next`
- `Later`

---

### source json (for developers)

```json
{
	"ActionClass": "WFAddMusicToUpNextAction",
	"ActionKeywords": [
		"song",
		"music",
		"itunes",
		"up next",
		"apple",
		"album",
		"next",
		"play"
	],
	"AppIdentifier": "com.apple.Music",
	"Category": "Music",
	"CreationDate": "2017-02-14T08:00:00.000Z",
	"Description": {
		"DescriptionInput": "Items in your music library or items from the Search iTunes action.",
		"DescriptionSummary": "Adds the music passed as input to your Up Next queue."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFiTunesProductContentItem",
			"WFMPMediaContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Add to Up Next",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Next",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Items": [
				"Next",
				"Later"
			],
			"Key": "WFWhenToPlay",
			"Label": "Play"
		}
	],
	"RequiredResources": [
		"WFAppleMusicAccessResource",
		{
			"WFDeviceAttributes": {
				"WFDeviceAttributeSystemVersion": {
					"WFSystemVersion": "10.3",
					"WFSystemVersionRelation": ">="
				}
			},
			"WFResourceClass": "WFDeviceAttributesResource"
		}
	],
	"Subcategory": "Up Next"
}
```
