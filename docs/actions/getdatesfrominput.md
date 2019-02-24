
## Get Dates from Input / getdatesfrominput (internally `is.workflow.actions.detect.date`)



## description
### summary
Returns any dates found in the output from the previous action.


### usage
`getdatesfrominput `

### arguments


### source json

```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"date",
		"time",
		"detect",
		"scan"
	],
	"Category": "Calendar",
	"CoercionItemClass": "WFDateContentItem",
	"Description": {
		"DescriptionSummary": "Returns any dates found in the output from the previous action."
	},
	"IconName": "Date.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSDate"
		]
	},
	"Name": "Get Dates from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "Dates",
		"Types": [
			"WFDateContentItem"
		]
	},
	"ShortName": "Get Dates",
	"Subcategory": "Dates"
}
```
