
## Show Notification / ShowNotification (internally `is.workflow.actions.notification`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource,WFMainThreadResource,WFLocalNotificationAccessResource.


## description

### summary

Displays a local notification.


### input

An image or video to include in the notification


### usage
```
ShowNotification title="string" body="string" playSound=(true | false | variable) attachment=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### title: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### body: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Text"`
**Default Value**: `"Hello World"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Allows newlines.

---

### playSound: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### attachment: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true



Accepts a variable.

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
	"Attribution": "Notifications",
	"Category": "Scripting",
	"Description": {
		"DescriptionInput": "An image or video to include in the notification",
		"DescriptionSummary": "Displays a local notification."
	},
	"IconName": "Notification.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": false,
		"Types": [
			"UIImage",
			"AVAsset"
		]
	},
	"InputPassthrough": true,
	"LastModifiedDate": "2016-09-10T07:00:00.000Z",
	"Name": "Show Notification",
	"ParameterSummary": "Show notification ${WFNotificationActionBody}",
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
			"Placeholder": "Text"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFNotificationActionSound",
			"Label": "Play Sound"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Attachment"
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
		"WatchKit",
		"Siri"
	]
}
```
