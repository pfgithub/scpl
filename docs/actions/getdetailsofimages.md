
## Get Details of Images / getdetailsofimages (internally `is.workflow.actions.properties.images`)



### usage
```
getdetailsofimages get=("Width" | "Time Taken" | "Is a Screenshot" | "Media Type" | "Height" | "Location" | "Orientation" | "Date Taken" | "Duration" | "Camera Make" | "Is Hidden" | "Frame Rate" | "File Extension" | "Camera Model" | "Is Favorite" | "Creation Date" | "Album" | "Metadata Dictionary" | "File Size" | "Photo Type" | "Last Modified Date")
```

### arguments

---

### get: Get Property [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
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

---

### source json (for developers)

```json
{
	"ActionClass": "WFContentItemPropertiesAction",
	"ActionKeywords": [
		"photo",
		"video",
		"media"
	],
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
	"LastModifiedDate": "2015-12-14T08:00:00.000Z",
	"Name": "Get Details of Images",
	"Subcategory": "Images",
	"WFContentItemClass": "WFImageContentItem"
}
```
