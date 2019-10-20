
## Home / Home (internally `is.workflow.actions.gethomeaccessorystate`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFHomeKitAccessResource.


## description

### summary

Gets the state of a Home accessory.


### usage
```
Home undefined=NotImplemented undefined=NotImplemented
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFHomeServicePickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

#### This parameter is not implemented yet.

The parameter type is WFHomeCharacteristicPickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetHomeAccessoryStateAction",
	"ActionKeywords": [
		"homekit",
		"accessories",
		"accessory",
		"automation",
		"smart",
		"house",
		"scene"
	],
	"AppIdentifier": "com.apple.Home",
	"Category": "Home",
	"CreationDate": "2018-12-07T08:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets the state of a Home accessory."
	},
	"Name": "Home",
	"Output": {
		"Multiple": false,
		"OutputName": "Accessory State"
	},
	"ParameterSummary": {
		"WFHMService": "Get ${WFHMService}",
		"WFHMService,WFHMCharacteristic": "Get ${WFHMService} ${WFHMCharacteristic}"
	},
	"Parameters": [
		{
			"Class": "WFHomeServicePickerParameter",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFHMService"
		},
		{
			"Class": "WFHomeCharacteristicPickerParameter",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFHMCharacteristic"
		}
	],
	"RequiredResources": [
		"WFHomeKitAccessResource"
	],
	"ResidentCompatible": true,
	"WatchCompatible": true
}
```
