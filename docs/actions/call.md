
## Call / call (internally `com.apple.mobilephone.call`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFContactAccessResource.


## description

### summary

Calls the phone number passed in as input.


### usage
```
call undefined=NotImplemented
```

### arguments

---

#### This paramtype is not implemented. WFIntentAppPickerParameter

---

### source json (for developers)

```json
{
	"ActionClass": "WFStartCallAction",
	"ActionKeywords": [
		"phone",
		"number",
		"dial",
		"mobile",
		"telephone"
	],
	"AppIdentifier": "com.apple.mobilephone",
	"Category": "Contacts",
	"Description": {
		"DescriptionSummary": "Calls the phone number passed in as input."
	},
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"WFPhoneNumber",
			"NSString"
		]
	},
	"InputPassthrough": true,
	"LastModifiedDate": "2018-10-09T05:00:00.000Z",
	"Name": "Call",
	"Parameters": [
		{
			"Class": "WFIntentAppPickerParameter",
			"DefaultValue": "com.apple.TelephonyUtilities.PhoneIntentHandler",
			"Hidden": true,
			"IntentName": "INStartAudioCallIntent",
			"Key": "IntentAppIdentifier",
			"Label": "App"
		}
	],
	"RequiredResources": [
		"WFContactAccessResource"
	],
	"Subcategory": "Phone",
	"WFStartCallActionType": "Phone"
}
```
