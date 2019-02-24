
## Get Dictionary Value / getdictionaryvalue (internally `is.workflow.actions.getvalueforkey`)



## description
### summary
Gets the value for the specified key in the dictionary passed into the action. 


### usage
`getdictionaryvalue get=[string <${strInfo}>|variable] key=[string|text]`

### arguments
### Enumeration: Get / get (internally `WFGetDictionaryValueType`)
**Default Value**: Value


Accepts a string 
containing one of the options:

- `Value`
- `All Keys`
- `All Values`

---

### Text Input: Key / key (internally `WFDictionaryKey`)
**Placeholder**: example
**Allows Variables**: true


Accepts a string 
or text
with the text.

### other info

<details><summary>source json</summary>
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
		"DescriptionSummary": "Gets the value for the specified key in the dictionary passed into the action. "
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": false,
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
			"Placeholder": "example",
			"RequiredResources": [
				{
					"WFParameterKey": "WFGetDictionaryValueType",
					"WFParameterValue": "Value",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Dictionaries"
}
```
</details>
