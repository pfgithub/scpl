
## Request Payment / RequestPayment (internally `is.workflow.actions.venmo.request`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Requests a payment from the specified people using a payment app on your device.


### usage
```
RequestPayment app=("string" | variable)] undefined=NotImplemented amount=number openinApp=(true | false | variable) showWhenRun=(true | false | variable) note="string"
```

### arguments

---

### app: Intent App Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Default Value**: ```
		com.apple.PassKit.PassKitIntentsExtension
		```


		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

#### This paramtype is not implemented. WFContactHandleFieldParameter

---

### amount: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### openinApp: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### showWhenRun: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true

**Only enabled if**: argument WFVenmoActionAppSwitch == `false`

Accepts a boolean
or a variable.

---

### note: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Note"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Allows newlines.

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
		"DescriptionSummary": "Requests a payment from the specified people using a payment app on your device."
	},
	"InputPassthrough": true,
	"IntentIdentifier": "sirikit.intent.payments.RequestPaymentIntent",
	"Name": "Request Payment",
	"ParameterSummary": "Request $${WFVenmoActionAmount} from ${WFVenmoActionRecipients}",
	"Parameters": [
		{
			"Class": "WFIntentAppPickerParameter",
			"DefaultValue": "com.apple.PassKit.PassKitIntentsExtension",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"IntentName": "INRequestPaymentIntent",
			"Key": "IntentAppIdentifier",
			"Label": "App"
		},
		{
			"AllowsMultipleValues": true,
			"Class": "WFContactHandleFieldParameter",
			"IntentSlotName": "payer",
			"Key": "WFVenmoActionRecipients",
			"Label": "Recipients",
			"Placeholder": "Contact"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"IntentSlotName": "currencyAmount",
			"Key": "WFVenmoActionAmount",
			"Label": "Amount",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Key": "WFVenmoActionAppSwitch",
			"Label": "Open in App"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "ShowWhenRun",
			"Label": "Show When Run",
			"RequiredResources": [
				{
					"WFParameterKey": "WFVenmoActionAppSwitch",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
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
		{
			"RequiredResources": [
				{
					"WFParameterKey": "ShowWhenRun",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFRequestPaymentAccessResource"
		}
	],
	"Subcategory": "Payments"
}
```
