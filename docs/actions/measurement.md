
## Measurement / Measurement (internally `is.workflow.actions.measurement.create`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Passes the specified measurement (including number and unit) to the next action.


### usage
```
Measurement type=("string" | variable)] undefined=NotImplemented
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

#### This paramtype is not implemented. WFUnitQuantityFieldParameter

---

### source json (for developers)

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
	"AppIdentifier": "com.apple.measure",
	"Attribution": "Measurement",
	"Category": "Scripting",
	"Constructor": true,
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
	"ParameterSummary": "${WFMeasurementUnitType}\n${WFMeasurementUnit}",
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
			"Class": "WFUnitQuantityFieldParameter",
			"Key": "WFMeasurementUnit",
			"KeyboardType": "DecimalPad",
			"Label": "Value",
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
	"ResidentCompatible": true,
	"Subcategory": "Math"
}
```
