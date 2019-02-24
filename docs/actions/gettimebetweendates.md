
## Get Time Between Dates / gettimebetweendates (internally `is.workflow.actions.gettimebetweendates`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Subtracts the specified date from the date passed into the action. For example, this action could get the number of minutes from now until a calendar event passed in as input.


### usage
`gettimebetweendates gettimefrom=[string <${strInfo}>|variable] undefined=[???] in=[string <${strInfo}>]`

### arguments
### Enumeration: Get Time From / gettimefrom (internally `WFTimeUntilReferenceDate`)
**Default Value**: Right Now


Accepts a string 
containing one of the options:

- `Right Now`
- `Other`

---

This paramtype is not implemented. WFDateFieldParameter

---

### Enumeration: In / in (internally `WFTimeUntilUnit`)
**Default Value**: Minutes
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Total Time`
- `Seconds`
- `Minutes`
- `Hours`
- `Days`
- `Weeks`
- `Months`
- `Years`

### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFTimeUntilDateAction",
	"ActionKeywords": [
		"between",
		"after",
		"before",
		"seconds",
		"minutes",
		"hours",
		"days",
		"weeks",
		"years",
		"math",
		"calculate",
		"interval"
	],
	"Category": "Calendar",
	"CreationDate": "2015-02-17T08:00:00.000Z",
	"Description": {
		"DescriptionNote": "This action outputs a negative number if the input date takes place before the specified date.",
		"DescriptionSummary": "Subtracts the specified date from the date passed into the action. For example, this action could get the number of minutes from now until a calendar event passed in as input."
	},
	"IconName": "Date.png",
	"Input": {
		"Required": true,
		"Types": [
			"NSDate"
		]
	},
	"InputPassthrough": false,
	"Name": "Get Time Between Dates",
	"Output": {
		"OutputName": "Time Between Dates",
		"Types": [
			"NSNumber"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Right Now",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"Items": [
				"Right Now",
				"Other"
			],
			"Key": "WFTimeUntilReferenceDate",
			"Label": "Get Time From"
		},
		{
			"Class": "WFDateFieldParameter",
			"Key": "WFTimeUntilCustomDate",
			"Label": "Other Date",
			"Placeholder": "September 9, 2014",
			"RequiredResources": [
				{
					"WFParameterKey": "WFTimeUntilReferenceDate",
					"WFParameterValue": "Other",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Minutes",
			"Items": [
				"Total Time",
				"Seconds",
				"Minutes",
				"Hours",
				"Days",
				"Weeks",
				"Months",
				"Years"
			],
			"Key": "WFTimeUntilUnit",
			"Label": "In"
		}
	],
	"ShortName": "Subtract Dates",
	"Subcategory": "Dates"
}
```
</details>
