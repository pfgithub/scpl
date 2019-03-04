
## FaceTime / facetime (internally `com.apple.facetime.facetime`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFContactAccessResource.


## description

### summary

Calls the contact passed in as input using FaceTime.


### usage
```
facetime undefined=NotImplemented calltype=("Video" | "Audio")
```

### arguments

---

#### This paramtype is not implemented. WFIntentAppPickerParameter

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
