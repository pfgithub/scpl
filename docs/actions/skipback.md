
## Skip Back / SkipBack (internally `is.workflow.actions.skipback`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description

### summary

Skips to the previous song in the current music queue.


### usage
```
SkipBack skipTo=("Beginning" | "Previous Song") undefined=NotImplemented
```

### arguments

---

### skipTo: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Beginning"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Beginning`
- `Previous Song`

---

#### This parameter is not implemented yet.

The parameter type is WFMediaRoutePickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

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
	"Attribution": "Now Playing",
	"Category": "Media",
	"Description": {
		"DescriptionSummary": "Skips to the previous song in the current music queue."
	},
	"IconName": "Rewind.png",
	"InputPassthrough": true,
	"Name": "Skip Back",
	"ParameterSummary": "Skip back to the ${WFSkipBackBehavior} on ${WFMediaRoute}",
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
		},
		{
			"Class": "WFMediaRoutePickerParameter",
			"DefaultValue": "Local",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFMediaRoute",
			"Label": "Device",
			"RouteType": "Endpoint"
		}
	],
	"RequiredResources": [
		"WFMainThreadResource"
	],
	"Subcategory": "Playback",
	"WFSkipSongActionMode": "Back"
}
```
