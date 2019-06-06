
## Send Message / SendMessage (internally `is.workflow.actions.sendmessage`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use [object Object],[object Object].


## description

### summary

Sends an iMessage or SMS. Pass images, videos, or other files as input to include attachments.


### usage
```
SendMessage app=("string" | variable)] showWhenRun=(true | false | variable) undefined=NotImplemented WFSendMessageContent="string" prefix="string"
```

### arguments

---

### app: Intent App Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Default Value**: ```
		com.apple.MobileSMS
		```
**Allows Variables**: true

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### showWhenRun: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

#### This paramtype is not implemented. WFContactHandleFieldParameter

---

### WFSendMessageContent: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Message"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Allows newlines.

---

### prefix: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

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
		"ParameterKey": "WFSendMessageContent",
		"Required": false,
		"Types": [
			"WFContentItem"
		]
	},
	"InputPassthrough": true,
	"IntentIdentifier": "sirikit.intent.messages.SendMessageIntent",
	"LastModifiedDate": "2015-11-24T06:00:00.000Z",
	"Name": "Send Message",
	"ParameterSummary": "Send “${WFSendMessageContent}” to ${WFSendMessageActionRecipients}",
	"Parameters": [
		{
			"Class": "WFIntentAppPickerParameter",
			"DefaultValue": "com.apple.MobileSMS",
			"Hidden": true,
			"IntentName": "INSendMessageIntent",
			"Key": "IntentAppIdentifier",
			"Label": "App"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "ShowWhenRun",
			"Label": "Show When Run"
		},
		{
			"AllowsMultipleValues": true,
			"Class": "WFContactHandleFieldParameter",
			"IntentSlotName": "recipients",
			"Key": "WFSendMessageActionRecipients",
			"Label": "Recipients"
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
		{
			"RequiredResources": [
				{
					"WFParameterKey": "ShowWhenRun",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFUserInteractionResource"
		},
		{
			"RequiredResources": [
				{
					"WFParameterKey": "ShowWhenRun",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFMessagesAccessResource"
		}
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
