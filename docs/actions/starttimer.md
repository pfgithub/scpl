
## Start Timer / starttimer (internally `is.workflow.actions.timer.start`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFSiriAccessResource.


## description
### summary
Starts a timer in the Clock app for the specified amount of time.


### usage
`starttimer undefined=[???]`

### arguments
This paramtype is not implemented. WFDurationQuantityFieldParameter

### other info

<details><summary>source json</summary>
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
</details>
