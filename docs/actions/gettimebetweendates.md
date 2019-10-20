
## Get Time Between Dates / GetTimeBetweenDates (internally `is.workflow.actions.gettimebetweendates`)


## description

### summary

Subtracts the specified date from the date passed into the action. For example, this action could get the number of minutes from now until a calendar event passed in as input.


### note

This action outputs a negative number if the input date takes place before the specified date.


### usage
```
GetTimeBetweenDates firstDate="string" secondDate="string" in=("Total Time" | "Seconds" | "Minutes" | "Hours" | "Days" | "Weeks" | "Months" | "Years")
```

### arguments

---

### firstDate: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### secondDate: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



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
		"ParameterKey": "WFInput",
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
	"ParameterSummary": "Get time between ${WFTimeUntilFromDate} and ${WFInput} in ${WFTimeUntilUnit}",
	"Parameters": [
		{
			"Class": "WFDateFieldParameter",
			"Key": "WFTimeUntilFromDate",
			"Label": "First Date"
		},
		{
			"Class": "WFDateFieldParameter",
			"Key": "WFInput",
			"Label": "Second Date"
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
