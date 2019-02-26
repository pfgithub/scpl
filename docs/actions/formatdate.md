
## Format Date / formatdate (internally `is.workflow.actions.format.date`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Formats a date and time into text.


### usage
```
formatdate a{dateformat=[string <${strInfo}>] alternateformat=[string <${strInfo}>] timeformat=[string <${strInfo}>] includeiso8601time=[string boolean|variable] undefined=[???]}
```

### arguments

---

### Enumeration: Date Format / dateformat (internally `WFDateFormatStyle`)
**Default Value**:
```
Short
```
**Allows Variables**: true

**Only enabled if**: argument WFTimeFormatStyle = `None` or `Short` or `Medium` or `Long`

Accepts a string 
or variable
containing one of the options:

- `None`
- `Short`
- `Medium`
- `Long`
- `Relative`
- `RFC 2822`
- `ISO 8601`
- `Custom`

---

### Enumeration: Alternate Format / alternateformat (internally `WFRelativeDateFormatStyle`)
**Default Value**:
```
Medium
```
**Allows Variables**: true

**Only enabled if**: argument WFDateFormatStyle = `Relative`

Accepts a string 
or variable
containing one of the options:

- `Short`
- `Medium`
- `Long`

---

### Enumeration: Time Format / timeformat (internally `WFTimeFormatStyle`)
**Default Value**:
```
Short
```
**Allows Variables**: true

**Only enabled if**: argument WFDateFormatStyle = `None` or `Short` or `Medium` or `Long` or `Relative`

Accepts a string 
or variable
containing one of the options:

- `None`
- `Short`
- `Medium`
- `Long`
- `Relative`

---

### Switch: Include ISO 8601 Time / includeiso8601time (internally `WFISO8601IncludeTime`)
**Allows Variables**: true

**Only enabled if**: argument WFDateFormatStyle = `ISO 8601`

Accepts a boolean
or a variable.

---

#### This paramtype is not implemented. WFCustomDateFormatParameter

---

### source json

```json
{
	"ActionClass": "WFFormatDateAction",
	"ActionKeywords": [
		"date",
		"time",
		"formatter"
	],
	"Category": "Calendar",
	"Description": {
		"DescriptionNote": "Custom format strings use the format patterns from Unicode Technical Standard #35 (unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns).",
		"DescriptionSummary": "Formats a date and time into text."
	},
	"IconName": "Date.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFDateContentItem"
		]
	},
	"LastModifiedDate": "2015-12-14T08:00:00.000Z",
	"Name": "Format Date",
	"Output": {
		"Multiple": true,
		"OutputName": "Formatted Date",
		"Types": [
			"NSString"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Short",
			"Items": [
				"None",
				"Short",
				"Medium",
				"Long",
				"Relative",
				"RFC 2822",
				"ISO 8601",
				"Custom"
			],
			"Key": "WFDateFormatStyle",
			"Label": "Date Format",
			"RequiredResources": [
				{
					"WFParameterKey": "WFTimeFormatStyle",
					"WFParameterValues": [
						"None",
						"Short",
						"Medium",
						"Long"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Medium",
			"Items": [
				"Short",
				"Medium",
				"Long"
			],
			"Key": "WFRelativeDateFormatStyle",
			"Label": "Alternate Format",
			"RequiredResources": [
				{
					"WFParameterKey": "WFDateFormatStyle",
					"WFParameterValue": "Relative",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Short",
			"Items": [
				"None",
				"Short",
				"Medium",
				"Long",
				"Relative"
			],
			"Key": "WFTimeFormatStyle",
			"Label": "Time Format",
			"RequiredResources": [
				{
					"WFParameterKey": "WFDateFormatStyle",
					"WFParameterValues": [
						"None",
						"Short",
						"Medium",
						"Long",
						"Relative"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFSwitchParameter",
			"Key": "WFISO8601IncludeTime",
			"Label": "Include ISO 8601 Time",
			"RequiredResources": [
				{
					"WFParameterKey": "WFDateFormatStyle",
					"WFParameterValue": "ISO 8601",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFCustomDateFormatParameter",
			"Key": "WFDateFormat",
			"Label": "Format String",
			"RequiredResources": [
				{
					"WFParameterKey": "WFDateFormatStyle",
					"WFParameterValue": "Custom",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"Subcategory": "Dates"
}
```
