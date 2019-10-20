
## Find Music / FindMusic (internally `is.workflow.actions.filter.music`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource.



### usage
```
FindMusic filter=:filter{...} sortby=("Last Played Date" | "File Extension" | "Release Date" | "Genre" | "Media Kind" | "Name" | "Artist" | "Creation Date" | "Composer" | "Duration" | "Disc #" | "Last Modified Date" | "Date Added" | "Play Count" | "Album Artwork" | "Album Track #" | "Has Album Artwork" | "Rating" | "Is Explicit" | "Comments" | "Skip Count" | "File Size" | "Lyrics" | "Is Cloud Item" | "Album Artist" | "Album" | "Random") order=("Oldest First" | "Newest First" | "Latest First" | "Smallest First" | "Biggest First" | "Ascending" | "Descending" | "Shortest First" | "Longest First" | "A to Z" | "Z to A") limit=(true | false | variable) getItems=number
```

### arguments

---

### filter: Filter [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#filter-field)


Accepts a :filter{} of filters. This filter supports:

- ~~lastplayeddate~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Blastplayeddate%7D%20%28in%20WFMPMediaContentItem%29))
- ~~fileextension~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bfileextension%7D%20%28in%20WFMPMediaContentItem%29))
- ~~releasedate~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Breleasedate%7D%20%28in%20WFMPMediaContentItem%29))
- genre (Supported for is, isnot, contains, doesnotcontain, beginswith, endswith)
- mediakind (Supported for is, isnot) (Must be one of: `Movie`, `TV Show`, `Music`, `Podcast`, `Music Video`, `iTunes U`, `Audiobook)`
- name (Supported for is, isnot, contains, doesnotcontain, beginswith, endswith)
- artist (Supported for is, isnot, contains, doesnotcontain, beginswith, endswith)
- ~~creationdate~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bcreationdate%7D%20%28in%20WFMPMediaContentItem%29))
- ~~composer~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bcomposer%7D%20%28in%20WFMPMediaContentItem%29))
- ~~duration~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bduration%7D%20%28in%20WFMPMediaContentItem%29))
- ~~disc~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bdisc%7D%20%28in%20WFMPMediaContentItem%29))
- ~~lastmodifieddate~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Blastmodifieddate%7D%20%28in%20WFMPMediaContentItem%29))
- ~~dateadded~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bdateadded%7D%20%28in%20WFMPMediaContentItem%29))
- ~~playcount~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bplaycount%7D%20%28in%20WFMPMediaContentItem%29))
- ~~albumartwork~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Balbumartwork%7D%20%28in%20WFMPMediaContentItem%29))
- ~~albumtrack~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Balbumtrack%7D%20%28in%20WFMPMediaContentItem%29))
- hasalbumartwork (Supported for is)
- ~~rating~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Brating%7D%20%28in%20WFMPMediaContentItem%29))
- isexplicit (Supported for is)
- comments (Supported for is, isnot, contains, doesnotcontain, beginswith, endswith)
- ~~skipcount~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bskipcount%7D%20%28in%20WFMPMediaContentItem%29))
- ~~filesize~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bfilesize%7D%20%28in%20WFMPMediaContentItem%29))
- lyrics (Supported for is, isnot, contains, doesnotcontain, beginswith, endswith)
- isclouditem (Supported for is)
- albumartist (Supported for is, isnot, contains, doesnotcontain, beginswith, endswith)
- album (Supported for is, isnot, contains, doesnotcontain, beginswith, endswith).
			
Example: `:filter{name is testname}`

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
- `Latest First`
- `Smallest First`
- `Biggest First`
- `Ascending`
- `Descending`
- `Shortest First`
- `Longest First`
- `A to Z`
- `Z to A`

---

### limit: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### getItems: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
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
	"Attribution": "Music",
	"Category": "Media",
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
				"Latest First",
				"Smallest First",
				"Biggest First",
				"Ascending",
				"Descending",
				"Shortest First",
				"Longest First",
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
