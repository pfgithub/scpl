
## Call / Call (internally `com.apple.mobilephone.call`)

> This action requires that Shortcuts has permission to use WFContactAccessResource.


## description

### summary

Calls the phone number passed in as input.


### usage
```
Call ("string" | variable)]
```

### arguments

---

### App: Intent App Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Default Value**: ```
		com.apple.TelephonyUtilities.PhoneIntentHandler
		```
**Allows Variables**: true

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

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
