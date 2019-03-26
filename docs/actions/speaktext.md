
## Speak Text / speaktext (internally `is.workflow.actions.speaktext`)


## description

### summary

Speaks the inputted text aloud.


### usage
```
speaktext waituntilfinished=(true | f alse | variable) rate=number pitch=number language=("string" | variable)] voice=("string" | variable)]
```

### arguments

---

### waituntilfinished: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### rate: Speak Text Rate [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#slider-number-fields)
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### pitch: Slider Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#slider-number-fields)
**Default Value**: `1`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### language: Speak Text Language Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Default Value**: ```
		Default
		```
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### voice: Speak Text Voice Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Default Value**: ```
		Default
		```
**Allows Variables**: true

**Only enabled if**: argument WFSpeakTextLanguage ?? ``

		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### source json (for developers)

```json
{
	"ActionClass": "WFSpeakTextAction",
	"ActionKeywords": [
		"speak",
		"dictate",
		"text",
		"say",
		"speech",
		"talk",
		"out",
		"loud"
	],
	"Category": "Text",
	"CreationDate": "2014-01-20T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Speaks the inputted text aloud."
	},
	"IconName": "Sound.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSString"
		]
	},
	"InputPassthrough": true,
	"LastModifiedDate": "2015-01-11T06:00:00.000Z",
	"Name": "Speak Text",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFSpeakTextWait",
			"Label": "Wait Until Finished"
		},
		{
			"Class": "WFSpeakTextRateParameter",
			"Key": "WFSpeakTextRate",
			"Label": "Rate"
		},
		{
			"Class": "WFSliderParameter",
			"DefaultValue": 1,
			"Key": "WFSpeakTextPitch",
			"Label": "Pitch",
			"MaximumValue": 2,
			"MinimumValue": 0.5
		},
		{
			"Class": "WFSpeakTextLanguagePickerParameter",
			"DefaultValue": "Default",
			"Key": "WFSpeakTextLanguage",
			"Label": "Language"
		},
		{
			"AlwaysShowsButton": true,
			"Class": "WFSpeakTextVoicePickerParameter",
			"DefaultValue": "Default",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFSpeakTextVoice",
			"Label": "Voice",
			"RequiredResources": [
				{
					"WFParameterKey": "WFSpeakTextLanguage",
					"WFParameterRelation": "??",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFSpeakTextLanguageKey": "WFSpeakTextLanguage"
		}
	]
}
```
