
## Set Wallpaper / SetWallpaper (internally `is.workflow.actions.wallpaper.set`)


## description

### summary

Sets the wallpaper to the image passed as input. The wallpaper can be set on the Home Screen, the Lock Screen, or both.


### usage
```
SetWallpaper ("Lock Screen" | "Home Screen" | "Both")
```

### arguments

---

### location: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Both"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Lock Screen`
- `Home Screen`
- `Both`

---

### source json (for developers)

```json
{
	"ActionClass": "WFSetWallpaperAction",
	"ActionKeywords": [
		"wallpaper",
		"home",
		"lock",
		"screen",
		"background"
	],
	"Category": "Photos & Video",
	"CreationDate": "2018-10-26T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Sets the wallpaper to the image passed as input. The wallpaper can be set on the Home Screen, the Lock Screen, or both."
	},
	"IconName": "Wallpaper",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"UIImage"
		]
	},
	"InputPassthrough": true,
	"Name": "Set Wallpaper",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Both",
			"Items": [
				"Lock Screen",
				"Home Screen",
				"Both"
			],
			"Key": "WFWallpaperLocation",
			"Label": "Location"
		}
	],
	"Subcategory": "Wallpaper"
}
```
