
## isworkflowactionsask / isworkflowactionsask (internally `is.workflow.actions.ask`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Displays a dialog prompting the user to enter a piece of information.


### usage
```
isworkflowactionsask 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFAskForInputAction",
	"ActionKeywords": [
		"ask",
		"prompt",
		"show",
		"dialog",
		"keyboard",
		"text",
		"number",
		"url",
		"date",
		"time"
	],
	"Attribution": "Scripting",
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Displays a dialog prompting the user to enter a piece of information."
	},
	"IconName": "Scripting.png",
	"IntentIdentifier": "sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFAskForInputIntent",
	"LastModifiedDate": "2015-08-20T07:00:00.000Z",
	"Output": {
		"Multiple": false,
		"OutputName": "Provided Input",
		"Types": [
			"NSString",
			"NSDecimalNumber",
			"NSURL",
			"NSDate"
		]
	},
	"ParameterOverrides": {
		"dateAndTimeAnswer": {
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAskActionDefaultAnswerDateAndTime"
		},
		"dateAnswer": {
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAskActionDefaultAnswerDate"
		},
		"defaultURLAnswer": {
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAskActionDefaultAnswerURL",
			"KeyboardType": "URL"
		},
		"numberAnswer": {
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAskActionDefaultAnswerNumber"
		},
		"question": {
			"Key": "WFAskActionPrompt"
		},
		"stringAnswer": {
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAskActionDefaultAnswer",
			"Label": "Default Answer"
		},
		"timeAnswer": {
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAskActionDefaultAnswerTime"
		},
		"type": {
			"DisallowedVariableTypes": [
				"Ask"
			],
			"IntentEnumOverrides": {
				"date": "Date",
				"dateAndTime": "Date and Time",
				"number": "Number",
				"text": "Text",
				"time": "Time",
				"url": "URL"
			},
			"Key": "WFInputType"
		},
		"urlAnswer": {
			"Hidden": true
		}
	},
	"ParameterSummary": "Ask ${WFAskActionPrompt}",
	"RequiredResources": [
		"WFUserInteractionResource"
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
