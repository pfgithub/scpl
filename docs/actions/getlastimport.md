
## Get Last Import / GetLastImport (internally `is.workflow.actions.getlatestphotoimport`)

> This action requires that Shortcuts has permission to use WFPhotoAccessResource.


## description

### summary

Gets the most recent photo import from the Photos app.


### usage
```
GetLastImport 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFGetLatestPhotoImportAction",
	"ActionKeywords": [
		"camera",
		"roll",
		"picture",
		"photo",
		"import",
		"camera",
		"sd",
		"card",
		"usb"
	],
	"AppIdentifier": "com.apple.mobileslideshow",
	"Category": "Photos & Video",
	"CreationDate": "2018-09-28T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets the most recent photo import from the Photos app."
	},
	"Name": "Get Last Import",
	"Output": {
		"Multiple": true,
		"OutputName": "Imported Photos",
		"Types": [
			"PHAsset"
		]
	},
	"ParameterSummary": "Get last import",
	"Parameters": [],
	"RequiredResources": [
		"WFPhotoAccessResource"
	],
	"Subcategory": "Photos"
}
```
