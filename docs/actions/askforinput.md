
## Ask for Input / askforinput (internally `is.workflow.actions.ask`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Displays a dialog prompting the user to enter a piece of information.


### usage
```
askforinput a{question=[string|text] defaultanswer=[string|text] defaultanswer=[string|text] inputtype=[string <Text | Number | URL | Date>] granularity=[string <Date | Time | Date and Time>] skiptowatchdictation=[string boolean|variable]}
```

### arguments

---

### Text: Question / question (internally `WFAskActionPrompt`)
**Placeholder**:
```
Enter text
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Text: Default Answer / defaultanswer (internally `WFAskActionDefaultAnswer`)
**Placeholder**:
```
optional
```
**Allows Variables**: true

**Only enabled if**: argument WFInputType != `Date`

Accepts a string 
or text
with the text.

---

### Date: Default Answer / defaultanswer (internally `WFAskActionDefaultAnswerDate`)
**Placeholder**:
```
June 29, 2007
```
**Allows Variables**: true

**Only enabled if**: argument WFInputType = `Date`

Accepts a string 
or text
with the text.

---

### Enumeration: Input Type / inputtype (internally `WFInputType`)
**Default Value**:
```
Text
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Text`
- `Number`
- `URL`
- `Date`

---

### Enumeration: Granularity / granularity (internally `WFAskActionDateGranularity`)
**Default Value**:
```
Date
```
**Allows Variables**: true

**Only enabled if**: argument WFInputType = `Date`

Accepts a string 
or variable
containing one of the options:

- `Date`
- `Time`
- `Date and Time`

---

### Switch: Skip to Watch Dictation / skiptowatchdictation (internally `WFAskActionImmediateDictation`)
**Allows Variables**: true

**Only enabled if**: argument WFInputType != `Date`

**Only enabled if**: Workflow type is `WatchKit`. This action is always enabled inside Shortcutslang.

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

Accepts a boolean
or a variable.

---

### source json

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
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Displays a dialog prompting the user to enter a piece of information."
	},
	"IconName": "Scripting.png",
	"LastModifiedDate": "2015-08-20T07:00:00.000Z",
	"Name": "Ask for Input",
	"Output": {
		"Multiple": false,
		"OutputName": "Ask for Input",
		"Types": [
			"NSString",
			"NSDecimalNumber",
			"NSURL",
			"NSDate"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAskActionPrompt",
			"Label": "Question",
			"Placeholder": "Enter text",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAskActionDefaultAnswer",
			"Label": "Default Answer",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFInputType",
					"WFParameterRelation": "!=",
					"WFParameterValue": "Date",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFDateFieldParameter",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAskActionDefaultAnswerDate",
			"Label": "Default Answer",
			"Placeholder": "June 29, 2007",
			"RequiredResources": [
				{
					"WFParameterKey": "WFInputType",
					"WFParameterValue": "Date",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Text",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Items": [
				"Text",
				"Number",
				"URL",
				"Date"
			],
			"Key": "WFInputType",
			"Label": "Input Type"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Date",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Items": [
				"Date",
				"Time",
				"Date and Time"
			],
			"Key": "WFAskActionDateGranularity",
			"Label": "Granularity",
			"RequiredResources": [
				{
					"WFParameterKey": "WFInputType",
					"WFParameterValue": "Date",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFSwitchParameter",
			"Description": "When enabled and run on Apple Watch, this action immediately begins listening for voice input.",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Hidden": true,
			"Key": "WFAskActionImmediateDictation",
			"Label": "Skip to Watch Dictation",
			"RequiredResources": [
				{
					"WFParameterKey": "WFInputType",
					"WFParameterRelation": "!=",
					"WFParameterValue": "Date",
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFResourceClass": "WFWorkflowTypeResource",
					"WFWorkflowType": "WatchKit"
				}
			]
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Notification",
	"UserInterfaces": [
		"UIKit",
		"UIKitWidget",
		"WatchKit"
	]
}
```
