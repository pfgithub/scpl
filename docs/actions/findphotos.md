
## Find Photos / FindPhotos (internally `is.workflow.actions.filter.photos`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFPhotoAccessResource.



### usage
```
FindPhotos filter=:filter{...} sortby=("File Size" | "Camera Make" | "Last Modified Date" | "File Extension" | "Media Type" | "Creation Date" | "Location" | "Album" | "Photo Type" | "Date Taken" | "Duration" | "Width" | "Time Taken" | "Is a Screenshot" | "Is Hidden" | "Frame Rate" | "Height" | "Camera Model" | "Is Favorite" | "Orientation" | "Metadata Dictionary" | "Name" | "Random") order=("Oldest First" | "Newest First" | "Latest First" | "Smallest First" | "Biggest First" | "Ascending" | "Descending" | "Shortest First" | "Longest First" | "A to Z" | "Z to A") limit=(true | false | variable) getItems=number
```

### arguments

---

### filter: Filter [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#filter-field)


Accepts a :filter{} of filters. This filter supports:

- 
- 
- ~~lastmodifieddate~~ (Not yet supported, no comparison methods defined. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20%3Afilter%20support%20for%20WFDateContentItem))
- fileextension (Supported for is, isnot, contains, doesnotcontain, beginswith, endswith)
- mediatype (Supported for is, isnot) (Must be one of: `Image`, `Video`, `Audio)`
- ~~creationdate~~ (Not yet supported, no comparison methods defined. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20%3Afilter%20support%20for%20WFDateContentItem))
- 
- album (Supported for is, isnot, contains, doesnotcontain, beginswith, endswith)
- phototype (Supported for is, isnot) (Must be one of: `HDR`, `Panorama`, `Burst`, `Live Photo)`
- ~~datetaken~~ (Not yet supported, no comparison methods defined. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20%3Afilter%20support%20for%20WFDateContentItem))
- ~~duration~~ (Not yet supported, no comparison methods defined. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20%3Afilter%20support%20for%20WFTimeLengthContentItem))
- ~~width~~ (Not yet supported, no comparison methods defined. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20%3Afilter%20support%20for%20WFNumberContentItem))
- ~~timetaken~~ (Not yet supported, no comparison methods defined. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20%3Afilter%20support%20for%20WFTimeContentItem))
- isascreenshot (Supported for is)
- ishidden (Supported for is)
- ~~framerate~~ (Not yet supported, no comparison methods defined. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20%3Afilter%20support%20for%20WFNumberContentItem))
- ~~height~~ (Not yet supported, no comparison methods defined. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20%3Afilter%20support%20for%20WFNumberContentItem))
- 
- isfavorite (Supported for is)
- orientation (Supported for is, isnot) (Must be one of: `Up`, `Down`, `Left`, `Right`, `Up Mirrored`, `Down Mirrored`, `Left Mirrored`, `Right Mirrored)`
- 
- name (Supported for is, isnot, contains, doesnotcontain, beginswith, endswith).
			
Example: `:filter{name is testname}`

---

### sortby: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `File Size`
- `Camera Make`
- `Last Modified Date`
- `File Extension`
- `Media Type`
- `Creation Date`
- `Location`
- `Album`
- `Photo Type`
- `Date Taken`
- `Duration`
- `Width`
- `Time Taken`
- `Is a Screenshot`
- `Is Hidden`
- `Frame Rate`
- `Height`
- `Camera Model`
- `Is Favorite`
- `Orientation`
- `Metadata Dictionary`
- `Name`
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
	"AppIdentifier": "com.apple.mobileslideshow",
	"Category": "Photos & Video",
	"CreationDate": "2015-01-22T08:00:00.000Z",
	"Input": {
		"Types": [
			"WFPhotoMediaContentItem",
			"WFImageContentItem",
			"WFAVAssetContentItem",
			"WFGenericFileContentItem"
		]
	},
	"LastModifiedDate": "2015-12-14T08:00:00.000Z",
	"Name": "Find Photos",
	"RequiredResources": [
		"WFPhotoAccessResource"
	],
	"Subcategory": "Photos",
	"SuggestedAsInitialAction": false,
	"WFContentItemClass": "WFPhotoMediaContentItem",
	"WFContentItemDefaultProperty": "Album",
	"Parameters": [
		{
			"Class": "WFFilterParameter",
			"Key": "WFContentItemFilter",
			"Label": "Filter",
			"ContentItemClass": "WFPhotoMediaContentItem"
		},
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemSortProperty",
			"Label": "Sort by",
			"Items": [
				"File Size",
				"Camera Make",
				"Last Modified Date",
				"File Extension",
				"Media Type",
				"Creation Date",
				"Location",
				"Album",
				"Photo Type",
				"Date Taken",
				"Duration",
				"Width",
				"Time Taken",
				"Is a Screenshot",
				"Is Hidden",
				"Frame Rate",
				"Height",
				"Camera Model",
				"Is Favorite",
				"Orientation",
				"Metadata Dictionary",
				"Name",
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
