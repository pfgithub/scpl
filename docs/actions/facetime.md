
## FaceTime / FaceTime (internally `com.apple.facetime.facetime`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFStartCallAccessResource.


## description

### summary

Calls the contact passed in as input using FaceTime.


### usage
```
FaceTime app=("string" | variable)] undefined=NotImplemented undefined=NotImplemented
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

#### This parameter is not implemented yet.

The parameter type is WFFaceTimeTypePickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

#### This parameter is not implemented yet.

The parameter type is WFContactFieldParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

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
		"ParameterKey": "WFFaceTimeContact",
		"Required": true,
		"Types": [
			"WFPhoneNumber",
			"WFEmailAddress",
			"NSString"
		]
	},
	"InputPassthrough": true,
	"IntentIdentifier": "sirikit.intent.call.StartCallIntent",
	"LastModifiedDate": "2018-10-09T05:00:00.000Z",
	"Name": "FaceTime",
	"ParameterSummary": "${WFFaceTimeType} Call ${WFFaceTimeContact}",
	"Parameters": [
		{
			"Class": "WFIntentAppPickerParameter",
			"DefaultValue": "com.apple.TelephonyUtilities.PhoneIntentHandler",
			"Hidden": true,
			"IntentName": "INStartCallIntent",
			"Key": "IntentAppIdentifier",
			"Label": "App"
		},
		{
			"Class": "WFFaceTimeTypePickerParameter",
			"DefaultValue": "Video",
			"Items": [
				"Video",
				"Audio"
			],
			"Key": "WFFaceTimeType",
			"Label": "Call Type"
		},
		{
			"AllowsMultipleValues": false,
			"Class": "WFContactFieldParameter",
			"Key": "WFFaceTimeContact",
			"Label": "Contact"
		}
	],
	"RequiredResources": [
		"WFStartCallAccessResource"
	],
	"Subcategory": "Phone",
	"WFStartCallActionType": "FaceTime"
}
```
