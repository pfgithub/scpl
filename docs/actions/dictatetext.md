
## Dictate Text / dictatetext (internally `is.workflow.actions.dictatetext`)

> This action requires that Shortcuts has permission to use [object Object],WFUserInteractionResource,WFSpeechRecognitionAccessResource,WFMicrophoneAccessResource.


## description

### summary

Transcribes what you say aloud into text and passes the result to the next action.


### usage
```
dictatetext language=("string" | variable)] stoplistening=("After Pause" | "After Short Pause" | "On Tap")
```

### arguments

---

### language: Language Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### stoplistening: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"After Pause"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `After Pause`
- `After Short Pause`
- `On Tap`

---

### source json (for developers)

```json
{
	"ActionClass": "WFDictateTextAction",
	"ActionKeywords": [
		"speech",
		"detection",
		"dictation",
		"speak",
		"say",
		"voice",
		"recognize",
		"microphone",
		"transcribe",
		"transcription",
		"siri"
	],
	"Category": "Text",
	"CreationDate": "2016-09-09T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Transcribes what you say aloud into text and passes the result to the next action."
	},
	"IconName": "Dictation.png",
	"Name": "Dictate Text",
	"Output": {
		"Multiple": false,
		"OutputName": "Dictated Text",
		"Types": [
			"NSString"
		]
	},
	"Parameters": [
		{
			"Class": "WFDictateTextLanguagePickerParameter",
			"Items": [],
			"Key": "WFSpeechLanguage",
			"Label": "Language"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "After Pause",
			"Items": [
				"After Pause",
				"After Short Pause",
				"On Tap"
			],
			"Key": "WFDictateTextStopListening",
			"Label": "Stop Listening"
		}
	],
	"RequiredResources": [
		{
			"WFDeviceAttributes": {
				"WFDeviceAttributeSystemVersion": {
					"WFSystemVersion": "10.0",
					"WFSystemVersionRelation": ">="
				}
			},
			"WFResourceClass": "WFDeviceAttributesResource"
		},
		"WFUserInteractionResource",
		"WFSpeechRecognitionAccessResource",
		"WFMicrophoneAccessResource"
	],
	"RunningUIComponentClass": "WFDictateTextActionComponent",
	"UserInterfaces": [
		"UIKit",
		"UIKitWidget"
	]
}
```
