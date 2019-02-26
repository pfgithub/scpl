
## Find Photos / findphotos (internally `is.workflow.actions.filter.photos`)

> This action requires that Shortcuts has permission to use WFPhotoAccessResource.



### usage
```
findphotos a{}
```

### arguments

---



---

### source json

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
	"WFContentItemDefaultProperty": "Album"
}
```
