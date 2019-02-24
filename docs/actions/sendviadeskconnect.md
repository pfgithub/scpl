
## Send via DeskConnect / sendviadeskconnect (internally `is.workflow.actions.deskconnect.send`)


> This action requires that Shortcuts has permission to use WFUserInteractionResource,[object Object].


## description
### summary
Sends the input to another device via DeskConnect. DeskConnect makes it easy to send web pages, documents, pictures, and anything else between your devices.


### usage
`sendviadeskconnect `

### arguments


### for developers

<details><summary>source json</summary>
<p>
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
		"DescriptionSummary": "Sends the input to another device via DeskConnect. DeskConnect makes it easy to send web pages, documents, pictures, and anything else between your devices."
	},
	"Discontinued": true,
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFURLContentItem",
			"WFGenericFileContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Send via DeskConnect",
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
</p></details>
