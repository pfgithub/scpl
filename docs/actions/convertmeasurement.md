
## Convert Measurement / ConvertMeasurement (internally `is.workflow.actions.measurement.convert`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Converts the measurements passed into the action to the specified unit.


### usage
```
ConvertMeasurement type=("string" | variable)] undefined=NotImplemented
```

### arguments

---

### type: Unit Type Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Default Value**: ```
		Length
		```
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

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
