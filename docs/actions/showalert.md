
## Show Alert / showalert (internally `is.workflow.actions.alert`)


> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description
### summary
Displays an alert with a title, a message, and two buttons. If the user selects the OK button, the shortcut continues. The cancel button stops the shortcut.


### usage
`showalert title=[string|text] message=[string|text] showcancelbutton=[string boolean|variable]`

### arguments
### Text Input: Title / title (internally `WFAlertActionTitle`)
**Placeholder**:
```
Attention-grabbing title
```
**Default Value**:
```
Alert
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Text Input: Message / message (internally `WFAlertActionMessage`)
**Placeholder**:
```
Informational message
```
**Default Value**:
```
Do you want to continue?
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Switch: Show Cancel Button / showcancelbutton (internally `WFAlertActionCancelButtonShown`)
**Default Value**:
```
true
```
**Allows Variables**: true



Accepts a boolean
or a variable.

### source json

```json
{
	"ActionClass": "WFAlertAction",
	"ActionKeywords": [
		"message",
		"ask",
		"display",
		"prompt",
		"show",
		"confirmation"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Displays an alert with a title, a message, and two buttons. If the user selects the OK button, the shortcut continues. The cancel button stops the shortcut."
	},
	"IconName": "Scripting.png",
	"InputPassthrough": true,
	"Name": "Show Alert",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "Alert",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAlertActionTitle",
			"Label": "Title",
			"Placeholder": "Attention-grabbing title"
		},
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "Do you want to continue?",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAlertActionMessage",
			"Label": "Message",
			"Multiline": true,
			"Placeholder": "Informational message"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFAlertActionCancelButtonShown",
			"Label": "Show Cancel Button"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Notification"
}
```
