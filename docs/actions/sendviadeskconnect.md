
## Send via DeskConnect / SendviaDeskConnect (internally `is.workflow.actions.deskconnect.send`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource,[object Object].


## description

### summary

Sends the input to another device via DeskConnect. DeskConnect makes it easy to send webpages, documents, pictures, and anything else between your devices.


### usage
```
SendviaDeskConnect (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### content: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Content
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFSendViaDeskConnectAction",
	"ActionKeywords": [
		"airdrop",
		"push",
		"desk",
		"connect",
		"device",
		"mac",
		"share"
	],
	"AppIdentifier": "com.deskconnect.ios",
	"Category": "Sharing",
	"CreationDate": "2016-03-04T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Sends the input to another device via DeskConnect. DeskConnect makes it easy to send webpages, documents, pictures, and anything else between your devices."
	},
	"Discontinued": true,
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFURLContentItem",
			"WFGenericFileContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Send via DeskConnect",
	"ParameterSummary": "Send ${WFInput} via the missing link between your devices, DeskConnect 💔",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Content",
			"Placeholder": "Content"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource",
		{
			"AppIdentifier": "com.deskconnect.ios",
			"WFResourceClass": "WFAppInstalledResource"
		}
	],
	"SuggestedNever": true
}
```
