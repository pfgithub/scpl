
## Send Message / sendmessage (internally `is.workflow.actions.sendmessage`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFContactAccessResource,WFUserInteractionResource.


## description
### summary
Sends an iMessage or SMS. Pass images, videos, or other files as input to include attachments.


### usage
`sendmessage undefined=[???] showwhenrun=[string boolean|variable] undefined=[???] wfsendmessagecontent=[string|text] prefix=[string|text]`

### arguments
This paramtype is not implemented. WFIntentAppPickerParameter

---

### Switch: Show When Run / showwhenrun (internally `ShowWhenRun`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

This paramtype is not implemented. WFContactHandleFieldParameter

---

### Text Input: wfsendmessagecontent / wfsendmessagecontent (internally `WFSendMessageContent`)
**Placeholder**: Message
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Prefix / prefix (internally `WFSendMessagePrefix`)
**Allows Variables**: true


Accepts a string 
or text
with the text.

### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFSendMessageAction",
	"ActionKeywords": [
		"message",
		"sms",
		"send",
		"text"
	],
	"AppIdentifier": "com.apple.MobileSMS",
	"Category": "Sharing",
	"Description": {
		"DescriptionSummary": "Sends an iMessage or SMS. Pass images, videos, or other files as input to include attachments."
	},
	"Input": {
		"Multiple": true,
		"Required": false,
		"Types": [
			"WFContentItem"
		]
	},
	"InputPassthrough": true,
	"IntentIdentifier": "sirikit.intent.messages.SendMessageIntent",
	"LastModifiedDate": "2015-11-24T06:00:00.000Z",
	"Name": "Send Message",
	"Parameters": [
		{
			"Class": "WFIntentAppPickerParameter",
			"DefaultValue": "com.apple.MobileSMS",
			"Hidden": true,
			"IntentName": "INSendMessageIntent",
			"Key": "IntentAppIdentifier",
			"Label": "App",
			"RequiredResources": [
				{
					"WFDeviceAttributes": {
						"WFDeviceAttributeSystemVersion": {
							"WFSystemVersion": "12.0",
							"WFSystemVersionRelation": ">="
						}
					},
					"WFResourceClass": "WFDeviceAttributesResource"
				}
			]
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "ShowWhenRun",
			"Label": "Show When Run",
			"RequiredResources": [
				{
					"WFDeviceAttributes": {
						"WFDeviceAttributeSystemVersion": {
							"WFSystemVersion": "12.0",
							"WFSystemVersionRelation": ">="
						}
					},
					"WFResourceClass": "WFDeviceAttributesResource"
				}
			]
		},
		{
			"Class": "WFContactHandleFieldParameter",
			"IntentSlotName": "recipients",
			"Key": "WFSendMessageActionRecipients",
			"Label": "Recipients",
			"Placeholder": "Phone or email"
		},
		{
			"Class": "WFTextInputParameter",
			"IntentSlotName": "content",
			"Key": "WFSendMessageContent",
			"Multiline": true,
			"Placeholder": "Message"
		},
		{
			"Class": "WFTextInputParameter",
			"Hidden": true,
			"Key": "WFSendMessagePrefix",
			"Label": "Prefix"
		}
	],
	"RateLimit": {
		"Delay": 3,
		"Threshold": 4,
		"Timeout": 30
	},
	"RequiredResources": [
		"WFContactAccessResource",
		"WFUserInteractionResource"
	],
	"Subcategory": "Messaging",
	"SuggestedAsInitialAction": true,
	"UserInterfaces": [
		"UIKit",
		"UIKitWidget",
		"WatchKit",
		"Siri"
	]
}
```
</p></details>
