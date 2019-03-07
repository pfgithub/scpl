
## Toggle Alarm / togglealarm (internally `is.workflow.actions.alarm.toggle`)

> This action requires that Shortcuts has permission to use WFSiriAccessResource.


## description

### summary

Enables or disables an alarm in the Clock app.


### usage
```
togglealarm alarm=("string" | variable)] enabled=(true | f alse | variable)
```

### arguments

---

### alarm: Alarm Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### enabled: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

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
