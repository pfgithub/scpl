
## Convert Measurement / ConvertMeasurement (internally `is.workflow.actions.measurement.convert`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Converts the measurements passed into the action to the specified unit.


### usage
```
ConvertMeasurement type=("string" | variable)] undefined=NotImplemented measurement=(v:myvar | mv:myvar | s:myvar)
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

#### This parameter is not implemented yet.

The parameter type is WFMeasurementUnitPickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### measurement: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Measurement
		```
**Allows Variables**: true



Accepts a variable.

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
	"AppIdentifier": "com.apple.calculator",
	"Attribution": "Measurement",
	"Category": "Scripting",
	"CreationDate": "2018-09-22T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Converts the measurements passed into the action to the specified unit."
	},
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFInput",
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
	"ParameterSummary": {
		"WFInput,WFMeasurementUnitType": "Convert ${WFInput} into ${WFMeasurementUnitType}",
		"WFInput,WFMeasurementUnitType,WFMeasurementUnit": "Convert ${WFInput} into ${WFMeasurementUnitType} in ${WFMeasurementUnit}"
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
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Measurement",
			"Placeholder": "Measurement"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Measurements"
}
```
