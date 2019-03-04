
## Convert Measurement / convertmeasurement (internally `is.workflow.actions.measurement.convert`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Converts the measurements passed into the action to the specified unit.


### usage
```
convertmeasurement undefined=NotImplemented undefined=NotImplemented
```

### arguments

---

#### This paramtype is not implemented. WFUnitTypePickerParameter

---

#### This paramtype is not implemented. WFMeasurementUnitPickerParameter

---

### source json (for developers)

```json
{
	"ActionClass": "WFMeasurementConvertAction",
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
		"DescriptionSummary": "Converts the measurements passed into the action to the specified unit."
	},
	"IconName": "Calculator.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"NSMeasurement"
		]
	},
	"InputPassthrough": false,
	"Name": "Convert Measurement",
	"Output": {
		"Multiple": false,
		"OutputName": "Converted Measurement",
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
			"AlwaysShowsButton": true,
			"Class": "WFMeasurementUnitPickerParameter",
			"Key": "WFMeasurementUnit",
			"Label": "Unit",
			"RequiredResources": [
				{
					"WFParameterKey": "WFMeasurementUnitType",
					"WFParameterRelation": "??",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFMeasurementUnitTypeKey": "WFMeasurementUnitType"
		}
	],
	"Subcategory": "Math"
}
```
