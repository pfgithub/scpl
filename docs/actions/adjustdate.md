
## Adjust Date / adjustdate (internally `is.workflow.actions.adjustdate`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Adds or subtracts an amount of time from the date passed into the action.


### usage
```
adjustdate a{undefined=[???]}
```

### arguments

---

#### This paramtype is not implemented. WFTimeOffsetParameter

---

### source json

```json
{
	"ActionClass": "WFAdjustDateAction",
	"ActionKeywords": [
		"add",
		"subtract",
		"math",
		"time",
		"get",
		"start",
		"of",
		"minute",
		"hour",
		"day",
		"month",
		"year"
	],
	"Category": "Calendar",
	"CreationDate": "2015-02-03T08:00:00.000Z",
	"Description": {
		"DescriptionNote": "This action supports decimal numbers when adding or subtracting seconds, minutes, hours, or days. Otherwise only integers are supported.",
		"DescriptionSummary": "Adds or subtracts an amount of time from the date passed into the action."
	},
	"IconName": "Date.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFDateContentItem",
			"WFCalendarEventContentItem",
			"WFTimeIntervalContentItem"
		]
	},
	"InputPassthrough": false,
	"LastModifiedDate": "2017-02-27T08:00:00.000Z",
	"Name": "Adjust Date",
	"Output": {
		"Multiple": true,
		"OutputName": "Adjusted Date",
		"Types": [
			"NSDate"
		]
	},
	"Parameters": [
		{
			"Class": "WFTimeOffsetParameter",
			"Key": "WFAdjustOffsetPicker"
		}
	],
	"RequiredResources": [
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFAdjustAsksWhenRun",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFUserInteractionResource"
		}
	],
	"Subcategory": "Dates"
}
```
