
## Set Dictionary Value / setdictionaryvalue (internally `is.workflow.actions.setvalueforkey`)



## description
### summary
Sets a value in the dictionary passed into the action. 


### usage
`setdictionaryvalue key=[string|text] value=[string|text]`

### arguments
### Text Input: Key / key (internally `WFDictionaryKey`)
**Placeholder**:
```
name
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Text Input: Value / value (internally `WFDictionaryValue`)
**Placeholder**:
```
example
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

### source json

```json
{
	"ActionClass": "WFSetDictionaryValueAction",
	"ActionKeywords": [
		"json",
		"plist",
		"xml",
		"urlencoded",
		"query",
		"string",
		"for",
		"key",
		"update",
		"merge"
	],
	"Category": "Scripting",
	"CreationDate": "2016-10-04T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Sets a value in the dictionary passed into the action. "
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
	"Name": "Set Dictionary Value",
	"Output": {
		"Multiple": false,
		"OutputName": "Dictionary",
		"Types": [
			"WFDictionaryContentItem"
		]
	},
	"Parameters": [
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFDictionaryKey",
			"Label": "Key",
			"Placeholder": "name",
			"TextAlignment": "Right"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFDictionaryValue",
			"Label": "Value",
			"Placeholder": "example",
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Dictionaries"
}
```
