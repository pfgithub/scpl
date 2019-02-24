
## Get Latest Photos / getlatestphotos (internally `is.workflow.actions.getlastphoto`)


> This action requires that Shortcuts has permission to use WFPhotoAccessResource.


## description
### summary
Gets the most recent photos from the camera roll.


### usage
`getlatestphotos wfgetlatestphotocount=[string integer] includescreenshots=[string boolean|variable]`

### arguments
### Stepper Number: wfgetlatestphotocount / wfgetlatestphotocount (internally `WFGetLatestPhotoCount`)
**Default Value**:
```
1
```
**Allows Variables**: true



Accepts a string 
or variable
containing an integer value.

---

### Switch: Include Screenshots / includescreenshots (internally `WFGetLatestPhotosActionIncludeScreenshots`)
**Default Value**:
```
true
```
**Allows Variables**: true



Accepts a string with either true or false
or a variable.

### source json

```json
{
	"ActionClass": "WFGetLatestPhotosAction",
	"ActionKeywords": [
		"camera",
		"roll",
		"picture",
		"last"
	],
	"AppIdentifier": "com.apple.mobileslideshow",
	"Category": "Photos & Video",
	"Description": {
		"DescriptionSummary": "Gets the most recent photos from the camera roll."
	},
	"Name": "Get Latest Photos",
	"Output": {
		"Multiple": true,
		"OutputName": "Latest Photos",
		"Types": [
			"PHAsset"
		]
	},
	"Parameters": [
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFGetLatestPhotoCount",
			"StepperDescription": "Number of Photos",
			"StepperNoun": "Photo",
			"StepperPluralNoun": "Photos"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFGetLatestPhotosActionIncludeScreenshots",
			"Label": "Include Screenshots"
		}
	],
	"RequiredResources": [
		"WFPhotoAccessResource"
	],
	"ShortName": "Get Photos",
	"Subcategory": "Photos",
	"WFGetLatestPhotosActionType": "Photo"
}
```
