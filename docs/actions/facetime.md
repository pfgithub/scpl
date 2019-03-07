
## FaceTime / facetime (internally `com.apple.facetime.facetime`)

> This action requires that Shortcuts has permission to use WFContactAccessResource.


## description

### summary

Calls the contact passed in as input using FaceTime.


### usage
```
facetime app=("string" | variable)] calltype=("Video" | "Audio")
```

### arguments

---

### app: Intent App Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Default Value**: ```
		com.apple.TelephonyUtilities.PhoneIntentHandler
		```
**Allows Variables**: true

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### calltype: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Video"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Video`
- `Audio`

---

### source json (for developers)

```json
{
	"ActionClass": "WFStartCallAction",
	"ActionKeywords": [
		"phone",
		"number",
		"call"
	],
	"AppIdentifier": "com.apple.facetime",
	"Category": "Contacts",
	"Description": {
		"DescriptionSummary": "Calls the contact passed in as input using FaceTime."
	},
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"WFPhoneNumber",
			"WFEmailAddress",
			"NSString"
		]
	},
	"InputPassthrough": true,
	"LastModifiedDate": "2018-10-09T05:00:00.000Z",
	"Name": "FaceTime",
	"Parameters": [
		{
			"Class": "WFIntentAppPickerParameter",
			"DefaultValue": "com.apple.TelephonyUtilities.PhoneIntentHandler",
			"Hidden": true,
			"IntentName": "INStartAudioCallIntent",
			"Key": "IntentAppIdentifier",
			"Label": "App"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Video",
			"Items": [
				"Video",
				"Audio"
			],
			"Key": "WFFaceTimeType",
			"Label": "Call Type"
		}
	],
	"RequiredResources": [
		"WFContactAccessResource"
	],
	"Subcategory": "Phone",
	"WFStartCallActionType": "FaceTime"
}
```
