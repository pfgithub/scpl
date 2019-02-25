
## Date / date (internally `is.workflow.actions.date`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Passes the specified date and time to the next action.


### usage
`date a{use=[string <${strInfo}>] undefined=[???]}`

### arguments
### Enumeration: Use / use (internally `WFDateActionMode`)
**Default Value**:
```
Current Date
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Current Date`
- `Specified Date`

---

This paramtype is not implemented. WFDateFieldParameter

### source json

```json
{
	"ActionClass": "WFDateAction",
	"ActionKeywords": [
		"date",
		"set date",
		"pass date",
		"time",
		"current",
		"now"
	],
	"Category": "Calendar",
	"Description": {
		"DescriptionSummary": "Passes the specified date and time to the next action."
	},
	"IconName": "Date.png",
	"Name": "Date",
	"Output": {
		"Multiple": false,
		"OutputName": "Date",
		"Types": [
			"NSDate"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Current Date",
			"Items": [
				"Current Date",
				"Specified Date"
			],
			"Key": "WFDateActionMode",
			"Label": "Use"
		},
		{
			"Class": "WFDateFieldParameter",
			"Key": "WFDateActionDate",
			"Label": "Date",
			"Placeholder": "June 29, 2007",
			"RequiredResources": [
				{
					"WFParameterKey": "WFDateActionMode",
					"WFParameterValue": "Specified Date",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Dates",
	"SuggestedNever": true
}
```
