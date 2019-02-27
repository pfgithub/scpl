
## Create Alarm / createalarm (internally `is.workflow.actions.alarm.create`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFSiriAccessResource.


## description

### summary

Creates an alarm in the Clock app.


### usage
```
createalarm a{label=[string|text] time=[string|text] undefined=[???]}
```

### arguments

---

### Text: Label / label (internally `WFLabel`)
**Placeholder**:
```
Alarm
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Date: Time / time (internally `WFTime`)
**Placeholder**:
```
8 AM
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

#### This paramtype is not implemented. WFAlarmFrequencyPickerParameter

---

### source json

```json
{
	"ActionClass": "WFCreateAlarmAction",
	"ActionKeywords": [
		"alarm",
		"set",
		"clock",
		"timer",
		"add"
	],
	"AppIdentifier": "com.apple.mobiletimer",
	"Category": "Calendar",
	"Description": {
		"DescriptionSummary": "Creates an alarm in the Clock app."
	},
	"InputPassthrough": true,
	"Name": "Create Alarm",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFLabel",
			"Label": "Label",
			"Placeholder": "Alarm",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFDateFieldParameter",
			"HintDateMode": "Time",
			"Key": "WFTime",
			"Label": "Time",
			"Placeholder": "8 AM",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFAlarmFrequencyPickerParameter",
			"Key": "WFFrequency",
			"Label": "Repeat",
			"NoneLabel": "Never"
		}
	],
	"RequiredResources": [
		"WFSiriAccessResource"
	]
}
```
