
## Date / Date (internally `is.workflow.actions.date`)


## description

### summary

Passes the specified date and time to the next action.


### usage
```
Date use=("Current Date" | "Specified Date") date="string"
```

### arguments

---

### use: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Current Date"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Current Date`
- `Specified Date`

---

### date: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"June 29, 2007"`
**Allows Variables**: true

**Only enabled if**: argument WFDateActionMode == `Specified Date`

Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

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
	"Constructor": true,
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
	"ParameterSummary": {
		"WFDateActionMode(Current Date)": "${WFDateActionMode}",
		"WFDateActionMode(Specified Date),WFDateActionDate": "${WFDateActionMode} ${WFDateActionDate}"
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
