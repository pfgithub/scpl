
## Get Details of Music / GetDetailsofMusic (internally `is.workflow.actions.properties.music`)



### usage
```
GetDetailsofMusic ("Last Played Date" | "File Extension" | "Release Date" | "Genre" | "Media Kind" | "Name" | "Artist" | "Creation Date" | "Composer" | "Duration" | "Disc #" | "Last Modified Date" | "Date Added" | "Play Count" | "Album Artwork" | "Album Track #" | "Has Album Artwork" | "Rating" | "Is Explicit" | "Comments" | "Skip Count" | "File Size" | "Lyrics" | "Is Cloud Item" | "Album Artist" | "Album")
```

### arguments

---

### get: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Last Played Date`
- `File Extension`
- `Release Date`
- `Genre`
- `Media Kind`
- `Name`
- `Artist`
- `Creation Date`
- `Composer`
- `Duration`
- `Disc #`
- `Last Modified Date`
- `Date Added`
- `Play Count`
- `Album Artwork`
- `Album Track #`
- `Has Album Artwork`
- `Rating`
- `Is Explicit`
- `Comments`
- `Skip Count`
- `File Size`
- `Lyrics`
- `Is Cloud Item`
- `Album Artist`
- `Album`

---

### source json (for developers)

```json
{
	"ActionClass": "WFContentItemPropertiesAction",
	"AppIdentifier": "com.apple.Music",
	"Category": "Music",
	"CreationDate": "2015-01-22T08:00:00.000Z",
	"Input": {
		"Types": [
			"WFMPMediaContentItem",
			"WFAVAssetContentItem"
		]
	},
	"LastModifiedDate": "2016-05-23T07:00:00.000Z",
	"Name": "Get Details of Music",
	"Subcategory": "Music",
	"WFContentItemClass": "WFMPMediaContentItem",
	"WFContentItemDefaultProperty": "Artist",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemPropertyName",
			"Label": "Get",
			"Items": [
				"Last Played Date",
				"File Extension",
				"Release Date",
				"Genre",
				"Media Kind",
				"Name",
				"Artist",
				"Creation Date",
				"Composer",
				"Duration",
				"Disc #",
				"Last Modified Date",
				"Date Added",
				"Play Count",
				"Album Artwork",
				"Album Track #",
				"Has Album Artwork",
				"Rating",
				"Is Explicit",
				"Comments",
				"Skip Count",
				"File Size",
				"Lyrics",
				"Is Cloud Item",
				"Album Artist",
				"Album"
			]
		}
	]
}
```
