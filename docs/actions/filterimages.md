
## Filter Images / filterimages (internally `is.workflow.actions.filter.images`)

> This action is not yet complete. Some arguments may be missing.



### usage
```
filterimages undefined=NotImplemented sortby=("Width" | "Time Taken" | "Is a Screenshot" | "Media Type" | "Height" | "Location" | "Orientation" | "Date Taken" | "Duration" | "Camera Make" | "Is Hidden" | "Frame Rate" | "File Extension" | "Camera Model" | "Is Favorite" | "Creation Date" | "Album" | "Metadata Dictionary" | "File Size" | "Photo Type" | "Last Modified Date" | "Name" | "Random") order=("Oldest First" | "Newest First" | "A to Z" | "Z to A") limit=(true | f alse | variable) getitems=number
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
