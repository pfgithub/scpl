
## Start Timer / StartTimer (internally `is.workflow.actions.timer.start`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFSiriAccessResource.


## description

### summary

Starts a timer in the Clock app for the specified amount of time.


### usage
```
StartTimer NotImplemented
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFDurationQuantityFieldParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### source json (for developers)

```json
{
	"ActionClass": "WFStartTimerAction",
	"ActionKeywords": [
		"timer",
		"set",
		"clock",
		"stopwatch",
		"watch"
	],
	"AppIdentifier": "com.apple.mobiletimer",
	"Category": "Calendar",
	"Description": {
		"DescriptionSummary": "Starts a timer in the Clock app for the specified amount of time."
	},
	"InputPassthrough": true,
	"Name": "Start Timer",
	"Parameters": [
		{
			"Class": "WFDurationQuantityFieldParameter",
			"Key": "WFDuration",
			"Label": "Duration",
			"Placeholder": "30",
			"TextAlignment": "Right"
		}
	],
	"RequiredResources": [
		"WFSiriAccessResource"
	]
}
```
