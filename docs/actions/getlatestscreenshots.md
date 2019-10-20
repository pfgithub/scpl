
## Get Latest Screenshots / GetLatestScreenshots (internally `is.workflow.actions.getlastscreenshot`)

> This action requires that Shortcuts has permission to use WFPhotoAccessResource.


## description

### summary

Gets the most recent screenshots from the photo library.


### usage
```
GetLatestScreenshots number
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
		"camera",
		"roll",
		"picture",
		"photo",
		"screen"
	],
	"AppIdentifier": "com.apple.mobileslideshow",
	"Category": "Media",
	"Description": {
		"DescriptionSummary": "Gets the most recent screenshots from the photo library."
	},
	"Name": "Get Latest Screenshots",
	"Output": {
		"Multiple": true,
		"OutputName": "Latest Screenshots",
		"Types": [
			"PHAsset"
		]
	},
	"ParameterSummary": "Get the latest ${WFGetLatestPhotoCount}",
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
