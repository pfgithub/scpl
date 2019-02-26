
## Calculate Statistics / calculatestatistics (internally `is.workflow.actions.statistics`)


## description

### summary

Calculates statistics on the numbers that are provided as input.


### usage
```
calculatestatistics a{operation=[string <${strInfo}>]}
```

### arguments

---

### Enumeration: Operation / operation (internally `WFStatisticsOperation`)
**Default Value**:
```
Average
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Average`
- `Minimum`
- `Maximum`
- `Sum`
- `Median`
- `Mode`
- `Range`
- `Standard Deviation`

---

### source json

```json
{
	"ActionClass": "WFCalculateStatisticsAction",
	"ActionKeywords": [
		"number",
		"average",
		"mean",
		"mode",
		"median",
		"maximum",
		"deviation",
		"sum",
		"minimum"
	],
	"Category": "Scripting",
	"CreationDate": "2015-06-16T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Calculates statistics on the numbers that are provided as input."
	},
	"IconName": "Calculator.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSNumber"
		]
	},
	"Name": "Calculate Statistics",
	"Output": {
		"Multiple": true,
		"OutputName": "Statistics",
		"Types": [
			"NSNumber"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Average",
			"Items": [
				"Average",
				"Minimum",
				"Maximum",
				"Sum",
				"Median",
				"Mode",
				"Range",
				"Standard Deviation"
			],
			"Key": "WFStatisticsOperation",
			"Label": "Operation"
		}
	],
	"Subcategory": "Math"
}
```
