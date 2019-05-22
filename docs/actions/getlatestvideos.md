
## Get Latest Videos / GetLatestVideos (internally `is.workflow.actions.getlastvideo`)

> This action requires that Shortcuts has permission to use WFPhotoAccessResource.


## description

### summary

Gets the most recent videos from the camera roll.


### usage
```
GetLatestVideos number
```

### arguments

---

### WFGetLatestPhotoCount: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**: `1`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetLatestPhotosAction",
	"ActionKeywords": [
		"video",
		"camera",
		"roll",
		"movie"
	],
	"AppIdentifier": "com.apple.mobileslideshow",
	"Category": "Photos & Video",
	"Description": {
		"DescriptionSummary": "Gets the most recent videos from the camera roll."
	},
	"Name": "Get Latest Videos",
	"Output": {
		"Multiple": true,
		"OutputName": "Latest Videos",
		"Types": [
			"PHAsset"
		]
	},
	"Parameters": [
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFGetLatestPhotoCount",
			"StepperDescription": "Number of Videos",
			"StepperNoun": "Video",
			"StepperPluralNoun": "Videos"
		}
	],
	"RequiredResources": [
		"WFPhotoAccessResource"
	],
	"ShortName": "Get Videos",
	"Subcategory": "Video",
	"WFGetLatestPhotosActionType": "Video"
}
```
