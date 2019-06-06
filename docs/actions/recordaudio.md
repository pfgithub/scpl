
## Record Audio / RecordAudio (internally `is.workflow.actions.recordaudio`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFUserInteractionResource,WFMicrophoneAccessResource.


## description

### summary

Uses the microphone to record audio.


### usage
```
RecordAudio audioQuality=("Normal" | "Very High") startRecording=("On Tap" | "Immediately") finishRecording=("On Tap" | "After Time") undefined=NotImplemented
```

### arguments

---

### audioQuality: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Normal"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Normal`
- `Very High`

---

### startRecording: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"On Tap"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `On Tap`
- `Immediately`

---

### finishRecording: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"On Tap"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `On Tap`
- `After Time`

---

#### This paramtype is not implemented. WFTimeIntervalParameter

---

### source json (for developers)

```json
{
	"ActionClass": "WFRecordAudioAction",
	"ActionKeywords": [
		"camera",
		"clip",
		"record"
	],
	"Category": "Photos & Video",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Uses the microphone to record audio."
	},
	"IconName": "Microphone.png",
	"InputPassthrough": false,
	"LastModifiedDate": "2015-05-12T07:00:00.000Z",
	"Name": "Record Audio",
	"Output": {
		"Multiple": false,
		"OutputName": "Recorded Audio",
		"Types": [
			"com.apple.m4a-audio"
		]
	},
	"ParameterSummary": "Record audio",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Normal",
			"Description": "High-quality audio takes up a lot more space than normal audio, so stick with normal unless you really need it. Normal audio is returned as an M4A file (with AAC audio), while high-quality audio is returned in uncompressed WAV format.",
			"Items": [
				"Normal",
				"Very High"
			],
			"Key": "WFRecordingCompression",
			"Label": "Audio Quality"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "On Tap",
			"Items": [
				"On Tap",
				"Immediately"
			],
			"Key": "WFRecordingStart",
			"Label": "Start Recording"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "On Tap",
			"Items": [
				"On Tap",
				"After Time"
			],
			"Key": "WFRecordingEnd",
			"Label": "Finish Recording"
		},
		{
			"Class": "WFTimeIntervalParameter",
			"Key": "WFRecordingTimeInterval",
			"Label": "Duration",
			"RequiredResources": [
				{
					"WFParameterKey": "WFRecordingEnd",
					"WFParameterValue": "After Time",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource",
		"WFMicrophoneAccessResource"
	],
	"Subcategory": "Audio",
	"UnsupportedEnvironments": [
		"Extension"
	],
	"UserInterfaces": [
		"UIKit",
		"WatchKit"
	]
}
```
