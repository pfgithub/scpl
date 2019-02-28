
## Send Email / sendemail (internally `is.workflow.actions.sendemail`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use [object Object],[object Object],[object Object].


## description

### summary

Presents an email composer. Pass text into the action to set the email body. Other types of input are added as attachments.


### usage
```
sendemail a{showcomposesheet=[string boolean|variable] undefined=[???] from=[string|text] to=[string|string array|variable] cc=[string|string array|variable] bcc=[string|string array|variable] subject=[string|text]}
```

### arguments

---

### Switch: Show Compose Sheet / showcomposesheet (internally `WFSendEmailActionShowComposeSheet`)
**Default Value**:
```
true
```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

#### This paramtype is not implemented. WFEmailAccountPickerParameter

---

### Text: From / from (internally `WFSendEmailActionFrom`)
**Placeholder**:
```
optional
```
**Allows Variables**: true

**Only enabled if**: argument WFSendEmailActionShowComposeSheet = `true`

**Only enabled if**: Device attributes match `{"WFDeviceAttributeSystemVersion":{"WFSystemVersion":"11.0","WFSystemVersionRelation":">="}}` This action is always enabled inside Shortcutslang.

Accepts a string 
or text
with the text.

---

### Text Input: To / to (internally `WFSendEmailActionToRecipients`)
**Placeholder**:
```
Email addresses
```
**Allows Variables**: true



Accepts a string or string array or variable of email addresses.

---

### Text Input: Cc / cc (internally `WFSendEmailActionCcRecipients`)
**Placeholder**:
```
Email addresses
```
**Allows Variables**: true



Accepts a string or string array or variable of email addresses.

---

### Text Input: Bcc / bcc (internally `WFSendEmailActionBccRecipients`)
**Placeholder**:
```
Email addresses
```
**Allows Variables**: true



Accepts a string or string array or variable of email addresses.

---

### Text: Subject / subject (internally `WFSendEmailActionSubject`)
**Placeholder**:
```
optional
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json

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
		"Required": false,
		"Types": [
			"NSString",
			"WFContentItem"
		]
	},
	"InputPassthrough": true,
	"LastModifiedDate": "2015-11-24T06:00:00.000Z",
	"Name": "Send Email",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFSendEmailActionShowComposeSheet",
			"Label": "Show Compose Sheet"
		},
		{
			"AlwaysShowsButton": true,
			"Class": "WFEmailAccountPickerParameter",
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
			"Class": "WFEmailAddressFieldParameter",
			"Key": "WFSendEmailActionToRecipients",
			"Label": "To",
			"Placeholder": "Email addresses"
		},
		{
			"Class": "WFEmailAddressFieldParameter",
			"Key": "WFSendEmailActionCcRecipients",
			"Label": "Cc",
			"Placeholder": "Email addresses"
		},
		{
			"Class": "WFEmailAddressFieldParameter",
			"Key": "WFSendEmailActionBccRecipients",
			"Label": "Bcc",
			"Placeholder": "Email addresses"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFSendEmailActionSubject",
			"Label": "Subject",
			"Placeholder": "optional"
		}
	],
	"RequiredResources": [
		{
			"RequiredResources": [
				{
					"WFResourceClass": "WFWorkflowTypeResource",
					"WFWorkflowType": "WatchKit"
				}
			],
			"WFResourceClass": "WFEmailAccessResource"
		},
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
			"WFResourceClass": "WFEmailAccessResource"
		}
	],
	"SettingsUI": {
		"ShowWhenResourcesUnavailable": true,
		"ViewControllerClass": "WFEmailAccountListViewController"
	},
	"Subcategory": "Messaging",
	"SuggestedAsInitialAction": true,
	"UserInterfaces": [
		"UIKit",
		"WatchKit",
		"UIKitWidget"
	]
}
```
