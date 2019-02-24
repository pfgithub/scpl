
## Get Latest Live Photos / getlatestlivephotos (internally `is.workflow.actions.getlatestlivephotos`)


> This action requires that Shortcuts has permission to use WFPhotoAccessResource.


## description
### summary
Gets the most recent Live Photos from the camera roll.


### usage
`getlatestlivephotos wfgetlatestphotocount=[string integer]`

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

### source json

```json
{
	"ActionClass": "WFGetLatestPhotosAction",
	"ActionKeywords": [
		"camera",
		"roll",
		"picture",
		"photo",
		"animated"
	],
	"Category": "Photos & Video",
	"CreationDate": "2015-12-08T08:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets the most recent Live Photos from the camera roll."
	},
	"IconName": "LivePhotos.png",
	"Name": "Get Latest Live Photos",
	"Output": {
		"Multiple": true,
		"OutputName": "Latest Live Photos",
		"Types": [
			"PHAsset"
		]
	},
	"Parameters": [
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFGetLatestPhotoCount",
			"StepperDescription": "Number of Live Photos",
			"StepperNoun": "Live Photo",
			"StepperPluralNoun": "Live Photos"
		}
	],
	"RequiredResources": [
		"WFPhotoAccessResource"
	],
	"ShortName": "Get Live Photos",
	"Subcategory": "Photos",
	"WFGetLatestPhotosActionType": "Live Photo"
}
```
