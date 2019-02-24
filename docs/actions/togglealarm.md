
## Toggle Alarm / togglealarm (internally `is.workflow.actions.alarm.toggle`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFSiriAccessResource.


## description
### summary
Enables or disables an alarm in the Clock app.


### usage
`togglealarm undefined=[???] enabled=[string boolean|variable]`

### arguments
This paramtype is not implemented. WFAlarmPickerParameter

---

### Switch: Enabled / enabled (internally `WFEnabled`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

### source json

```json
{
	"ActionClass": "WFToggleAlarmAction",
	"ActionKeywords": [
		"alarm",
		"set",
		"clock",
		"timer",
		"turn",
		"on",
		"off"
	],
	"AppIdentifier": "com.apple.mobiletimer",
	"Category": "Calendar",
	"Description": {
		"DescriptionSummary": "Enables or disables an alarm in the Clock app."
	},
	"InputPassthrough": true,
	"Name": "Toggle Alarm",
	"Parameters": [
		{
			"Class": "WFAlarmPickerParameter",
			"Key": "WFAlarm",
			"Label": "Alarm"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Key": "WFEnabled",
			"Label": "Enabled"
		}
	],
	"RequiredResources": [
		"WFSiriAccessResource"
	]
}
```
