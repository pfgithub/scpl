
## Skip Back / skipback (internally `is.workflow.actions.skipback`)

> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description

### summary

Skips to the previous song in the current music queue.


### usage
```
skipback skipto=("Beginning" | "Previous Song")
```

### arguments

---

### skipto: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Beginning"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Beginning`
- `Previous Song`

---

### source json (for developers)

```json
{
	"ActionClass": "WFSkipSongAction",
	"ActionKeywords": [
		"ipod",
		"track",
		"music",
		"itunes",
		"previous"
	],
	"Category": "Music",
	"Description": {
		"DescriptionSummary": "Skips to the previous song in the current music queue."
	},
	"IconName": "Rewind.png",
	"InputPassthrough": true,
	"Name": "Skip Back",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Beginning",
			"Items": [
				"Beginning",
				"Previous Song"
			],
			"Key": "WFSkipBackBehavior",
			"Label": "Skip To"
		}
	],
	"RequiredResources": [
		"WFMainThreadResource"
	],
	"Subcategory": "Playback",
	"WFSkipSongActionMode": "Back"
}
```
