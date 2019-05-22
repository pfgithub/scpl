
## Get Frames from Image / GetFramesfromImage (internally `is.workflow.actions.getframesfromimage`)


## description

### summary

Splits an animated GIF or a photo burst into individual frames.


### input

An animated GIF or photo burst


### output

The frames

### usage
```
GetFramesfromImage 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFGetFramesFromImageAction",
	"ActionKeywords": [
		"animated",
		"gif",
		"burst",
		"split",
		"individual",
		"explode",
		"separate"
	],
	"Category": "Photos & Video",
	"CreationDate": "2015-12-08T08:00:00.000Z",
	"Description": {
		"DescriptionInput": "An animated GIF or photo burst",
		"DescriptionResult": "The frames",
		"DescriptionSummary": "Splits an animated GIF or a photo burst into individual frames."
	},
	"IconName": "GIF.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"com.compuserve.gif"
		]
	},
	"InputPassthrough": false,
	"Name": "Get Frames from Image",
	"Output": {
		"Multiple": true,
		"OutputName": "Frames from Image",
		"Types": [
			"WFImageContentItem",
			"WFPhotoMediaContentItem"
		]
	},
	"ShortName": "Get Frames",
	"Subcategory": "GIFs"
}
```
