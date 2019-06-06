
## Get Time Between Dates / GetTimeBetweenDates (internally `is.workflow.actions.gettimebetweendates`)


## description

### summary

Subtracts the specified date from the date passed into the action. For example, this action could get the number of minutes from now until a calendar event passed in as input.


### note

This action outputs a negative number if the input date takes place before the specified date.


### usage
```
GetTimeBetweenDates getTimeFrom=("Right Now" | "Other" | variable) secondDate="string" in=("Total Time" | "Seconds" | "Minutes" | "Hours" | "Days" | "Weeks" | "Months" | "Years")
```

### arguments

---

### getTimeFrom: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Placeholder**: `"First Date"`
**Default Value**: `"Right Now"`


Accepts a string 
containing one of the options:

- `Right Now`
- `Other`

---

### secondDate: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Second Date"`
**Allows Variables**: true

**Only enabled if**: argument WFTimeUntilReferenceDate == `Other`

Accepts a string 
or text
with the text. Does not allow newlines.

---

### in: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Minutes"`
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

---

### source json (for developers)

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
			"Label": "Get Time From",
			"Placeholder": "First Date"
		},
		{
			"Class": "WFDateFieldParameter",
			"Key": "WFTimeUntilCustomDate",
			"Label": "Second Date",
			"Placeholder": "Second Date",
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
	"ResidentCompatible": true,
	"ShortName": "Subtract Dates",
	"Subcategory": "Dates"
}
```
