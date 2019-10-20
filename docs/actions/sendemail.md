
## Send Email / SendEmail (internally `is.workflow.actions.sendemail`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use [object Object],[object Object].


## description

### summary

Presents an email composer. Pass text into the action to set the email body. Other types of input are added as attachments.


### usage
```
SendEmail showComposeSheet=(true | false | variable) undefined=NotImplemented from="string" to=("string" | [list, of, strings] | variable) cc=("string" | [list, of, strings] | variable) bcc=("string" | [list, of, strings] | variable) subject="string" message="string" saveasDraft=(true | false | variable)
```

### arguments

---

### showComposeSheet: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

#### This parameter is not implemented yet.

The parameter type is WFCustomIntentDynamicEnumerationParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### from: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true

**Only enabled if**: argument WFSendEmailActionShowComposeSheet == `true`

**Only enabled if**: Device attributes match `{"WFDeviceAttributeSystemVersion":{"WFSystemVersion":"11.0","WFSystemVersionRelation":">="}}` This action is always enabled inside Shortcutslang.

Accepts a string 
or text
with the text. Does not allow newlines.

---

### to: Email [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Placeholder**: ```
		Recipients
		```
**Allows Variables**: true



Accepts a string or string array or variable of email addresses.

---

### cc: Email [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Placeholder**: ```
		Email addresses
		```
**Allows Variables**: true



Accepts a string or string array or variable of email addresses.

---

### bcc: Email [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Placeholder**: ```
		Email addresses
		```
**Allows Variables**: true



Accepts a string or string array or variable of email addresses.

---

### subject: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Subject"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### message: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Message"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### saveasDraft: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Placeholder**: ```
		Save as Draft
		```
**Allows Variables**: true

**Only enabled if**: argument WFSendEmailActionShowComposeSheet == `false`

Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFSendEmailAction",
	"ActionKeywords": [
		"email",
		"e-mail",
		"mail",
		"send",
		"gmail",
		"yahoo",
		"hotmail",
		"icloud",
		"aol"
	],
	"AppIdentifier": "com.apple.mobilemail",
	"Category": "Sharing",
	"Description": {
		"DescriptionSummary": "Presents an email composer. Pass text into the action to set the email body. Other types of input are added as attachments."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFSendEmailActionInputAttachments",
		"Required": false,
		"Types": [
			"NSString",
			"WFContentItem"
		]
	},
	"InputPassthrough": true,
	"IntentIdentifier": "sirikit.intents.custom.com.apple.mobilemail.MSSendMailIntent",
	"LastModifiedDate": "2015-11-24T06:00:00.000Z",
	"Name": "Send Email",
	"ParameterSummary": "Send ${WFSendEmailActionInputAttachments} to ${WFSendEmailActionToRecipients} as ${WFSendEmailActionSubject}",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFSendEmailActionShowComposeSheet",
			"Label": "Show Compose Sheet"
		},
		{
			"Class": "WFCustomIntentDynamicEnumerationParameter",
			"IntentSlotName": "sender",
			"Key": "WFEmailAccountActionSelectedAccount",
			"Label": "From",
			"RequiredResources": [
				{
					"WFParameterKey": "WFSendEmailActionShowComposeSheet",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"Description": "The email address to send from. This must be an email address that is set up in the Mail app.",
			"DisableAutocorrection": true,
			"Key": "WFSendEmailActionFrom",
			"KeyboardType": "EmailAddress",
			"Label": "From",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFSendEmailActionShowComposeSheet",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFDeviceAttributes": {
						"WFDeviceAttributeSystemVersion": {
							"WFSystemVersion": "11.0",
							"WFSystemVersionRelation": ">="
						}
					},
					"WFResourceClass": "WFDeviceAttributesResource"
				}
			],
			"TextContentType": "EmailAddress"
		},
		{
			"AllowsMultipleValues": true,
			"Class": "WFEmailAddressFieldParameter",
			"IntentSlotName": "to",
			"Key": "WFSendEmailActionToRecipients",
			"Label": "To",
			"Placeholder": "Recipients"
		},
		{
			"AllowsMultipleValues": true,
			"Class": "WFEmailAddressFieldParameter",
			"IntentSlotName": "cc",
			"Key": "WFSendEmailActionCcRecipients",
			"Label": "Cc",
			"Placeholder": "Email addresses"
		},
		{
			"AllowsMultipleValues": true,
			"Class": "WFEmailAddressFieldParameter",
			"IntentSlotName": "bcc",
			"Key": "WFSendEmailActionBccRecipients",
			"Label": "Bcc",
			"Placeholder": "Email addresses"
		},
		{
			"Class": "WFTextInputParameter",
			"IntentSlotName": "subject",
			"Key": "WFSendEmailActionSubject",
			"Label": "Subject",
			"Placeholder": "Subject"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFSendEmailActionInputAttachments",
			"Label": "Message",
			"Placeholder": "Message",
			"ProcessIntoContentItems": true
		},
		{
			"Class": "WFSwitchParameter",
			"IntentSlotName": "isDraft",
			"Key": "WFSendEmailActionSaveAsDraft",
			"Label": "Save as Draft",
			"Placeholder": "Save as Draft",
			"RequiredResources": [
				{
					"WFParameterKey": "WFSendEmailActionShowComposeSheet",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"RequiredResources": [
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFSendEmailActionShowComposeSheet",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFUserInteractionResource"
		},
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFSendEmailActionShowComposeSheet",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFSendEmailAccessResource"
		}
	],
	"Subcategory": "Messaging",
	"SuggestedAsInitialAction": true,
	"UserInterfaces": [
		"UIKit",
		"WatchKit",
		"UIKitWidget"
	]
}
```
