
## Send Payment / sendpayment (internally `is.workflow.actions.venmo.pay`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFContactAccessResource,[object Object].


## description
### summary
Sends a payment to the specified people using a payment app on your device.


### usage
`sendpayment undefined=[???] undefined=[???] amount=[string number] openinapp=[string boolean|variable] note=[string|text]`

### arguments
This paramtype is not implemented. WFIntentAppPickerParameter

---

This paramtype is not implemented. WFContactHandleFieldParameter

---

### Number: Amount / amount (internally `WFVenmoActionAmount`)
**Placeholder**: 7.00
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Switch: Open in App / openinapp (internally `WFVenmoActionAppSwitch`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Text Input: Note / note (internally `WFVenmoActionNote`)
**Placeholder**: Note
**Allows Variables**: true


Accepts a string 
or text
with the text.

### other info

<details><summary>source json</summary>
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
</details>
