
## Play Sound / playsound (internally `is.workflow.actions.playsound`)


## description

### summary

Plays the audio file passed as input, or a default notification sound if no audio file was passed.


### usage
```
playsound a{}
```

### arguments

---



---

### source json

```json
{
	"ActionClass": "WFPlaySoundAction",
	"ActionKeywords": [
		"notification",
		"audio",
		"music"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Plays the audio file passed as input, or a default notification sound if no audio file was passed."
	},
	"IconName": "Sound.png",
	"Input": {
		"Multiple": false,
		"Required": false,
		"Types": [
			"AVAsset"
		]
	},
	"InputPassthrough": true,
	"LastModifiedDate": "2015-11-24T06:00:00.000Z",
	"Name": "Play Sound",
	"Subcategory": "Notification",
	"UnsupportedEnvironments": [
		"Background"
	]
}
```
