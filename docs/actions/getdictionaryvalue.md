
## Get Dictionary Value / GetDictionaryValue (internally `is.workflow.actions.getvalueforkey`)


## description

### summary

Gets the value for the specified key in the dictionary passed into the action. 


### note

You can reference values deep inside of a dictionary by providing multiple keys separated by dots. For example, to get the value "soup" from the dictionary {"beverages": [{"favorite": "soup"}]}, you can specify the key path "beverages.1.favorite".


### usage
```
GetDictionaryValue get=("Value" | "All Keys" | "All Values" | variable) key="string" dictionary=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### get: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Value"`


Accepts a string 
containing one of the options:

- `Value`
- `All Keys`
- `All Values`

---

### key: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Key"`
**Allows Variables**: true

**Only enabled if**: argument WFGetDictionaryValueType == `Value`

Accepts a string 
or text
with the text. Does not allow newlines.

---

### dictionary: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Dictionary
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetDictionaryValueAction",
	"ActionKeywords": [
		"json",
		"plist",
		"xml",
		"urlencoded",
		"query",
		"string",
		"for",
		"key"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionNote": "You can reference values deep inside of a dictionary by providing multiple keys separated by dots. For example, to get the value \"soup\" from the dictionary {\"beverages\": [{\"favorite\": \"soup\"}]}, you can specify the key path \"beverages.1.favorite\".",
		"DescriptionSummary": "Gets the value for the specified key in the dictionary passed into the action. "
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFDictionaryContentItem"
		]
	},
	"InputPassthrough": false,
	"LastModifiedDate": "2016-10-10T19:00:00.000Z",
	"Name": "Get Dictionary Value",
	"Output": {
		"Multiple": true,
		"OutputName": "Dictionary Value",
		"Types": [
			"WFStringContentItem",
			"WFNumberContentItem",
			"WFDateContentItem",
			"WFDictionaryContentItem",
			"WFBooleanContentItem"
		]
	},
	"ParameterSummary": {
		"WFGetDictionaryValueType(All Keys),WFInput": "Get ${WFGetDictionaryValueType} in ${WFInput}",
		"WFGetDictionaryValueType(All Values),WFInput": "Get ${WFGetDictionaryValueType} in ${WFInput}",
		"WFGetDictionaryValueType(Value),WFDictionaryKey,WFInput": "Get ${WFGetDictionaryValueType} for ${WFDictionaryKey} in ${WFInput}"
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Value",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"Items": [
				"Value",
				"All Keys",
				"All Values"
			],
			"Key": "WFGetDictionaryValueType",
			"Label": "Get"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFDictionaryKey",
			"Label": "Key",
			"Placeholder": "Key",
			"RequiredResources": [
				{
					"WFParameterKey": "WFGetDictionaryValueType",
					"WFParameterValue": "Value",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Dictionary",
			"Placeholder": "Dictionary"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Dictionaries"
}
```
