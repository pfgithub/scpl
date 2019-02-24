
## Measurement / measurement (internally `is.workflow.actions.measurement.create`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Passes the specified measurement (including number and unit) to the next action.


### usage
`measurement undefined=[???] undefined=[???]`

### arguments
This paramtype is not implemented. WFUnitTypePickerParameter

---

This paramtype is not implemented. WFUnitPickerParameter

### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFMeasurementCreateAction",
	"ActionKeywords": [
		"degrees",
		"distance",
		"pressure",
		"measure",
		"speed",
		"weather"
	],
	"Category": "Scripting",
	"CreationDate": "2018-09-22T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Passes the specified measurement (including number and unit) to the next action."
	},
	"IconName": "Calculator.png",
	"InputPassthrough": false,
	"Name": "Measurement",
	"Output": {
		"Multiple": false,
		"OutputName": "Measurement",
		"Types": [
			"NSMeasurement"
		]
	},
	"Parameters": [
		{
			"Class": "WFUnitTypePickerParameter",
			"DefaultValue": "Length",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFMeasurementUnitType",
			"Label": "Type"
		},
		{
			"Class": "WFUnitPickerParameter",
			"Key": "WFMeasurementUnit",
			"KeyboardType": "DecimalPad",
			"Label": "Value",
			"Placeholder": "10",
			"RequiredResources": [
				{
					"WFParameterKey": "WFMeasurementUnitType",
					"WFParameterRelation": "??",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Math"
}
```
</p></details>
