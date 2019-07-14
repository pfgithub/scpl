
## Filter Images / FilterImages (internally `is.workflow.actions.filter.images`)



### usage
```
FilterImages filter=:filter{...} sortby=("Width" | "Time Taken" | "Is a Screenshot" | "Media Type" | "Height" | "Location" | "Orientation" | "Date Taken" | "Duration" | "Camera Make" | "Is Hidden" | "Frame Rate" | "File Extension" | "Camera Model" | "Is Favorite" | "Creation Date" | "Album" | "Metadata Dictionary" | "File Size" | "Photo Type" | "Last Modified Date" | "Name" | "Random") order=("Oldest First" | "Newest First" | "Latest First" | "Smallest First" | "Biggest First" | "Ascending" | "Descending" | "Shortest First" | "Longest First" | "A to Z" | "Z to A") limit=(true | false | variable) getItems=number
```

### arguments

---

### filter: Filter [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#filter-field)


Accepts a :filter{} of filters. This filter supports:

- ~~width~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bwidth%7D%20%28in%20WFImageContentItem%29))
- ~~timetaken~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Btimetaken%7D%20%28in%20WFImageContentItem%29))
- isascreenshot (Supported for is)
- ~~mediatype~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bmediatype%7D%20%28in%20WFImageContentItem%29))
- ~~height~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bheight%7D%20%28in%20WFImageContentItem%29))
- ~~location~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Blocation%7D%20%28in%20WFImageContentItem%29))
- ~~orientation~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Borientation%7D%20%28in%20WFImageContentItem%29))
- ~~datetaken~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bdatetaken%7D%20%28in%20WFImageContentItem%29))
- ~~duration~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bduration%7D%20%28in%20WFImageContentItem%29))
- ~~cameramake~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bcameramake%7D%20%28in%20WFImageContentItem%29))
- ishidden (Supported for is)
- ~~framerate~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bframerate%7D%20%28in%20WFImageContentItem%29))
- ~~fileextension~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bfileextension%7D%20%28in%20WFImageContentItem%29))
- ~~cameramodel~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bcameramodel%7D%20%28in%20WFImageContentItem%29))
- isfavorite (Supported for is)
- ~~creationdate~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bcreationdate%7D%20%28in%20WFImageContentItem%29))
- ~~album~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Balbum%7D%20%28in%20WFImageContentItem%29))
- ~~metadatadictionary~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bmetadatadictionary%7D%20%28in%20WFImageContentItem%29))
- ~~filesize~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bfilesize%7D%20%28in%20WFImageContentItem%29))
- ~~phototype~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bphototype%7D%20%28in%20WFImageContentItem%29))
- ~~lastmodifieddate~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Blastmodifieddate%7D%20%28in%20WFImageContentItem%29))
- name (Supported for is, isnot, contains, doesnotcontain, beginswith, endswith).
			
Example: `:filter{name is testname}`

---

### sortby: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Width`
- `Time Taken`
- `Is a Screenshot`
- `Media Type`
- `Height`
- `Location`
- `Orientation`
- `Date Taken`
- `Duration`
- `Camera Make`
- `Is Hidden`
- `Frame Rate`
- `File Extension`
- `Camera Model`
- `Is Favorite`
- `Creation Date`
- `Album`
- `Metadata Dictionary`
- `File Size`
- `Photo Type`
- `Last Modified Date`
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
	"Category": "Photos & Video",
	"CreationDate": "2015-01-22T08:00:00.000Z",
	"IconName": "Image.png",
	"Input": {
		"Types": [
			"WFPhotoMediaContentItem",
			"WFImageContentItem",
			"WFAVAssetContentItem"
		]
	},
	"Name": "Filter Images",
	"ResidentCompatible": true,
	"Subcategory": "Images",
	"WFContentItemClass": "WFImageContentItem",
	"Parameters": [
		{
			"Class": "WFFilterParameter",
			"Key": "WFContentItemFilter",
			"Label": "Filter",
			"ContentItemClass": "WFImageContentItem"
		},
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemSortProperty",
			"Label": "Sort by",
			"Items": [
				"Width",
				"Time Taken",
				"Is a Screenshot",
				"Media Type",
				"Height",
				"Location",
				"Orientation",
				"Date Taken",
				"Duration",
				"Camera Make",
				"Is Hidden",
				"Frame Rate",
				"File Extension",
				"Camera Model",
				"Is Favorite",
				"Creation Date",
				"Album",
				"Metadata Dictionary",
				"File Size",
				"Photo Type",
				"Last Modified Date",
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
