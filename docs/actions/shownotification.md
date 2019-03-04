
## Show Notification / shownotification (internally `is.workflow.actions.notification`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource,WFMainThreadResource,WFLocalNotificationAccessResource.


## description

### summary

Displays a local notification.


### input

An image or video to include in the notification


### usage
```
shownotification title="string" body="string" playsound=(true | f alse | variable)
```

### arguments

---

### title: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### body: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Charming notification message"`
**Default Value**: `"Hello World"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### playsound: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFNotificationAction",
	"ActionKeywords": [
		"local",
		"notification",
		"show",
		"alert",
		"reminder",
		"push"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionInput": "An image or video to include in the notification",
		"DescriptionSummary": "Displays a local notification."
	},
	"IconName": "Notification.png",
	"Input": {
		"Multiple": true,
		"Required": false,
		"Types": [
			"UIImage",
			"AVAsset"
		]
	},
	"InputPassthrough": true,
	"LastModifiedDate": "2016-09-10T07:00:00.000Z",
	"Name": "Show Notification",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFNotificationActionTitle",
			"Label": "Title",
			"Placeholder": "optional"
		},
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "Hello World",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFNotificationActionBody",
			"Label": "Body",
			"Multiline": true,
			"Placeholder": "Charming notification message"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFNotificationActionSound",
			"Label": "Play Sound"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource",
		"WFMainThreadResource",
		"WFLocalNotificationAccessResource"
	],
	"Subcategory": "Notification",
	"UserInterfaces": [
		"UIKit",
		"UIKitWidget",
		"WatchKit"
	]
}
```
