
## Adjust Date / AdjustDate (internally `is.workflow.actions.adjustdate`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Adds or subtracts an amount of time from the date passed into the action.


### note

This action supports decimal numbers when adding or subtracting seconds, minutes, hours, or days. Otherwise only integers are supported.


### usage
```
AdjustDate date="string" operation=("Add" | "Subtract" | "Get Start of Minute" | "Get Start of Hour" | "Get Start of Day" | "Get Start of Month" | "Get Start of Year" | variable) undefined=NotImplemented
```

### arguments

---

### date: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### operation: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Add"`


Accepts a string 
containing one of the options:

- `Add`
- `Subtract`
- `Get Start of Minute`
- `Get Start of Hour`
- `Get Start of Day`
- `Get Start of Month`
- `Get Start of Year`

---

#### This paramtype is not implemented. WFDurationQuantityFieldParameter

---

### source json (for developers)

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
		"ParameterKey": "WFDate",
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
	"ParameterSummary": {
		"WFAdjustOperation(Subtract),WFDuration,WFDate": "${WFAdjustOperation} ${WFDuration} from ${WFDate}",
		"WFAdjustOperation,WFDate": "${WFAdjustOperation} from ${WFDate}",
		"WFAdjustOperation,WFDuration,WFDate": "${WFAdjustOperation} ${WFDuration} to ${WFDate}"
	},
	"Parameters": [
		{
			"Class": "WFDateFieldParameter",
			"Key": "WFDate",
			"Label": "Date",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Add",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"Items": [
				"Add",
				"Subtract",
				"Get Start of Minute",
				"Get Start of Hour",
				"Get Start of Day",
				"Get Start of Month",
				"Get Start of Year"
			],
			"Key": "WFAdjustOperation",
			"Label": "Operation"
		},
		{
			"Class": "WFDurationQuantityFieldParameter",
			"DefaultUnit": "sec",
			"Key": "WFDuration",
			"Placeholder": "0",
			"PossibleUnits": [
				"sec",
				"min",
				"hr",
				"days",
				"weeks",
				"months",
				"years"
			],
			"RequiredResources": [
				{
					"WFParameterKey": "WFAdjustOperation",
					"WFParameterValues": [
						"Add",
						"Subtract"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
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
	"ResidentCompatible": true,
	"Subcategory": "Dates"
}
```
