
## Get Latest Screenshots / getlatestscreenshots (internally `is.workflow.actions.getlastscreenshot`)

> This action requires that Shortcuts has permission to use WFPhotoAccessResource.


## description

### summary

Gets the most recent screenshots from the camera roll.


### usage
```
getlatestscreenshots wfgetlatestphotocount=number
```

### arguments

---

### wfgetlatestphotocount: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
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
		"camera",
		"roll",
		"picture",
		"photo",
		"screen"
	],
	"AppIdentifier": "com.apple.mobileslideshow",
	"Category": "Photos & Video",
	"Description": {
		"DescriptionSummary": "Gets the most recent screenshots from the camera roll."
	},
	"Name": "Get Latest Screenshots",
	"Output": {
		"Multiple": true,
		"OutputName": "Latest Screenshots",
		"Types": [
			"PHAsset"
		]
	},
	"Parameters": [
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFGetLatestPhotoCount",
			"StepperDescription": "Number of Screenshots",
			"StepperNoun": "Screenshot",
			"StepperPluralNoun": "Screenshots"
		}
	],
	"RequiredResources": [
		"WFPhotoAccessResource"
	],
	"ShortName": "Get Screenshots",
	"Subcategory": "Photos",
	"WFGetLatestPhotosActionType": "Screenshot"
}
```
