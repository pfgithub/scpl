
## Post to Slack / posttoslack (internally `is.workflow.actions.slack.send`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFUnavailableResource,[object Object].


## description
### summary
Posts the input to the specified Slack channel.


### usage
`posttoslack undefined=[???] undefined=[???]`

### arguments
This paramtype is not implemented. WFAccountPickerParameter

---

This paramtype is not implemented. WFSlackChannelPickerParameter

### source json

```json
{
	"ActionClass": "WFSlackPostAction",
	"ActionKeywords": [
		"send",
		"text",
		"gif",
		"image",
		"video"
	],
	"AppIdentifier": "com.tinyspeck.chatlyio",
	"Category": "Sharing",
	"CreationDate": "2015-04-01T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Posts the input to the specified Slack channel."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFGenericFileContentItem",
			"WFStringContentItem"
		]
	},
	"InputPassthrough": true,
	"LastModifiedDate": "2015-11-24T06:00:00.000Z",
	"Name": "Post to Slack",
	"Parameters": [
		{
			"AccountClass": "WFSlackAccount",
			"AlwaysShowsButton": true,
			"Class": "WFAccountPickerParameter",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"Key": "WFAccount",
			"Label": "Account"
		},
		{
			"AccountParameterKey": "WFAccount",
			"AlwaysShowsButton": true,
			"Class": "WFSlackChannelPickerParameter",
			"Key": "SlackChannel",
			"Label": "Channel"
		}
	],
	"RequiredResources": [
		"WFUnavailableResource",
		{
			"WFAccountClass": "WFSlackAccount",
			"WFResourceClass": "WFAccountAccessResource"
		}
	],
	"Subcategory": "Messaging"
}
```
