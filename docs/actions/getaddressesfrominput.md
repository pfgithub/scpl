
## Get Addresses from Input / GetAddressesfromInput (internally `is.workflow.actions.detect.address`)


## description

### summary

Returns any street addresses found in the output from the previous action.


### usage
```
GetAddressesfromInput (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Input
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"address",
		"street",
		"detect",
		"scan",
		"map"
	],
	"AppIdentifier": "com.apple.Maps",
	"Category": "Location",
	"CoercionItemClass": "WFLocationContentItem",
	"Description": {
		"DescriptionSummary": "Returns any street addresses found in the output from the previous action."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFStreetAddress"
		]
	},
	"Name": "Get Addresses from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "Addresses",
		"Types": [
			"WFLocationContentItem"
		]
	},
	"ParameterSummary": "Get addresses from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Get Addresses",
	"Subcategory": "Addresses"
}
```
