
## Find Photos / findphotos (internally `is.workflow.actions.filter.photos`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFPhotoAccessResource.



### usage
```
findphotos undefined=NotImplemented sortby=("File Size" | "Camera Make" | "Last Modified Date" | "File Extension" | "Media Type" | "Creation Date" | "Location" | "Album" | "Photo Type" | "Date Taken" | "Duration" | "Width" | "Time Taken" | "Is a Screenshot" | "Is Hidden" | "Frame Rate" | "Height" | "Camera Model" | "Is Favorite" | "Orientation" | "Metadata Dictionary" | "Name" | "Random") order=("Oldest First" | "Newest First") limit=(true | f alse | variable) getitems=number
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

---

### limit: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### getitems: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Allows Variables**: true



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
				"Newest First"
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
			"Label": "Get Items"
		}
	]
}
```
