
## Send via Messenger / sendviamessenger (internally `is.workflow.actions.facebook.messenger.send`)


> This action requires that Shortcuts has permission to use WFUserInteractionResource,[object Object].


## description
### summary
Sends the input via Facebook Messenger


### usage
`sendviamessenger `

### arguments


### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFFBMessengerSendAction",
	"ActionKeywords": [
		"messenger",
		"facebook",
		"fb",
		"send",
		"text",
		"gif",
		"image",
		"video"
	],
	"AppIdentifier": "com.facebook.Messenger",
	"Category": "Sharing",
	"CreationDate": "2015-04-01T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Sends the input via Facebook Messenger"
	},
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"WFImageContentItem",
			"WFAVAssetContentItem",
			"com.compuserve.gif"
		]
	},
	"InputPassthrough": true,
	"Name": "Send via Messenger",
	"RequiredResources": [
		"WFUserInteractionResource",
		{
			"AppIdentifier": "com.facebook.Messenger",
			"WFResourceClass": "WFAppInstalledResource"
		}
	],
	"Subcategory": "Messaging",
	"UserInterfaces": [
		"UIKit"
	]
}
```
</details>
