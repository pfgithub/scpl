
## Send Payment / sendpayment (internally `is.workflow.actions.venmo.pay`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFContactAccessResource,[object Object].


## description

### summary

Sends a payment to the specified people using a payment app on your device.


### usage
```
sendpayment undefined=NotImplemented undefined=NotImplemented amount=number openinapp=(true | f alse | variable) note="string"
```

### arguments

---

#### This paramtype is not implemented. WFIntentAppPickerParameter

---

#### This paramtype is not implemented. WFContactHandleFieldParameter

---

### amount: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `7.00`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### openinapp: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### note: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Note"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json (for developers)

```json
{
	"ActionClass": "WFHandlePaymentIntentAction",
	"ActionKeywords": [
		"venmo",
		"money",
		"send",
		"pay",
		"request",
		"cash",
		"curency",
		"dollars"
	],
	"Category": "Contacts",
	"Description": {
		"DescriptionSummary": "Sends a payment to the specified people using a payment app on your device."
	},
	"InputPassthrough": true,
	"IntentIdentifier": "sirikit.intent.payments.SendPaymentIntent",
	"Name": "Send Payment",
	"Parameters": [
		{
			"Class": "WFIntentAppPickerParameter",
			"DefaultValue": "com.apple.PassKit.PassKitIntentsExtension",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"IntentName": "INSendPaymentIntent",
			"Key": "IntentAppIdentifier",
			"Label": "App"
		},
		{
			"Class": "WFContactHandleFieldParameter",
			"IntentSlotName": "payee",
			"Key": "WFVenmoActionRecipients",
			"Label": "Recipients",
			"Placeholder": "Phone or email"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"IntentSlotName": "currencyAmount",
			"Key": "WFVenmoActionAmount",
			"Label": "Amount",
			"Placeholder": "7.00",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Key": "WFVenmoActionAppSwitch",
			"Label": "Open in App"
		},
		{
			"Class": "WFTextInputParameter",
			"IntentSlotName": "note",
			"Key": "WFVenmoActionNote",
			"Label": "Note",
			"Multiline": true,
			"Placeholder": "Note"
		}
	],
	"RequiredResources": [
		"WFContactAccessResource",
		{
			"WFDeviceAttributes": {
				"WFDeviceAttributeSystemVersion": {
					"WFSystemVersion": "12.0",
					"WFSystemVersionRelation": ">="
				}
			},
			"WFResourceClass": "WFDeviceAttributesResource"
		}
	],
	"Subcategory": "Payments"
}
```
