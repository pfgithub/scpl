
## Call / Call (internally `com.apple.mobilephone.call`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFStartCallAccessResource.


## description

### summary

Calls the phone number passed in as input.


### usage
```
Call app=("string" | variable)] undefined=NotImplemented
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
		"ParameterKey": "WFCallContact",
		"Required": true,
		"Types": [
			"WFPhoneNumber",
			"NSString"
		]
	},
	"InputPassthrough": true,
	"IntentIdentifier": "sirikit.intent.call.StartCallIntent",
	"LastModifiedDate": "2018-10-09T05:00:00.000Z",
	"Name": "Call",
	"ParameterSummary": "Call ${WFCallContact}",
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
			"Class": "WFContactFieldParameter",
			"IntentSlotName": "contacts",
			"Key": "WFCallContact",
			"Label": "Contact"
		}
	],
	"RequiredResources": [
		"WFStartCallAccessResource"
	],
	"Subcategory": "Phone",
	"WFStartCallActionType": "Phone"
}
```
