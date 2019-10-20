
## Play Sound / PlaySound (internally `is.workflow.actions.playsound`)


## description

### summary

Plays the audio file passed as input, or a default notification sound if no audio file was passed.


### usage
```
PlaySound (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### soundFile: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Choose Variable
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

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
		"ParameterKey": "WFInput",
		"Required": false,
		"Types": [
			"AVAsset"
		]
	},
	"InputPassthrough": true,
	"LastModifiedDate": "2015-11-24T06:00:00.000Z",
	"Name": "Play Sound",
	"ParameterSummary": "Play sound",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Sound File",
			"Placeholder": "Choose Variable"
		}
	],
	"Subcategory": "Notification"
}
```
