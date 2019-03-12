
## Save to Photo Album / savetophotoalbum (internally `is.workflow.actions.savetocameraroll`)

> This action requires that Shortcuts has permission to use WFPhotoAccessResource.


## description

### summary

Adds the photos and videos passed as input to the specified photo album.


### note

If a photo passed as input is already in the specified album, the photo will be duplicated.


### input

Photos, videos, or audio to save


### output

The saved items

### usage
```
savetophotoalbum album=("string" | variable)]
```

### arguments

---

### album: Photo Album Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### source json (for developers)

```json
{
	"ActionClass": "WFSaveToCameraRollAction",
	"ActionKeywords": [
		"save",
		"photo",
		"photos",
		"picture",
		"image",
		"camera",
		"roll"
	],
	"AppIdentifier": "com.apple.mobileslideshow",
	"Category": "Photos & Video",
	"Description": {
		"DescriptionInput": "Photos, videos, or audio to save",
		"DescriptionNote": "If a photo passed as input is already in the specified album, the photo will be duplicated.",
		"DescriptionResult": "The saved items",
		"DescriptionSummary": "Adds the photos and videos passed as input to the specified photo album."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFPhotoMediaContentItem",
			"UIImage",
			"AVAsset"
		]
	},
	"InputPassthrough": false,
	"LastModifiedDate": "2015-02-03T08:00:00.000Z",
	"Name": "Save to Photo Album",
	"Output": {
		"Multiple": true,
		"OutputName": "Saved Photo Media",
		"Types": [
			"PHAsset"
		]
	},
	"Parameters": [
		{
			"AlwaysShowsButton": true,
			"Class": "WFPhotoAlbumPickerParameter",
			"Key": "WFCameraRollSelectedGroup",
			"Label": "Album"
		}
	],
	"RequiredResources": [
		"WFPhotoAccessResource"
	],
	"ShortName": "Save to Photos",
	"Subcategory": "Camera"
}
```
