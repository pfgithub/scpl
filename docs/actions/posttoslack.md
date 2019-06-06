
## Post to Slack / PosttoSlack (internally `is.workflow.actions.slack.send`)

> This action requires that Shortcuts has permission to use WFUnavailableResource,[object Object].


## description

### summary

Posts the input to the specified Slack channel.


### usage
```
PosttoSlack account=("string" | variable)] channel=("string" | variable)] content=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### account: Account Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)


		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### channel: Slack Channel Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### content: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

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
	"Discontinued": true,
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFSlackInput",
		"Required": true,
		"Types": [
			"WFGenericFileContentItem",
			"WFStringContentItem"
		]
	},
	"InputPassthrough": true,
	"LastModifiedDate": "2015-11-24T06:00:00.000Z",
	"Name": "Post to Slack",
	"ParameterSummary": "Post ${WFSlackInput} to ${SlackChannel}",
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
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFSlackInput",
			"Label": "Content"
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
