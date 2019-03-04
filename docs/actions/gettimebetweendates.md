
## Get Time Between Dates / gettimebetweendates (internally `is.workflow.actions.gettimebetweendates`)


## description

### summary

Subtracts the specified date from the date passed into the action. For example, this action could get the number of minutes from now until a calendar event passed in as input.


### usage
```
gettimebetweendates gettimefrom="Right Now" | "Other"|variable otherdate="string" in="Total Time" | "Seconds" | "Minutes" | "Hours" | "Days" | "Weeks" | "Months" | "Years"
```

### arguments

---

### Enumeration: gettimefrom [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**:
```
Right Now
```


Accepts a string 
containing one of the options:

- `Right Now`
- `Other`

[Documentation](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)

---

### Date: otherdate [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**:
```
September 9, 2014
```
**Allows Variables**: true

**Only enabled if**: argument WFTimeUntilReferenceDate = `Other`

Accepts a string 
or text
with the text.

---

### Enumeration: in [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**:
```
Minutes
```
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

[Documentation](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)

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
