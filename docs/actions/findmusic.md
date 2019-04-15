
## Find Music / findmusic (internally `is.workflow.actions.filter.music`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource.



### usage
```
findmusic undefined=NotImplemented sortby=("Last Played Date" | "File Extension" | "Release Date" | "Genre" | "Media Kind" | "Name" | "Artist" | "Creation Date" | "Composer" | "Duration" | "Disc #" | "Last Modified Date" | "Date Added" | "Play Count" | "Album Artwork" | "Album Track #" | "Has Album Artwork" | "Rating" | "Is Explicit" | "Comments" | "Skip Count" | "File Size" | "Lyrics" | "Is Cloud Item" | "Album Artist" | "Album" | "Random") order=("Oldest First" | "Newest First" | "A to Z" | "Z to A") limit=(true | false | variable) getitems=number
```

### arguments

---

#### This paramtype is not implemented. WFFilterParameter

---

### sortby: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
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
- `Random`

---

### order: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true

**Only enabled if**: argument WFContentItemSortProperty != `Random`

Accepts a string 
or variable
containing one of the options:

- `Oldest First`
- `Newest First`
- `A to Z`
- `Z to A`

---

### limit: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### getitems: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Allows Variables**: true

**Only enabled if**: argument WFSwitchParameter == `true`

		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFContentItemFilterAction",
	"AppIdentifier": "com.apple.Music",
	"Category": "Music",
	"CreationDate": "2015-01-22T08:00:00.000Z",
	"Input": {
		"Types": [
			"WFMPMediaContentItem",
			"WFAVAssetContentItem",
			"WFGenericFileContentItem"
		]
	},
	"Name": "Find Music",
	"RequiredResources": [
		"WFAppleMusicAccessResource"
	],
	"Subcategory": "Music",
	"WFContentItemClass": "WFMPMediaContentItem",
	"WFContentItemDefaultProperty": "Artist",
	"Parameters": [
		{
			"Class": "WFFilterParameter",
			"Key": "WFContentItemFilter",
			"Label": "Filter",
			"ContentItemClass": "WFMPMediaContentItem"
		},
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemSortProperty",
			"Label": "Sort by",
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
				"Album",
				"Random"
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemSortOrder",
			"Label": "Order",
			"Items": [
				"Oldest First",
				"Newest First",
				"A to Z",
				"Z to A"
			],
			"RequiredResources": [
				{
					"WFParameterKey": "WFContentItemSortProperty",
					"WFParameterValues": [
						"Random"
					],
					"WFResourceClass": "WFParameterRelationResource",
					"WFParameterRelation": "!="
				}
			]
		},
		{
			"Class": "WFSwitchParameter",
			"Key": "WFContentItemLimitEnabled",
			"Label": "Limit"
		},
		{
			"Class": "WFStepperParameter",
			"Key": "WFContentItemLimitNumber",
			"Label": "Get Items",
			"RequiredResources": [
				{
					"WFParameterKey": "WFSwitchParameter",
					"WFParameterValues": [
						true
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	]
}
```
